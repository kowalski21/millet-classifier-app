import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import RegisterScreen from "./screens/register";
import LoginScreen from "./screens/login";
import HomeScreen from "./screens/home";
import UploadScreen from "./screens/upload";
export default function App() {
  return (
    <SafeAreaView className="flex-1 h-screen flex-col  bg-gray-200">
      {/* <RegisterScreen /> */}
      {/* <LoginScreen /> */}
      <HomeScreen />
      {/* <UploadScreen /> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
