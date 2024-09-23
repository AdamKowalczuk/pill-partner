import { Button, ButtonText } from "@/src/components/ui/button";
import React from "react";
import { Dimensions } from "react-native";
import { Text, View } from "react-native";
import SendImage from "@/src/assets/images/send-image.svg";
import { useTranslation } from "react-i18next";
import { globalStyles } from "@/styles/global";

const windowHeight = Dimensions.get("window").height;

const PasswordResetSentScreen = ({ navigation }: any) => {
  const { t } = useTranslation();

  return (
    <View
      className="flex flex-col items-center justify-center gap-16"
      style={{ height: windowHeight - 96, marginTop: -32 }}
    >
      <View className="flex gap-16">
        <SendImage style={globalStyles.authImage} />
        <View className="flex gap-5 items-center">
          <Text className="text-[24px] font-bold text-primary-500">
            {t("messageSentTitle")}
          </Text>
          <Text className="text-center text-base text-gray-600">
            {t("messageSentSubtitle")}
          </Text>
        </View>
      </View>

      <Button
        size="md"
        variant="solid"
        action="primary"
        onPress={() => navigation.navigate("login")}
      >
        <ButtonText>{t("returnToLogin")}</ButtonText>
      </Button>
    </View>
  );
};

export default PasswordResetSentScreen;
