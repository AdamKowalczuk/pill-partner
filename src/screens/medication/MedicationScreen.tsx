import React, { useState } from "react";
import { View } from "react-native";
import TabSwitcher from "../../components/shared/TabSwitcher";
import MedicationList from "./MedicationListScreen";
import MedicationStock from "./MedicationStockScreen";
import { globalStyles } from "@/styles/global";

const MedicationScreen = () => {
  return (
    <View style={globalStyles.rootLayoutContainer}>
      <TabSwitcher
        tabs={[
          { label: "Leki", component: <MedicationList /> },
          { label: "Stan", component: <MedicationStock /> },
        ]}
      />
    </View>
  );
};

export default MedicationScreen;
