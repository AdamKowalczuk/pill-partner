import { colors } from "@/styles/colors";
import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native";

type StatsProps = {
  Icon: React.FC<any>;
  title: string;
  value: string;
};

const Stats = ({ Icon, title, value }: StatsProps) => {
  return (
    <View style={styles.container}>
      <Icon style={styles.image} />
      <View style={styles.textWrapper}>
        <Text style={styles.value}>{value}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingBottom: 20,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: colors.primary500,
    borderRadius: 4,
    gap: 20,
    alignItems: "center",
  },
  image: { width: 30 },
  textWrapper: {
    display: "flex",
    gap: 6,
  },
  value: {
    color: colors.primary500,
    fontWeight: 700,
    fontSize: 20,
  },
  title: {
    color: colors.typography500,
    fontSize: 14,
  },
});

export default Stats;
