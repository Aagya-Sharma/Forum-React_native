/* eslint-disable no-undef */
import React from "react";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";

const Titletext = ({ text }) => {
  const [fontsLoaded] = useFonts({
    "Title-Text": require("../../assets/fonts/Heebo-Bold.ttf"),
  });
  return fontsLoaded ? (
    <Text style={styles.titleText}>{text}</Text>
  ) : (
    <Text>{text}</Text>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontFamily: "Title-Text",
    fontSize: 22,
    margin: 20,
  },
});

export default Titletext;
