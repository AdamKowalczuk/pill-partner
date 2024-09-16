import React from "react";
import { Controller } from "react-hook-form";
import { View, Text, StyleSheet } from "react-native";
import { Input, InputField } from "@/src/components/ui/input";
import { colors } from "@/styles/colors";
import { Control } from "react-hook-form";

interface FormInputWithControllerProps {
  name: string;
  control: Control<any>;
  label?: string;
  placeholder?: string;
  variant?: "underlined" | "outline" | "rounded" | undefined;
  size?: "md" | "sm" | "lg" | "xl" | undefined;
  error?: any;
  type?: "text" | "password";
  multiline?: boolean;
  keyboardType?: "default" | "email-address" | "numeric";
}

const FormInput: React.FC<FormInputWithControllerProps> = ({
  name,
  control,
  label,
  placeholder,
  variant = "outline",
  size = "md",
  error,
  type = "text",
  multiline = false,
  keyboardType = "default",
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
          <Input variant={variant} size={size} isInvalid={!!error}>
            <InputField
              placeholder={placeholder}
              onBlur={onBlur}
              type={type}
              onChangeText={onChange}
              value={value}
              multiline={multiline}
              keyboardType={keyboardType}
            />
          </Input>
        )}
      />
      {error && (
        <Text className="text-[14px] text-error-700 mt-[6px]">{error}</Text>
      )}
    </View>
  );
};

export default FormInput;
