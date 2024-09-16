import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import TabSwitcher from "../../components/shared/TabSwitcher";
import MoodHistoryScreen from "./MoodHistoryScreen";
import AddMoodScreen from "./AddMoodScreen";
import { globalStyles } from "@/styles/global";

const MoodScreen = () => {
  return (
    <ScrollView>
      <View style={globalStyles.rootLayoutContainer} className="flex gap-5">
        <TabSwitcher
          tabs={[
            { label: "Dzisiejszy nastrój", component: <AddMoodScreen /> },
            { label: "Historia", component: <MoodHistoryScreen /> },
          ]}
        />
      </View>
    </ScrollView>
  );
};

export default MoodScreen;
