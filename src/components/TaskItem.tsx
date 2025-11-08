import { Ionicons } from "@expo/vector-icons";
// eslint-disable-next-line import/no-named-as-default
import Checkbox from "expo-checkbox";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { TaskItemStyles } from "../styles/task-item.style";

export default function TaskItem({ task, onToggle, onDelete }: any) {
  return (
    <View style={TaskItemStyles.item}>
      <Checkbox
        value={task.completed}
        onValueChange={() => onToggle(task.id)}
        color={task.completed ? "#22c55e" : "#64748b"}
      />
      <View style={{ flex: 1 }}>
        <Text
          style={[
            TaskItemStyles.text,
            task.completed && TaskItemStyles.textCompleted,
          ]}
        >
          {task.title}
        </Text>
        <Text
          style={[
            TaskItemStyles.status,
            { color: task.completed ? "#22c55e" : "#f59e0b" },
          ]}
        >
          {task.completed ? "Completed" : "Pending"}
        </Text>
      </View>
      <TouchableOpacity onPress={() => onDelete(task.id)}>
        <Text style={TaskItemStyles.delete}>
          <Ionicons
            name="trash-outline"
            size={24}
            style={TaskItemStyles.delete}
          />
        </Text>
      </TouchableOpacity>
    </View>
  );
}
