import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  authLayout: {
    paddingTop: 32,
    paddingBottom: 32,
    paddingLeft: 24,
    paddingRight: 24,
    display: "flex",
    gap: 32,
  },
  authImage: {
    width: "50%",
  },
  authTopWrapper: {
    display: "flex",
  },
  authHeader: {
    fontSize: 24,
    fontWeight: "bold",
  },
  authTextWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 6,
    fontSize: 14,
  },
  authText: {
    color: "#525252",
  },
  authButtonWrapper: {
    display: "flex",
    gap: 20,
  },
  rememberPasswordButton: {
    display: "flex",
    alignItems: "flex-end",
  },
});
