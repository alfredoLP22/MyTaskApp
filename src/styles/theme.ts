import { StyleSheet } from "react-native";

export const ThemeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    padding: 20,
  },
  title: {
    color: "#f8fafc",
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 10,
  },
  filterContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  filterButton: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    backgroundColor: "#1e293b",
    borderRadius: 10,
    marginRight: 8,
  },
  filterButtonActive: {
    backgroundColor: "#2563eb",
  },
  filterText: {
    color: "#f8fafc",
    fontWeight: "600",
  },
  emptyContainer: {
    alignItems: "center",
    marginTop: 50,
  },
  emptyText: {
    color: "#f8fafc",
    fontWeight: "700",
    fontSize: 16,
  },
  emptySubText: {
    color: "#94a3b8",
    marginTop: 4,
  },
});
