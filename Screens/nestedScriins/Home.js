// import { Text, View, StyleSheet } from "react-native";
import PostsScreen from "../mainScreen/PostsScreen";
import CommentsScreen from "../nestedScriins/CommentsScreen";
import MapScreen from "../nestedScriins/MapScreen";
import { Entypo } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const NestedScreen = createStackNavigator();

export default function Home() {
  return (
    <NestedScreen.Navigator >
      <NestedScreen.Screen
        name= "PostsScreen"
        
        options={{
          title: "Публікації",
          headerShown: true,
          headerRight: () => (
            
<Entypo name="log-out" size={24} color="black" />
            ),
        }}
        component={PostsScreen}
      />
      <NestedScreen.Screen name="CommentsScreen" component={CommentsScreen} />
      <NestedScreen.Screen name="MapScreen" component={MapScreen} />
    </NestedScreen.Navigator>
  );
}

const styles = StyleSheet.create({
  profileHeader: {
    fontSize: 17,
  },
  profileName: {
    fontSize: 13,
  },
  profileEmail: {
    fontSize: 11,
  },
  profileWrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  userPhotoWrap: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: "red",
    owerflow: "hidden",
    marginRight: 8,
  },
});
