import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Pressable, TextInput } from "react-native-gesture-handler";

import {
  TextInputComponent,
  LoadingComponent,
  ButtonComponent,
} from "../Components";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome </Text>

      <Image
        style={styles.loginImage}
        source={require("../../assets/image/aviation.png")}
        
        />

      <TextInputComponent
        title="Email"
        isSecureText={false}
        handleOnChangeText={setEmail}
        handleValue={email}
        handlePlaceholder="Enter your Email"
      />

      <TextInputComponent
        title="Password"
        isSecureText={true}
        handleOnChangeText={setPassword}
        handleValue={password}
        handlePlaceholder="Enter your password"
      />

      <ButtonComponent
        setWidth="80%"
        buttonText="Login"
        handleOnPress={() => setIsLoading(true)}
        buttonColor="gray"
        pressedButtonColor="blue"
      />

      <ButtonComponent
        setWidth="80%"
        buttonText="SignUp"
        handleOnPress={() => navigation.navigate("SignUp")}
        buttonColor="gray"
        pressedButtonColor="lightgray"
      />

      {isLoading ? (
        <LoadingComponent changeIsLoading={() => setIsLoading(false)} />
      ) : null}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  loginImage: {
    width: 300,
    height: 300,
  },
  welcomeText: {
    fontWeight: "bold",
    fontSize: 30,
  },
});

export default LoginScreen;
