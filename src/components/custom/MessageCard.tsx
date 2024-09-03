import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

type MessageCardProps = {
  Image: React.FC<any>;
  title: string;
  subtitle: string;
};

const MessageCard = ({ Image, title, subtitle }: MessageCardProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} />
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 30,
    alignItems: "center",
  },
  image: { width: 250 },
  textWrapper: {
    display: "flex",
    gap: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.primary500,
  },
  subtitle: {
    fontSize: 20,
    color: colors.primary500,
  },
});

export default MessageCard;
