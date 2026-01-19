/* eslint-disable no-unused-vars */
import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Topbar from "../components/topbar/Topbar";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import MobileNav from "../components/mobile/MobileNav";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-bgLight flex">

      {/* SIDEBAR - Hidden on mobile */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col w-full">

        {/* TOPBAR */}
        <div className="hidden md:block">
          <Topbar />
        </div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="px-3 sm:px-6 py-4 w-full"
        >
          <Outlet />
        </motion.div>

        {/* MOBILE NAVIGATION */}
        <div className="md:hidden">
          <MobileNav />
        </div>

      </div>
    </div>
  );
}
