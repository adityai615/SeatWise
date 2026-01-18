import React from "react";

export default function Input({ 
  label, 
  type = "text", 
  placeholder = "", 
  value, 
  onChange 
}) {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-textDark mb-1 font-medium text-sm">
          {label}
        </label>
      )}

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-3 bg-[#F4F6F8] border border-[#D5D9DF] rounded-lg 
        focus:outline-none focus:ring-2 focus:ring-primary/40 transition text-sm"
      />
    </div>
  );
}
