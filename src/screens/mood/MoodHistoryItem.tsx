import React from "react";
import { format } from "date-fns";
import { Text, View } from "react-native";
import { emojiIcons } from "@/src/constants";

interface Mood {
  moodRating: number;
  additionalNotes: string;
  timestamp: string;
}

interface MoodHistoryItemProps {
  mood: Mood;
}

const MoodHistoryItem: React.FC<MoodHistoryItemProps> = ({ mood }) => {
  const formattedTime = format(new Date(mood.timestamp), "HH:mm");

  const moodData: any = {
    1: {
      description: "Smutny",
      Icon: emojiIcons[4].icon,
      color: "text-red-700",
    },
    2: {
      description: "Zestresowany",
      Icon: emojiIcons[3].icon,
      color: "text-orange-700",
    },
    3: {
      description: "Neutralny",
      Icon: emojiIcons[2].icon,
      color: "text-yellow-700",
    },
    4: {
      description: "Zadowolony",
      Icon: emojiIcons[1].icon,
      color: "text-lime-700",
    },
    5: {
      description: "Szczęśliwy",
      Icon: emojiIcons[0].icon,
      color: "text-green-700",
    },
  };

  const { description, Icon, color } = moodData[mood.moodRating];

  return (
    <View className="flex flex-column justify-between rounded-lg border border-border-300 p-5 gap-2">
      <View className="flex flex-row justify-between">
        <View className="flex flex-row items-center gap-3">
          <Icon width="20px" height="20px" className={color} />
          <Text className="text-typography-900 font-medium">{description}</Text>
        </View>
        <Text className="text-typography-500">{formattedTime}</Text>
      </View>

      {mood.additionalNotes && (
        <Text className="text-typography-700">{mood.additionalNotes}</Text>
      )}
    </View>
  );
};

export default MoodHistoryItem;
