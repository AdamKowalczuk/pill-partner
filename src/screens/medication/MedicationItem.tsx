import { colors } from "@/styles/colors";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <CapsuleIcon fill={colors.primary500} style={styles.icon} />
          <View style={styles.medicationName}>
            <Text style={styles.medicationNameText}>Ibuprom</Text>
            {status === "taken" && <CheckmarkCircleIcon />}
          </View>
        </View>

        <DotsIcon fill={colors.typography900} />
      </View>

      <Text style={styles.doseText}>{medication.dose} tabletki</Text>

      <View style={styles.bottomSection}>
        {status === "taken" ? (
          <Button
            size="md"
            variant="solid"
            action="primary"
            onPress={onActionPress}
            style={styles.takenButton}
          >
            <ButtonText>Lek przyjęty</ButtonText>
          </Button>
        ) : (
          <Button
            size="md"
            variant="outline"
            action="primary"
            onPress={onActionPress}
            style={styles.takeButton}
          >
            <ButtonText>Przyjmij</ButtonText>
          </Button>
        )}

        <Text style={styles.timeText}>{medication.time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: colors.border300,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  medicationName: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  medicationNameText: {
    fontSize: 20,
    fontWeight: 700,
    color: colors.primary500,
  },
  leftSection: {},
  rightSection: {},
  icon: {
    width: 30,
    height: 30,
  },
  bottomSection: {},
  headerRow: {},
  statusIcon: {},
  doseText: {},
  takenButton: {},
  takeButton: {
    alignSelf: "flex-start",
  },
  buttonText: {},
  timeText: {},
});

export default MedicationItem;
