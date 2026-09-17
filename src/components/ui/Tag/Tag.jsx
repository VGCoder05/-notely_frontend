import React from 'react';
import { X } from 'lucide-react';

const Tag = ({ 
  text, 
  removable = false, 
  onRemove,
  variant = 'default', // 'default' | 'primary' | 'success' | 'warning'
  className = '' 
}) => {
  const variantStyles = {
    default: 'bg-[var(--color-primary-100)] text-[var(--color-primary-700)]',
    primary: 'bg-[var(--color-primary-500)] text-white',
    success: 'bg-[var(--color-success-50)] text-[var(--color-success-600)]',
    warning: 'bg-[var(--color-warning-50)] text-[var(--color-warning-600)]',
  };

  return (
    <span className={`
      inline-flex items-center gap-1
      rounded-full
      px-2 py-[3px]
      text-[11px]
      font-semibold
      ${variantStyles[variant]}
      ${className}
    `}>
      {text}
      
      {removable && (
        <button
          type="button"
          onClick={onRemove}
          className="
            hover:opacity-70
            transition-opacity
            -mr-1
          "
          aria-label={`Remove ${text}`}
        >
          <X className="w-[12px] h-[12px]" />
        </button>
      )}
    </span>
  );
};

export default Tag;