import { Button, ButtonText } from "@/components/ui/button";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NotFoundImage from "../assets/images/not-found-image.svg";

const NotFound = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>404</Text>
      <Text style={styles.subtitle}>Strona nie znaleziona</Text>
      <NotFoundImage />
      <Button onPress={() => navigation.goBack()}>
        <ButtonText>Wróć</ButtonText>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#6366F1",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: "#6366F1",
    marginBottom: 24,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 32,
  },
});

export default NotFound;
