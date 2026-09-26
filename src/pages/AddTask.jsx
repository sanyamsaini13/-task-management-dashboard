import { useNavigate } from "react-router";
import TaskForm from "../components/TaskForm";
import { useTasks } from "../context/taskContext";

function AddTask() {
  const navigate = useNavigate();
  const { addTask } = useTasks();

  const handleAddTask = (formData) => {
    addTask(formData);

    navigate("/tasks");
  };

  return (
    <div className="max-w-4xl mx-auto">

      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
          Add New Task
        </h1>

        <p className="text-slate-500 mt-1">
          Create a new task and add it to your task list.
        </p>
      </div>

      <TaskForm
        onSubmit={handleAddTask}
        submitButtonText="Add Task"
      />

    </div>
  );
}

export default AddTask;