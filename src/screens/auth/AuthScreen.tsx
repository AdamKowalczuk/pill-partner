import React, { useState } from "react";
import Register from "./RegisterScreen";
import Login from "./LoginScreen";
import { Pressable, ScrollView, Text, View } from "react-native";
import ChevronLeftIcon from "@/src/assets/icons/chevron-left-icon.svg";
import PasswordReset from "./PasswordResetScreen";
import { globalStyles } from "@/styles/global";

const AuthScreen = () => {
  const [activeTab, setActiveTab] = useState("login");

  const handleChangeActiveTab = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <View className="h-16 bg-primary-500 flex flex-row justify-between items-center px-5">
        <View className="w-10">
          {activeTab === "passwordReset" && (
            <Pressable onPress={() => handleChangeActiveTab("login")}>
              <ChevronLeftIcon />
            </Pressable>
          )}
        </View>
        <Text className="text-white font-bold text-[24px]">PillPartner</Text>
        <View className="w-10" />
      </View>
      <ScrollView>
        <View style={globalStyles.authLayout}>
          {activeTab === "register" ? (
            <Register changeTab={handleChangeActiveTab} />
          ) : activeTab === "login" ? (
            <Login changeTab={handleChangeActiveTab} />
          ) : (
            <PasswordReset />
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default AuthScreen;
