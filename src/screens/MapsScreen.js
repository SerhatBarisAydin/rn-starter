import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TouchableOpacity, 
  Alert,
  SafeAreaView,
  StatusBar 
} from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';
import * as DocumentPicker from 'expo-document-picker';
import polyline from '@mapbox/polyline'; // Polilini verisini decode etmek için

export default function App() {
  const [mapData, setMapData] = useState(null);
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 41.0348, // Taksim Meydanı enlem
    longitude: 28.9759, // Taksim Meydanı boylam
    latitudeDelta: 0.2, // Daha geniş bir alan için artırıldı
    longitudeDelta: 0.2, // Daha geniş bir alan için artırıldı
  });
  const [markers, setMarkers] = useState([]);
  const [route, setRoute] = useState([]);
  const [distance, setDistance] = useState(0);

  // Konum izni iste (isteğe bağlı olarak kullanıcı konumu alınabilir)
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        let location = await Location.getCurrentPositionAsync({});
        setCurrentLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.2,
          longitudeDelta: 0.2,
        });
      } else {
        Alert.alert('Uyarı', 'Konum izni verilmedi, İstanbul ile başlanıyor.');
      }
    })();
  }, []);

  // Harita dosyası yükleme (GeoJSON formatında)
  const pickMapFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ['application/json', 'application/geo+json'],
        copyToCacheDirectory: true,
      });

      if (!result.canceled) {
        const response = await fetch(result.assets[0].uri);
        const geoData = await response.json();
        setMapData(geoData);
        Alert.alert('Başarılı', 'Harita dosyası yüklendi!');
      }
    } catch (error) {
      Alert.alert('Hata', 'Dosya yüklenirken bir hata oluştu!');
      console.error(error);
    }
  };

  // Haritaya tıklama ile nokta ekleme
  const handleMapPress = (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    const newMarker = {
      id: Date.now(),
      coordinate: { latitude, longitude },
      title: `Nokta ${markers.length + 1}`,
    };
    setMarkers([...markers, newMarker]);
  };

  // Yol bazlı en kısa rota hesaplama (Google Maps API ile)
  const calculateShortestRoute = async () => {
    if (markers.length < 2) {
      Alert.alert('Uyarı', 'En az 2 nokta seçmelisiniz!');
      return;
    }

    const origin = `${markers[0].coordinate.latitude},${markers[0].coordinate.longitude}`;
    const destination = `${markers[markers.length - 1].coordinate.latitude},${markers[markers.length - 1].coordinate.longitude}`;
    const apiKey = 'AIzaSyAhxRZghkiyacZ8vTEKnPfqEXOD3w4FxLw'; // Google Maps API anahtarınızı buraya ekleyin

    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${apiKey}&mode=driving`
      );
      const data = await response.json();
      if (data.routes.length > 0) {
        const encodedPolyline = data.routes[0].overview_polyline.points;
        const routeCoordinates = polyline.decode(encodedPolyline).map(coord => ({
          latitude: coord[0],
          longitude: coord[1],
        }));
        setRoute(routeCoordinates);
        const distance = data.routes[0].legs[0].distance.value / 1000; // Metreyi kilometreye çevir
        setDistance(distance.toFixed(2));
        Alert.alert('Rota Hesaplandı', `Toplam mesafe: ${distance.toFixed(2)} km`);
      } else {
        Alert.alert('Hata', 'Rota bulunamadı!');
      }
    } catch (error) {
      Alert.alert('Hata', 'Rota hesaplanamadı!');
      console.error(error);
    }
  };

  // Tüm noktaları temizle
  const clearMarkers = () => {
    setMarkers([]);
    setRoute([]);
    setDistance(0);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <View style={styles.header}>
        <Text style={styles.title}>Rota Planlayıcı</Text>
        {distance > 0 && (
          <Text style={styles.distance}>Mesafe: {distance} km</Text>
        )}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={pickMapFile}>
          <Text style={styles.buttonText}>Harita Yükle</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.button, styles.routeButton]} 
          onPress={calculateShortestRoute}
        >
          <Text style={styles.buttonText}>Rota Hesapla</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.button, styles.clearButton]} 
          onPress={clearMarkers}
        >
          <Text style={styles.buttonText}>Temizle</Text>
        </TouchableOpacity>
      </View>

      {currentLocation && (
        <MapView
          style={styles.map}
          initialRegion={currentLocation} // İstanbul ile başlatılır
          onPress={handleMapPress}
          showsUserLocation={true}
          showsMyLocationButton={true}
        >
          {/* Yüklenen harita verilerini göster */}
          {mapData && mapData.features && mapData.features.map((feature, index) => {
            if (feature.geometry.type === 'Point') {
              return (
                <Marker
                  key={`map-${index}`}
                  coordinate={{
                    latitude: feature.geometry.coordinates[1],
                    longitude: feature.geometry.coordinates[0],
                  }}
                  title={feature.properties?.name || 'Harita Noktası'}
                  pinColor="blue"
                />
              );
            }
            return null;
          })}

          {/* Kullanıcının eklediği noktalar */}
          {markers.map((marker) => (
            <Marker
              key={marker.id}
              coordinate={marker.coordinate}
              title={marker.title}
              pinColor="red"
            />
          ))}

          {/* Rota çizgisi */}
          {route.length > 0 && (
            <Polyline
              coordinates={route}
              strokeColor="#FF0000"
              strokeWidth={3}
              lineDashPattern={[1]}
            />
          )}
        </MapView>
      )}

      <View style={styles.instructions}>
        <Text style={styles.instructionText}>
          • Haritaya dokunarak nokta ekleyin
        </Text>
        <Text style={styles.instructionText}>
          • "Rota Hesapla" ile en kısa rotayı bulun
        </Text>
        <Text style={styles.instructionText}>
          • GeoJSON formatında harita dosyası yükleyebilirsiniz
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#2196F3',
    padding: 15,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  distance: {
    fontSize: 16,
    color: 'white',
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
  },
  routeButton: {
    backgroundColor: '#4CAF50',
  },
  clearButton: {
    backgroundColor: '#F44336',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  map: {
    flex: 1,
  },
  instructions: {
    backgroundColor: 'white',
    padding: 10,
  },
  instructionText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
});