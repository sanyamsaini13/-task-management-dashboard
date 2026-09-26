function Header({ onMenuClick }) {
  return (
    <header className="bg-white border-b border-slate-200 h-20 px-4 md:px-8 flex items-center justify-between sticky top-0 z-30">

      <div className="flex items-center gap-3">

        {/* Mobile Menu Button */}
        <button
          onClick={onMenuClick}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 cursor-pointer"
          aria-label="Open menu"
        >
          <span className="text-xl">
            ☰
          </span>
        </button>

        <div>
          <h2 className="text-base sm:text-lg font-semibold text-slate-800">
            Task Management
          </h2>

          <p className="hidden sm:block text-sm text-slate-500">
            Manage your work efficiently
          </p>
        </div>

      </div>

      {/* Profile */}
      <div className="flex items-center gap-3">

        <div className="hidden sm:block text-right">

          <p className="text-sm font-semibold text-slate-800">
            Sanyam Saini
          </p>

          <p className="text-xs text-slate-500">
            React Developer
          </p>

        </div>

        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
          SS
        </div>

      </div>

    </header>
  );
}

export default Header;