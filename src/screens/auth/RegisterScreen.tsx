import { Button, ButtonText } from "@/src/components/ui/button";
import FormInput from "@/src/components/ui/form-input";
import { Input, InputField } from "@/src/components/ui/input";
import { Text } from "react-native";
import { registerSchema } from "@/validation/authSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import AuthImage from "@/src/assets/images/auth-image.svg";
import { globalStyles } from "@/styles/global";

const RegisterScreen = ({ changeTab }: any) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <AuthImage style={globalStyles.authImage} />
      <View style={globalStyles.authTopWrapper}>
        <Text style={globalStyles.authHeader}>Zarejestruj się</Text>
        <View style={globalStyles.authTextWrapper}>
          <Text style={globalStyles.authText}>Masz już konto?</Text>
          <Button onPress={() => changeTab("login")} variant="link">
            <ButtonText>Zaloguj się</ButtonText>
          </Button>
        </View>
      </View>

      <View style={globalStyles.authButtonWrapper}>
        <FormInput
          control={control}
          name="email"
          label="Email"
          placeholder="Wpisz email"
          error={errors?.email?.message}
        />
        <FormInput
          control={control}
          name="password"
          label="Email"
          placeholder="Wpisz hasło"
          error={errors?.password?.message}
          type="password"
        />
        <FormInput
          control={control}
          name="confirmPassword"
          label="Powtórz hasło"
          placeholder="Wpisz ponownie hasło"
          error={errors?.confirmPassword?.message}
          type="password"
        />
        <Button
          size="md"
          variant="solid"
          action="primary"
          onPress={handleSubmit(onSubmit)}
        >
          <ButtonText>Zarejestruj się</ButtonText>
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});
export default RegisterScreen;
