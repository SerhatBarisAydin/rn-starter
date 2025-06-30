import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import newsData from "../data/news.json";
import { FlatList } from "react-native-gesture-handler";
import Animated, { BounceIn, BounceInLeft, BounceInRight, FadeIn, FadeOut } from "react-native-reanimated";


const imageMap = {
    "new_terminal.jpg" : require("../../assets/image/news/new_terminal.jpg"),
    "baggage_system.jpg" : require("../../assets/image/news/baggage_system.jpg"),
    "dutyfree.jpg" : require("../../assets/image/news/dutyfree.jpg"),
    "digital_boarding.jpg" : require("../../assets/image/news/digital_boarding.jpg"),
   
    
    
}   



const NewsSliderComponent = () => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        data={newsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Animated.View 
          entering={BounceInLeft.delay(200)}
          style={styles.slideItem}>
            <Image
              source={imageMap[item.imageUrl]}
              style={styles.image}
            />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.content}>{item.content}</Text>
            </View>
          </Animated.View>
        )}
      />
    </View>
  );
};

export default NewsSliderComponent;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 200,
    
  },
  flatList: {
    height: 200,
    width: "100%",
  },
  slideItem: {
    width: 300, // Her slider kartı için sabit genişlik
    height: 200,
    marginRight: 12,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#222",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
    color: "white",
  },
  content: {
    fontSize: 12,
    color: "white",
  },
  textContainer: {
    width: "100%",
    padding: 8,
    borderWidth: 0,
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(69, 68, 68, 0.42)",
  },
});
