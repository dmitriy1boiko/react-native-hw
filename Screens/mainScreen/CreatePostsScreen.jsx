
import React from "react";
import { useState, useEffect} from "react";

import { Camera } from "expo-camera";
import * as Location from 'expo-location';

import { View,
  Keyboard,
   TextInput,
    Image,
     Text, 
      TouchableWithoutFeedback,
      StyleSheet,
       KeyboardAvoidingView,
        TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function CreatePostsScreen({navigation}) {
  const [postPhoto, setPostPhoto] = useState(null);
  const [camera, setCamera] = useState(null);
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
 
  const keyboardHide = () => {
    // console.log(formState);
    // setIsLoggedIn(prevState=>!prevState)
    // setFormState(initialState);
    setIsKeyboardOpen(false);
    // navigation.navigate("Home")
    Keyboard.dismiss();
  };

  const takePhoto = async () => {
    const { uri } = await camera.takePictureAsync();
    
    //location.coords.latitude location.coords.longitude
    setPostPhoto(uri);
    
  };

  const sendPhoto = () => {
   
    navigation.navigate('PostsScreen', {postPhoto});
  };

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
  <KeyboardAvoidingView style={styles.container}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    {/* <KeyboardAvoidingView 
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    > */}
    < View style={styles.container}>
    <View style={{...styles.formContainer, paddingBottom: isKeyboardOpen ? 194 : 32,}}>
  
      <View style={styles.postPhoto}>
        {postPhoto ? (
          <Image
            source={{uri:postPhoto}}
            style={{
              width: 343,
              height: 240,
              borderRadius: 8,
            }}
          />
        ) 
          :(<Camera  style={styles.camera} ref={setCamera}>
            <TouchableOpacity
              style={styles.addPhotoButton}
              opacity={0.5}
              onPress={takePhoto}
            >
              <FontAwesome name="camera" size={24} color="#fff" />
            </TouchableOpacity>
          </Camera>)}
      </View>
       
        {postPhoto ? (
                <Text style={styles.text}>Редагувати фото</Text>
              ) : (
                <Text style={styles.text}>Завантажте фото</Text>
              )}
              <TextInput
                placeholder="Назва"
                onPress={keyboardHide}
                // onChangeText={(value) =>
                //   setFormState((prevState) => ({
                //     ...prevState,
                //     description: value,
                //   }))
                // }
                // value={formState.description}
                style={styles.input}
                placeholderStyle={styles.placeholder}
              />
              <TextInput
              onPress={keyboardHide}
                placeholder="Місцевість"
                // onChangeText={(value) =>
                //   setFormState((prevState) => ({
                //     ...prevState,
                //     location: value,
                //   }))
                // }
                // value={formState.location}
                style={styles.input}
                placeholderStyle={styles.placeholder}
              />
               
        <TouchableOpacity
              style={[
                styles.publishButton,
                postPhoto
                  ? { backgroundColor: '#FF6C00' }
                  : { backgroundColor: '#F6F6F6' },
              ]}
              activeOpacity={0.5}
              onPress={sendPhoto }
              disabled={!postPhoto}
            >
              <Text style={[
                  {
                    fontSize: 16,
                    textAlign: 'center',
                    color: '#ffffff',
                  },
                  postPhoto
                    ? {
                        backgroundColor: '#FF6C00',
                      }
                    : {
                        color: '#BDBDBD',
                        backgroundColor: '#F6F6F6',
                      },
                ]}>Опублікувати</Text>
            </TouchableOpacity>
        
            </View>
    </View>
    {/* </KeyboardAvoidingView> */}
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    // alignItems: "center",
    
  },
  postPhoto: {
    height: 240,
    marginTop: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
  },
  camera: {
    marginTop: 2,
    width: 350,
    height: 240,
    justifyContent: "center",
    alignItems: "center",
  },
  addPhotoButton: {
    position: "absolute",
    top: "40%",
    left: "40%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 50,
  },
  publishButton: {
    width: '100%',
    height: 50,
    marginBottom: 120,
    padding: 16,
    borderRadius: 100,
    backgroundColor: '#FF6C00',
  },
  formContainer: {
    
    display: "flex",
    gap: 8,
    marginBottom:494,
  },
  text: {
    // width: '100%',
    // height: 10,
    marginTop: 8,
    color: "#000000",
    lineHeight: 19,
    fontSize: 16,
  },
  input: {
    justifyContent: "center",
    height: 40,
    color: "#212121",
    fontSize: 16,
    lineHeight: 19,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    
  },
});
