import { StatusBar } from "expo-status-bar";
import "./global.css";
import { SafeAreaView, StyleSheet } from "react-native";
import { GluestackUIProvider } from "./components/ui/gluestack-ui-provider";
import AppNavigation from "./navigation/AppNavigation";

import Auth from "./screens/Auth";
import useAuthStore from "./store/useAuthStore";

export default function App() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
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
