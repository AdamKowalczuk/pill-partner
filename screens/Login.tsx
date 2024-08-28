import { Button, ButtonText } from "@/components/ui/button";
import { Input, InputField } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { loginSchema } from "@/validation/validationSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { useForm } from "react-hook-form";
import FormInput from "@/components/ui/form-input";

const Login = ({ changeTab }) => {
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
    <View>
      <Text style={styles.loginHeader}>Zaloguj się do swojego konta</Text>
      <View style={styles.loginTextWrapper}>
        <Text style={styles.loginText}>Nie masz konta?</Text>
        <Button onPress={() => changeTab("register")} variant="link">
          <ButtonText>Zarejestruj się</ButtonText>
        </Button>
      </View>

      <View style={styles.buttonWrapper}>
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
      </View>

      <View style={styles.rememberPasswordButton}>
        <Button variant="link">
          <ButtonText>Nie pamiętam hasła</ButtonText>
        </Button>
      </View>

      <Button
        size="md"
        variant="solid"
        action="primary"
        onPress={handleSubmit(onSubmit)}
      >
        <ButtonText>Zaloguj się</ButtonText>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  loginHeader: {
    fontSize: 24,
    fontWeight: "bold",
  },
  loginTextWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 6,
    fontSize: 14,
  },
  loginText: {
    color: "#525252",
  },
  buttonWrapper: {
    display: "flex",
    gap: 20,
  },
  rememberPasswordButton: {
    display: "flex",
    alignItems: "flex-end",
  },
});

export default Login;
