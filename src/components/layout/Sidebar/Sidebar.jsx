import React from 'react';
import useSidebarLogic from "./Sidebar.logic";
// import Brand from '../../navigation/Brand/Brand';
import NewNoteBtn from '../../buttons/NewNoteBtn';
// import NavLink from '../../navigation/NavLink/NavLink';
// import RecentNotesList from '../../navigation/RecentNotesList/RecentNotesList';
// import ProfileButton from '../../navigation/ProfileButton/ProfileButton';
import IconBtn from '../../buttons/IconBtn';
import { 
  Inbox, 
  Search, 
  Star, 
  Trash2, 
  Settings,
  X 
} from 'lucide-react';
import { NavLink } from 'react-router';

const Sidebar = () => {
  const { 
    sidebarOpen, 
    noteCount, 
    handleCloseSidebar, 
  } = useSidebarLogic();

  return (
    <>
      <aside
        className={`
          fixed top-0 left-0 bottom-0 z-[var(--z-index-sidebar)]
          w-[var(--sidebar-width)] bg-[var(--color-surface-primary)]
          border-r border-[var(--color-border-primary)]
          flex flex-col p-4 px-3
          transition-transform duration-200 ease-in-out
          ${sidebarOpen ? 'translate-x-0 shadow-[var(--shadow-sidebar)]' : '-translate-x-full'}
          md:translate-x-0 md:shadow-none
        `}
        aria-label="Primary navigation"
      >
        {/* Brand Section */}
        <div className="flex items-center h-10 px-[6px]">
          <IconBtn
            icon={X}
            onClick={handleCloseSidebar}
            label="Close navigation"
            className="md:hidden ml-auto"
          />
          {/* <Brand /> */}
        </div>

        {/* New Note Button */}
        <NewNoteBtn />

        {/* Main Navigation */}
        <nav className="grid gap-[3px]" aria-label="Workspace">
          <NavLink
            to="/dashboard"
            icon={Inbox}
            label="All notes"
            count={noteCount}
          />
          <NavLink
            to="/search"
            icon={Search}
            label="Search"
            shortcut="⌘K"
            isButton
          />
          <NavLink
            to="/favourites"
            icon={Star}
            label="Favourites"
          />
          <NavLink
            to="/trash"
            icon={Trash2}
            label="Trash"
          />
        </nav>

        {/* Divider */}
        <div className="h-px bg-[var(--color-border-primary)] my-[18px] mx-2" />

        {/* Recent Notes Section */}
        <div className="px-[10px] pb-2 text-[var(--color-text-muted)] text-[11px] font-semibold uppercase tracking-[0.08em]">
          Recent notes
        </div>
        {/* <RecentNotesList /> */}

        {/* Footer */}
        <div className="mt-auto grid gap-1">
          <NavLink
            to="/settings"
            icon={Settings}
            label="Settings"
          />
          {/* <ProfileButton /> */}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;