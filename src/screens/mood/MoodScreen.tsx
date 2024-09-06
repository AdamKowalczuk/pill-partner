import React, { useState } from "react";
import { View } from "react-native";
import TabSwitcher from "../../components/shared/TabSwitcher";
import MoodHistoryScreen from "./MoodHistoryScreen";
import AddMoodScreen from "./AddMoodScreen";
import { globalStyles } from "@/styles/global";

const MoodScreen = () => {
  return (
    <View style={globalStyles.rootLayoutContainer}>
      <TabSwitcher
        tabs={[
          { label: "Dzisiejszy nastrój", component: <AddMoodScreen /> },
          { label: "Historia", component: <MoodHistoryScreen /> },
        ]}
      />
    </View>
  );
};

export default MoodScreen;
