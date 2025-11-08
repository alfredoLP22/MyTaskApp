import { TaskFilter } from "../types/task";

export const FILTERS: { label: string; value: TaskFilter }[] = [
  { label: "All", value: "All" },
  { label: "Pending", value: "Pending" },
  { label: "Completed", value: "Completed" },
];
