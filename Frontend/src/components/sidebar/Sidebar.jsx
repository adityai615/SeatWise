/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  CreditCard,
  Bell,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  const menu = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/dashboard",
    },
    { name: "Students", icon: <Users size={20} />, path: "/students" },
    { name: "Revenue", icon: <CreditCard size={20} />, path: "/revenue" },
    { name: "Notifications", icon: <Bell size={20} />, path: "/notifications" },
    { name: "Settings", icon: <Settings size={20} />, path: "/settings" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 
      shadow-sm min-h-screen px-4 py-6"
    >
      <div className="flex items-center mb-0 px-0">
        <img
          src="/logo.png"
          alt="SeatWise Logo"
          className="w-48 h-48 object-contain"
          style={{ imageRendering: "crisp-edges" }}
        />
      </div>

      {menu.map((item, i) => (
        <NavLink
          key={i}
          to={item.path}
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg cursor-pointer mb-1
            transition font-medium
            ${isActive ? "bg-[#0052CC] text-white" : "text-secondary hover:bg-bgLight"}`
          }
        >
          {item.icon}
          {item.name}
        </NavLink>
      ))}
    </motion.div>
  );
}
