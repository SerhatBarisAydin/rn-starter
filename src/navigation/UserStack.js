import React from "react";
import {
  HomePage,
  ProfilePage,
  ChatBotScreen,
  FlightBookScreen,
  MapScreen,
  CrowdEstimationScreen,
} from "../screens";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Profile" component={ProfilePage} />
      <Stack.Screen name="ChatBot" component={ChatBotScreen} />
      <Stack.Screen name="FlightBook" component={FlightBookScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="CrowdEstimation" component={CrowdEstimationScreen} />
    </Stack.Navigator>
  );
};

export default UserStack;

const styles = StyleSheet.create({});
