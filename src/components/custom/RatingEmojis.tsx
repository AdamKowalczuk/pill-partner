import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { colors } from "@/styles/colors";
import { emojiIcons } from "@/src/constants";

const RatingEmojis = ({ value, onChange }: any) => {
  return (
    <View style={styles.container}>
      {emojiIcons?.map((emoji: any) => (
        <Pressable
          key={emoji.id}
          style={[
            styles.emojiWrapper,
            value === emoji.id && {
              backgroundColor: emoji.secondaryColor,
              borderColor: emoji.secondaryColor,
            },
          ]}
          onPress={() => onChange(emoji.id)}
        >
          <emoji.icon
            style={[
              styles.icon,
              value === emoji.id && { color: emoji.primaryColor },
            ]}
          />
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  emojiWrapper: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border300,
  },

  icon: {
    color: colors.border300,
  },
});

export default RatingEmojis;
