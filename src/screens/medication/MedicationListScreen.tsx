import React, { useState } from "react";
import MessageCard from "@/src/components/shared/MessageCard";
import { FlatList, Text, View } from "react-native";
import MedicationItem from "./MedicationItem";
import EmptyListImage from "@/src/assets/images/empty-list-image.svg";
import { StyleSheet } from "react-native";

const MedicationList = () => {
  const [medications, setMedications] = useState([
    { id: 1, name: "Ibuprom", dosage: "2 tabletki", taken: true, time: "8:00" },
    {
      id: 2,
      name: "Ibuprom",
      dosage: "2 tabletki",
      taken: false,
      time: ["8:00"],
    },
  ]);

  return (
    <>
      <FlatList
        data={medications}
        renderItem={({ item }) => (
          <MedicationItem
            medication={item}
            onActionPress={() => console.log()}
            status="taken"
            // onPressTake={() => handleTakeMedication(item.id)}
          />
        )}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        ListEmptyComponent={
          <MessageCard
            Image={EmptyListImage}
            title="Twoja lista jest pusta"
            subtitle="Dodaj swój pierwszy lek"
          />
        }
        keyExtractor={(item) => item.id.toString()}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default MedicationList;
