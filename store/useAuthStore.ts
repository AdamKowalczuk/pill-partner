import { create } from "zustand";

interface AuthState {
  isLoggedIn: boolean;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  logout: () => set({ isLoggedIn: false }),
}));

export default useAuthStore;
