import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { View } from "react-native";
import SettingsItem from "@/src/components/custom/SettingsItem";
import { useTranslation } from "react-i18next";
import useAuthStore from "@/src/store/useAuthStore";
import { globalStyles } from "@/styles/global";
import LanguageSelector from "./LanguageSelector";
import ThemeSelector from "./ThemeSelector";
import {
  IconLogout,
  IconMoon,
  IconBell,
  IconLanguage,
} from "@tabler/icons-react";
import useThemeStore from "@/src/store/useThemeStore";
import { Switch } from "@/src/components/ui/switch";
import { colors } from "@/styles/colors";
import * as Notifications from "expo-notifications";

const SettingsScreen = () => {
  const { t, i18n } = useTranslation();
  const [isLanguageSelectorOpen, setIsLanguageSelectorOpen] = useState(false);
  const [isThemeSelectorOpen, setIsThemeSelectorOpen] = useState(false);
  const { theme, notification, setNotification } = useThemeStore((state) => ({
    theme: state.theme,
    notification: state.notification,
    setNotification: state.setNotification,
  }));
  const [hasPermission, setHasPermission] = useState(false);

  const logout = useAuthStore((state: any) => state.logout);

  const handleToggleNotifications = async () => {
    if (!hasPermission) {
      const { status } = await Notifications.requestPermissionsAsync();
      setHasPermission(status === "granted");
      if (status !== "granted") return;
    }
    setNotification(!notification);
  };

  useEffect(() => {
    const getPermissions = async () => {
      const { status } = await Notifications.getPermissionsAsync();
      setHasPermission(status === "granted");
    };
    getPermissions();
  }, []);

  return (
    <View style={globalStyles.rootLayoutContainer}>
      <ScrollView>
        <View>
          <SettingsItem
            onPress={() => console.log("NotificationSettings")}
            Icon={IconBell}
            title={t("notifications")}
            rightElement={
              <Switch
                defaultValue={!!notification}
                onToggle={handleToggleNotifications}
                trackColor={{ false: colors.gray300, true: colors.gray500 }}
                thumbColor={colors.gray50}
                activeThumbColor={colors.gray50}
                ios_backgroundColor={colors.gray300}
              />
            }
          />
          <View className="h-px bg-border-300" />
          <SettingsItem
            onPress={() => setIsThemeSelectorOpen(true)}
            Icon={IconMoon}
            title={t("theme")}
            rightText={theme === "dark" ? t("darkMode") : t("lightMode")}
            showChevron={true}
          />
          <View className="h-px bg-border-300" />
          <SettingsItem
            onPress={() => setIsLanguageSelectorOpen(true)}
            Icon={IconLanguage}
            title={t("language")}
            rightText={i18n.language === "pl" ? t("polish") : t("english")}
            showChevron={true}
          />

          <View className="h-px bg-border-300" />
          <SettingsItem
            onPress={logout}
            Icon={IconLogout}
            title={t("logout")}
          />
        </View>
      </ScrollView>
      <LanguageSelector
        isOpen={isLanguageSelectorOpen}
        setIsOpen={setIsLanguageSelectorOpen}
      />
      <ThemeSelector
        isOpen={isThemeSelectorOpen}
        setIsOpen={setIsThemeSelectorOpen}
      />
    </View>
  );
};

export default SettingsScreen;
