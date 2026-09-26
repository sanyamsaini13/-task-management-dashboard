import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router";

import { useTasks } from "../context/taskContext";
import StatusBadge from "../components/StatusBadge";
import PriorityBadge from "../components/PriorityBadge";

function Tasks() {
  const { tasks, deleteTask } = useTasks();

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesSearch = task.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" ||
        task.status === statusFilter;

      const matchesPriority =
        priorityFilter === "All" ||
        task.priority === priorityFilter;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesPriority
      );
    });
  }, [
    tasks,
    search,
    statusFilter,
    priorityFilter,
  ]);

  const handleDelete = (id, title) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${title}"?`
    );

    if (confirmed) {
      deleteTask(id);
    }
  };

  return (
    <div>

      {/* Heading */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">

        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
            All Tasks
          </h1>

          <p className="text-slate-500 mt-1">
            View, search and manage your tasks.
          </p>
        </div>

        <Link
          to="/tasks/add"
          className="inline-flex justify-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition"
        >
          + Add Task
        </Link>

      </div>

      {/* Search & Filters */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 mb-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Search */}
          <div>
            <label
              htmlFor="search"
              className="block text-sm font-medium text-slate-700 mb-2"
            >
              Search
            </label>

            <input
              id="search"
              type="text"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search by task title..."
              className="w-full px-4 py-2.5 border border-slate-300 rounded-lg outline-none focus:border-blue-500"
            />
          </div>

          {/* Status */}
          <div>
            <label
              htmlFor="statusFilter"
              className="block text-sm font-medium text-slate-700 mb-2"
            >
              Status
            </label>

            <select
              id="statusFilter"
              value={statusFilter}
              onChange={(e) =>
                setStatusFilter(e.target.value)
              }
              className="w-full px-4 py-2.5 border border-slate-300 rounded-lg outline-none focus:border-blue-500 bg-white"
            >
              <option value="All">
                All Statuses
              </option>

              <option value="Pending">
                Pending
              </option>

              <option value="In Progress">
                In Progress
              </option>

              <option value="Completed">
                Completed
              </option>
            </select>
          </div>

          {/* Priority */}
          <div>
            <label
              htmlFor="priorityFilter"
              className="block text-sm font-medium text-slate-700 mb-2"
            >
              Priority
            </label>

            <select
              id="priorityFilter"
              value={priorityFilter}
              onChange={(e) =>
                setPriorityFilter(e.target.value)
              }
              className="w-full px-4 py-2.5 border border-slate-300 rounded-lg outline-none focus:border-blue-500 bg-white"
            >
              <option value="All">
                All Priorities
              </option>

              <option value="Low">
                Low
              </option>

              <option value="Medium">
                Medium
              </option>

              <option value="High">
                High
              </option>
            </select>
          </div>

        </div>

      </div>

      {/* Task Content */}
      {isLoading ? (

        /* Loading State */
        <div className="bg-white border border-slate-200 rounded-xl p-12 text-center shadow-sm">

          <div className="w-10 h-10 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin mx-auto" />

          <p className="text-slate-500 mt-4">
            Loading tasks...
          </p>

        </div>

      ) : filteredTasks.length === 0 ? (

        /* Empty State */
        <div className="bg-white border border-slate-200 rounded-xl p-12 text-center shadow-sm">

          <div className="text-5xl mb-4">
            📋
          </div>

          <h2 className="text-xl font-semibold text-slate-800">
            No tasks found
          </h2>

          <p className="text-slate-500 mt-2">
            Try changing your search or filters.
          </p>

        </div>

      ) : (

        /* Task Table */
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-slate-50 border-b border-slate-200">

                <tr className="text-left text-sm text-slate-600">

                  <th className="px-5 py-4 font-semibold">
                    Task
                  </th>

                  <th className="px-5 py-4 font-semibold">
                    Status
                  </th>

                  <th className="px-5 py-4 font-semibold">
                    Priority
                  </th>

                  <th className="px-5 py-4 font-semibold">
                    Due Date
                  </th>

                  <th className="px-5 py-4 font-semibold text-right">
                    Actions
                  </th>

                </tr>

              </thead>

              <tbody className="divide-y divide-slate-100">

                {filteredTasks.map((task) => (

                  <tr
                    key={task.id}
                    className="hover:bg-slate-50 transition"
                  >

                    {/* Task */}
                    <td className="px-5 py-5">

                      <Link
                        to={`/tasks/${task.id}`}
                        className="font-semibold text-slate-800 hover:text-blue-600"
                      >
                        {task.title}
                      </Link>

                      <p className="text-sm text-slate-500 mt-1 max-w-xs truncate">
                        {task.description}
                      </p>

                    </td>

                    {/* Status */}
                    <td className="px-5 py-5">
                      <StatusBadge
                        status={task.status}
                      />
                    </td>

                    {/* Priority */}
                    <td className="px-5 py-5">
                      <PriorityBadge
                        priority={task.priority}
                      />
                    </td>

                    {/* Date */}
                    <td className="px-5 py-5 text-sm text-slate-600 whitespace-nowrap">
                      {task.dueDate}
                    </td>

                    {/* Actions */}
                    <td className="px-5 py-5">

                      <div className="flex justify-end gap-2">

                        <Link
                          to={`/tasks/${task.id}`}
                          className="px-3 py-2 text-sm rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition"
                        >
                          View
                        </Link>

                        <Link
                          to={`/tasks/${task.id}/edit`}
                          className="px-3 py-2 text-sm rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition"
                        >
                          Edit
                        </Link>

                        <button
                          onClick={() =>
                            handleDelete(
                              task.id,
                              task.title
                            )
                          }
                          className="px-3 py-2 text-sm rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition cursor-pointer"
                        >
                          Delete
                        </button>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      )}

      {/* Result Count */}
      {!isLoading && filteredTasks.length > 0 && (
        <p className="text-sm text-slate-500 mt-4">
          Showing {filteredTasks.length} of{" "}
          {tasks.length} tasks
        </p>
      )}

    </div>
  );
}

export default Tasks;