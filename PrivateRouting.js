
import AuthRouting from "./Screens/auth/AuthRouting";
import Home from "./Screens/HomeScreen/HomeScreen";

export default function PrivateRouting({isLoggedIn,setIsLoggedIn}) {
    return isLoggedIn ?  <Home setIsLoggedIn={setIsLoggedIn} /> 
    : <AuthRouting setIsLoggedIn={setIsLoggedIn} />
    
};





// import React from "react";

// import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// const Stack = createStackNavigator();
// const Tabs = createBottomTabNavigator();

// import LoginScreen from "./Screens/auth/LoginScreen/LoginScreen";
// import RegistrationScreen from "./Screens/auth/RegistrationScreen/RegistrationScreen";
//  import PostsScreen from "./Screens/mainScreen/PostsScreen";
// import CreatePostsScreen from "./Screens/mainScreen/CreatePostsScreen";
// import ProfileScreen from "./Screens/mainScreen/ProfileScreen";
// import Home from "./Screens/nestedScriins/Home";

// import { AntDesign, Entypo } from "@expo/vector-icons";



// export const useRoute = (isAuth) => {
//   if (!isAuth) {
//     return (
//       <Stack.Navigator

//         initialRouteName="LoginScreen"
//         screenOptions={{ headerShown: false }}
//       >
//         <Stack.Screen
//           name="RegistrationScreen"
//           component={RegistrationScreen}
//         />
//         <Stack.Screen name="LoginScreen" component={LoginScreen} />
//       </Stack.Navigator>
//     );
//   }
//   return (
//     <Tabs.Navigator
//       screenOptions={{
//         tabBarShowLabel: false,
//       }}
//     >
//       <Tabs.Screen
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ focused, color, size }) => (
//             <AntDesign name="appstore-o" size={24} color="black" />
//           ),
//         }}
//         name="Home"
//         component={Home}
//       ></Tabs.Screen>
//       <Tabs.Screen
//         options={{
//           tabBarIcon: ({ focused, color, size }) => (
//             <Entypo name="circle-with-plus" size={24} color="black" />
//           ),
//         }}
//         name="CreatePostsScreen"
//         component={CreatePostsScreen}
//       ></Tabs.Screen>
//       <Tabs.Screen
//         options={{
//           tabBarIcon: ({ focused, color, size }) => (
//             <AntDesign name="adduser" size={24} color="black" />
//           ),
//         }}
//         name="ProfileScreen"
//         component={ProfileScreen}
//       ></Tabs.Screen>
//     </Tabs.Navigator>
//   );
// };
