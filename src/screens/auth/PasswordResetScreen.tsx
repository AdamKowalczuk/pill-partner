import { Button, ButtonText } from "@/src/components/ui/button";
import FormInput from "@/src/components/ui/form-input";
import { passwordResetSchema } from "@/validation/medicationSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import AuthImage from "../assets/images/auth-image.svg";
import { globalStyles } from "@/styles/global";

const PasswordResetScreen = ({ changeTab }: any) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(passwordResetSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <AuthImage style={globalStyles.authImage} />
      <View style={globalStyles.authTopWrapper}>
        <Text style={globalStyles.authHeader}>Resetowanie hasła</Text>
        <Text style={globalStyles.authTextWrapper}>
          Wprowadź swój adres e-mail, aby otrzymać instrukcje resetowania hasła
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <FormInput
          control={control}
          name="email"
          label="Email"
          placeholder="Wpisz email"
          error={errors?.email?.message}
        />
      </View>
      <Button
        size="md"
        variant="solid"
        action="primary"
        onPress={handleSubmit(onSubmit)}
      >
        <ButtonText>Wyślij link resetujący</ButtonText>
      </Button>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 24,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 24,
  },
});

export default PasswordResetScreen;
