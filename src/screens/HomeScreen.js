import React from "react";
import { Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const HomeScreen = () => {
  const friends = [
    { name: "Friend 1" },
    { name: "Friend 2" },
    { name: "Friend 3" },
    { name: "Friend 4" },
    { name: "Friend 5" },
    { name: "Friend 6" },
    { name: "Friend 7" },
    { name: "Friend 8" },
  ];

  return <FlatList 
  keyExtractor={(friend) => friend.name}
  data={friends} 
  renderItem={({item}) => {
    
     return <Text>{item.name}</Text>
  }}/>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginVertical: 50
  },
});

export default HomeScreen;
