import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthState {
  isLoggedIn: boolean;
  login: (data: any) => void;
  logout: () => void;
  checkLoginStatus: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  login: async (data: any) => {
    await AsyncStorage.setItem("isLoggedIn", "true");
    await AsyncStorage.setItem("email", data.email);
    set({ isLoggedIn: true });
  },
  logout: async () => {
    await AsyncStorage.removeItem("isLoggedIn");
    await AsyncStorage.removeItem("email");
    set({ isLoggedIn: false });
  },
  checkLoginStatus: async () => {
    const isLoggedIn = await AsyncStorage.getItem("isLoggedIn");
    set({ isLoggedIn: isLoggedIn === "true" });
  },
}));

export default useAuthStore;
