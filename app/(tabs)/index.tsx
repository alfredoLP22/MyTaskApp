import TaskScreen from "@/src/screens/TaskScreen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0f172a" }}>
      <TaskScreen />
    </SafeAreaView>
  );
}
