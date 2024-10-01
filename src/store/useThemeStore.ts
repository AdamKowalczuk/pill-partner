import create from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ThemeState {
  theme: "light" | "dark" | "system" | undefined;
  setTheme: (newTheme: any) => void;
  notification: boolean;
  setNotification: (newNotification: any) => void;
}

const useThemeStore = create<ThemeState>((set) => ({
  theme: "light",
  setTheme: async (newTheme) => {
    set({ theme: newTheme });
    await AsyncStorage.setItem("theme", newTheme);
  },
  notification: true,
  setNotification: async (newNotification) => {
    set({ notification: newNotification });
    await AsyncStorage.setItem("notification", newNotification);
  },
}));

export default useThemeStore;
