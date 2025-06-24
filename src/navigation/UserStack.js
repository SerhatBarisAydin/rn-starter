import React from "react";
import {
  HomePage,
  ProfilePage,
  ChatBotScreen,
  FlightBookScreen
  
} from "../screens";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Profile" component={ProfilePage} />
      <Stack.Screen name="ChatBot" component={ChatBotScreen} />
      <Stack.Screen name="FlightBook" component={FlightBookScreen} />

    </Stack.Navigator>
  );
};

export default UserStack;

const styles = StyleSheet.create({});
