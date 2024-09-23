import { Button, ButtonText } from "@/src/components/ui/button";
import FormInput from "@/src/components/ui/form-input";
import { newPasswordSchema } from "@/validation/authSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { Text, View } from "react-native";
import AuthImage from "@/src/assets/images/auth-image.svg";
import { useTranslation } from "react-i18next";
import { globalStyles } from "@/styles/global";

const NewPasswordScreen = () => {
  const { t } = useTranslation();

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
        <Text style={globalStyles.authHeader}>{t("resetYourPassword")}</Text>
        <Text style={globalStyles.authTextWrapper}>
          {t("enterNewPassword")}
        </Text>
      </View>

      <View className="flex gap-16">
        <FormInput
          control={control}
          name="password"
          label={t("newPassword")}
          placeholder={t("enterNewPassword")}
          error={errors?.password?.message}
        />
        <FormInput
          control={control}
          name="confirmPassword"
          label={t("confirmNewPassword")}
          placeholder={t("confirmNewPassword")}
          error={errors?.confirmPassword?.message}
        />
        <Button
          size="md"
          variant="solid"
          action="primary"
          onPress={handleSubmit(onSubmit)}
        >
          <ButtonText>{t("resetPasswordButton")}</ButtonText>
        </Button>
      </View>
    </>
  );
};

export default NewPasswordScreen;
