import React from "react";

export default function Button({
  children,
  onClick,
  className = "",
  type = "button"
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full bg-[#0747A6] cursor-pointer text-white py-3 rounded-lg font-semibold 
      shadow-md hover:bg-[#0747A6] transition text-base ${className}`}
    >
      {children}
    </button>
  );
}
