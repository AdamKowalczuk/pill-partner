import { Text } from "react-native";
import React from "react";
import { emojiIcons } from "@/src/constants/index";

const MoodHistoryScreen = () => {
  const moodData = [
    { date: "2024-12-01", mood: 1, icon: emojiIcons[0] },
    { date: "2024-12-07", mood: 2, icon: emojiIcons[1] },
    { date: "2024-12-15", mood: 3, icon: emojiIcons[2] },
    { date: "2024-12-15", mood: 4, icon: emojiIcons[3] },
    { date: "2024-12-15", mood: 5, icon: emojiIcons[4] },
  ];
  return <Text>MoodHistoryScreen</Text>;
};

export default MoodHistoryScreen;
