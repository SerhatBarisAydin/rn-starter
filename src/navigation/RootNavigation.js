import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import UserStack from "./UserStack";
import AuthStack from "./AuthStack";
import app from "../../firbaseConfig";
import { useSelector } from "react-redux";

const RootNavigation = () => {
  const {isAuth} = useSelector((state) => state.user)

  return (
    <NavigationContainer>
      {!isAuth ? <AuthStack /> : <UserStack />}
    </NavigationContainer>
  );
};

export default RootNavigation;
