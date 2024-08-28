import { View, Text, ScrollView } from "react-native";
import React from "react";
import UploadScreen from "../../screens/upload";

const ImageClassifyScreen = () => {
  return (
    <ScrollView className="flex-1">
      <UploadScreen />
    </ScrollView>
  );
};

export default ImageClassifyScreen;
