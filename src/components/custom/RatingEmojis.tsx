import React from "react";
import { Pressable, View } from "react-native";
import { emojiIcons } from "@/src/constants";

const RatingEmojis = ({ value, onChange }: any) => {
  return (
    <View className="flex flex-row justify-between">
      {emojiIcons?.map((emoji: any) => (
        <Pressable
          key={emoji.id}
          className="p-3 rounded-lg border border-border-300"
          style={[
            value === emoji.id && {
              backgroundColor: emoji.secondaryColor,
              borderColor: emoji.secondaryColor,
            },
          ]}
          onPress={() => onChange(emoji.id)}
        >
          <emoji.icon
            className="text-border-300"
            style={[value === emoji.id && { color: emoji.primaryColor }]}
          />
        </Pressable>
      ))}
    </View>
  );
};

export default RatingEmojis;
