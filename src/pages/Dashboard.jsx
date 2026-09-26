import DashboardCard from "../components/DashboardCard";
import StatusBadge from "../components/StatusBadge";
import PriorityBadge from "../components/PriorityBadge";
import { useTasks } from "../context/taskContext";

function Dashboard() {
  const { tasks } = useTasks();

  // Calculate task statistics
  const totalTasks = tasks.length;

  const pendingTasks = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const inProgressTasks = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  // Calculate completion percentage
  const completionPercentage =
    totalTasks === 0
      ? 0
      : Math.round(
          (completedTasks / totalTasks) * 100
        );

  // Get the 4 most recently created tasks
  const recentTasks = [...tasks]
    .sort(
      (a, b) =>
        new Date(b.createdAt) -
        new Date(a.createdAt)
    )
    .slice(0, 4);

  return (
    <div>

      {/* Page Heading */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
          Dashboard
        </h1>

        <p className="text-slate-500 mt-1">
          Here's an overview of your tasks.
        </p>
      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

        <DashboardCard
          title="Total Tasks"
          value={totalTasks}
          subtitle="All assigned tasks"
          icon="📋"
        />

        <DashboardCard
          title="Pending Tasks"
          value={pendingTasks}
          subtitle="Waiting to be started"
          icon="⏳"
        />

        <DashboardCard
          title="In Progress"
          value={inProgressTasks}
          subtitle="Currently being worked on"
          icon="⚡"
        />

        <DashboardCard
          title="Completed"
          value={completedTasks}
          subtitle="Successfully finished"
          icon="✓"
        />

      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

        {/* Recent Tasks */}
        <div className="xl:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm">

          {/* Recent Tasks Header */}
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-800">
              Recent Tasks
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Your recently created tasks
            </p>
          </div>

          {/* Recent Tasks List */}
          <div className="divide-y divide-slate-100">

            {recentTasks.length > 0 ? (
              recentTasks.map((task) => (

                <div
                  key={task.id}
                  className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >

                  {/* Task Information */}
                  <div>
                    <h3 className="font-medium text-slate-800">
                      {task.title}
                    </h3>

                    <p className="text-sm text-slate-500 mt-1">
                      Due: {task.dueDate}
                    </p>
                  </div>

                  {/* Status & Priority */}
                  <div className="flex flex-wrap gap-2">

                    <StatusBadge
                      status={task.status}
                    />

                    <PriorityBadge
                      priority={task.priority}
                    />

                  </div>

                </div>

              ))
            ) : (

              /* Empty State */
              <div className="p-10 text-center">

                <div className="text-4xl mb-3">
                  📋
                </div>

                <p className="text-slate-500">
                  No tasks available.
                </p>

              </div>

            )}

          </div>

        </div>

        {/* Task Progress */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">

          <h2 className="text-lg font-semibold text-slate-800">
            Task Progress
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Overall completion
          </p>

          {/* Completion Percentage */}
          <div className="mt-8 text-center">

            <div className="text-4xl font-bold text-blue-600">
              {completionPercentage}%
            </div>

            <p className="text-sm text-slate-500 mt-2">
              Tasks completed
            </p>

          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-200 rounded-full h-3 mt-6 overflow-hidden">

            <div
              className="bg-blue-600 h-3 rounded-full transition-all duration-500"
              style={{
                width: `${completionPercentage}%`,
              }}
            />

          </div>

          {/* Task Statistics */}
          <div className="mt-8 space-y-4">

            {/* Pending */}
            <div className="flex justify-between text-sm">

              <span className="text-slate-500">
                Pending
              </span>

              <span className="font-semibold text-slate-800">
                {pendingTasks}
              </span>

            </div>

            {/* In Progress */}
            <div className="flex justify-between text-sm">

              <span className="text-slate-500">
                In Progress
              </span>

              <span className="font-semibold text-slate-800">
                {inProgressTasks}
              </span>

            </div>

            {/* Completed */}
            <div className="flex justify-between text-sm">

              <span className="text-slate-500">
                Completed
              </span>

              <span className="font-semibold text-slate-800">
                {completedTasks}
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;