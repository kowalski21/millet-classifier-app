import { View, Text, TouchableOpacity, Image, Switch, Pressable, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { FontAwesome } from "@expo/vector-icons";
import { storePayloadInPredictions, utils_classify } from "../../lib";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as FileSystem from "expo-file-system";
const classifyImage = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // setResult("New Millet");
      resolve("New Millet");
    }, 1000);
  });
};
const UploadScreen = () => {
  const [name, setName] = useState("");
  const [mime, setMime] = useState(null);
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRefresh = () => {
    setImage(null);
    setResult(null);
  };

  const handleClassify = async () => {
    let payload = {
      isError: false,
    };
    const secondsSinceEpoch = Math.floor(new Date().getTime() / 1000);
    // console.log(`Testing`);
    let extension = image.split(".")[1];
    const imageName = `millet_image_${secondsSinceEpoch}.${extension}`;
    // console.log(imageName);
    const [data, error] = await utils_classify(imageName, image, mime);
    // console.log({ data, error });

    setResult(null);
    setLoading(true);
    payload.timestamp = new Date().toISOString();
    try {
      let imagePath = `${FileSystem.documentDirectory}${imageName}`;
      // console.log(imagePath);
      await FileSystem.copyAsync({
        from: image,
        to: imagePath,
      });
      payload.imageUri = imagePath;

      console.log(`File has been copied`);
    } catch (error) {
      console.log(error);
    }

    const response = await classifyImage();
    if (error) {
      payload.isError = true;
      payload.message = error;
      setResult({ data: error, isError: true });
    } else {
      // console.log(data);
      payload.message = data["Mapped Class"];
      setResult({ data: data, isError: false });
    }
    // console.log(response);
    setLoading(false);
    // setResult();
    // console.log(payload);
    storePayloadInPredictions(payload);
  };
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });
    if (!result.canceled) {
      // console.log(result.assets[0]);
      //   console.log(result.assets[0].uri);
      // console.log(result.assets[0].fileName);
      setName(result.assets[0].fileName);
      setMime(result.assets[0].mimeType);
      setImage(result.assets[0].uri);
      setResult(null);
    } else {
      alert("You did not select any image ");
    }
  };
  return (
    <View className="flex flex-col">
      {/* <Text>{JSON.stringify(image)}</Text> */}

      {/* {JSON.stringify({ name })} */}
      <View className="pt-58 px-8 mt-8">
        {image ? (
          <Image resizeMode="cover" source={{ uri: image }} className="w-full h-96 rounded-xl" />
        ) : (
          //   <Text>Hello World</Text>
          <View className="border-2 border-orange-600 border-dashed h-96 w-full items-center rounded-lg justify-center">
            <Text className="text-lg text-gray-500 font-cbold">Upload Image for Classification</Text>
          </View>
        )}

        {result && (
          <View
            className={`border-2 ${
              result.isError ? "border-red-600" : "border-gray-600"
            } rounded-xl border-dashed h-40 flex items-center justify-center mt-5`}
          >
            {result.isError ? (
              <View className="flex items-center justify-center p-5">
                <Text className="font-cbold text-red-600 text-2xl">Oops An error occcured</Text>
                <Text className="font-cbold text-xs">{result.data}</Text>
                <Text className=" text-gray-500 font-cmedium text-xs">Error @ {new Date().getFullYear()} </Text>
              </View>
            ) : (
              <View>
                <Text className="font-cbold text-2xl">{result.data["Mapped Class"]}</Text>
                <Text className=" text-gray-500 font-cmedium text-xs">Classified @ {new Date().getFullYear()} </Text>
              </View>
            )}
          </View>
        )}

        {image && result && (
          <View className="flex justify-center items-center mt-4">
            <FontAwesome name="refresh" size={32} color="#D97706" onPress={handleRefresh} />
          </View>
        )}

        <View className="flex flex-row justify-center gap-2 mt-4">
          <TouchableOpacity onPress={pickImage} className="bg-orange-500 rounded-md p-4 mt-6 w-full basis-1/2">
            <Text className="text-center text-white font-cbold ">Upload</Text>
          </TouchableOpacity>

          {image && (
            <TouchableOpacity
              onPress={handleClassify}
              className="bg-orange-500 rounded-md flex items-center justify-center p-4 mt-6 w-full basis-1/2"
            >
              <Text className="text-white font-cbold">
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
