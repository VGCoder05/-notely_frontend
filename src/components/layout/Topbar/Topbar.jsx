import React from "react";
import { useNavigate } from "react-router";
import { useTopbar } from "./Topbar.logic";
import IconBtn from "../../buttons/IconBtn";
import Avatar from "../../ui/Avatar";
// import Breadcrumb from "../../navigation/Breadcrumb";
import { Menu, Search } from "lucide-react";

const Topbar = () => {
  const navigate = useNavigate();
  const { breadcrumb, handleOpenSidebar, handleOpenSearch } = useTopbar();

  return (
    <header
      className="
      h-[var(--topbar-height)] 
      bg-[var(--color-backdrop-blur)] 
      backdrop-blur-[10px]
      border-b border-[var(--color-border-primary)]
      flex items-center 
      px-[14px] md:px-6
      sticky top-0 z-[var(--z-index-topbar)]
    "
    >
      {/* Mobile Menu Button */}
      <IconBtn
        icon={Menu}
        onClick={handleOpenSidebar}
        label="Open navigation"
        className="md:hidden z-[99]"
      />

      {/* Breadcrumb */}
      {/* <Breadcrumb text={breadcrumb} className="text-[13px] md:text-sm" /> */}

      {/* Right Actions */}
      <div className="ml-auto flex items-center gap-2">
        <IconBtn
          icon={Search}
          onClick={handleOpenSearch}
          label="Search notes"
        />
        <Avatar
          initials="VG"
          onClick={() => navigate("/settings")}
          className="ml-[2px] cursor-pointer"
          ariaLabel="Open profile"
        />
      </div>
    </header>
  );
};

export default Topbar;
