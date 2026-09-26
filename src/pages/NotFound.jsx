import { Link } from "react-router";

function NotFound() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white border border-slate-200 rounded-xl shadow-sm p-8 text-center">

        <div className="text-6xl font-bold text-blue-600">
          404
        </div>

        <h1 className="text-2xl font-bold text-slate-800 mt-4">
          Page Not Found
        </h1>

        <p className="text-slate-500 mt-2">
          The page you are looking for does not exist.
        </p>

        <Link
          to="/dashboard"
          className="inline-block mt-6 px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Go to Dashboard
        </Link>

      </div>
    </div>
  );
}

export default NotFound;