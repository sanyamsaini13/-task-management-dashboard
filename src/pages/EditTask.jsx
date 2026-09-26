import { Link, useNavigate, useParams } from "react-router";
import TaskForm from "../components/TaskForm";
import { useTasks } from "../context/taskContext";

function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { getTaskById, updateTask } = useTasks();

  // URL parameters are strings, while our task IDs are numbers.
  const taskId = Number(id);

  const task = getTaskById(taskId);

  const handleUpdateTask = (formData) => {
    updateTask(taskId, formData);

    navigate(`/tasks/${taskId}`);
  };

  if (!task) {
    return (
      <div className="bg-white border border-slate-200 rounded-xl p-10 text-center shadow-sm">
        <div className="text-5xl mb-4">📋</div>

        <h1 className="text-2xl font-bold text-slate-800">
          Task Not Found
        </h1>

        <p className="text-slate-500 mt-2">
          The task you are trying to edit does not exist.
        </p>

        <Link
          to="/tasks"
          className="inline-block mt-6 bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700"
        >
          Back to Tasks
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">

      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
          Edit Task
        </h1>

        <p className="text-slate-500 mt-1">
          Update the task information below.
        </p>
      </div>

      <TaskForm
        initialData={task}
        onSubmit={handleUpdateTask}
        submitButtonText="Update Task"
      />

    </div>
  );
}

export default EditTask;