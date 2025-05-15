import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import UserStack from "./UserStack";
import AuthStack from "./AuthStack";

const RootNavigation = () => {
  const isAuth = false;

  return (
    <NavigationContainer>
      {!isAuth ? <AuthStack /> : <UserStack />}
    </NavigationContainer>
  );
};

export default RootNavigation;
