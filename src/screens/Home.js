import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  Animated,
  TouchableOpacity,
} from "react-native";

import NavBar from "../components/NavBar";
import Titletext from "../components/TitleText";
import { useForumStore } from "../../store";
import { useNavigation } from "@react-navigation/native";
import NextButton from "../components/Button";

const { width } = Dimensions.get("window");

const Home = () => {
  const navigation = useNavigation();
  const forums = useForumStore((state) => state.forums);
  const loggedIn = useForumStore((state) => state.loggedIn);

  React.useEffect(() => {
    if (!loggedIn) {
      navigation.navigate("LoginScreen");
    }
  }, [loggedIn, navigation]);
  const handleDetailsNavigation = (id) => {
    console.log("into navigation details");
    navigation.navigate("ForumDetails", { id });
  };

  const handleForumCreationNavigation = () => {
    navigation.navigate("ForumCreation");
  };
  return (
    <>
      <View style={styles.container}>
        <Titletext text="Forums List" />
      </View>
      <NextButton
        handlePress={handleForumCreationNavigation}
        text="Create Forum"
      />
      <ScrollView contentContainerStyle={{ paddingBottom: 130 }}>
        {forums.map((forum, index) => (
          <TouchableOpacity onPress={() => handleDetailsNavigation(forum.id)}>
            <Animated.View key={index} style={styles.insideContainer}>
              <View style={styles.infoContainer}>
                <View style={styles.iconTextContainer}>
                  <Text style={styles.boldText}>{forum.title}</Text>
                </View>
                <View style={styles.iconTextContainer}>
                  <Text style={styles.text}>Description :{forum.content}</Text>
                </View>
                <View style={styles.iconTextContainer}>
                  <Text style={styles.text}>Author:{forum.author}</Text>
                </View>
              </View>
            </Animated.View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <NavBar />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: "center",
  },
  insideContainer: {
    flexDirection: "row",
    elevation: 2,
    backgroundColor: "#ECF0F1",
    margin: 5,
    width: width, // Adjust the width according to your requirements
    borderRadius: 5,
    paddingVertical: 10,
  },
  infoContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  profileContainer: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  iconTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  icon: {
    width: 20,
    height: 20,
  },
  profile: {
    width: 50,
    height: 50,
  },
  text: {
    marginLeft: 10,
  },
  profileIcon: {
    width: 35,
    height: 35,
  },
  boldText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  priceText: {
    marginVertical: 5,
  },
  ratingText: {
    marginTop: 3,
    marginLeft: 5,
  },
  userNameText: {
    marginTop: 10,
    marginLeft: 10,
  },
  swipeActionContainer: {
    flexDirection: "column",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  switch: {
    marginRight: 10,
  },
  actionText: {
    fontSize: 16,
    color: "white",
    margin: 7,
  },
  rectContainer: {
    backgroundColor: "#301934",
    margin: 5,
    display: "flex",
    justifyContent: "center",
  },
});
