import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Animated,
  TouchableOpacity,
} from "react-native";
import NavBar from "../components/NavBar";
import Titletext from "../components/TitleText";
import { useForumStore } from "../../store";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-elements";

const { width } = Dimensions.get("window");

const Home = () => {
  const navigation = useNavigation();
  const forums = useForumStore((state) => state.forums);
  const loggedIn = useForumStore((state) => state.loggedIn);

  // Check if the user is not logged in and navigate to LoginScreen
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
      <View style={{ display: "flex", alignContent: "flex-end" }}>
        <Button
          size="md"
          buttonStyle={[styles.nextButton, { backgroundColor: "#301934" }]}
          titleStyle={styles.nextButtonTitle}
          title="Add Forum"
          onPress={handleForumCreationNavigation}
        />
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 130 }}>
        {forums.map((forum, index) => (
          <TouchableOpacity onPress={() => handleDetailsNavigation(forum.id)}>
            <Animated.View key={index} style={styles.insideContainer}>
              <View style={styles.infoContainer}>
                <View style={styles.textContainer}>
                  <Text style={styles.boldText}>{forum.title}</Text>
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.text}>Description :{forum.content}</Text>
                </View>
                <View style={styles.textContainer}>
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
    marginTop: 25,
    alignItems: "center",
  },
  insideContainer: {
    flexDirection: "row",
    elevation: 2,
    backgroundColor: "#ECF0F1",
    margin: 5,
    width: width,
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
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  text: {
    marginLeft: 10,
  },
  boldText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  rectContainer: {
    backgroundColor: "#301934",
    margin: 5,
    display: "flex",
    justifyContent: "center",
  },
  nextButtonTitle: {
    color: "#fff",
  },
  nextButton: {
    width: 150,
    borderRadius: 25,
    margin: 10,
    padding: 10,
  },
});
