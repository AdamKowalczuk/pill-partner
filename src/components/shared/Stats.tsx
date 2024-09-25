import React from "react";
import { View, Text } from "react-native";
import { useTranslation } from "react-i18next";

type StatsProps = {
  Icon: React.FC<any>;
  title: string;
  value: string;
};

const Stats = ({ Icon, title, value }: StatsProps) => {
  const { t } = useTranslation();

  return (
    <View className="flex flex-row p-5 border border-solid border-primary-500 rounded items-center gap-5">
      <Icon className="w-8" />
      <View className="flex gap-1">
        <Text className="text-primary-500 font-bold text-xl">{value}</Text>
        <Text className="text-typography-500 text-sm">{t(title)}</Text>
      </View>
    </View>
  );
};

export default Stats;
