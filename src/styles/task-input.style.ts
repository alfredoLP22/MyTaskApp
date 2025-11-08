import { StyleSheet } from "react-native";

export const TaskInputStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 10,
  },
  input: {
    flex: 1,
    backgroundColor: "#1e293b",
    padding: 10,
    borderRadius: 10,
    color: "#f8fafc",
  },
  button: {
    backgroundColor: "#2563eb",
    marginLeft: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
  buttonDisabled: {
    opacity: 0.6,
    backgroundColor: "#475569",
  },
});
