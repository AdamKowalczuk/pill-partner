import { Pressable, Text, View } from "react-native";
import React from "react";
import ChevronRightIcon from "@/src/assets/icons/chevron-right-icon.svg";
import { useTranslation } from "react-i18next";

interface SettingsItemProps {
  onPress: () => void;
  Icon: any;
  title: string;
  showChevron?: boolean;
}

const SettingsItem = ({
  onPress,
  Icon,
  title,
  showChevron = false,
}: SettingsItemProps) => {
  const { t } = useTranslation();

  return (
    <Pressable onPress={onPress} className="flex-row py-4 px-4 items-center">
      <View className="flex-row flex-1 items-center justify-between">
        <View className="flex-row items-center">
          <Icon />
          <Text className="text-[16px] text-gray-800 ml-5">{t(title)}</Text>
        </View>
        {showChevron && <ChevronRightIcon />}
      </View>
    </Pressable>
  );
};

export default SettingsItem;
