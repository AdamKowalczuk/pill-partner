import { Button, ButtonText } from "@/src/components/ui/button";
import { Input, InputField } from "@/src/components/ui/input";

import { loginSchema } from "@/validation/validationSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Image, StyleSheet, Text } from "react-native";
import { View } from "react-native";
import { useForm } from "react-hook-form";
import FormInput from "@/src/components/ui/form-input";
import AuthImage from "../assets/images/auth-image.svg";
import { globalStyles } from "@/styles/global";

const LoginScreen = ({ changeTab }: any) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <AuthImage style={globalStyles.authImage} />
      <View style={globalStyles.authTopWrapper}>
        <Text style={globalStyles.authHeader}>
          Zaloguj się do swojego konta
        </Text>
        <View style={globalStyles.authTextWrapper}>
          <Text style={globalStyles.authText}>Nie masz konta?</Text>
          <Button onPress={() => changeTab("register")} variant="link">
            <ButtonText>Zarejestruj się</ButtonText>
          </Button>
        </View>
      </View>

      <View>
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
          <View style={globalStyles.rememberPasswordButton}>
            <Button variant="link" onPress={() => changeTab("passwordReset")}>
              <ButtonText>Nie pamiętam hasła</ButtonText>
            </Button>
          </View>
        </View>

        <Button
          size="md"
          variant="solid"
          action="primary"
          onPress={handleSubmit(onSubmit)}
          style={{ marginTop: 32 }}
        >
          <ButtonText>Zaloguj się</ButtonText>
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;
