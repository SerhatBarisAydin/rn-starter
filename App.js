import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import TitleScreen from "./src/screens/TitleScreen";
import ImageScreen from "./src/screens/ImageScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    Title: TitleScreen,
    Image: ImageScreen
  },
  {
    initialRouteName: "Title",
    defaultNavigationOptions: {
      title: "App",
    },
    
  
  }
);

export default createAppContainer(navigator);
