import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

import LoginScreen from "./assets/Screens/auth/LoginScreen/LoginScreen";
import RegistrationScreen from "./assets/Screens/auth/RegistrationScreen/RegistrationScreen";
import PostsScreen from "./assets/Screens/mainScreen/PostsScreen";
import CreatePostsScreen from "./assets/Screens/mainScreen/CreatePostsScreen";
import ProfileScreen from "./assets/Screens/mainScreen/ProfileScreen";

import { AntDesign, Entypo } from "@expo/vector-icons";

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
        />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    );
  }
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign name="appstore-o" size={24} color="black" />
          ),
        }}
        name="PostsScreen"
        component={PostsScreen}
      ></Tabs.Screen>
      <Tabs.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Entypo name="circle-with-plus" size={24} color="black" />
          ),
        }}
        name="CreatePostsScreen"
        component={CreatePostsScreen}
      ></Tabs.Screen>
      <Tabs.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign name="adduser" size={24} color="black" />
          ),
        }}
        name="ProfileScreen"
        component={ProfileScreen}
      ></Tabs.Screen>
    </Tabs.Navigator>
  );
};
