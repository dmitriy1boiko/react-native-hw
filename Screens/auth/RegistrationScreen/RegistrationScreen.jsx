import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";


import { useState } from "react";


const initialState = {
  login: "",
  email: "",
  password: "",
};

export default function RegistrationScreen({ navigation,setIsLoggedIn }) {
  const [formState, setFormState] = useState(initialState);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  const keyboardHide = () => {
    console.log(formState);
    setIsLoggedIn(prevState=>!prevState)
    setFormState(initialState);
    setIsKeyboardOpen(false);
    // navigation.navigate("Home")
    Keyboard.dismiss();
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <View style={styles.container}>
          {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
          <ImageBackground
            style={styles.image}
            source={require("../../../images/PhotoBG.png")}
          >
            <View
              style={{
                ...styles.formWrap,
                paddingBottom: isKeyboardOpen ? 32 : 144,
              }}
            >
              <Text style={styles.hederText} onPress={() => navigation.navigate("LoginScreen")}>Реєстрація</Text>
              <View style={styles.formInputWrap}>
                <TextInput
                  style={styles.input}
                  placeholderTextColor={"#BDBDBD"}
                  placeholder="Логін"
                  value={formState.login}
                  maxLength={16}
                  onChangeText={(value) =>
                    setFormState((prevState) => ({
                      ...prevState,
                      login: value,
                    }))
                  }
                />

                <TextInput
                  placeholderTextColor={"#BDBDBD"}
                  placeholder="Адреса електронної пошти"
                  cursorColor={"#d3d3d3"}
                  style={styles.input}
                  onPress={keyboardHide}
                  value={formState.email}
                  onChangeText={(value) =>
                    setFormState((prevState) => ({
                      ...prevState,
                      email: value,
                    }))
                  }
                />

                <View style={styles.passwordContainer}>
                  <TextInput
                    placeholderTextColor={"#BDBDBD"}
                    secureTextEntry={true}
                    style={[styles.input, styles.passwordInput]}
                    placeholder="Пароль"
                    cursorColor={"#d3d3d3"}
                    onFocus={() => setIsKeyboardOpen(true)}
                    value={formState.password}
                    onChangeText={(value) =>
                      setFormState((prevState) => ({
                        ...prevState,
                        password: value,
                      }))
                    }
                  />
                </View>
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btn}
                onPress={keyboardHide}
              >
                <Text style={{ color: "#fff" }}>Зареєстуватися</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate("LoginScreen")}
              >
                <Text >
                  Вже є акаунт?{" "}
                  <Text
                    style={{
                      color: "#FF6C00",
                      textDecorationLine: "underline"
                      
                    }}
                  >
                    Увійти
                  </Text>
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    // alignItems: 'center',
  },
  formWrap: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 92,
  },
  input: {
    height: 50,
    paddingLeft: 16,

    backgroundColor: "#F6F6F6",
    color: "#212121",

    borderWidth: 1,
    borderRadius: 8,

    borderColor: "#E8E8E8",
    marginHorizontal: 16,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    flex: 1,
  },
  formInputWrap: {
    gap: 16,
    width: "100%",
    marginTop: 32,
  },
  btn: {
    marginTop: 43,
    backgroundColor: "#FF6C00",

    paddingHorizontal: 32,
    paddingVertical: 16,

    borderRadius: 100,
    marginBottom: 16,
  },
  hederText:{
    fontSize:16,
  },
});
