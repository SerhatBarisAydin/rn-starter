import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Pressable, TextInput } from "react-native-gesture-handler";

import LoadingComponent from "../Components/LoadingComponent";

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        style={styles.loginImage}
        source={require("../../assets/aviation.png")}
      />

      <Text style={styles.welcomeText}>Welcome {result}</Text>

      <Text style={styles.text}>Email</Text>

      <TextInput
        inputMode="email"
        style={styles.textInput}
        placeholder="Enter your Email"
        onChangeText={(value) => setName(value)}
      />

      <Text style={styles.text}>Password</Text>

      <TextInput
        secureTextEntry={true}
        style={styles.textInput}
        placeholder="Enter your password.."
        onChangeText={(value) => setLastName(value)}
      />

      <Pressable
        onPress={() => setIsLoading(true)}
        style={styles.LoginButtonStyle}
      >
        <Text style={styles.LoginButtonText}>Login</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate("SignUp")}
        style={styles.SignUpButtonStyle}
      >
        <Text style={styles.SignUpButtonText}>Sign Up</Text>
      </Pressable>

      {isLoading ? (
        <LoadingComponent changeIsLoading={() => setIsLoading(false)} />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 10,
  },
  textInput: {
    borderWidth: 2,
    borderRadius: 10,
    width: "70%",
    height: 40,
    textAlign: "center",
  },
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  LoginButtonStyle: {
    backgroundColor: "green",
    opacity: 0.5,
    width: "70%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 15,
  },
  LoginButtonText: {
    color: "white",
    fontStyle: "bold",
  },
  SignUpButtonStyle: {
    backgroundColor: "blue",
    opacity: 0.5,
    width: "70%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 15,
  },
  SignUpButtonText: {
    color: "white",
    fontStyle: "bold",
  },
  loginImage: {
    width: 200,
    height: 200,
  },
  welcomeText: {
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default LoginScreen;
