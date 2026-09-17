import React from "react";
import { useSearchBox } from "./SearchBox.logic";
import { Search, X } from "lucide-react";

const SearchBox = ({
  data,
  placeholder = "Notes Title...",
  debounceMs = 300,
  className = "",
  searchTerm,
  handleChange,
  handleClear,
}) => {


  return (
    <div className={`relative flex-1 ${className}`}>
      <Search
        className="
        absolute left-[13px] top-1/2 -translate-y-1/2
        text-[var(--color-text-muted)]
        w-[18px] h-[18px]
        pointer-events-none
      "
      />

      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleChange}
        className="
          w-full
          border border-[var(--color-border-primary)]
          bg-[var(--color-surface-primary)]
          rounded-[9px]
          min-h-[var(--size-input-height)]
          pl-[40px] pr-[40px]
          text-[var(--color-text-primary)]
          transition-all duration-[0.15s]
          placeholder:text-[var(--color-text-muted)]
          focus:border-[var(--color-primary-500)]
          focus:shadow-[var(--shadow-focus-primary)]
          focus:outline-0
        "
      />

      {searchTerm && (
        <button
          type="button"
          onClick={handleClear}
          className="
            absolute right-[13px] top-1/2 -translate-y-1/2
            w-[20px] h-[20px]
            grid place-items-center
            text-[var(--color-text-muted)]
            hover:text-[var(--color-text-primary)]
            transition-colors
          "
          aria-label="Clear search"
        >
          <X className="w-[16px] h-[16px]" />
        </button>
      )}
    </div>
  );
};

export default SearchBox;
