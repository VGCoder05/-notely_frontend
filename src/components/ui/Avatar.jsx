import React from "react";

const Avatar = ({
  initials,
  src,
  alt,
  size = "md", // 'sm' | 'md' | 'lg'
  onClick,
  className = "",
  ariaLabel,
}) => {
  const sizeStyles = {
    sm: "w-[var(--size-avatar-sm)] h-[var(--size-avatar-sm)] text-[11px]",
    md: "w-[var(--size-avatar-md)] h-[var(--size-avatar-md)] text-[13px]",
    lg: "w-[48px] h-[48px] text-[16px]",
  };

  const Component = onClick ? "button" : "div";

  return (
    <Component
      onClick={onClick}
      aria-label={ariaLabel}
      className={`
        rounded-full
        grid place-items-center
        bg-[var(--color-accent-purple)]
        text-[var(--color-primary-500)]
        font-bold
        ${sizeStyles[size]}
        ${onClick ? "cursor-pointer hover:opacity-80 transition-opacity" : ""}
        ${className}
      `}
    >
      {src ? (
        <img
          src={src}
          alt={alt || initials}
          className="w-full h-full rounded-full object-cover"
        />
      ) : (
        initials
      )}
    </Component>
  );
};

export default Avatar;
