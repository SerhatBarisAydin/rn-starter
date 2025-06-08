import { StyleSheet, Text, View, Image } from "react-native";
import {
  TextInputComponent,
  LoadingComponent,
  ButtonComponent,
} from "../Components";

import { useSelector, useDispatch } from "react-redux";
import { setIsLoading} from "../redux/userSlice";
import { login, autoLogin } from "../redux/userSlice";
import { useState, useEffect } from "react";

const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
 
  





  //userSlice içerisindeki verilerin okunması..:
  const {isLoading} = useSelector((state) => state.user);

  // userSlice içerisindeki reducer yapılarını kullanma veya veri gönderme
  const dispatch = useDispatch();


  // Kullanıcı daha önce giriş yaotıysa kontrol et ve auto login gerçekleştir
  useEffect(() => {
    dispatch(autoLogin())  
  }, [])
  






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
        handleOnChangeText={(text) => setEmail(text)}
        handleValue={email}
        handlePlaceholder="Enter your Email"
      />

      <TextInputComponent
        title="Password"
        isSecureText={true}
        handleOnChangeText={(password) => setPassword(password)}
        handleValue={password}
        handlePlaceholder="Enter your password"
      />

      <ButtonComponent
        setWidth="80%"
        buttonText="Login"
        handleOnPress={() => dispatch(login({email, password}))}
        buttonColor="green"
        pressedButtonColor="lightgreen"
      />

      <ButtonComponent
        setWidth="40%"
        buttonText="SignUp"
        handleOnPress={() => navigation.navigate("SignUp")}
        buttonColor="blue"
        pressedButtonColor="lightblue"
      />

      {isLoading ? (
        <LoadingComponent changeIsLoading={() => dispatch(setIsLoading(false))} />
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
