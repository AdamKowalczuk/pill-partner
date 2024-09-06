import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { colors } from "@/styles/colors";
import { emojis } from "@/src/constants";

const RatingEmojis = ({ value, onChange }: any) => {
  return (
    <View style={styles.container}>
      {emojis.map((emoji) => (
        <Pressable
          key={emoji.id}
          style={[
            styles.emojiWrapper,
            value === emoji.id && styles.selectedEmoji,
          ]}
          onPress={() => onChange(emoji.id)}
        >
          <Text style={styles.emoji}>{emoji.icon}</Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  emojiWrapper: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border300,
  },
  selectedEmoji: {
    backgroundColor: colors.primary500,
    borderColor: colors.primary500,
  },
  emoji: {
    fontSize: 32,
  },
});

export default RatingEmojis;
