import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firbaseConfig";
import { ButtonComponent } from "../Components";
import { TextInput } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/userSlice";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [isSaved, setIsSaved] = useState(false);
  const [updateTheData, setUpdateTheData] = useState("");

  const dispatch = useDispatch();



//  console.log(isSaved);

  //Ekranda butona tıklanmadan uygulama başlatıldığı esnada
  //değişikliklerin ekranda görünmesini sağlar.
  //Tüm dataları çekmemize yarar
  //Buradaki isSaved incelendiği zaman sendData yapıldığında da verilerin ekranda gözükmesini sağlar.
  // Aksi halde yalnızca uygulama başlatıldığı anda olan veriler ekranda olacak
  // useEffect içerisinde sonda bulunan [] içerisinde yazılan fonksiyon her gerçekleştiğinde useEffect tekrar çalışır

  useEffect(() => {
    getData();
  }, [isSaved]);
  //----------------------------------------------------------------->>
  //Update data from firebase
  const updateData = async (value) => {
    try {
      const lessonData = doc(db, "reactNativeLessons", value);

      // Set the "capital" field of the city 'DC'
      await updateDoc(lessonData, {
        content: updateTheData,
      });
    } catch (error) {
      console.log();
    }
  };

  //delete data from firebase firestore
  const deleteData = async (value) => {
    try {
      await deleteDoc(doc(db, "reactNativeLessons", value));
      console.log("deleted successfully...");
    } catch (error) {
      console.log(error);
    }
  };

  //get data from firebase firestore
  const getData = async () => {
    const allData = [];

    try {
      const querySnapshot = await getDocs(collection(db, "reactNativeLessons"));
      querySnapshot.forEach((doc) => {
        //console.log(`${doc.id} => ${doc.data()}`);
        allData.push({ ...doc.data(), id: doc.id });
      });
      setData(allData);
    } catch (error) {
      console.log(error);
    }
  };

  //Sending data to firebase firestore
  const sendData = async () => {
    try {
      const docRef = await addDoc(collection(db, "reactNativeLessons"), {
        title: "gel ogren kral",
        content: "rn lessons for begginners",
        lessons: 102,
      });
      console.log("document written by id: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };



  //kullanıcı çıkış işlemleri fonksiyonu
  const handleLogOut = () =>{
    dispatch(logOut())
  }




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
      ></TextInput>

      {data.map((value, index) => {
        return (
          //Burada kurula yapı sayesinde ekrandaki verilerin
          //üzerine tıklandığı zaman verilerin eşzamanlı olarak ekrandan silinmesi sağlandı
          //          <Pressable onPress={() => [deleteData(value.id), setIsSaved(isSaved === false ? true:false)]} key={index}>
          <Pressable
            onPress={() => [
              updateData(value.id),
              setIsSaved(isSaved === false ? true : false),
            ]}
            key={index}
          >
            <Text>{index}</Text>
            <Text>{value.id}</Text>
            <Text>{value.title}</Text>
            <Text>{value.content}</Text>
            <Text>{value.lessons}</Text>
          </Pressable>
        );
      })}

      <ButtonComponent
        buttonColor="red"
        buttonText="send data"
        pressedButtonColor="green"
        setWidth="50%"
        handleOnPress={() => {
          sendData(), setIsSaved(isSaved === false ? true : false);
        }}
      />

      <ButtonComponent
        buttonColor="blue"
        buttonText="get data"
        pressedButtonColor="lightblue"
        setWidth="50%"
        handleOnPress={getData}
      />

      <ButtonComponent
        buttonColor="red"
        buttonText="Delete data"
        pressedButtonColor="lightblue"
        setWidth="50%"
        handleOnPress={deleteData}
      />
      <ButtonComponent
        buttonColor="purple"
        buttonText="Update data"
        pressedButtonColor="lightblue"
        setWidth="50%"
        handleOnPress={updateData}
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
  
});
