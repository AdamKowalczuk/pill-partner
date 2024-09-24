import { Button, ButtonText } from "@/src/components/ui/button";
import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NotFoundImage from "@/src/assets/images/not-found-image.svg";
import { useTranslation } from "react-i18next";

const NotFoundScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  return (
    <View className="flex-1 justify-center items-center p-5 bg-white">
      <Text className="text-primary-500 text-[48px] font-bold mb-4">404</Text>
      <Text className="text-primary-500 text-[18px] mb-6">{t("notFound")}</Text>
      <NotFoundImage />
      <Button onPress={() => navigation.goBack()}>
        <ButtonText>{t("goBack")}</ButtonText>
      </Button>
    </View>
  );
};

export default NotFoundScreen;
