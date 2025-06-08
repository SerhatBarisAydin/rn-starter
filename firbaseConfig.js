import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3Uj6EgjCW0kfM9A88HoQzjGIaLaNWXVg",
  authDomain: "trustflyapp.firebaseapp.com",
  projectId: "trustflyapp",
  storageBucket: "trustflyapp.firebasestorage.app",
  messagingSenderId: "998872114201",
  appId: "1:998872114201:web:633438ccc05a5376b1b688",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export const db = getFirestore(app);

export default app;
