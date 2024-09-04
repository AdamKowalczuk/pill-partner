import React from "react";
import { Text, View } from "react-native";
import MessageCard from "@/src/components/shared/MessageCard";
import EmptyListImage from "../assets/images/empty-list-image.svg";

const AddMedicationScreen = () => {
  return (
    <View>
      <MessageCard
        Image={EmptyListImage}
        title="Twoja lista jest pusta"
        subtitle="Dodaj swój pierwszy lek"
      />
    </View>
  );
};

export default AddMedicationScreen;
