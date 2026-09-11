import React from "react";

const IconButton = ({
  icon: Icon,
  onClick,
  label,
  size = "md", // 'sm' | 'md' | 'lg'
  variant = "default", // 'default' | 'primary' | 'ghost'
  disabled = false,
  className = "",
  ...props
}) => {
  const sizeStyles = {
    sm: "w-[32px] h-[32px]",
    md: "w-[var(--size-icon-btn)] h-[var(--size-icon-btn)]",
    lg: "w-[48px] h-[48px]",
  };

  const variantStyles = {
    default: `
      bg-transparent
      text-[var(--color-text-secondary)]
      hover:bg-[var(--color-surface-hover)]
      hover:text-[var(--color-text-primary)]
    `,
    primary: `
      bg-[var(--color-primary-500)]
      text-white
      hover:bg-[var(--color-primary-600)]
    `,
    ghost: `
      bg-transparent
      text-[var(--color-text-secondary)]
      hover:text-[var(--color-text-primary)]
    `,
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={`
        border-0
        rounded-[9px]
        grid place-items-center
        transition-all duration-150
        disabled:opacity-50 disabled:cursor-not-allowed
        focus-visible:outline focus-visible:outline-[3px]
        focus-visible:outline-[var(--shadow-focus-outline)]
        focus-visible:outline-offset-2
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${className}
      `}
      {...props}
    >
      {Icon && <Icon className="w-[18px] h-[18px]" />}
    </button>
  );
};

export default IconButton;
