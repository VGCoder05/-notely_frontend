import { React, useEffect } from "react";
import useSidebarLogic from "./Sidebar.logic";
import Brand from "../../navigation/Brand";
import NewNoteBtn from "../../buttons/NewNoteBtn";
import NavItem from "../../navigation/NavLink/NavItem";
import RecentNotesList from "../../navigation/RecentNotesList/RecentNotesList";
// import ProfileButton from '../../navigation/ProfileButton/ProfileButton';
import IconBtn from "../../buttons/IconBtn";
import { Inbox, Search, Star, Trash2, Settings, X } from "lucide-react";
// import { NavLink } from "react-router";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const {
    sidebarOpen,
    noteCount,
    openSidebar,
    closeSidebar,
    toggleSidebar,
    handleNavigation,
  } = useSidebarLogic();

  // const { sidebarOpen, noteCount } = useSelector((state) => ({
  //   sidebarOpen: state.ui.sidebarOpen,
  //   noteCount: state.notes.notes.length,
  // }));
  // console.log(sidebarOpen, noteCount);
  // console.log("Sidebar");

  // Keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e) => {
      // console.log(e);

      if (
        e.key === "/" &&
        e.ctrlKey &&
        !e.metaKey &&
        !e.altKey &&
        !e.shiftKey
        // !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)
      ) {
        toggleSidebar();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);

  return (
    <>
      <aside
        className={`
          fixed top-0 left-0 bottom-0 z-[var(--z-index-sidebar)]
          w-[var(--sidebar-width)] bg-[var(--color-surface-primary)]
          border-r border-[var(--color-border-primary)]
          flex flex-col p-4 px-3  h-full
          transition-transform duration-200 ease-in-out
          ${
            sidebarOpen
              ? "translate-x-0 shadow-[var(--shadow-sidebar)]"
              : "-translate-x-full transition-all duration-100"
          }
          md:translate-x-0 md:shadow-none
        `}
        aria-label="Primary navigation"
      >
        {/* Brand Section */}
        <div className="w-full flex justify-between h-10 px-[6px]">
          <Brand />
          <div className="flex flex-col md:hidden">
            <IconBtn
              icon={X}
              onClick={closeSidebar}
              label="Close navigation"
              className="ml-auto z-[99]"
            />

            <kbd
              className="
              ml-auto
              text-[11px]
              border border-accent-blue
              border-b-2
              rounded-[5px]
              px-[5px] py-[1px]
              text-accent-blue
              bg-gray-400
              self-end
            "
            >
              Ctrl + /
            </kbd>
          </div>
        </div>

        {/* New Note Button */}
        <NewNoteBtn />

        {/* Main Navigation */}
        <nav className="grid gap-[3px]" aria-label="Workspace">
          <NavItem
            to="/dashboard"
            icon={Inbox}
            label="All notes"
            count={noteCount}
          />
          <NavItem
            to="/search"
            icon={Search}
            label="Search"
            shortcut="⌘K"
            isButton
          />
          <NavItem to="/favourites" icon={Star} label="Favourites" />
          <NavItem to="/trash" icon={Trash2} label="Trash" />
        </nav>

        {/* Divider */}
        <hr className="mt-[4px] mb-[10px] p-[.5px] border-0 bg-gray-300" />
        {/* <div className="h-px bg-[var(--color-border-primary)] my-[10px] mx-2" /> */}

        {/* Recent Notes Section */}
        <div className="px-[10px] pb-2 flex-1 min-h-0 flex flex-col gap-0.5 text-[var(--color-text-muted)] text-[11px] font-semibold uppercase tracking-[0.08em]">
          Recent notes
          <RecentNotesList />
        </div>

        {/* Footer */}
        <div className="mt-auto grid gap-1">
          <NavItem to="/settings" icon={Settings} label="Settings" />
          {/* <ProfileButton /> */}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
