import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import SectionCardComponent from "../Components/SectionCardComponent";
import ButtonComponent from "../Components/ButtonComponent"
import ImageComponent from "../Components/ImageComponent";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/userSlice";

const HomePage = () => {

  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };





  return (
    <View style={styles.container}>


      <View style={styles.homePageImage} >

          <Image style={styles.welcomePlane} source={require('../../assets/image/plane.jpg')}/>
          <Text style={styles.welcomeTextOnImage}>Merhaba, </Text>
      </View>


      
      
      
      <View style={styles.sectionsContainer}>
        <SectionCardComponent
          IconSource={require("../../assets/image/google.png")}
          title="Google"
          onPress={() => alert("Google Card Pressed")}
          height={100}
          width={"40%"}
          backgroundColor={"red"}
        />
        <SectionCardComponent
          IconSource={require("../../assets/image/google.png")}
          title="Google"
          onPress={() => alert("Google Card Pressed")}
          height={100}
          width={"60%"}
        />
        <SectionCardComponent
          IconSource={require("../../assets/image/google.png")}
          title="Google"
          onPress={() => alert("Google Card Pressed")}
          height={100}
          width={"60%"}
        />
        <SectionCardComponent
          IconSource={require("../../assets/image/google.png")}
          title="Google"
          onPress={() => alert("Google Card Pressed")}
          height={100}
          width={"40%"}
        />
      </View>

      <ButtonComponent
        buttonColor="black"
        buttonText="Log Out"
        pressedButtonColor="black"
        setWidth="22%"
        handleOnPress={handleLogOut}
      />



    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  sectionsContainer: {
    margin: 0,
    borderWidth: 1,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    borderWidth: 1,
    width: "100%",
    height: "100%",
    flex: 1,
  },
  welcomePlane:{
    width:"100%",
    height:"100%",
    flex:1,
    
    boxShadow: "0 0 50",
    shadowColor:"black"
  },
  homePageImage:{
    marginBottom:30,
    width:"100%",
    height:180,
    borderWidth:2,
    borderColor:"red",
      
  },
  welcomeTextOnImage:{
    position:"absolute",
    bottom:8,
    left:12,
    fontSize: 25,
    fontWeight: "bold",
    color: "white"
    
  }
});

/*

import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/userSlice";
import Animated, { BounceIn, PinwheelIn } from "react-native-reanimated";
import {
  sendData,
  getData,
  updateData,
  deleteData,
} from "../services/firebaseService";
import { ButtonComponent } from "../Components";
import { FlatList, TextInput } from "react-native-gesture-handler";

const COLLECTION_NAME = "reactNativeLessons"; // You can change this for other collections

const HomePage = () => {
  const [data, setData] = useState([]);
  const [isSaved, setIsSaved] = useState(false);
  const [updateTheData, setUpdateTheData] = useState("");
  const [selectedId, setSelectedId] = useState(""); // For update/delete

  const dispatch = useDispatch();

  useEffect(() => {
    handleGetData();
  }, [isSaved]);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  const renderItem = ({ item, index }) => {
    return (
      <Animated.View
        entering={BounceIn.delay(100 * (index + 1))}
        style={styles.itemContainer}
      >
        <Text>{item.id}</Text>
        <Text>{item.content}</Text>
        <Pressable
          onPress={() => setSelectedId(item.id)}
          style={{
            marginTop: 5,
            backgroundColor: selectedId === item.id ? "#ccc" : "#eee",
            padding: 5,
            borderRadius: 5,
          }}
        >
          <Text>Select</Text>
        </Pressable>
      </Animated.View>
    );
  };

  const handleSendData = async () => {
    try {
      const id = await sendData(COLLECTION_NAME, {
        title: "gel ogren kral",
        content: "rn lessons for begginners",
        lessons: 102,
      });
      console.log("document written by id: ", id);
      setIsSaved(!isSaved);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleGetData = async () => {
    try {
      const allData = await getData(COLLECTION_NAME);
      setData(allData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateData = async () => {
    if (!selectedId) {
      alert("Select an item to update.");
      return;
    }
    try {
      await updateData(COLLECTION_NAME, selectedId, updateTheData);
      setIsSaved(!isSaved);
      setUpdateTheData("");
      setSelectedId("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteData = async () => {
    if (!selectedId) {
      alert("Select an item to delete.");
      return;
    }
    try {
      await deleteData(COLLECTION_NAME, selectedId);
      setIsSaved(!isSaved);
      setSelectedId("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={updateTheData}
        onChangeText={setUpdateTheData}
        style={{
          width: "70%",
          borderWidth: 1,
          marginBottom: 30,
          textAlign: "center",
        }}
        placeholder="please give the updated value.."
      />

      <Animated.FlatList
        entering={PinwheelIn}
        style={styles.flatList}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

      <ButtonComponent
        buttonColor="red"
        buttonText="send data"
        pressedButtonColor="green"
        setWidth="50%"
        handleOnPress={handleSendData}
      />

      <ButtonComponent
        buttonColor="blue"
        buttonText="get data"
        pressedButtonColor="lightblue"
        setWidth="50%"
        handleOnPress={handleGetData}
      />

      <ButtonComponent
        buttonColor="red"
        buttonText="Delete data"
        pressedButtonColor="lightblue"
        setWidth="50%"
        handleOnPress={handleDeleteData}
      />
      <ButtonComponent
        buttonColor="purple"
        buttonText="Update data"
        pressedButtonColor="lightblue"
        setWidth="50%"
        handleOnPress={handleUpdateData}
      />

      <ButtonComponent
        buttonColor="black"
        buttonText="Log Out"
        pressedButtonColor="black"
        setWidth="22%"
        handleOnPress={handleLogOut}
      />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  itemContainer: {
    borderWidth: 0,
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#4999",
    alignItems: "center",
    justifyContent: "center",
  },
  flatList: {
    width: "100%",
    borderWidth: 1,
    backgroundColor: "black",
  },
});
*/
