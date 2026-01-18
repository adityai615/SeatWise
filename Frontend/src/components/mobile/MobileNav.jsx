import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Users, CreditCard, Settings } from "lucide-react";

export default function MobileNav() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg border-t border-gray-200 md:hidden">
      <div className="flex justify-around py-3">

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex flex-col items-center text-xs ${
              isActive ? "text-primary" : "text-secondary"
            }`
          }
        >
          <Home size={20} />
          Home
        </NavLink>

        <NavLink
          to="/students"
          className={({ isActive }) =>
            `flex flex-col items-center text-xs ${
              isActive ? "text-primary" : "text-secondary"
            }`
          }
        >
          <Users size={20} />
          Students
        </NavLink>

        <NavLink
          to="/revenue"
          className={({ isActive }) =>
            `flex flex-col items-center text-xs ${
              isActive ? "text-primary" : "text-secondary"
            }`
          }
        >
          <CreditCard size={20} />
          Revenue
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex flex-col items-center text-xs ${
              isActive ? "text-primary" : "text-secondary"
            }`
          }
        >
          <Settings size={20} />
          Settings
        </NavLink>

      </div>
    </div>
  );
}
