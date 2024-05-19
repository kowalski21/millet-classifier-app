import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import HomeScreen from "../../screens/home";
const Home = () => {
  return (
    <View className="flex-1">
      <HomeScreen />
    </View>
  );
};

export default Home;
