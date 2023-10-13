import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForumStore } from "../../store";

const NavBar = () => {
  const navigation = useNavigation();
  const { logout, setUser } = useForumStore();

  const handleLogout = () => {
    logout();
    setUser({});
    navigation.navigate("LoginScreen");
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleLogout}>
        <Image source={require("../../assets/icons/Back.png")} />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    bottom: 0,
    position: "absolute",
    backgroundColor: "#301934",
  },
});

export default NavBar;
