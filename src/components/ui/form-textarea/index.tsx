import React from "react";
import { Controller } from "react-hook-form";
import { View, Text, StyleSheet } from "react-native";
import { Textarea, TextareaInput } from "@/src/components/ui/textarea";
import { colors } from "@/styles/colors";

interface FormTextareaWithControllerProps {
  name: string;
  control: any;
  label?: string;
  placeholder?: string;
  size?: "md" | "sm" | "lg" | "xl" | undefined;
  error?: any;
}

const FormTextarea: React.FC<FormTextareaWithControllerProps> = ({
  name,
  control,
  label,
  placeholder,
  size = "md",
  error,
}) => {
  return (
    <View>
      <Text className="text-[14px] text-typography-700 mb-2 font-medium">
        {label}
      </Text>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <Textarea size={size} isInvalid={!!error}>
            <TextareaInput
              placeholder={placeholder}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </Textarea>
        )}
      />
      {error && (
        <Text className="text-[14px] text-error-700 mt-[6px]">{error}</Text>
      )}
    </View>
  );
};

export default FormTextarea;
