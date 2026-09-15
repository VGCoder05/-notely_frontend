import React from "react";
import { Link } from "react-router";

const Brand = () => {
  return (
    <Link
      to="/dashboard"
      className="flex items-center gap-[9px] text-[18px]"
      aria-label="Notely home"
    >
      <span
        className="
        grid place-items-center 
        w-[var(--size-brand-icon)] h-[var(--size-brand-icon)]
        rounded-lg
        bg-[var(--color-primary-500)]
        text-white font-bold
      "
      >
        N
      </span>
      <strong className="font-bold">notely</strong>
    </Link>
  );
};

export default Brand;
