import React from "react";
import RootNavigation from "./src/navigation/RootNavigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
const App = () => {

  return  (
  <GestureHandlerRootView> 
    <RootNavigation/> 
  </GestureHandlerRootView>);
};
export default App
