import { NavigationContainer } from "@react-navigation/native";

import "react-native-gesture-handler";

import { useRoute } from "./router";




export default function App() {
  const routing = useRoute(true)
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
