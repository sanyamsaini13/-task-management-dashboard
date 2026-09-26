import {
  useEffect,
  useState,
} from "react";

import mockTasks from "../data/mockTasks";
import { TaskContext } from "./taskContext";

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    const savedTasks =
      localStorage.getItem("tasks");

    if (savedTasks) {
      try {
        return JSON.parse(savedTasks);
      } catch {
        return mockTasks;
      }
    }

    return mockTasks;
  });

  useEffect(() => {
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);

  const addTask = (taskData) => {
    const newTask = {
      ...taskData,
      id: Date.now(),
      createdAt: new Date()
        .toISOString()
        .split("T")[0],
    };

    setTasks((prevTasks) => [
      ...prevTasks,
      newTask,
    ]);
  };

  const updateTask = (
    id,
    updatedData
  ) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              ...updatedData,
            }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.filter(
        (task) => task.id !== id
      )
    );
  };

  const getTaskById = (id) => {
    return tasks.find(
      (task) => task.id === id
    );
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        updateTask,
        deleteTask,
        getTaskById,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}