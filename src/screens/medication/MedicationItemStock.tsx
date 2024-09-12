import React from "react";
import { Text, View } from "react-native";

type MedicationItemStockProps = {
  name: string;
};

const MedicationItemStock = ({ name }: MedicationItemStockProps) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

export default MedicationItemStock;
