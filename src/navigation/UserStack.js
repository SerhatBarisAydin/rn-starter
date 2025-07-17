import React from 'react'
import { HomeScreen } from '../screens'
import {createNativeStackNavigator} from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator();


const UserStack = () => {
  return (

    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>

        <Stack.Screen name="Home" component={HomeScreen}/>


    </Stack.Navigator>

    
  )
}

export default UserStack