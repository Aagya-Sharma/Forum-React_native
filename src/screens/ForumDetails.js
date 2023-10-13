import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import NavBar from "../components/NavBar";
import { useForumStore } from "../../store";
import NextButton from "../components/Button";

function ForumDetails() {
  const route = useRoute();
  const { id } = route.params;

  const { forums, comments, addComment } = useForumStore();

  const forum = forums.find((forum) => forum.id === id) || {};

  const [newComment, setNewComment] = useState("");
  const [commentList, setCommentList] = useState(comments[id] || []);

  const handleComment = () => {
    if (newComment) {
      addComment(id, newComment);
      setCommentList([...commentList, newComment]);
      setNewComment("");
    }
  };

  return (
    <View style={styles.container}>
      <NavBar />
      <View style={styles.forumDetailsContainer}>
        <Text style={styles.forumTitle}>{forum.title}</Text>
        <Text>{forum.content}</Text>
        <Text style={styles.comments}>Comments</Text>
        <FlatList
          data={commentList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.commentContainer}>
              <Text style={styles.comment}>{item}</Text>
            </View>
          )}
        />
        <View style={styles.commentInputContainer}>
          <TextInput
            style={styles.commentInput}
            placeholder="Add a comment"
            value={newComment}
            onChangeText={(text) => setNewComment(text)}
          />
        </View>
        <NextButton text="Post Comment" handlePress={handleComment} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  forumDetailsContainer: {
    padding: 16,
  },
  forumTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  comments: {
    fontSize: 18,
    marginTop: 12,
  },
  comment: {
    fontSize: 16,
    marginVertical: 4,
  },
  commentInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  commentInput: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginRight: 8,
  },
  commentContainer: {
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  comment: {
    fontSize: 16,
  },
});

export default ForumDetails;
