import React from "react";
import useSidebar from "../../hooks/useSidebar";

const MobileOverlay = () => {
  const { sidebarOpen, closeSidebar } = useSidebar();

  if (!sidebarOpen) return null;

  return (
    <div
      onClick={closeSidebar}
      className="
        fixed inset-0
        bg-[var(--color-overlay-light)]
        z-[var(--z-index-mobile-overlay)]
        md:hidden
        animate-[fadeIn_0.2s_ease]
      "
      aria-hidden="true"
    />
  );
};

export default MobileOverlay;
