import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from "react-native";
import HomeScreen from "../../screens/home";
const Home = () => {
  return (
    <ImageBackground
      source={require("../../assets/bg-image.png")} // Replace with your image URL or local image
      className="flex-1"
      resizeMode="cover"
    >
      <HomeScreen />
      {/* <View className="flex-1 justify-center items-center bg-black bg-opacity-50">{children}</View> */}
    </ImageBackground>
  );
};

export default Home;
