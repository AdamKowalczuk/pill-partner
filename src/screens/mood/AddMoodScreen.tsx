import React, { useState } from "react";
import { Text, View } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { moodSchema } from "@/validation/moodSchemas";
import { Button, ButtonText } from "@/src/components/ui/button";
import MessageCard from "@/src/components/shared/MessageCard";
import SuccessImage from "@/src/assets/images/success-image.svg";
import TagSelector from "@/src/components/shared/TagSelector";
import { moodTagsOptions } from "@/src/constants";
import ErrorMessage from "@/src/components/shared/ErrorMessage";
import RatingEmojis from "@/src/components/custom/RatingEmojis";
import FormTextarea from "@/src/components/ui/form-textarea";
import { useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AddMoodScreen = () => {
  const { t } = useTranslation();
  const [isTodayMoodAdded, setIsTodayMoodAdded] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(moodSchema),
    defaultValues: {
      moodRating: undefined,
      moodTags: [],
      additionalNotes: "",
    },
  });

  const onSubmit = async (data: any) => {
    setIsTodayMoodAdded(true);
    try {
      const storedData: any = await AsyncStorage.getItem("moodHistoryList");
      const moodsArray = storedData ? JSON.parse(storedData) : [];

      const currentDateTime = new Date().toISOString();

      moodsArray.push({
        ...data,
        id: moodsArray.length || 0,
        timestamp: currentDateTime,
      });

      await AsyncStorage.setItem("moodHistoryList", JSON.stringify(moodsArray));
    } catch (error) {
      console.error(t("updateError"), error);
    }
    reset();
  };

  const handleTagSelect = () => {};

  return (
    <>
      {isTodayMoodAdded ? (
        <View>
          <MessageCard
            Image={SuccessImage}
            title={t("successTitle")}
            subtitle={t("moodSaved")}
          />
        </View>
      ) : (
        <>
          <View className="flex flex-col gap-2">
            <Text className="text-[14px] font-medium text-typography-700">
              {t("howAreYouFeeling")}
            </Text>
            <Controller
              control={control}
              name="moodRating"
              render={({ field: { onChange, value } }) => (
                <RatingEmojis value={value} onChange={onChange} />
              )}
            />
            {errors.moodRating && (
              <ErrorMessage error={errors.moodRating.message} />
            )}
          </View>
          <View className="flex gap-5">
            <Text className="text-[14px] font-medium text-typography-700">
              {t("whatInfluencedMood")}
            </Text>

            <Controller
              name="moodTags"
              control={control}
              render={({ field: { onChange } }) => (
                <TagSelector
                  tags={moodTagsOptions}
                  onTagSelect={(selectedTags: string[]) => {
                    onChange(selectedTags);
                  }}
                />
              )}
            />
            {errors.moodTags && (
              <ErrorMessage error={errors.moodTags.message} />
            )}
          </View>

          <FormTextarea
            control={control}
            name="additionalNotes"
            label={t("addMore")}
            placeholder={t("describeFeelings")}
            error={errors?.additionalNotes?.message}
          />
          <Button
            size="md"
            variant="solid"
            action="primary"
            onPress={handleSubmit(onSubmit)}
          >
            <ButtonText>{t("saveButton")}</ButtonText>
          </Button>
        </>
      )}
    </>
  );
};

export default AddMoodScreen;
