import { Button, ButtonText } from "@/src/components/ui/button";
import FormInput from "@/src/components/ui/form-input";
import { Text, View } from "react-native";
import { registerSchema } from "@/validation/authSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import AuthImage from "@/src/assets/images/auth-image.svg";
import { useTranslation } from "react-i18next";
import { globalStyles } from "@/styles/global";

const RegisterScreen = ({ changeTab }: any) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const { t } = useTranslation();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <AuthImage style={globalStyles.authImage} />
      <View style={globalStyles.authTopWrapper}>
        <Text style={globalStyles.authHeader}>{t("signUp")}</Text>
        <View style={globalStyles.authTextWrapper}>
          <Text style={globalStyles.authText}>{t("alreadyHaveAccount")}</Text>
          <Button onPress={() => changeTab("login")} variant="link">
            <ButtonText>{t("login")}</ButtonText>
          </Button>
        </View>
      </View>

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
        <FormInput
          control={control}
          name="confirmPassword"
          label={t("confirmPassword")}
          placeholder={t("confirmPasswordPlaceholder")}
          error={errors?.confirmPassword?.message}
          type="password"
        />
        <Button
          size="md"
          variant="solid"
          action="primary"
          onPress={handleSubmit(onSubmit)}
        >
          <ButtonText>{t("signUp")}</ButtonText>
        </Button>
      </View>
    </>
  );
};

export default RegisterScreen;
