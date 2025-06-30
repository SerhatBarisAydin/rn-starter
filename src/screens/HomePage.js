import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import ButtonComponent from "../Components/ButtonComponent";
import SectionCardComponent from "../Components/SectionCardComponent";
import FlightCardComponent from "../Components/FlightCardComponent";
import NewsSliderComponent from "../Components/NewsSliderComponent";
import { Avatar } from "@rneui/base";
import { useDispatch } from "react-redux";
import { logOut, getUserInformation } from "../redux/userSlice";

const HomePage = ({ navigation }) => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };

  const userInformation = getUserInformation();

  return (
    <View style={styles.container}>

      
      <NewsSliderComponent />

      <View style={styles.sectionsContainer}>
        <SectionCardComponent
          onPress={() => navigation.navigate("FlightBook")}
          imageSource={require("../../assets/image/planeIcon.png")}
          cardText={"Uçuşunu planla"}
        />
        <SectionCardComponent
          onPress={() => navigation.navigate("ChatBot")}
          imageSource={require("../../assets/image/aiChatbot.png")}
          cardText={"Bot'a sor"}
        />
        <SectionCardComponent
          onPress={() => navigation.navigate("FlightBook")}
          imageSource={require("../../assets/image/mapIcon.png")}
          cardText={"Rotanı bul"}
        />

        <SectionCardComponent
          onPress={() => navigation.navigate("FlightBook")}
          imageSource={require("../../assets/image/cctv.png")}
          cardText={"Kalabalık tahmini"}
        />

        <SectionCardComponent
          onPress={() => navigation.navigate("Profile")}
          imageSource={require("../../assets/image/ProfileIcon.png")}
          cardText={"Profile"}
        />
      </View>

      
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  sectionsContainer: {
    width: "95%",
  },
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  profileCard:{
    backgroundColor:"red"
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
