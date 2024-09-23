import { colors } from "@/styles/colors";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import CapsuleIcon from "@/src/assets/icons/capsule-icon.svg";
import DotsIcon from "@/src/assets/icons/dots-icon.svg";
import CheckmarkCircleIcon from "@/src/assets/icons/checkmark-circle-icon.svg";
import { Button, ButtonText } from "@/src/components/ui/button";

type MedicationItemProps = {
  name: string;
  dosage: string;
  taken: boolean;
  time: any;
};

const MedicationItem = ({ medication, onActionPress, status }: any) => {
  return (
    <View className="p-5 flex rounded border-solid border border-border-300 gap-3">
      <View className="flex flex-row items-center justify-between">
        <View className="flex flex-row items-center">
          <CapsuleIcon className="w-[32px] h-[32px] fill-primary-500" />
          <View className="flex flex-row items-center">
            <Text>{medication?.medicationName}</Text>
            {status === "taken" && <CheckmarkCircleIcon />}
          </View>
        </View>

        <DotsIcon className="fill-typography-900" />
      </View>

      <Text className="ml-[30px]">{medication?.dosageAmount} tabletki</Text>

      <View className="flex flex-row justify-between items-center ml-[30px]">
        {status === "taken" ? (
          <Button
            size="md"
            variant="solid"
            action="primary"
            onPress={onActionPress}
          >
            <ButtonText>Lek przyjęty</ButtonText>
          </Button>
        ) : (
          <Button
            size="md"
            variant="outline"
            action="primary"
            onPress={onActionPress}
          >
            <ButtonText>Przyjmij</ButtonText>
          </Button>
        )}

        <Text>{medication?.notificationTime[0]}</Text>
      </View>
    </View>
  );
};

export default MedicationItem;
