import { Button, ButtonText } from "@/src/components/ui/button";
import { loginSchema } from "@/validation/authSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Text } from "react-native";
import { View } from "react-native";
import { useForm } from "react-hook-form";
import FormInput from "@/src/components/ui/form-input";
import AuthImage from "@/src/assets/images/auth-image.svg";
import { globalStyles } from "@/styles/global";
import useAuthStore from "@/src/store/useAuthStore";
import { useTranslation } from "react-i18next";

const LoginScreen = ({ changeTab }: any) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { t } = useTranslation();

  const login = useAuthStore((state) => state.login);

  const onSubmit = (data: any) => {
    login(data);
    console.log(data);
  };

  return (
    <>
      <AuthImage style={globalStyles.authImage} />
      <View style={globalStyles.authTopWrapper}>
        <Text style={globalStyles.authHeader}>{t("loginToAccount")}</Text>
        <View style={globalStyles.authTextWrapper}>
          <Text style={globalStyles.authText}>{t("noAccount")}</Text>
          <Button onPress={() => changeTab("register")} variant="link">
            <ButtonText>{t("signUp")}</ButtonText>
          </Button>
        </View>
      </View>

      <View>
        <View style={globalStyles.authButtonWrapper}>
          <FormInput
            control={control}
            name="email"
            label="Email"
            placeholder={t("enterEmail")}
            error={errors?.email?.message}
          />
          <FormInput
            control={control}
            name="password"
            label="Hasło"
            placeholder={t("enterPassword")}
            error={errors?.password?.message}
            type="password"
          />
          <View style={globalStyles.rememberPasswordButton}>
            <Button variant="link" onPress={() => changeTab("passwordReset")}>
              <ButtonText>{t("forgotPassword")}</ButtonText>
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
          <ButtonText>{t("loginButton")}</ButtonText>
        </Button>
      </View>
    </>
  );
};

export default LoginScreen;
