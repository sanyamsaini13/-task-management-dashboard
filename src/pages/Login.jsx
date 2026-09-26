import { useState } from "react";
import { Navigate, useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();

  const isLoggedIn =
    localStorage.getItem("isLoggedIn") === "true";

  const [formData, setFormData] = useState(() => {
    const rememberedEmail =
      localStorage.getItem("rememberedEmail");

    return {
      email: rememberedEmail || "",
      password: "",
      rememberMe: Boolean(rememberedEmail),
    };
  });

  const [errors, setErrors] = useState({});

  // Already logged-in users should not see login page
  if (isLoggedIn) {
    return (
      <Navigate
        to="/dashboard"
        replace
      />
    );
  }

  const handleChange = (e) => {
    const {
      name,
      value,
      type,
      checked,
    } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email =
        "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email
      )
    ) {
      newErrors.email =
        "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password =
        "Password is required";
    } else if (
      formData.password.length < 6
    ) {
      newErrors.password =
        "Password must be at least 6 characters";
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

    localStorage.setItem(
      "isLoggedIn",
      "true"
    );

    if (formData.rememberMe) {
      localStorage.setItem(
        "rememberedEmail",
        formData.email
      );
    } else {
      localStorage.removeItem(
        "rememberedEmail"
      );
    }

    navigate("/dashboard", {
      replace: true,
    });
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8">

        <div className="text-center mb-8">

          <div className="w-14 h-14 bg-blue-600 text-white rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
            T
          </div>

          <h1 className="text-2xl font-bold text-slate-800">
            Welcome Back
          </h1>

          <p className="text-slate-500 mt-2">
            Sign in to manage your tasks
          </p>

        </div>

        <form onSubmit={handleSubmit}>

          {/* Email */}
          <div className="mb-5">

            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700 mb-2"
            >
              Email Address
            </label>

            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              autoComplete="email"
              className={`w-full px-4 py-3 border rounded-lg outline-none transition ${
                errors.email
                  ? "border-red-500 focus:border-red-500"
                  : "border-slate-300 focus:border-blue-500"
              }`}
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email}
              </p>
            )}

          </div>

          {/* Password */}
          <div className="mb-4">

            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-700 mb-2"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              autoComplete="current-password"
              className={`w-full px-4 py-3 border rounded-lg outline-none transition ${
                errors.password
                  ? "border-red-500 focus:border-red-500"
                  : "border-slate-300 focus:border-blue-500"
              }`}
            />

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password}
              </p>
            )}

          </div>

          {/* Remember Me + Forgot Password */}
          <div className="flex items-center justify-between gap-3 mb-6">

            <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">

              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="w-4 h-4 cursor-pointer"
              />

              Remember Me

            </label>

            <button
              type="button"
              onClick={() =>
                alert(
                  "Password reset is not connected to a backend in this demo."
                )
              }
              className="text-sm text-blue-600 hover:underline cursor-pointer"
            >
              Forgot Password?
            </button>

          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition cursor-pointer"
          >
            Login
          </button>

        </form>

        <p className="text-center text-xs text-slate-400 mt-6">
          Task Management Dashboard
        </p>

      </div>
    </div>
  );
}

export default Login;