import { useCallback, useEffect, useMemo, useState } from "react";
import { getTasks, saveTasks } from "../services/storage";
import { Task, TaskFilter } from "../types/task";

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<TaskFilter>("All");

  useEffect(() => {
    getTasks().then((data) => {
      if (data) setTasks(data);
    });
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const generateId = () => {
    const random = Math.random().toString(36).substring(2, 8);
    return `${Date.now()}-${random}`;
  };

  const addTask = useCallback((title: string) => {
    setTasks((prev) => [
      ...prev,
      { id: generateId(), title, completed: false },
    ]);
  }, []);

  const toggleTask = useCallback((id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }, []);

  const deleteTask = useCallback((id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const filteredTasks = useMemo(() => {
    if (filter === "Pending") return tasks.filter((t) => !t.completed);
    if (filter === "Completed") return tasks.filter((t) => t.completed);
    return tasks;
  }, [tasks, filter]);

  return {
    tasks,
    filteredTasks,
    addTask,
    toggleTask,
    deleteTask,
    filter,
    setFilter,
  };
}
