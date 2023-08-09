import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from 'expo-font';

import "react-native-gesture-handler";


import { useState } from "react";
import PrivateRouting from "./PrivateRouting";




export default function App() {
  const [isLoggedIn, setIsLoggedIn]=useState(false);


  
  const [fontsLoaded] = useFonts({
    

    Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
    <PrivateRouting isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
     
    </NavigationContainer>
  );
}
