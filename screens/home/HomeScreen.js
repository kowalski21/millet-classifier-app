import { View, Text, Button, TouchableOpacity, Image } from "react-native";
import { useFonts } from "expo-font";
import React from "react";
import { router } from "expo-router";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
const HomeScreen = () => {
  const handleLogout = () => {
    // router.replace("/logout");
    router.navigate("/classify");
  };
  return (
    <View className="flex-1 pt-64 items-center px-8 ">
      {/* <Image resizeMode="cover" source={require("../../assets/bg-image.png")} className="w-full h-80 rounded-xl" /> */}
      <Text className="text-white text-3xl  text-center mt-8 mb-2 font-cbold">Welcome to</Text>
      <Text className="text-gray-200 text-4xl underline font-cbold text-center mb-2"> Millet</Text>
      <Text className="text-white text-2xl font-bold text-center font-cbold mb-2">Image Classifier</Text>

      <View className="flex flex-row gap-4 font-cbold">
        <TouchableOpacity
          onPress={handleLogout}
          className="bg-white rounded-xl p-4 mt-auto mb-8 flex flex-row items-center cursor-pointer"
        >
          <Ionicons name="cloud-upload" size={24} color="black" />
          <Text className="text-gray-600 text-center font-cbold"> Get Started</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={handleLogout}
          className="bg-white rounded-xl p-4 mt-auto mb-8 flex flex-row items-center cursor-pointer"
        >
          <MaterialIcons name="logout" size={24} color="black" />

          <Text className="text-gray-600 text-center font-cbold"> Logout</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default HomeScreen;
