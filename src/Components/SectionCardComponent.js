import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";

const SectionCardComponent = ({ imageSource, cardText, onPress }) => {
  return (
    
    <Pressable onPress={onPress}>
      <View style={styles.container }>
      <Text style={styles.cardText}>{cardText}</Text>
      <Image style={styles.leftIcon} source={imageSource} />
      <Image
        style={styles.arrowIcon}
        source={require("../../assets/image/rightArrow.png")}
      />
    </View>
    </Pressable>
    
    
  );
};

export default SectionCardComponent;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    borderWidth: 0,
    borderLeftWidth:5,
    marginTop: 20,
    backgroundColor: "#FBFBFF",
    borderRadius: 6,
    shadowColor: "#000",
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 4,
  },
  leftIcon: {
    width: 35,
    height: 35,
    position: "absolute",
    left: 20,
    top: 7,
  },
  arrowIcon: {
    width: 35,
    height: 35,
    position: "absolute",
    right: 10,
    top: 7,
  },
  cardText: {
    position: "absolute",
    left: 100,
    top: 12,
    fontSize: 18,
  },
});
