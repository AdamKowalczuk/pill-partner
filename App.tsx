import { StatusBar } from "expo-status-bar";
import "./styles/global.css";
import { SafeAreaView } from "react-native";
import { GluestackUIProvider } from "./src/components/ui/gluestack-ui-provider";
import AppNavigation from "./src/navigation/AppNavigation";
import Auth from "./src/screens/auth/AuthScreen";
import useAuthStore from "./src/store/useAuthStore";
import React, { useEffect } from "react";
import "@/src/i18n/i18n";
import useThemeStore from "./src/store/useThemeStore";

export default function App() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const { theme, setTheme, setNotification } = useThemeStore((state) => ({
    theme: state.theme,
    setTheme: state.setTheme,
    setNotification: state.setNotification,
  }));
  const checkLoginStatus = useAuthStore((state) => state.checkLoginStatus);

  useEffect(() => {
    checkLoginStatus();
    const storedTheme = localStorage.getItem("theme");
    const storedNotification = localStorage.getItem("notification");
    if (storedTheme) {
      setTheme(storedTheme);
    }
    if (storedNotification) {
      setNotification(storedNotification);
    }
  }, []);

  return (
    <>
      <SafeAreaView className="flex-1">
        <StatusBar backgroundColor="#fff" />
        <GluestackUIProvider mode={theme}>
          {isLoggedIn ? <AppNavigation /> : <Auth />}
        </GluestackUIProvider>
      </SafeAreaView>
    </>
  );
}
