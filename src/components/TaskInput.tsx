import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useTaskInput } from "../hooks/useTaskInput";
import { TaskInputStyles } from "../styles/task-input.style";
import { TaskInputProps } from "../types/task";

export default function TaskInput({ onAddTask }: TaskInputProps) {
  const { text, setText, handleAdd, isDisabled } = useTaskInput(onAddTask);

  return (
    <View style={TaskInputStyles.container}>
      <TextInput
        placeholder="Add a new task..."
        placeholderTextColor="#94a3b8"
        value={text}
        onChangeText={setText}
        style={TaskInputStyles.input}
      />
      <TouchableOpacity
        onPress={handleAdd}
        disabled={isDisabled}
        activeOpacity={0.8}
        style={[
          TaskInputStyles.button,
          isDisabled && TaskInputStyles.buttonDisabled,
        ]}
      >
        <Text style={TaskInputStyles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}
