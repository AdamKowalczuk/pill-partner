import { Button, ButtonText } from "@/src/components/ui/button";
import FormInput from "@/src/components/ui/form-input";
import { passwordResetSchema } from "@/validation/authSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { Text, View } from "react-native";
import AuthImage from "@/src/assets/images/auth-image.svg";
import { useTranslation } from "react-i18next";
import { globalStyles } from "@/styles/global";

const PasswordResetScreen = () => {
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

  const { t } = useTranslation();

  return (
    <>
      <AuthImage style={globalStyles.authImage} />
      <View style={globalStyles.authTopWrapper}>
        <Text style={globalStyles.authHeader}>{t("resetPassword")}</Text>
        <Text style={globalStyles.authTextWrapper}>
          {t("enterEmailForReset")}
        </Text>
      </View>

      <View className="w-full mb-6">
        <FormInput
          control={control}
          name="email"
          label="Email"
          placeholder={t("enterEmail")}
          error={errors?.email?.message}
        />
      </View>
      <Button
        size="md"
        variant="solid"
        action="primary"
        onPress={handleSubmit(onSubmit)}
      >
        <ButtonText>{t("sendResetLink")}</ButtonText>
      </Button>
    </>
  );
};

export default PasswordResetScreen;
