import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

//Animated yapısını kurarken belirli yapıların başına "Animated." olarak eklenir.
//diğer komponentlerde kullanmak için create animated component kurulmalı
//Dökümantasyon sayfasına göz at

const ButtonComponent = ({
  setWidth,
  buttonText,
  handleOnPress,
  buttonColor,
  pressedButtonColor,
}) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => handleOnPress()}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? pressedButtonColor : buttonColor,
            width: setWidth,
          },
          styles.button,
        ]}
      >
        <Text style={styles.loginButtonText}>{buttonText}</Text>
      </Pressable>
    </View>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  button: {
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    borderRadius: 20,
  },
  loginButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
