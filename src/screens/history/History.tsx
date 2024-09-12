import { View } from "react-native";
import React from "react";
import { globalStyles } from "@/styles/global";
import Calendar from "@/src/components/shared/Calendar";
import Stats from "@/src/components/shared/Stats";
import ChartIcon from "@/src/assets/icons/chart-icon.svg";
import DaysIcon from "@/src/assets/icons/days-icon.svg";
import CapsuleIcon from "@/src/assets/icons/capsule-icon.svg";
import { colors } from "@/styles/colors";

const History = () => {
  const historyData: any = [
    {
      date: "2024-09-08",
      primaryColor: colors.green700,
      secondaryColor: colors.green200,
      Icon: CapsuleIcon,
    },
    {
      date: "2024-09-09",
      primaryColor: colors.green700,
      secondaryColor: colors.green200,
      Icon: CapsuleIcon,
    },
    {
      date: "2024-09-11",
      primaryColor: colors.green700,
      secondaryColor: colors.green200,
      icon: CapsuleIcon,
    },
    {
      date: "2024-09-12",
      primaryColor: colors.error500,
      secondaryColor: colors.error200,
      Icon: CapsuleIcon,
    },
    {
      date: "2024-09-13",
      primaryColor: colors.error500,
      secondaryColor: colors.error200,
      Icon: CapsuleIcon,
    },
  ];
  return (
    <View style={globalStyles.rootLayoutContainer}>
      <Calendar data={historyData} />
      <Stats Icon={ChartIcon} value="70%" title="Skuteczność miesięczna" />
      <Stats Icon={DaysIcon} value="14" title="Dni bez pominięcia dawki" />
    </View>
  );
};

export default History;
