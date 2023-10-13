import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home";
import React, { useEffect } from "react";
import ForumCreation from "./src/screens/ForumCreation";
import LoginScreen from "./src/screens/LoginScreen";
import ForumDetails from "./src/screens/ForumDetails";
import { useForumStore } from "./store";
const Stack = createStackNavigator();

export default function App() {
  const { user, loggedIn } = useForumStore();
  const initialRoute = loggedIn ? "Home" : "LoginScreen";

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{
          headerTintColor: "#C1381A",
          headerTitleStyle: {
            color: "#ffffff",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ForumCreation" component={ForumCreation} />
        <Stack.Screen name="ForumDetails" component={ForumDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
