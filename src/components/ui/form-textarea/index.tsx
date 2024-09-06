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
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
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

export default FormTextarea;
