import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import MedicationItemStock from "./MedicationItemStock";
import MessageCard from "@/src/components/shared/MessageCard";
import EmptyListImage from "@/src/assets/images/empty-list-image.svg";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MedicationStockScreen = () => {
  const [medications, setMedications] = useState([]);
  console.log(medications);

  useEffect(() => {
    const fetchMedications = async () => {
      try {
        const storedData = await AsyncStorage.getItem("medications");
        if (storedData !== null) {
          setMedications(JSON.parse(storedData));
        }
      } catch (error) {
        console.error("Błąd podczas odczytywania danych", error);
      }
    };

    fetchMedications();
  }, []);
  return (
    <View>
      <FlatList
        data={medications}
        renderItem={({ item }) => <MedicationItemStock medication={item} />}
        ListEmptyComponent={
          <MessageCard
            Image={EmptyListImage}
            title="Twoja lista jest pusta"
            subtitle="Dodaj swój pierwszy lek"
          />
        }
        keyExtractor={(item: any) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />
    </View>
  );
};

export default MedicationStockScreen;
