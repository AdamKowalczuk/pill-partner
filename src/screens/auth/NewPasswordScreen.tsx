import { Button, ButtonText } from "@/src/components/ui/button";
import FormInput from "@/src/components/ui/form-input";
import { newPasswordSchema } from "@/validation/validationSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import AuthImage from "../assets/images/auth-image.svg";
import { globalStyles } from "@/styles/global";

const NewPasswordScreen = ({ changeTab }: any) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(newPasswordSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <AuthImage style={globalStyles.authImage} />
      <View style={globalStyles.authTopWrapper}>
        <Text style={globalStyles.authHeader}>Zresetuj swoje hasło</Text>
        <Text style={globalStyles.authTextWrapper}>
          Wprowadź nowe hasło, które będzie używane do logowania
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <FormInput
          control={control}
          name="password"
          label="Nowe hasło"
          placeholder="Wpisz nowe hasło"
          error={errors?.password?.message}
        />
        <FormInput
          control={control}
          name="confirmPassword"
          label="Potwierdź nowe hasło"
          placeholder="Potwierdź nowe hasło"
          error={errors?.confirmPassword?.message}
        />
        <Button
          size="md"
          variant="solid"
          action="primary"
          onPress={handleSubmit(onSubmit)}
        >
          <ButtonText>Resetuj hasło</ButtonText>
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {},
  subtitle: {},
  inputContainer: {
    display: "flex",
    gap: 32,
  },
});

export default NewPasswordScreen;
