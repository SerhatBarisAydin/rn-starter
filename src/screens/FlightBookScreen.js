import React, { useState } from "react";
import { StyleSheet, View, FlatList, Text, Image, Pressable } from "react-native";
import FlightSearchComponent from "../Components/FlightSearchComponent";
import flightsData from "../data/flights.json";

const FlightBookScreen = () => {
  const [filteredFlights, setFilteredFlights] = useState(flightsData);
  const [isSelectedId, setIsSelectedId] = useState(null);

  const handleSearch = (criteria) => {
    const { from, to, date } = criteria;
    const results = flightsData.filter(
      (flight) =>
        (!from || flight.from === from) &&
        (!to || flight.to === to) &&
        (!date || flight.date === date)
    );
    setFilteredFlights(results);
  };

  return (
    <View style={styles.container}>
      <FlightSearchComponent onSearch={handleSearch} />

      <FlatList
        style={styles.FlatlistStyle}
        data={filteredFlights}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Uygun uçuş bulunamadı.</Text>
        }
        renderItem={({ item }) => (
          <Pressable
            style={[
              styles.flightItem,
              isSelectedId === item.id && styles.selectedFlightItem,
            ]}
            onPress={() => setIsSelectedId(item.id)}
          >
            <View style={styles.flightInfo}>
              <Text style={styles.routeText}>
                {item.from} <Text style={styles.arrow}>→</Text> {item.to}
              </Text>
              <Text style={styles.dateText}>
                {item.date} - {item.time}
              </Text>
              <Text style={styles.priceText}>₺{item.price}</Text>
            </View>
            <Image
              style={styles.ticketFlight}
              source={require("../../assets/image/ticket-flight.png")}
            />
          </Pressable>
        )}
      />
    </View>
  );
};

export default FlightBookScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F6FA",
    alignItems: "center",
    paddingTop: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#4B7BE5",
    marginBottom: 12,
    letterSpacing: 1,
  },
  FlatlistStyle: {
    width: "94%",
    marginTop: 10,
  },
  flightItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 14,
    marginVertical: 8,
    padding: 18,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 2,
    borderColor: "#fff",
    minHeight: 100,
  },
  selectedFlightItem: {
    borderColor: "#7DDE92",
    backgroundColor: "#E6FFF1",
  },
  flightInfo: {
    flex: 1,
    justifyContent: "center",
  },
  routeText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 4,
  },
  arrow: {
    color: "#4B7BE5",
    fontWeight: "bold",
    fontSize: 24,
  },
  dateText: {
    fontSize: 16,
    color: "#4B7BE5",
    marginBottom: 2,
  },
  priceText: {
    fontSize: 18,
    color: "#E94F37",
    fontWeight: "bold",
    marginTop: 2,
  },
  ticketFlight: {
    width: 60,
    height: 60,
    marginLeft: 12,
    resizeMode: "contain",
  },
  emptyText: {
    textAlign: "center",
    color: "#888",
    fontSize: 16,
    marginTop: 32,
  },
});