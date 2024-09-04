import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

interface TabSwitcherProps {
  tabs: string[];
  onTabChange: (tab: string) => void;
}

const TabSwitcher = ({ tabs, onTabChange }: TabSwitcherProps) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);

  const handleTabPress = (tab: string) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <View style={styles.tabContainer}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab}
          style={[
            styles.tab,
            activeTab === tab ? styles.activeTab : styles.inactiveTab,
          ]}
          onPress={() => handleTabPress(tab)}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === tab ? styles.activeTabText : styles.inactiveTabText,
            ]}
          >
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  tab: {
    width: "50%",
    borderWidth: 1,
    borderStyle: "solid",
    height: 44,
    display: "flex",
    justifyContent: "center",
  },
  activeTab: {
    backgroundColor: colors.primary500,
    borderColor: colors.primary500,
  },

  inactiveTab: {
    backgroundColor: colors.white,
    borderColor: colors.border300,
  },
  tabText: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    fontSize: 18,
  },
  activeTabText: {
    color: "#fff",
  },
  inactiveTabText: {
    color: colors.typography600,
  },
});

export default TabSwitcher;
