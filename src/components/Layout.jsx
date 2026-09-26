import { useState } from "react";
import { Outlet } from "react-router";

import Sidebar from "./Sidebar";
import Header from "./Header";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] =
    useState(false);

  return (
    <div className="min-h-screen bg-slate-100">

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="md:ml-64">

        <Header
          onMenuClick={() =>
            setIsSidebarOpen(true)
          }
        />

        <main className="p-4 md:p-8">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default Layout;