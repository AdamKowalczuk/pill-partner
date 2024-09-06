import { colors } from "@/styles/colors";
import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native";

const ErrorMessage = ({ error }: any) => {
  return <Text style={styles.errorText}>{error}</Text>;
};

const styles = StyleSheet.create({
  errorText: {
    fontSize: 14,
    color: colors.error500,
  },
});

export default ErrorMessage;
