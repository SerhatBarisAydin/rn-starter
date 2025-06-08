import React from "react";
import RootNavigation from "./src/navigation/RootNavigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
const App = () => {
  return (
    <GestureHandlerRootView>
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    </GestureHandlerRootView>
  );
};
export default App;
