import { StatusBar } from "expo-status-bar";
import "./styles/global.css";
import { SafeAreaView } from "react-native";
import { GluestackUIProvider } from "./src/components/ui/gluestack-ui-provider";
import AppNavigation from "./src/navigation/AppNavigation";
import Auth from "./src/screens/auth/AuthScreen";
import useAuthStore from "./src/store/useAuthStore";
import { useEffect } from "react";
import "@/src/i18n/i18n";

export default function App() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const checkLoginStatus = useAuthStore((state) => state.checkLoginStatus);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <>
      <SafeAreaView className="flex-1">
        <StatusBar backgroundColor="#fff" />
        <GluestackUIProvider>
          {isLoggedIn ? <AppNavigation /> : <Auth />}
        </GluestackUIProvider>
      </SafeAreaView>
    </>
  );
}
