import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const FlightSearchComponent = ({ onSearch }) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nereden</Text>
      <TextInput
        style={styles.input}
        placeholder="IST"
        value={from}
        onChangeText={setFrom}
      />
      <Text style={styles.label}>Nereye</Text>
      <TextInput
        style={styles.input}
        placeholder="ESB"
        value={to}
        onChangeText={setTo}
      />
      <Text style={styles.label}>Tarih (YYYY-MM-DD)</Text>
      <TextInput
        style={styles.input}
        placeholder="2025-07-01"
        value={date}
        onChangeText={setDate}
      />
      <Button title="Uçuşları Ara" onPress={() => onSearch({ from, to, date })} />
    </View>
  )
}

export default FlightSearchComponent

const styles = StyleSheet.create({
  container: {
    
    width: "90%",
    backgroundColor: "#B9314F",
    borderRadius: 12,
    padding: 16,
    marginVertical: 16,
    alignSelf: "center"
  },
  label: {
    color: "#fff",
    marginTop: 8
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 6,
    padding: 8,
    marginVertical: 4
  }
})