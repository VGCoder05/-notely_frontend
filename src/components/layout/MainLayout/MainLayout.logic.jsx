import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useSidebar from "../../../hooks/useSidebar";

export const useMainLayout = () => {
  const { sidebarOpen,  closeSidebar } = useSidebar();
  const dispatch = useDispatch();

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Close sidebar on Escape
      if (e.key === "Escape" && sidebarOpen )  {
        closeSidebar();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [sidebarOpen,  closeSidebar]);

  // Prevent body scroll when sidebar is open on mobile
  useEffect(() => {
    if ( sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [ sidebarOpen]);

  return {
    sidebarOpen,
    
  };
};

// removed isMobile