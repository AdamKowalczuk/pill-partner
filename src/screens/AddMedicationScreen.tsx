import React from "react";
import { Text, View } from "react-native";
import EmptyList from "../components/custom/MessageCard";
import MessageCard from "../components/custom/MessageCard";
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
