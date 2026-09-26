import {
  NavLink,
  useNavigate,
} from "react-router";

function Sidebar({
  isOpen,
  onClose,
}) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");

    onClose();

    navigate("/login");
  };

  const linkClass = ({ isActive }) =>
    `block px-4 py-3 rounded-lg transition ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-slate-300 hover:bg-slate-800 hover:text-white"
    }`;

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 z-50
          h-screen w-64
          bg-slate-900 text-white
          flex flex-col p-5
          transition-transform duration-300
          md:translate-x-0
          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >

        {/* Logo */}
        <div className="flex items-center justify-between mb-10">

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">
              T
            </div>

            <div>
              <h2 className="font-bold text-lg">
                TaskFlow
              </h2>

              <p className="text-xs text-slate-400">
                Task Manager
              </p>
            </div>

          </div>

          {/* Mobile Close Button */}
          <button
            onClick={onClose}
            className="md:hidden text-slate-300 hover:text-white text-2xl cursor-pointer"
            aria-label="Close menu"
          >
            ×
          </button>

        </div>

        {/* Navigation */}
        <nav className="space-y-2 flex-1">

          <NavLink
            to="/dashboard"
            onClick={onClose}
            className={linkClass}
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/tasks"
            onClick={onClose}
            className={linkClass}
          >
            All Tasks
          </NavLink>

          <NavLink
            to="/tasks/add"
            onClick={onClose}
            className={linkClass}
          >
            + Add Task
          </NavLink>

        </nav>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="w-full text-left px-4 py-3 rounded-lg text-slate-300 hover:bg-red-500 hover:text-white transition cursor-pointer"
        >
          Logout
        </button>

      </aside>
    </>
  );
}

export default Sidebar;