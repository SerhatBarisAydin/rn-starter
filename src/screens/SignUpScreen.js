import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { TextInputComponent, ButtonComponent } from "../Components";
const SignUpScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Image
          source={require("../../assets/image/signUpIcon.png")}
          style={styles.signUpImage}
        />
        <Text style={styles.signUpText}>Sign Up</Text>
      </View>

      <View style={styles.textInputContainer}>
        <TextInputComponent
          title="Name"
          isSecureText={false}
          handleOnChangeText={setName}
          handleValue={name}
          handlePlaceholder="Enter your name"
        />

        <TextInputComponent
          title="Email"
          isSecureText={false}
          handleOnChangeText={setEmail}
          handleValue={email}
          handlePlaceholder="Enter your Email"
        />

        <TextInputComponent
          title="password"
          isSecureText={true}
          handleOnChangeText={setPassword}
          handleValue={password}
          handlePlaceholder="Enter your password"
        />
      </View>

      <View style={styles.signUpOptions}>
        <ButtonComponent
          buttonText="Sign Up"
          setWidth="80%"
          buttonColor="blue"
          pressedButtonColor="green"
          handleOnPress={() => console.log(email, " ", name, " ", password)}
        />

        <Text>Already have an account? </Text>

        <Pressable>
          <Text style={styles.loginText}>Login</Text>
        </Pressable>


      
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  signUpText: {
    fontSize: 30,
    fontWeight: "bold",
  },

  textInputContainer: {
    width: "100%",
    alignItems: "center",
    flex: 2,
    paddingVertical: 20,
  },

  title: {
    flex: 2,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  signUpOptions: {
    borderColor: "red",
    flex: 2,
    width: "100%",
    alignItems:"center",
    justifyContent:"center"
  },
  signUpImage: {
    width: 130,
    height: 130,
  },
  loginText:{
    fontWeight:"bold",
  }


});
