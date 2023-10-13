import React from "react";
import { Button } from "react-native-elements";
import { StyleSheet, View } from "react-native";

const NextButton = ({ text, handlePress }) => {
  return (
    <View style={{ display: "flex", alignItems: "center" }}>
      <Button
        size="md"
        buttonStyle={[styles.nextButton, { backgroundColor: "#301934" }]}
        titleStyle={styles.nextButtonTitle}
        title={text}
        onPress={handlePress}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  nextButtonTitle: {
    color: "#fff",
  },
  nextButton: {
    width: 250,
    borderRadius: 25,
    margin: 25,
    padding: 15,
    alignItems: "center",
  },
});
export default NextButton;
