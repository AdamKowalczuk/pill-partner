import { StyleSheet } from "react-native";
import { colors } from "./colors";

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
    width: "100%",
  },
  authTopWrapper: {
    display: "flex",
    gap: 4,
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
    marginTop: -10,
  },

  rootLayoutContainer: {
    flex: 1,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 32,
    paddingBottom: 32,
    gap: 30,
    backgroundColor: colors.white,
  },
});
