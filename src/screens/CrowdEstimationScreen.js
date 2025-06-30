import React from "react";
import { View, Image, Button, StyleSheet, Alert } from "react-native";

export default function CrowdEstimationScreen() {

    const calculatePeopleCount = async () => {
    const uri = Image.resolveAssetSource(require("../../assets/image/crowd.jpg")).uri;

    const formData = new FormData();
    formData.append("image", {
      uri,
      type: "image/jpeg",
      name: "photo.jpg",
    });

    try {
      const response = await fetch("http://10.0.2.2:5000/detect", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
            let message = "";

      if (data.count < 5) {
        message = "Tahmini bekleme süresi: 10 dakika";
      } else if (data.count >= 5 && data.count <= 15) {
        message = "Tahmini bekleme süresi: 30 dakika";
      } else {
        message = "Tahmini bekleme süresi: 30 dakikadan fazla";
      }
      Alert.alert("Kişi Sayısı", `Kişi sayısı: ${data.count}\n${message}`);
    } catch (error) {
      console.error("Hesaplama hatası:", error);
      Alert.alert("Hata", "Bir hata oluştu. Lütfen tekrar deneyin.");
    }};


  return (
    
    <View style={styles.container}>
      <Image
        source={require("../../assets/image/crowd.jpg")}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.buttonContainer}>
        <Button title="Hesapla" onPress={calculatePeopleCount} />
      </View>
    </View>
  
  )
}


const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
  },
  image: {
    width: "90%",
    aspectRatio: 1,
    marginBottom: 20,
  },
  buttonContainer: {
    width: "60%",
  },

})