import { Text, View } from "react-native";
import React, { useState } from "react";
import FormInput from "@/src/components/ui/form-input";
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
import { globalStyles } from "@/styles/global";

const AddMoodScreen = () => {
  const [isTodayMoodAdded, setIsTodayMoodAdded] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(moodSchema),
    defaultValues: {
      moodRating: undefined,
      moodTags: [],
      additionalNotes: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    setIsTodayMoodAdded(true);
  };

  const handleTagSelect = () => {};

  return (
    <View>
      {isTodayMoodAdded ? (
        <MessageCard
          Image={SuccessImage}
          title="Sukces"
          subtitle="Twój nastrój zastał zapisany"
        />
      ) : (
        <>
          <View>
            <Text>Jak się dzisiaj czujesz?</Text>
            <Text>Wybierz ocenę od 1 do 5, aby określić swój nastrój</Text>
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
          <View>
            <Text>Co wpłynęło na Twój nastrój?</Text>
            <Text>
              Wybierz jedną lub więcej opcji, które najlepiej opisują dzisiejsze
              okoliczności
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
            label="Chcesz dodać coś więcej?"
            placeholder="Opisz swoje odczucia lub sytuacje, które miały wpływ na Twój nastrój..."
            error={errors?.additionalNotes?.message}
          />
          <Button
            size="md"
            variant="solid"
            action="primary"
            onPress={handleSubmit(onSubmit)}
          >
            <ButtonText>Zapisz</ButtonText>
          </Button>
        </>
      )}
    </View>
  );
};

export default AddMoodScreen;
