import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { closeSidebar, openSearch } from '../../../store/slices/uiSlice';
import { useMediaQuery } from '../../../hooks/useMediaQuery';

export const useNavLink = (to, isButton, onButtonClick) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleClick = (e) => {
    if (isButton) {
      e.preventDefault();
      if (onButtonClick) {
        onButtonClick();
      } else if (to === '/search') {
        dispatch(openSearch());
      }
    } else {
      navigate(to);
      if (isMobile) {
        dispatch(closeSidebar());
      }
    }
  };

  return { handleClick };
};


// ------------------------------

import React from "react";
import { useNavLink } from "./NavLink.logic";

const NavLink = ({
  to,
  icon: Icon,
  label,
  count,
  shortcut,
  active = false,
  isButton = false,
  onButtonClick,
}) => {
  const { handleClick } = useNavLink(to, isButton, onButtonClick);

  const Component = isButton ? "button" : "a";

  return (
    <Component
      onClick={handleClick}
      className={`
        w-full min-h-[var(--size-nav-item)]
        border-0 bg-transparent rounded-lg
        flex items-center gap-[11px]
        px-[10px]
        text-left
        transition-colors duration-150
        ${
          active
            ? "bg-[var(--color-surface-active)] text-[var(--color-primary-500)] font-semibold"
            : "text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-soft)] hover:text-[var(--color-text-primary)]"
        }
      `}
    >
      {Icon && <Icon className="w-[18px] h-[18px]" />}
      <span className="flex-1">{label}</span>

      {count !== undefined && (
        <span className="ml-auto text-[var(--color-text-muted)] text-[12px]">
          {count}
        </span>
      )}

      {shortcut && (
        <kbd
          className="
          ml-auto text-[11px]
          border border-[var(--color-border-primary)]
          border-b-2
          rounded-[5px]
          px-[5px] py-[1px]
          text-[var(--color-text-muted)]
          bg-[#fafafa]
        "
        >
          {shortcut}
        </kbd>
      )}
    </Component>
  );
};

export default NavLink;