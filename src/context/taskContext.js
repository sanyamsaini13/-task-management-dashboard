import {
  createContext,
  useContext,
} from "react";

export const TaskContext =
  createContext(null);

export function useTasks() {
  const context =
    useContext(TaskContext);

  if (!context) {
    throw new Error(
      "useTasks must be used inside a TaskProvider"
    );
  }

  return context;
}