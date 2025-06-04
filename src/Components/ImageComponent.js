import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ImageComponent = ({ source  }) => {
  return (
    <View>
      <Image source={require({source})} style={styles.image} />
    </View>
  );
};

export default ImageComponent;

const styles = StyleSheet.create({
  image: {
    width: 130,
    height: 130,
  },
});
