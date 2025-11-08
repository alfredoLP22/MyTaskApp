export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export interface TaskInputProps {
  onAddTask: (title: string) => void;
}
export type TaskFilter = "All" | "Pending" | "Completed";