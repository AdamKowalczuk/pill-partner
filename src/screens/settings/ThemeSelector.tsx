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
import useThemeStore from "@/src/store/useThemeStore";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Pressable, Text, View } from "react-native";

const ThemeSelector = ({ isOpen, setIsOpen }: any) => {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useThemeStore((state) => ({
    theme: state.theme,
    setTheme: state.setTheme,
  }));

  const [values, setValues] = useState(theme);

  const handleClose = () => setIsOpen(false);

  const onSubmit = () => {
    setTheme(values);
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
              <Text className="font-semibold text-lg">{t("chooseTheme")}</Text>
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
              <Radio value="light" className="justify-between items-stretch">
                <RadioLabel>{t("lightMode")}</RadioLabel>
                <RadioIndicator>
                  <RadioIcon as={CircleIcon} />
                </RadioIndicator>
              </Radio>
              <Radio value="dark" className="justify-between items-stretch">
                <RadioLabel>{t("darkMode")}</RadioLabel>
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

export default ThemeSelector;
