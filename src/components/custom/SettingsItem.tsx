import { Pressable, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity, View } from "react-native";
import ChevronRightIcon from "@/src/assets/icons/chevron-right-icon.svg";

interface SettingsItemProps {
  onPress: () => void;
  Icon: any;
  title: string;
  showChevron?: boolean;
}

const SettingsItem = ({
  onPress,
  Icon,
  title,
  showChevron = false,
}: SettingsItemProps) => {
  return (
    <Pressable onPress={onPress} style={styles.listItem}>
      <View style={styles.listItemContent}>
        <View style={styles.listItemLeft}>
          <Icon />
          <Text style={styles.listItemText}>{title}</Text>
        </View>

        {showChevron && <ChevronRightIcon />}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 15,
    alignItems: "center",
  },
  listItemContent: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  listItemLeft: {
    display: "flex",
    flexDirection: "row",
  },
  listItemText: {
    fontSize: 16,
    color: "#333",
    marginLeft: 10,
  },
});

export default SettingsItem;
