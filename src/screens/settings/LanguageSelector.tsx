import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
} from "@/src/components/ui/actionsheet";
import { Button, ButtonText } from "@/src/components/ui/button";
import { Divider } from "@/src/components/ui/divider";
import { HStack } from "@/src/components/ui/hstack";
import { Icon, CircleIcon, CloseIcon } from "@/src/components/ui/icon";
import {
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
} from "@/src/components/ui/radio";
import { VStack } from "@/src/components/ui/vstack";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Pressable, Text, View } from "react-native";

const LanguageSelector = ({ isOpen, setIsOpen }: any) => {
  const { t, i18n } = useTranslation();

  const [values, setValues] = useState(i18n.language);

  const handleClose = () => setIsOpen(false);

  const onSubmit = () => {
    i18n.changeLanguage(values);
    setIsOpen(false);
  };

  return (
    <View>
      <Actionsheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <HStack className="justify-between w-full mt-3">
            <VStack>
              <Text className="font-semibold text-lg">
                {i18n.t("chooseLanguage")}
              </Text>
            </VStack>
            <Pressable onPress={handleClose}>
              <Icon
                as={CloseIcon}
                size="lg"
                className="stroke-background-500"
              />
            </Pressable>
          </HStack>
          <Divider className="my-4" />

          <VStack space="lg" className="w-full">
            <RadioGroup value={values} onChange={(val: any) => setValues(val)}>
              <Radio value="pl" className="justify-between items-stretch">
                <RadioLabel>{t("polish")}</RadioLabel>
                <RadioIndicator>
                  <RadioIcon as={CircleIcon} fill="primary-500" />
                </RadioIndicator>
              </Radio>
              <Radio value="en" className="justify-between items-stretch">
                <RadioLabel>{t("english")}</RadioLabel>
                <RadioIndicator>
                  <RadioIcon as={CircleIcon} />
                </RadioIndicator>
              </Radio>
            </RadioGroup>
          </VStack>
          <Divider className="my-4" />

          <Button className="w-full" onPress={onSubmit}>
            <ButtonText>{i18n.t("confirm")}</ButtonText>
          </Button>
        </ActionsheetContent>
      </Actionsheet>
    </View>
  );
};

export default LanguageSelector;
