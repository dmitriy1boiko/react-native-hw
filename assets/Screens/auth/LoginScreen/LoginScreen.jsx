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
  email: "",
  password: "",
};

export default function LoginScreen({ navigation }) {
  const [formState, setFormState] = useState(initialState);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  const keyboardHide = () => {
    console.log(formState);
    setFormState(initialState);
    setIsKeyboardOpen(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
        <ImageBackground
          style={styles.image}
          source={require("../../../images/PhotoBG.png")}
        >
          <View
            style={{
              ...styles.formWrap,
              paddingBottom: isKeyboardOpen ? 144 : 32,
            }}
          >
            <Text>Увійти</Text>
            <View style={styles.formInputWrap}>
              <TextInput
                placeholderTextColor={"#BDBDBD"}
                placeholder="Адреса електронної пошти"
                cursorColor={"#d3d3d3"}
                style={styles.input}
                onFocus={() => setIsKeyboardOpen(true)}
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
              <Text style={{ color: "#fff" }}>Увійти</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("RegistrationScreen")}
            >
              <Text  >
                Немає акаунту? {" "}
                <Text
                  style={{ color: "#FF6C00", textDecorationLine: "underline" }}
                >
                  Зареєструватися
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  formWrap: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 78,
    paddingTop: 32,
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
});
