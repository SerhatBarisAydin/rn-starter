import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";



const ImageDetails = (props) => {


return <View>
    <Image source={props.src}/>
    <Text>{props.title}</Text>
</View>


}

const styles = StyleSheet.create();

export default ImageDetails;