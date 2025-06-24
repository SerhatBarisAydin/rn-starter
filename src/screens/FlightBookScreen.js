import React, { useState } from "react";
import { StyleSheet, View, FlatList, Text, Image } from "react-native";
import FlightSearchComponent from "../Components/FlightSearchComponent";
import flightsData from "../data/flights.json";

const FlightBookScreen = () => {
  const [filteredFlights, setFilteredFlights] = useState(flightsData);

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
        renderItem={({ item }) => (
          <View style={styles.flightItem} >
            <Image style={styles.ticketFlight} source={require("../../assets/image/ticket-flight.png")}/>
            <Text style={styles.flightText}>
              {item.from} → {item.to}
            </Text>
            <Text style={styles.flightText}>
              {item.date} - {item.time}
            </Text>
            <Text style={styles.flightText}>₺{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default FlightBookScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#020202",
    alignItems: "center",
    paddingTop: 20,
  },
  flightItem: {
    padding: 10,
    borderBottomWidth: 2,
    borderColor: "#fff",
    width: "100%",
    alignSelf: "center",
    backgroundColor: "#B9314F",
    borderRadius: 8,
    marginVertical: 4,
  },
  flightText: {
    color: "#fff",
    fontSize: 20,
    fontWeight:"bold"
    
  },
  ticketFlight:{
    width:80,
    height:80,
    position:"absolute",
    right:20,
    top:8
    
  },
  FlatlistStyle:{
    width:"90%",
    
  }
});