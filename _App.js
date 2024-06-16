import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import RegisterScreen from "./screens/register";
import LoginScreen from "./screens/login";
import HomeScreen from "./screens/home";
import UploadScreen from "./screens/upload";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { SplashScreen } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, error] = useFonts({
    "CircularStd-Book": require("./assets/fonts/CircularStd-Book.otf"),
    "CircularStd-Bold": require("./assets/fonts/CircularStd-Bold.otf"),
    "CircularStd-Medium": require("./assets/fonts/CircularStd-Medium.otf"),
    "CircularStd-Light": require("./assets/fonts/CircularStd-Light.otf"),
  });

  useEffect(() => {
    if (error) {
      throw error;
    }
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;
  return (
    <SafeAreaView className="flex-1 h-screen flex-col  bg-gray-800">
      {/* <RegisterScreen /> */}
      {/* <LoginScreen /> */}
      <HomeScreen />
      {/* <UploadScreen /> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
