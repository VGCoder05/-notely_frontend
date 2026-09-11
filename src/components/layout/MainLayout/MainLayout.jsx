import React from "react";
import { useMainLayout } from "./MainLayout.logic";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import MobileOverlay from "../../ui/MobileOverlay";

const MainLayout = ({ children }) => {
  const { sidebarOpen } = useMainLayout();

  return (
    <div className={`min-h-screen ${sidebarOpen ? "sidebar-open" : ""}`}>
      <Sidebar />
      <MobileOverlay />

      <main className="ml-0 md:ml-[var(--sidebar-width)] min-h-screen">
        <Topbar />
        <div className="max-w-[var(--max-width-view)] mx-auto px-[14px] py-6 md:px-8 md:py-[38px]">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
