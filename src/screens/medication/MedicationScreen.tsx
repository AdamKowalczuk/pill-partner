import React, { useState } from "react";
import { View } from "react-native";
import TabSwitcher from "../../components/custom/TabSwitcher";
import MedicationList from "./MedicationListScreen";
import MedicationStock from "./MedicationStockScreen";

const MedicationScreen = () => {
  const [activeTab, setActiveTab] = useState("Leki");
  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);
  };
  return (
    <View>
      <TabSwitcher tabs={["Leki", "Stan"]} onTabChange={handleTabChange} />
      {activeTab === "Leki" ? <MedicationList /> : <MedicationStock />}
    </View>
  );
};

export default MedicationScreen;
