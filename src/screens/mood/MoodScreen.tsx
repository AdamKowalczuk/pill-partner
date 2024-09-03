import React, { useState } from "react";
import { View } from "react-native";
import TabSwitcher from "../../components/custom/TabSwitcher";
import MoodHistoryScreen from "./MoodHistoryScreen";
import AddMoodScreen from "./AddMoodScreen";

const MoodScreen = () => {
  const [activeTab, setActiveTab] = useState("Dzisiejszy nastrój");
  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);
  };
  return (
    <View>
      <TabSwitcher
        tabs={["Dzisiejszy nastrój", "Historia"]}
        onTabChange={handleTabChange}
      />
      {activeTab === "Dzisiejszy nastrój" ? (
        <AddMoodScreen />
      ) : (
        <MoodHistoryScreen />
      )}
    </View>
  );
};

export default MoodScreen;
