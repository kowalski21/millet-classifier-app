import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";

const InfoPage = () => {
  return (
    <ScrollView className="flex-1 p-4 bg-white">
      <Text className="text-2xl font-bold mb-4 text-center">Nara Millet and Zara Millet</Text>

      <View className="mb-8">
        <Text className="text-xl font-bold mb-2">Nara Millet: Overview and Cultivation</Text>
        <Text className="text-base mb-2">
          Nara millet, also known as <Text className="italic">Pennisetum glaucum</Text>, is one of the most ancient and
          resilient grains, widely cultivated in arid and semi-arid regions. It is known for its drought tolerance and
          is a key food security crop in many parts of Africa and India.
        </Text>

        <Text className="font-bold mb-1">Cultivation:</Text>
        <Text className="text-base mb-1">
          <Text className="font-bold">Climate:</Text> Nara millet is well-suited for hot, dry climates with temperatures
          ranging between 25°C to 35°C.
        </Text>
        <Text className="text-base mb-1">
          <Text className="font-bold">Soil:</Text> It prefers sandy or loamy soils with good drainage. The soil should
          be slightly acidic to neutral (pH 5.5 to 7).
        </Text>
        <Text className="text-base mb-1">
          <Text className="font-bold">Sowing:</Text> Seeds are typically sown at the onset of the rainy season. The
          seeds are either broadcast or drilled into rows about 15-20 cm apart.
        </Text>
        <Text className="text-base mb-1">
          <Text className="font-bold">Watering:</Text> Nara millet requires minimal watering and can grow with limited
          rainfall, making it ideal for drought-prone areas.
        </Text>
        <Text className="text-base mb-1">
          <Text className="font-bold">Harvesting:</Text> The millet is ready for harvest within 80-100 days. The grain
          heads turn brown when fully mature and are harvested manually or mechanically.
        </Text>
      </View>

      <View className="mb-8">
        <Text className="text-xl font-bold mb-2">Zara Millet: Overview and Cultivation</Text>
        <Text className="text-base mb-2">
          Zara millet is another variety of millet that shares many characteristics with Nara millet. It is particularly
          popular in certain regions of West Africa and is prized for its high nutritional content and resilience to
          harsh climatic conditions.
        </Text>

        <Text className="font-bold mb-1">Cultivation:</Text>
        <Text className="text-base mb-1">
          <Text className="font-bold">Climate:</Text> Zara millet thrives in warm, dry environments with a temperature
          range of 20°C to 32°C.
        </Text>
        <Text className="text-base mb-1">
          <Text className="font-bold">Soil:</Text> Similar to Nara millet, Zara millet prefers well-drained, sandy
          soils, although it can also adapt to loamy soils with moderate fertility.
        </Text>
        <Text className="text-base mb-1">
          <Text className="font-bold">Sowing:</Text> The seeds are usually sown after the first rains to ensure enough
          moisture for germination. Sowing is done in rows with a spacing of 20-25 cm between plants.
        </Text>
        <Text className="text-base mb-1">
          <Text className="font-bold">Watering:</Text> Zara millet is highly drought-resistant and requires very little
          water, making it suitable for regions with unpredictable rainfall.
        </Text>
        <Text className="text-base mb-1">
          <Text className="font-bold">Harvesting:</Text> Zara millet matures in about 85-110 days. The grains are
          harvested when the seed heads are fully mature and dry.
        </Text>
      </View>

      <View className="mb-8">
        <Text className="text-xl font-bold mb-2">Using an AI App for Millet Classification</Text>
        <Text className="text-base mb-2">
          With the advent of technology, AI-based apps have become instrumental in identifying and classifying different
          millet varieties. Here's a guide on how to use an AI app designed for this purpose:
        </Text>

        <Text className="text-base mb-1">
          <Text className="font-bold">1. Capture the Image:</Text> Open the AI app on your smartphone or tablet. Ensure
          good lighting and focus on the millet sample you want to classify. Capture a clear image of the millet, making
          sure that the grains are distinctly visible.
        </Text>
        <Text className="text-base mb-1">
          <Text className="font-bold">2. Upload the Image:</Text> After capturing the image, the app will prompt you to
          upload it. Select the image you just captured or choose one from your gallery. The app will automatically
          upload the image to an API endpoint designated for millet classification.
        </Text>
        <Text className="text-base mb-1">
          <Text className="font-bold">3. API Classification:</Text> The app communicates with a cloud-based API that
          analyzes the uploaded image using machine learning algorithms. The API processes the image, comparing it
          against a database of known millet varieties (including Nara and Zara millet). Once the analysis is complete,
          the API returns the classification result.
        </Text>
        <Text className="text-base mb-1">
          <Text className="font-bold">4. View the Results:</Text> The app displays the result, indicating whether the
          millet is classified as Nara millet, Zara millet, or another variety. If the API encounters an issue or cannot
          classify the millet, it will return a null result.
        </Text>
        <Text className="text-base mb-1">
          <Text className="font-bold">5. Store and Review:</Text> The app also allows you to store the results locally
          for future reference. You can review previous classifications, including the timestamps, to track your
          classification history.
        </Text>
      </View>
    </ScrollView>
  );
};

export default InfoPage;
