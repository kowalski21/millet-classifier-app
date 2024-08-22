import { useFonts } from "expo-font";
import { Stack, SplashScreen } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
const AppLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
    "CircularStd-Book": require("../assets/fonts/CircularStd-Book.otf"),
    "CircularStd-Bold": require("../assets/fonts/CircularStd-Bold.otf"),
    "CircularStd-Medium": require("../assets/fonts/CircularStd-Medium.otf"),
    "CircularStd-Light": require("../assets/fonts/CircularStd-Light.otf"),
  });

  useEffect(() => {
    const initializePredictions = async () => {
      try {
        const predictions = await AsyncStorage.getItem("predictions");
        if (predictions === null) {
          // Initialize with an empty array if the key doesn't exist
          await AsyncStorage.setItem("predictions", JSON.stringify([]));
        }
      } catch (error) {
        console.error("Error checking/initializing predictions key:", error);
      }
    };

    initializePredictions();
  }, []);
  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default AppLayout;
