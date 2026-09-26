import { useState } from "react";
import { useNavigate } from "react-router";

const emptyFormData = {
  title: "",
  description: "",
  priority: "",
  status: "",
  dueDate: "",
};

function TaskForm({
  initialData,
  onSubmit,
  submitButtonText = "Save Task",
}) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(() => ({
    title: initialData?.title || emptyFormData.title,
    description:
      initialData?.description || emptyFormData.description,
    priority:
      initialData?.priority || emptyFormData.priority,
    status:
      initialData?.status || emptyFormData.status,
    dueDate:
      initialData?.dueDate || emptyFormData.dueDate,
  }));

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title =
        "Task title is required";
    }

    if (!formData.description.trim()) {
      newErrors.description =
        "Description is required";
    }

    if (!formData.priority) {
      newErrors.priority =
        "Priority is required";
    }

    if (!formData.status) {
      newErrors.status =
        "Status is required";
    }

    if (!formData.dueDate) {
      newErrors.dueDate =
        "Due date is required";
    }

    setErrors(newErrors);

    return (
      Object.keys(newErrors).length === 0
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 md:p-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Task Title */}
        <div className="md:col-span-2">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Task Title *
          </label>

          <input
            id="title"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter task title"
            className={`w-full px-4 py-3 border rounded-lg outline-none transition ${
              errors.title
                ? "border-red-500"
                : "border-slate-300 focus:border-blue-500"
            }`}
          />

          {errors.title && (
            <p className="text-red-500 text-sm mt-1">
              {errors.title}
            </p>
          )}
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Description *
          </label>

          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe the task..."
            rows="5"
            className={`w-full px-4 py-3 border rounded-lg outline-none resize-none transition ${
              errors.description
                ? "border-red-500"
                : "border-slate-300 focus:border-blue-500"
            }`}
          />

          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description}
            </p>
          )}
        </div>

        {/* Priority */}
        <div>
          <label
            htmlFor="priority"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Priority *
          </label>

          <select
            id="priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg outline-none bg-white ${
              errors.priority
                ? "border-red-500"
                : "border-slate-300 focus:border-blue-500"
            }`}
          >
            <option value="">
              Select priority
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

          {errors.priority && (
            <p className="text-red-500 text-sm mt-1">
              {errors.priority}
            </p>
          )}
        </div>

        {/* Status */}
        <div>
          <label
            htmlFor="status"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Status *
          </label>

          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg outline-none bg-white ${
              errors.status
                ? "border-red-500"
                : "border-slate-300 focus:border-blue-500"
            }`}
          >
            <option value="">
              Select status
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

          {errors.status && (
            <p className="text-red-500 text-sm mt-1">
              {errors.status}
            </p>
          )}
        </div>

        {/* Due Date */}
        <div className="md:col-span-2">
          <label
            htmlFor="dueDate"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Due Date *
          </label>

          <input
            id="dueDate"
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            className={`w-full md:w-1/2 px-4 py-3 border rounded-lg outline-none ${
              errors.dueDate
                ? "border-red-500"
                : "border-slate-300 focus:border-blue-500"
            }`}
          />

          {errors.dueDate && (
            <p className="text-red-500 text-sm mt-1">
              {errors.dueDate}
            </p>
          )}
        </div>

      </div>

      {/* Buttons */}
      <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 mt-8">

        <button
          type="button"
          onClick={() => navigate(-1)}
          className="px-6 py-3 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 transition cursor-pointer"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition cursor-pointer"
        >
          {submitButtonText}
        </button>

      </div>
    </form>
  );
}

export default TaskForm;