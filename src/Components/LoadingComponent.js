import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Pressable,
} from "react-native";
import React from "react";

const LoadingComponent = (props) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => props.changeIsLoading()}>
        <Text style={styles.textStyle}>cikis</Text>
      </Pressable>
      <ActivityIndicator size={"large"} />
      <Text style={styles.textStyle}>Loading...</Text>
    </View>
  );
};

export default LoadingComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    backgroundColor: "black",
    opacity: 0.75,
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
});
