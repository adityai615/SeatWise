import React from "react";
import { Search, User } from "lucide-react";

export default function Topbar() {
  return (
    <div className="w-full bg-white shadow-sm py-4 px-6 flex justify-between items-center">

      {/* Search */}
      <div className="flex items-center bg-bgLight px-3 py-2 rounded-lg w-1/2 md:w-1/3">
        <Search size={18} className="text-secondary" />
        <input 
          type="text" 
          placeholder="Search..."
          className="ml-2 bg-transparent w-full outline-none text-sm"
        />
      </div>

      {/* Profile */}
      <div className="flex items-center gap-3 cursor-pointer">
        <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-bold">
          A
        </div>
        <p className="text-secondary font-medium hidden md:block">Admin</p>
      </div>

    </div>
  );
}
