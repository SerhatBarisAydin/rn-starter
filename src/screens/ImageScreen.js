import React from "react";
import { StyleSheet, View } from "react-native";
import ImageDetails from "../Components/ImageDetails";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetails title="Forest" src={require("../../assets/forest.jpg")} />
      <ImageDetails
        title="Mountain"
        src={require("../../assets/mountain.jpg")}
      />
      <ImageDetails title="Beach" src={require("../../assets/beach.jpg")} />
    </View>
  );
};

const styles = StyleSheet.create();

export default ImageScreen;
