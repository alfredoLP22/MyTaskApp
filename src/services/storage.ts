import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "TASKS_LIST";

export async function saveTasks(tasks: any) {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error(error);
  }
}

export async function getTasks() {
  try {
    const json = await AsyncStorage.getItem(STORAGE_KEY);
    return json ? JSON.parse(json) : [];
  } catch (error) {
    console.error(error);
    return [];
  }
}
