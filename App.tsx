import { StatusBar } from "expo-status-bar";
import "./styles/global.css";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { GluestackUIProvider } from "./src/components/ui/gluestack-ui-provider";
import AppNavigation from "./src/navigation/AppNavigation";

import Auth from "./src/screens/auth/AuthScreen";
import useAuthStore from "./src/store/useAuthStore";
import { useEffect } from "react";
import { globalStyles } from "./styles/global";

export default function App() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  const checkLoginStatus = useAuthStore((state) => state.checkLoginStatus);

  useEffect(() => {
    checkLoginStatus();
  }, []);
  return (
    <>
      <SafeAreaView style={styles.safeAreaView}>
        <StatusBar backgroundColor="#fff" />
        <GluestackUIProvider>
          {isLoggedIn ? <AppNavigation /> : <Auth />}
        </GluestackUIProvider>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
