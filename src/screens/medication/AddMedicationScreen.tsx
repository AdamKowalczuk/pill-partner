import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import MessageCard from "@/src/components/shared/MessageCard";
import EmptyListImage from "@/src/assets/images/empty-list-image.svg";
import { globalStyles } from "@/styles/global";
import { Button, ButtonIcon, ButtonText } from "@/src/components/ui/button";
import FormInput from "@/src/components/ui/form-input";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addMedicationSchema } from "@/validation/medicationSchemas";
import MedicationTypeSelector from "@/src/components/shared/MedicationTypeSelector";
import NotificationTimeInput from "@/src/components/shared/NotificationTimeInput";
import AddIcon from "@/src/assets/icons/add-icon.svg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const AddMedicationScreen = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(addMedicationSchema),
    defaultValues: {
      medicationName: "",
      dosageAmount: 0,
      medicationType: "pills",
      duration: 0,
      stockAmount: 0,
      notificationTime: ["08:00"],
    },
  });
  const navigation = useNavigation();

  const { fields, append } = useFieldArray({
    control,
    name: "notificationTime",
  });

  const addNotificationTime = () => {
    append("");
  };

  const onSubmit = async (data: any) => {
    console.log(data);
    try {
      const storedData: any = await AsyncStorage.getItem("medications");
      const medicationsArray = storedData ? JSON.parse(storedData) : [];

      medicationsArray.push({
        ...data,
        id: JSON.parse(storedData)?.length ? JSON.parse(storedData)?.length : 0,
      });

      await AsyncStorage.setItem(
        "medications",
        JSON.stringify(medicationsArray)
      );
    } catch (error) {
      console.error("Błąd podczas aktualizacji danych", error);
    }
    reset();
    navigation.navigate("Leki");
  };
  return (
    <View style={globalStyles.rootLayoutContainer}>
      <ScrollView>
        <View className="flex gap-5">
          <FormInput
            control={control}
            name="medicationName"
            label="Nazwa leku"
            placeholder="Wprowadź nazwę leku"
            error={errors?.medicationName?.message}
          />
          <FormInput
            control={control}
            name="dosageAmount"
            label="Ilość leku"
            placeholder="Wprowadź ilość leku"
            error={errors?.dosageAmount?.message}
            keyboardType="numeric"
          />
          <Controller
            name="medicationType"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <MedicationTypeSelector value={value} onChange={onChange} />
            )}
          />
          <FormInput
            control={control}
            name="duration"
            label="Jak długo brać lek"
            placeholder="Wprowadź czas trwania (dni)"
            error={errors?.duration?.message}
            keyboardType="numeric"
          />
          <FormInput
            control={control}
            name="stockAmount"
            label="Ile masz leku na stanie?"
            placeholder="Wprowadź liczbę np. 30 tabletek"
            error={errors?.stockAmount?.message}
            keyboardType="numeric"
          />
          <View className="flex gap-2">
            <Text className="font-medium text-typography-700">
              Powiadomienia
            </Text>
            {fields.map((field, index) => (
              <Controller
                key={field.id}
                control={control}
                name={`notificationTime.${index}`}
                render={({ field: { onChange, value } }) => (
                  <NotificationTimeInput value={value} onChange={onChange} />
                )}
              />
            ))}
          </View>

          <Button
            size="md"
            variant="solid"
            action="primary"
            onPress={addNotificationTime}
          >
            <ButtonIcon as={AddIcon} />
          </Button>

          <Button
            size="md"
            variant="solid"
            action="primary"
            onPress={handleSubmit(onSubmit)}
          >
            <ButtonText>Dodaj lek</ButtonText>
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddMedicationScreen;
