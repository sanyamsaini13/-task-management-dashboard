import { Link, useNavigate, useParams } from "react-router";

import { useTasks } from "../context/taskContext";
import StatusBadge from "../components/StatusBadge";
import PriorityBadge from "../components/PriorityBadge";

function TaskDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { getTaskById, deleteTask } = useTasks();

  const taskId = Number(id);
  const task = getTaskById(taskId);

  const handleDelete = () => {
    if (!task) {
      return;
    }

    const confirmed = window.confirm(
      `Are you sure you want to delete "${task.title}"?`
    );

    if (confirmed) {
      deleteTask(taskId);
      navigate("/tasks");
    }
  };

  if (!task) {
    return (
      <div className="bg-white border border-slate-200 rounded-xl p-10 text-center shadow-sm">

        <div className="text-5xl mb-4">
          📋
        </div>

        <h1 className="text-2xl font-bold text-slate-800">
          Task Not Found
        </h1>

        <p className="text-slate-500 mt-2">
          The requested task does not exist.
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

      {/* Top */}
      <div className="mb-6">

        <Link
          to="/tasks"
          className="text-sm text-blue-600 hover:underline"
        >
          ← Back to Tasks
        </Link>

      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">

        {/* Header */}
        <div className="p-6 md:p-8 border-b border-slate-200">

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">

            <div>

              <p className="text-sm text-slate-500 mb-2">
                Task Details
              </p>

              <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
                {task.title}
              </h1>

              <div className="flex flex-wrap gap-2 mt-4">

                <StatusBadge status={task.status} />

                <PriorityBadge priority={task.priority} />

              </div>

            </div>

            <div className="flex gap-3">

              <Link
                to={`/tasks/${task.id}/edit`}
                className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Edit
              </Link>

              <button
                onClick={handleDelete}
                className="px-5 py-2.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition cursor-pointer"
              >
                Delete
              </button>

            </div>

          </div>

        </div>

        {/* Content */}
        <div className="p-6 md:p-8">

          <div className="mb-8">

            <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
              Description
            </h2>

            <p className="text-slate-700 mt-3 leading-7">
              {task.description}
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            <div className="bg-slate-50 rounded-lg p-5">

              <p className="text-sm text-slate-500">
                Due Date
              </p>

              <p className="font-semibold text-slate-800 mt-1">
                {task.dueDate}
              </p>

            </div>

            <div className="bg-slate-50 rounded-lg p-5">

              <p className="text-sm text-slate-500">
                Created
              </p>

              <p className="font-semibold text-slate-800 mt-1">
                {task.createdAt || "Not available"}
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default TaskDetails;