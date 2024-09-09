import React from "react";
import { Text, View } from "react-native";
import MessageCard from "@/src/components/shared/MessageCard";
import EmptyListImage from "@/src/assets/images/empty-list-image.svg";
import { globalStyles } from "@/styles/global";

const AddMedicationScreen = () => {
  return (
    <View style={globalStyles.rootLayoutContainer}>
      <MessageCard
        Image={EmptyListImage}
        title="Twoja lista jest pusta"
        subtitle="Dodaj swój pierwszy lek"
      />
    </View>
  );
};

export default AddMedicationScreen;
