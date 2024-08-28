import { Button, ButtonText } from "@/components/ui/button";
import FormInput from "@/components/ui/form-input";
import { Input, InputField } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { registerSchema } from "@/validation/validationSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";

const Register = ({ changeTab }) => {
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
    <View>
      <Text style={styles.loginHeader}>Zarejestruj się</Text>
      <View style={styles.loginTextWrapper}>
        <Text style={styles.loginText}>Masz już konto?</Text>
        <Button onPress={() => changeTab("login")} variant="link">
          <ButtonText>Zaloguj się</ButtonText>
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
        <FormInput
          control={control}
          name="confirmPassword"
          label="Powtórz hasło"
          placeholder="Wpisz ponownie hasło"
          error={errors?.confirmPassword?.message}
          type="password"
        />
      </View>

      <Button
        size="md"
        variant="solid"
        action="primary"
        onPress={handleSubmit(onSubmit)}
      >
        <ButtonText>Zarejestruj się</ButtonText>
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
export default Register;
