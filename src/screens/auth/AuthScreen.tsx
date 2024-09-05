import React, { useState } from "react";
import Register from "./RegisterScreen";
import Login from "./LoginScreen";
import { globalStyles } from "@/styles/global";
import { Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";
import ChevronLeftIcon from "@/src/assets/icons/chevron-left-icon.svg";
import PasswordReset from "./PasswordResetScreen";

const AuthScreen = () => {
  const [activeTab, setActiveTab] = useState("login");

  const handleChangeActiveTab = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <View style={styles.authHeader}>
        <View style={styles.leftIconContainer}>
          {activeTab === "passwordReset" ? (
            <TouchableOpacity onPress={() => handleChangeActiveTab("login")}>
              <ChevronLeftIcon />
            </TouchableOpacity>
          ) : null}
        </View>
        <Text style={styles.authText}>PillPartner</Text>
        <View style={styles.rightSpace} />
      </View>
      <View style={globalStyles.authLayout}>
        {activeTab === "register" ? (
          <Register changeTab={handleChangeActiveTab} />
        ) : activeTab === "login" ? (
          <Login changeTab={handleChangeActiveTab} />
        ) : (
          <PasswordReset changeTab={handleChangeActiveTab} />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  authHeader: {
    height: 64,
    backgroundColor: colors.primary500,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  authText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
  },
  leftIconContainer: {
    width: 40,
  },
  rightSpace: {
    width: 40,
  },
});

export default AuthScreen;
