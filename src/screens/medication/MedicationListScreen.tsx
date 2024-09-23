import React, { useEffect, useState } from "react";
import MessageCard from "@/src/components/shared/MessageCard";
import { FlatList, Text, View } from "react-native";
import MedicationItem from "./MedicationItem";
import EmptyListImage from "@/src/assets/images/empty-list-image.svg";
import { StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MedicationList = () => {
  const [medications, setMedications] = useState([]);
  console.log(medications);

  useEffect(() => {
    const fetchMedications = async () => {
      try {
        const storedData = await AsyncStorage.getItem("medications");
        if (storedData !== null) {
          // Zapisanie danych do zmiennej stanu
          setMedications(JSON.parse(storedData));
        }
      } catch (error) {
        console.error("Błąd podczas odczytywania danych", error);
      }
    };

    fetchMedications(); // Wywołanie funkcji pobierającej dane
  }, []);

  return (
    <>
      <FlatList
        data={medications}
        renderItem={({ item }: any) => (
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
        keyExtractor={(item: any) => item.id.toString()}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default MedicationList;
