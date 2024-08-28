import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { getPredictions } from "../../lib";
import { DateTime } from "luxon";
// import { Link } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
const formatDt = (timestamp) => {
  const dt = DateTime.fromISO(timestamp);
  return dt.toLocaleString(DateTime.DATETIME_FULL);
};
const DashboardPage = () => {
  const router = useRouter();
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchList = async () => {
      const results = await getPredictions();
      setPredictions(results);
    };

    fetchList();
  }, []);
  const triggerRefresh = async () => {
    setLoading(true);
    const results = await getPredictions();
    setPredictions(results);
    setLoading(false);
  };

  const handleInfo = () => {
    router.push(`/info`);
  };

  const clearPredictions = async () => {
    console.log(`Predictions has been cleared`);
    // AsyncStorage.removeItem("")
    await AsyncStorage.setItem("predictions", JSON.stringify([]));
    setPredictions([]);
  };
  return (
    <View className="flex-1 bg-slate-100 px-5">
      <Text className="text-xl mb-2 font-cbold mt-5">Number of Predictions: {predictions.length}</Text>
      <View className="flex flex-row">
        {predictions.length > 0 && (
          <TouchableOpacity className="bg-customGreen rounded-md w-32 mr-2  " onPress={clearPredictions}>
            <Text className="text-center text-white text-xs font-cbold p-2">Clear Predictions</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity className="bg-customGreen rounded-md w-32  " onPress={handleInfo}>
          <Text className="text-center text-white text-xs font-cbold p-2">About App</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        className="mt-5"
        refreshing={loading}
        onRefresh={async () => await triggerRefresh()}
        data={predictions}
        keyExtractor={(item, index) => item.timestamp}
        renderItem={({ item }) => (
          <View className="bg-white flex mb-5 flex-row  rounded-xl">
            <Image source={{ uri: item.imageUri }} className="w-24 h-24 rounded-xl" />
            {/* <Text>Prediction: {item.prediction || 'Error'}</Text> */}
            <View className="ml-2 pt-2">
              <Text className="text-lg font-cbold">{item.message}</Text>
              {/* <Text>{JSON.stringify({ dt: formatDt(item.timestamp) })}</Text> */}
              <Text className="text-xs font-cmedium">Date: {formatDt(item.timestamp)}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default DashboardPage;
