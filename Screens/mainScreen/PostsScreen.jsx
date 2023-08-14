// import React from "react";
// import  { useState, useEffect} from  "react";

// import {Text, FlatList, View, StyleSheet,  TouchableWithoutFeedback, KeyboardAvoidingView, Image} from "react-native";
import { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { FontAwesome5, Octicons } from "@expo/vector-icons";
// import { Image } from "react-native-web";
import { createStackNavigator } from "@react-navigation/stack";

// import PostCard from "../../Components/postCard";
import MapScreen from "../nestedScriins/MapScreen";
import CommentsScreen from "../nestedScriins/CommentsScreen";

const PostsStack = createStackNavigator();

export default function PostsScreen({ route, navigation }) {
  const [posts, setPosts] = useState([]);
  const imageUri = null;
  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  
  return (
    <PostsStack.Navigator>
    <PostsStack.Screen options={{ headerShown: false }} name="PostCard">
      {(props) => (
        <View style={{ paddingHorizontal: 16, paddingTop: 32 }}>
          <View style={styles.profileWrap}>
            <View style={styles.userPhotoWrap}>
              {imageUri && <Image source={{ uri: imageUri }} style={{}} />}
            </View>

            <View>
              <Text style={styles.profileName}>Profile Name</Text>
              <Text style={styles.profileEmail}>Profile Email</Text>
            </View>
          </View>

          <FlatList
            data={posts}
            renderItem={({item})=>(<View ><Image source={{uri: item.postPhoto}}
            style={{
              marginTop: 12,
              width: 343,
              height: 240,
            
            }}
          /><View Style={styles.postInformationWrap}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate("CommentsScreen")}
              >
                <Text > <FontAwesome5 name="comment" size={24} color="black" /></Text>
              </TouchableOpacity>
              <TouchableOpacity   activeOpacity={0.8}
                
                onPress={() => navigation.navigate("MapScreen")}>
              <Text>
              <Octicons name="location" size={24} color="black" /> 
              <Text >location</Text>
            </Text>
              </TouchableOpacity>
          </View></View>)}
         
            keyExtractor={(item, indx) => indx.toString()}
          />
          
        
        </View>
      )}
    </PostsStack.Screen>

    <PostsStack.Screen
      options={{ headerShown: false }}
      name="CommentsScreen"
      component={CommentsScreen}
    />

    <PostsStack.Screen
      options={{ headerShown: false }}
      name="MapScreen"
      component={MapScreen}
    />
  </PostsStack.Navigator>
    
    
  );
}

const styles = StyleSheet.create({
  profileName: {
    fontSize: 13,
    color: "#212121",
  },
  profileEmail: {
    fontSize: 11,
    color: "rgba(33, 33, 33, 0.8)",
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
  postInformationWrap: {
    flex:1,
    // flexDirection: "row",
    // justifyContent: "space-between",
  },
  
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
    
//   },
//   profileHeader: {
//     fontSize: 17,
//   },
//   profileName: {
//     fontSize: 13,
//   },
//   profileEmail: {
//     fontSize: 11,
//   },
//   profileWrap: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   userPhotoWrap: {
//     width: 60,
//     height: 60,
//     borderRadius: 16,
//     backgroundColor: "red",
//     owerflow: "hidden",
//     marginRight: 8,
//   },
  
// });