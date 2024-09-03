import React from "react";
import { Controller } from "react-hook-form";
import { View, Text, StyleSheet } from "react-native";
import { Input, InputField } from "@/src/components/ui/input";
import { colors } from "@/styles/colors";

interface FormInputWithControllerProps {
  name: string;
  control: any;
  label?: string;
  placeholder?: string;
  variant?: "underlined" | "outline" | "rounded" | undefined;
  size?: "md" | "sm" | "lg" | "xl" | undefined;
  error?: any;
  type?: "text" | "password";
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
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
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
            />
          </Input>
        )}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  label: {
    marginBottom: 6,
    fontSize: 14,
    color: colors.primary900,
  },
  errorText: {
    color: colors.error500,
    fontSize: 14,
    marginTop: 6,
  },
});

export default FormInput;
