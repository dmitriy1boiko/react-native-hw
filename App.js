import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from 'expo-font';

import "react-native-gesture-handler";

import { useRoute } from "./router";
import { useState } from "react";




export default function App() {
 const [loading, setLoading]=useState(true)
//  setLoading(true);
  routing = useRoute(loading)
  const [fontsLoaded] = useFonts({
    Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
    {routing}
      {/* <Tabs.Navigator>
        <Tabs.Screen 
        name="PostsScreen" 
        component={PostsScreen}
        ></Tabs.Screen>
        <Tabs.Screen 
        name="CreatePostsScreen" 
        component={CreatePostsScreen}
        ></Tabs.Screen>
        <Tabs.Screen 
        name="ProfileScreen" 
        component={ProfileScreen}
        ></Tabs.Screen>
      </Tabs.Navigator> */}

      {/* <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
        />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}
