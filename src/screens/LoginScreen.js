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

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState();
  const { loggedIn, login, setUser } = useForumStore();

  const handleLogin = () => {
    if (username.length < 6 || password.length < 6) {
      Alert.alert("Username and password must have at least 6 characters");
    } else {
      login();
      setUser({ username, password });
      navigation.navigate("Home");

      // Reset the input fields
      setPassword("");
      setUsername("");
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
});

export default LoginScreen;
