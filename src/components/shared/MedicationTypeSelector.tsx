import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import PillsIcon from "@/src/assets/icons/capsule-icon.svg";
import InjectionIcon from "@/src/assets/icons/injection-icon.svg";
import LiquicIcon from "@/src/assets/icons/liquid-icon.svg";
import { colors } from "@/styles/colors";

const medicationTypes = [
  { label: "Tabletki", value: "pills", Icon: PillsIcon },
  { label: "Zastrzyk", value: "injection", Icon: InjectionIcon },
  { label: "Płyn", value: "liquid", Icon: LiquicIcon },
];

const MedicationTypeSelector = ({ value, onChange }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Typ leku</Text>
      <View style={styles.options}>
        {medicationTypes.map((type) => (
          <TouchableOpacity
            key={type.value}
            style={[
              styles.option,
              value === type.value && styles.selectedOption,
            ]}
            onPress={() => onChange(type.value)}
          >
            <type.Icon
              style={value === type.value ? styles.activeIcon : styles.icon}
            />
            <Text
              style={value === type.value ? styles.selectedText : styles.text}
            >
              {type.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 6,
  },
  label: {
    fontSize: 16,
    color: colors.typography900,
  },
  options: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  option: {
    borderRadius: 4,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: colors.border300,
    display: "flex",
    gap: 10,
    paddingBottom: 15,
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
    alignItems: "center",
  },

  icon: {
    width: 40,
    height: 40,
    color: colors.primary500,
  },
  activeIcon: {
    width: 40,
    height: 40,
    color: colors.white,
  },

  selectedOption: {
    backgroundColor: colors.primary500,
    color: colors.white,
  },
  text: {
    color: colors.primary500,
  },
  selectedText: {
    color: colors.white,
  },
});

export default MedicationTypeSelector;
