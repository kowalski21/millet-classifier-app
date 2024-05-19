import { View, Text, TouchableOpacity, Image, Switch, Pressable, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { FontAwesome } from "@expo/vector-icons";

const classifyImage = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // setResult("New Millet");
      resolve("New Millet");
    }, 6000);
  });
};
const UploadScreen = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRefresh = () => {
    setImage(null);
    setResult(null);
  };

  const handleClassify = async () => {
    setResult(null);
    setLoading(true);
    const response = await classifyImage();
    console.log(response);
    setLoading(false);
    setResult(response);
  };
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      //   console.log(result.assets[0].uri);
      setImage(result.assets[0].uri);
    } else {
      alert("You did not select any image ");
    }
  };
  return (
    <View className="flex flex-col">
      {/* {JSON.stringify(image)} */}
      {/* {image ? <Text>{image}</Text> : <Text>Hello</Text>} */}
      <View className="pt-58 px-8 mt-8">
        {image ? (
          <Image resizeMode="cover" source={{ uri: image }} className="w-full h-96 rounded-xl" />
        ) : (
          //   <Text>Hello World</Text>
          <View className="border-2 border-orange-600 border-dashed h-96 w-full items-center rounded-lg justify-center">
            <Text className="text-lg text-gray-500 font-semibold">Upload Image for Classification</Text>
          </View>
          //   <Image
          //     resizeMode="cover"
          //     source={require("/Users/kowalski/Code/mobile-apps/ImageClassifier/assets/image-new.jpg")}
          //     className="w-full h-96 rounded-lg"
          //   />
        )}

        {result && (
          <View className="border-2 border-gray-600 rounded-xl border-dashed h-40 flex items-center justify-center mt-5">
            <Text className="font-bold text-2xl">Millet Sagnosa</Text>
            <Text className=" text-gray-500 text-xs">Classified @ {new Date().getFullYear()} </Text>
          </View>
        )}

        {image && result && (
          <View className="flex justify-center items-center mt-4">
            <FontAwesome name="refresh" size={32} color="#D97706" onPress={handleRefresh} />
          </View>
        )}

        <View className="flex flex-row justify-center gap-2 mt-4">
          <TouchableOpacity onPress={pickImage} className="bg-orange-500 rounded-md p-4 mt-6 w-full basis-1/2">
            <Text className="text-center text-white font-bold">Upload</Text>
          </TouchableOpacity>

          {image && (
            <TouchableOpacity
              onPress={handleClassify}
              className="bg-orange-500 rounded-md flex items-center justify-center p-4 mt-6 w-full basis-1/2"
            >
              <Text className="text-white font-bold">
                {loading ? <ActivityIndicator color="#0000ff" /> : "Classify"}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};
export default UploadScreen;
