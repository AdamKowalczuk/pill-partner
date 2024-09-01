import { Text } from "@/components/ui/text";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import SettingsItem from "./SettingsItem";
import MoonIcon from "../assets/icons/moon-icon.svg";
import GlobeIcon from "../assets/icons/globe-icon.svg";
import LockIcon from "../assets/icons/lock-icon.svg";
import LogoutIcon from "../assets/icons/logout-icon.svg";
import NotificationIcon from "../assets/icons/notification-icon.svg";

const Settings = ({ navigation }: any) => {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ustawienia</Text>
      <View style={styles.list}>
        <SettingsItem
          onPress={() => console.log("NotificationSettings")}
          Icon={NotificationIcon}
          title="Powiadomienia"
        />
        <SettingsItem
          onPress={() => console.log("ThemeSettings")}
          Icon={MoonIcon}
          title="Motyw"
          showChevron={true}
        />
        <SettingsItem
          onPress={() => console.log("LanguageSettings")}
          Icon={GlobeIcon}
          title="Język"
          showChevron={true}
        />
        <SettingsItem
          onPress={() => console.log("ChangePassword")}
          Icon={LockIcon}
          title="Zmiana hasła"
          showChevron={true}
        />
        <SettingsItem
          onPress={() => console.log("Logout")}
          Icon={LogoutIcon}
          title="Wyloguj się"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    backgroundColor: "#8A7DFA",
    paddingVertical: 20,
    paddingHorizontal: 15,
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  list: {
    marginTop: 20,
  },
});

export default Settings;
