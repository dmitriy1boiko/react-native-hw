import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";


export default function LoginScreen() {
  
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
      <ImageBackground
        style={styles.image}
        source={require("../../images/PhotoBG.png")}
      >
        <View style={styles.formWrap}>
          <Text>Увійти</Text>
          <View style={styles.formInputWrap}>
            

            <TextInput
              placeholder="Адреса електронної пошти"
              cursorColor={"#d3d3d3"}
              style={styles.input}
            />

            <View style={styles.passwordContainer}>
              <TextInput
                secureTextEntry={true}
                style={[styles.input, styles.passwordInput]}
                placeholder="Пароль"
                cursorColor={"#d3d3d3"}
              />
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
            <Text style={{ color: "#fff" }}>Увійти</Text>
          </TouchableOpacity>
          <Text>
          Немає акаунту?
            <Text>Зареєструватися</Text>
          </Text>
        </View>
      </ImageBackground>
    </View>
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