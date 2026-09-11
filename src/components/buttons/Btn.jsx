import React from "react";

const Button = ({
  children,
  onClick,
  variant = "default", // 'default' | 'primary' | 'danger' | 'ghost'
  size = "md", // 'sm' | 'md' | 'lg'
  disabled = false,
  loading = false,
  icon: Icon,
  iconPosition = "left", // 'left' | 'right'
  type = "button",
  className = "",
  ...props
}) => {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    border rounded-[9px]
    font-semibold
    transition-all duration-[0.16s]
    disabled:opacity-50 disabled:cursor-not-allowed
    focus-visible:outline focus-visible:outline-[3px] 
    focus-visible:outline-[var(--shadow-focus-outline)] 
    focus-visible:outline-offset-2
  `;

  const sizeStyles = {
    sm: "min-h-[32px] px-3 text-[12px]",
    md: "min-h-[var(--size-btn-height)] px-[14px] text-[14px]",
    lg: "min-h-[48px] px-5 text-[15px]",
  };

  const variantStyles = {
    default: `
      bg-[var(--color-surface-primary)] 
      border-[var(--color-border-primary)]
      text-[var(--color-text-primary)]
      hover:border-[var(--color-border-hover)]
      hover:bg-[#fdfdfd]
      hover:-translate-y-[1px]
      active:translate-y-0
    `,
    primary: `
      bg-[var(--color-primary-500)]
      border-[var(--color-primary-500)]
      text-white
      hover:bg-[var(--color-primary-600)]
      hover:-translate-y-[1px]
      active:translate-y-0
    `,
    danger: `
      bg-[var(--color-surface-primary)]
      border-[var(--color-border-primary)]
      text-[var(--color-error-500)]
      hover:border-[var(--color-error-600)]
      hover:bg-[var(--color-error-50)]
    `,
    ghost: `
      bg-transparent
      border-transparent
      text-[var(--color-text-primary)]
      hover:bg-[var(--color-surface-soft)]
    `,
  };

  const loadingStyles = loading ? "pointer-events-none opacity-75" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        ${baseStyles}
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${loadingStyles}
        ${className}
      `}
      {...props}
    >
      {loading && (
        <span
          className="
          w-[var(--size-spinner)] h-[var(--size-spinner)]
          border-2 border-current border-r-transparent
          rounded-full
          animate-spin
        "
        />
      )}

      {/* ???? */}
      {!loading && Icon && iconPosition === "left" && (
        <Icon className="w-[18px] h-[18px]" />
      )}

      {children}

      {/* ???? */}
      {!loading && Icon && iconPosition === "right" && (
        <Icon className="w-[18px] h-[18px]" />
      )}
    </button>
  );
};

export default Button;
