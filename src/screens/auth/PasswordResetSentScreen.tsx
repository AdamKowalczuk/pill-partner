import { Button, ButtonText } from "@/src/components/ui/button";
import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { Text, View } from "react-native";
import SendImage from "@/src/assets/images/send-image.svg";
import { globalStyles } from "@/styles/global";
import { colors } from "@/styles/colors";

const windowHeight = Dimensions.get("window").height;

const PasswordResetSentScreen = ({ navigation }: any) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.messageWrapper}>
          <SendImage style={globalStyles.authImage} />
          <View style={styles.textWrapper}>
            <Text style={styles.title}>Wiadomość wysłana</Text>
            <Text style={styles.subtitle}>
              Wysłaliśmy do Ciebie instrukcje dotyczące resetowania hasła
            </Text>
          </View>
        </View>

        <Button
          size="md"
          variant="solid"
          action="primary"
          onPress={() => navigation.navigate("login")}
        >
          <ButtonText>Powrót do logowania</ButtonText>
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 32,
    height: windowHeight - 96,
    marginTop: -32,
    justifyContent: "center",
    alignItems: "center",
  },
  messageWrapper: {
    display: "flex",
    gap: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.primary500,
  },
  textWrapper: {
    display: "flex",
    gap: 10,
    alignItems: "center",
  },
  subtitle: {},
});

export default PasswordResetSentScreen;
