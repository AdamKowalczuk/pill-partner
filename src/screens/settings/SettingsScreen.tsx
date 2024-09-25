import React, { useState } from "react";
import { ScrollView } from "react-native";
import { View } from "react-native";
import MoonIcon from "@/src/assets/icons/moon-icon.svg";
import GlobeIcon from "@/src/assets/icons/globe-icon.svg";
import LockIcon from "@/src/assets/icons/lock-icon.svg";
import LogoutIcon from "@/src/assets/icons/logout-icon.svg";
import NotificationIcon from "@/src/assets/icons/notification-icon.svg";
import SettingsItem from "@/src/components/custom/SettingsItem";
import { useTranslation } from "react-i18next";
import useAuthStore from "@/src/store/useAuthStore";
import { globalStyles } from "@/styles/global";

const SettingsScreen = ({ navigation }: any) => {
  const { t } = useTranslation();
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);

  const logout = useAuthStore((state) => state.logout);

  return (
    <View style={globalStyles.rootLayoutContainer}>
      <ScrollView>
        <View>
          <SettingsItem
            onPress={() => console.log("NotificationSettings")}
            Icon={NotificationIcon}
            title={t("notifications")}
          />
          <View className="h-px bg-border-300" />
          <SettingsItem
            onPress={() => console.log("ThemeSettings")}
            Icon={MoonIcon}
            title={t("theme")}
            showChevron={true}
          />
          <View className="h-px bg-border-300" />
          <SettingsItem
            onPress={() => console.log("LanguageSettings")}
            Icon={GlobeIcon}
            title={t("language")}
            showChevron={true}
          />
          <View className="h-px bg-border-300" />
          <SettingsItem
            onPress={() => console.log("ChangePassword")}
            Icon={LockIcon}
            title={t("changePassword")}
            showChevron={true}
          />
          <View className="h-px bg-border-300" />
          <SettingsItem
            onPress={logout}
            Icon={LogoutIcon}
            title={t("logout")}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default SettingsScreen;
