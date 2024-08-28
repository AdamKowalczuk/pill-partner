import React, { useState } from "react";
import Register from "./Register";
import Login from "./Login";
import { globalStyles } from "@/styles/global";
import { View } from "react-native";

const Auth = () => {
  const [activeTab, setActiveTab] = useState("login");

  const handleChangeActiveTab = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <View style={globalStyles.authLayout}>
        {activeTab === "register" ? (
          <Register changeTab={handleChangeActiveTab} />
        ) : (
          <Login changeTab={handleChangeActiveTab} />
        )}
      </View>
    </>
  );
};

export default Auth;
