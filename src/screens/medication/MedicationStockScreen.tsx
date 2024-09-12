import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";
import MedicationItemStock from "./MedicationItemStock";
import MessageCard from "@/src/components/shared/MessageCard";
import EmptyListImage from "@/src/assets/images/empty-list-image.svg";

const MedicationStockScreen = () => {
  const [medications, setMedications] = useState([
    { id: 1, name: "Ibuprom" },
    {
      id: 2,
      name: "Ibuprom",
    },
  ]);
  return (
    <View>
      <FlatList
        data={medications}
        renderItem={({ item }) => <MedicationItemStock name={item.name} />}
        ListEmptyComponent={
          <MessageCard
            Image={EmptyListImage}
            title="Twoja lista jest pusta"
            subtitle="Dodaj swój pierwszy lek"
          />
        }
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default MedicationStockScreen;
