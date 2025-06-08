import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";

const ImageComponent = ({imageSource, imageStyle, handleIconPress}) => {
  return (
    <View>
      <Pressable 
      onPress={handleIconPress}>
        <Image 
      source={imageSource}  
      style={imageStyle}
      
      />
      </Pressable>
    </View>
  );
};

export default ImageComponent;

const styles = StyleSheet.create({
 
});
