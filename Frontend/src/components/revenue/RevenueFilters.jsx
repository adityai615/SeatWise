/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Calendar, SlidersHorizontal, RefreshCcw } from "lucide-react";
import { motion } from "framer-motion";

export default function RevenueFilters({ onFilterChange }) {
  const [month, setMonth] = useState("2026-01");
  const [range, setRange] = useState({ from: "", to: "" });

  return (
    <motion.div className="mt-8 bg-white rounded-xl shadow-md border p-4 sm:p-6">
      <motion.div className="flex items-center gap-2 mb-4">
        <SlidersHorizontal size={18} className="text-[#172B4D]" />
        <h2 className="text-lg font-semibold text-[#172B4D]">Filters</h2>
      </motion.div>

      {/* FILTER GRID */}
      <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

        {/* Month Filter */}
        <motion.div className="flex flex-col">
          <label className="font-medium text-sm text-[#172B4D] mb-1">
            Select Month
          </label>

          <input
            type="month"
            value={month}
            onChange={(e) => {
              setMonth(e.target.value);
              onFilterChange({ month: e.target.value });
            }}
            className="border px-3 py-2 rounded-lg outline-none text-sm"
          />
        </motion.div>

        {/* From Date */}
        <motion.div className="flex flex-col">
          <label className="font-medium text-sm text-[#172B4D] mb-1">
            From Date
          </label>

          <input
            type="date"
            value={range.from}
            onChange={(e) => {
              const updated = { ...range, from: e.target.value };
              setRange(updated);
              onFilterChange(updated);
            }}
            className="border px-3 py-2 rounded-lg outline-none text-sm"
          />
        </motion.div>

        {/* To Date */}
        <motion.div className="flex flex-col">
          <label className="font-medium text-sm text-[#172B4D] mb-1">
            To Date
          </label>

          <input
            type="date"
            value={range.to}
            onChange={(e) => {
              const updated = { ...range, to: e.target.value };
              setRange(updated);
              onFilterChange(updated);
            }}
            className="border px-3 py-2 rounded-lg outline-none text-sm"
          />
        </motion.div>
      </motion.div>

      {/* Reset Button */}
      <motion.div className="flex justify-end mt-4">
        <button
          onClick={() => {
            setMonth("2026-01");
            setRange({ from: "", to: "" });
            onFilterChange({ month: "2026-01", from: "", to: "" });
          }}
          className="flex items-center gap-2 bg-[#172B4D] text-white px-4 py-2 rounded-lg cursor-pointer text-sm shadow-sm"
        >
          <RefreshCcw size={16} />
          Reset Filters
        </button>
      </motion.div>
    </motion.div>
  );
}
