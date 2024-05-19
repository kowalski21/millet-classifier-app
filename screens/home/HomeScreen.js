import { View, Text, Button, TouchableOpacity, Image } from "react-native";
import { useFonts } from "expo-font";
import React from "react";
import { router } from "expo-router";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
const HomeScreen = () => {
  const handleLogout = () => {
    // router.replace("/logout");
    router.navigate("/logout");
  };
  return (
    <View className="flex-1 pt-16 items-center px-8 bg-orange-500">
      <Image
        resizeMode="cover"
        source={require("/Users/kowalski/Code/mobile-apps/ImageClassifier/assets/acess_account.png")}
        className="w-full h-80 rounded-xl"
      />
      <Text className="text-white text-2xl font-bold text-center mt-8 mb-2">Welcome to</Text>
      <Text className="text-white text-4xl underline font-bold text-center mb-2"> AI</Text>
      <Text className="text-white text-2xl font-bold text-center mb-2">Image Classifier</Text>

      <View className="flex flex-row gap-4">
        <TouchableOpacity className="bg-white rounded-xl p-4 mt-auto mb-8 flex flex-row items-center cursor-pointer">
          <Ionicons name="cloud-upload" size={24} color="black" />
          <Text className="text-gray-600 text-center font-bold"> Upload</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleLogout}
          className="bg-white rounded-xl p-4 mt-auto mb-8 flex flex-row items-center cursor-pointer"
        >
          <MaterialIcons name="logout" size={24} color="black" />

          <Text className="text-gray-600 text-center font-bold"> Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
