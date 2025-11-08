import { StyleSheet } from "react-native";

export const TaskItemStyles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1e293b",
    padding: 12,
    borderRadius: 10,
    marginVertical: 6,
  },
  text: {
    color: "#f8fafc",
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 10,
  },
  textCompleted: {
    color: "#94a3b8",
  },
  delete: {
    fontSize: 18,
    color: "red",
    marginLeft: 10,
  },
  status: {
    fontSize: 12,
    marginLeft: 10,
  },
});