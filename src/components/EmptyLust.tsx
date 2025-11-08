import { Text, View } from "react-native";
import { ThemeStyles } from "../styles/theme";

export const EmptyList = () => {
  return (
    <View style={ThemeStyles.emptyContainer}>
      <Text style={ThemeStyles.emptyText}>All tasks are done!</Text>
      <Text style={ThemeStyles.emptySubText}>
        Add a new task to get started.
      </Text>
    </View>
  );
};
