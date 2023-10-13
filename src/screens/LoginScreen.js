import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  View,
  Alert,
} from "react-native";
import { Card } from "react-native-elements";
import NextButton from "../components/Button";
import Titletext from "../components/TitleText";
import { useNavigation } from "@react-navigation/native";
import { useForumStore } from "../../store";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width } = Dimensions.get("window");

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState();
  const { loggedIn, login, setUser } = useForumStore();
  const handleLogin = () => {
    if (username && password) {
      login();
      setUser({ username, password });
      navigation.navigate("Home");
    } else {
      Alert.alert("Enter username and password");
    }
  };
  return (
    <View style={styles.container}>
      <Titletext text="Login into your account" />
      <Card containerStyle={styles.cardContainer}>
        <Text>UserName</Text>
        <TextInput
          style={styles.textInput}
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <Text>Password</Text>
        <TextInput
          style={styles.textInput}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </Card>
      <NextButton handlePress={handleLogin} text="Login" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
  },
  textInput: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: "#D9D9D9",
  },
  cardContainer: {
    padding: 15,
    margin: 15,
  },
  subcontainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 35,
  },
  switchContainer: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  nextButtonTitle: {
    color: "#fff",
  },
  nextButton: {
    width: width * 0.3,
    borderRadius: 25,
    margin: 10,
    padding: 10,
    alignItems: "center",
  },
});

export default LoginScreen;
