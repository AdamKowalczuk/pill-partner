import { Pressable, Text, View } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";
import { IconChevronRight } from "@tabler/icons-react";

interface SettingsItemProps {
  onPress: () => void;
  Icon: any;
  title: string;
  rightText?: string;
  showChevron?: boolean;
  rightElement?: any;
}

const SettingsItem = ({
  onPress,
  Icon,
  title,
  rightText,
  showChevron = false,
  rightElement,
}: SettingsItemProps) => {
  const { t } = useTranslation();

  return (
    <Pressable onPress={onPress} className="flex-row py-4 px-4 items-center">
      <View className="flex-row flex-1 items-center justify-between">
        <View className="flex-row items-center">
          <Icon className="color-typography-600" />
          <Text className="text-[16px] color-typography-600 font-medium ml-5">
            {t(title)}
          </Text>
        </View>
        {showChevron && (
          <View className="flex flex-row items-center">
            <Text className="text-[14px] color-typography-600 font-medium mr-3">
              {rightText ? t(rightText) : null}
            </Text>
            <IconChevronRight className="w-[18px] color-typography-600" />
          </View>
        )}
        {rightElement ? rightElement : null}
      </View>
    </Pressable>
  );
};

export default SettingsItem;
