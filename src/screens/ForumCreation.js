import React, { useState } from "react";

import {
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  Alert,
} from "react-native";
import { Card } from "react-native-elements";
import NextButton from "../components/Button";
import Titletext from "../components/TitleText";
import { useForumStore } from "../../store";
import { useNavigation } from "@react-navigation/native";
import NavBar from "../components/NavBar";
const { width } = Dimensions.get("window");

const ForumCreation = () => {
  const [newForumTitle, setNewForumTitle] = useState("");
  const [newForumContent, setNewForumContent] = useState("");
  const { addForum, user, setUser } = useForumStore();
  const navigation = useNavigation();
  const handleAdd = () => {
    console.log(user);
    if (newForumTitle && newForumContent && user) {
      const newForum = {
        id: Date.now(),
        title: newForumTitle,
        content: newForumContent,
        author: user.username,
      };

      // Use the addForum action to add the new forum to the Zustand store
      addForum(newForum);

      // Reset the input fields
      setNewForumTitle("");
      setNewForumContent("");
      Alert.alert("Forum created successfully");

      navigation.navigate("Home");
    } else {
      Alert.alert("cannot post empty forms");
    }
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <Titletext text="Create Forum" />
        <Card containerStyle={styles.cardContainer}>
          <Text> Forum Title:</Text>
          <TextInput
            style={styles.textInput}
            value={newForumTitle}
            onChangeText={(text) => setNewForumTitle(text)}
          />
          <Text> Forum Content</Text>
          <TextInput
            style={styles.textInput}
            value={newForumContent}
            onChangeText={(text) => setNewForumContent(text)}
          />
        </Card>
        <NextButton handlePress={handleAdd} text="Create Forum" />
      </ScrollView>
      <NavBar />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
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

export default ForumCreation;
