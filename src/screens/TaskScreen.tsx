import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { EmptyList } from "../components/EmptyLust";
import TaskInput from "../components/TaskInput";
import TaskItem from "../components/TaskItem";
import { FILTERS } from "../constants/index";
import { useTasks } from "../hooks/useTasks";
import { ThemeStyles } from "../styles/theme";

export default function TaskScreen() {
  const { filteredTasks, addTask, toggleTask, deleteTask, filter, setFilter } =
    useTasks();

  return (
    <View style={ThemeStyles.container}>
      <Text style={ThemeStyles.title}>My Tasks</Text>
      <TaskInput onAddTask={addTask} />
      <View style={ThemeStyles.filterContainer}>
        {FILTERS.map(({ label, value }) => (
          <TouchableOpacity
            key={value}
            onPress={() => setFilter(value)}
            style={[
              ThemeStyles.filterButton,
              filter === value && ThemeStyles.filterButtonActive,
            ]}
          >
            <Text style={ThemeStyles.filterText}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem task={item} onToggle={toggleTask} onDelete={deleteTask} />
        )}
        ListEmptyComponent={
          <EmptyList />
        }
      />
    </View>
  );
}
