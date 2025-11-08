import { useMemo, useState } from "react";

export const useTaskInput = (onAddTask: (title: string) => void) => {
  const [text, setText] = useState("");

  const isDisabled = useMemo(() => text.trim() === "", [text]);

  const handleAdd = () => {
    if (isDisabled) return;
    onAddTask(text.trim());
    setText("");
  };

  return { text, setText, handleAdd, isDisabled };
};
