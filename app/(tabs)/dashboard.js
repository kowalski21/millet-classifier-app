import { View, Text, FlatList, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { getPredictions } from "../../lib";
import { DateTime } from "luxon";

const formatDt = (timestamp) => {
  const dt = DateTime.fromISO(timestamp);
  //   console.log(dt.toLocaleString(DateTime.DATETIME_FULL));
  return dt.toLocaleString(DateTime.DATETIME_FULL);
};
const DashboardPage = () => {
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
  return (
    <View className="flex-1 bg-slate-100 px-5">
      <Text className="text-xl mb-5 font-cbold mt-5">Number of Predictions: {predictions.length}</Text>

      <FlatList
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
