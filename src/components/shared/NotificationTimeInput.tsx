import React from "react";
import { View } from "react-native";
import FormInput from "../ui/form-input";
import { Input, InputField } from "../ui/input";

const NotificationTimeInput = ({ value, onChange }: any) => {
  return (
    <View>
      <Input>
        <InputField
          placeholder="HH:MM"
          value={value}
          onChangeText={onChange}
          keyboardType="numeric"
        />
      </Input>
    </View>
  );
};

export default NotificationTimeInput;
