import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const TextInputComponent = ({title, isSecureText, handleOnChangeText, handlePlaceholder, handleValue}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.textInputBox}>{title}</Text>

      <TextInput
        
        secureTextEntry={isSecureText}
        style={styles.textInput}
        placeholder={handlePlaceholder}
        onChangeText= {handleOnChangeText}
        value={handleValue}
      />
    </View>
  );
};

export default TextInputComponent;

const styles = StyleSheet.create({
  inputContainer: {
    width: "80%",
  },
  textInputBox: {
    fontSize: 10,
    alignSelf: "flex-start",
    fontWeight: "bold",
  },
  textInput: {
    borderBottomWidth: 0.5,
    borderRadius: 10,
    width: "100%",
    height: 40,
    textAlign: "center",
  },
});
