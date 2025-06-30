import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useState } from "react";
import {
  TextInputComponent,
  ButtonComponent,
  ImageComponent,
  LoadingComponent,
} from "../Components";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/userSlice";
import { LinearGradient } from "expo-linear-gradient";

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.user);
  const handleRegister = () => {
    dispatch(register({ email, password }));
  };

  if (isLoading) {
    return <LoadingComponent />;
  }

  return (
    <LinearGradient
    colors={['rgb(250, 250, 247) ', 'rgb(104, 230, 156)', 'rgb(94, 155, 180)']}
      style={styles.container}
    >
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
          handleOnPress={handleRegister}
        />

        

        <Text>Already have an account? </Text>

        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={styles.loginText}>Login</Text>
        </Pressable>
      </View>

    </LinearGradient>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
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
    flex: 0.8,
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
    flex: 3,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  signUpImage: {
    width: 130,
    height: 130,
  },
  loginText: {
    fontWeight: "bold",
  },
  imageStyle: {
    height: 40,
    width: 40,
  },
  loginOptionContainer: {
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    flexDirection: "row",
  },
});
