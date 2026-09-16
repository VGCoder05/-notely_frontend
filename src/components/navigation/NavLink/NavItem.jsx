import { NavLink } from "react-router";
import { useNavItem } from "./NavItem.logic";

const NavItem = ({
  to,
  icon: Icon,
  label,
  count,
  shortcut,
  isButton = false,
  onButtonClick,
}) => {
  const { handleClick } = useNavItem(to, isButton, onButtonClick);
  const Component = isButton ? "button" : NavLink;

  return (
    <Component
      to={to}
      onClick={handleClick}
      className={
        isButton
          ? `w-full min-h-[var(--size-nav-item)]
       border-0 rounded-lg
       flex items-center gap-[11px]
       px-[10px] text-left
       transition-colors duration-150
       text-[var(--color-text-secondary)]
       hover:bg-[var(--color-surface-soft)]
       hover:text-[var(--color-text-primary)]`

          : ({ isActive }) => `
       w-full min-h-[var(--size-nav-item)]
       border-0 rounded-lg
       flex items-center gap-[11px]
       px-[10px] text-left
       transition-colors duration-150
       ${isActive
              ? "bg-[var(--color-surface-active)] text-[var(--color-primary-500)] font-semibold"
              : "text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-soft)] hover:text-[var(--color-text-primary)]"
            }`
      }
    >
      {/* To display the Icon  */}
      {Icon && (
        <>
          <Icon className="w-[18px] h-[18px]" />
          <span className="flex-1">{label}</span>
        </>
      )}

      {/* Especially for Displaying all notes */}
      {count !== undefined && (
        <span className="ml-auto text-[var(--color-text-muted)] text-[12px]">
          {count}
        </span>
      )}

      {/* To show shortcut for respective btn or navlink */}
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

export default NavItem;
