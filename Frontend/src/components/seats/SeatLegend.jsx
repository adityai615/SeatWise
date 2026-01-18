import React from "react";

export default function SeatLegend() {
  return (
    <div className="flex items-center gap-6 bg-white shadow-md p-4 rounded-xl border border-gray-200 mb-6">
      
      {/* Occupied */}
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-md bg-[#0747A6]"></div>
        <span className="text-sm text-[#172B4D]">Occupied</span>
      </div>

      {/* Available */}
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-md bg-[#36B37E]"></div>
        <span className="text-sm text-[#172B4D]">Available</span>
      </div>

      {/* Gap / Empty */}
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-md bg-gray-300"></div>
        <span className="text-sm text-[#172B4D]">Gap / Empty</span>
      </div>

    </div>
  );
}
