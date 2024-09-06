import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import { colors } from "@/styles/colors";

interface TabSwitcherProps {
  tabs: any;
}

const TabSwitcher = ({ tabs }: TabSwitcherProps) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabPress = (tab: number) => {
    setActiveTab(tab);
  };

  return (
    <>
      <View style={styles.tabContainer}>
        {tabs.map((tab: any, tabId: number) => (
          <Pressable
            key={tab.label}
            style={[
              styles.tab,
              activeTab === tabId ? styles.activeTab : styles.inactiveTab,
            ]}
            onPress={() => handleTabPress(tabId)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tabId
                  ? styles.activeTabText
                  : styles.inactiveTabText,
              ]}
            >
              {tab.label}
            </Text>
          </Pressable>
        ))}
      </View>
      {tabs[activeTab].component}
    </>
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
