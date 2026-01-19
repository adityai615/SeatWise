/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function SeatModal({
  isOpen,
  onClose,
  seat,
  onToggle,
  allStudents,
}) {
  const [selectedId, setSelectedId] = useState("");

  if (!isOpen || !seat) return null;

  const isOccupied = seat.status === "occupied";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/40 flex items-end sm:items-center justify-center z-50"
      onClick={onClose}
    >
      {/* Bottom Sheet Container */}
      <motion.div
        initial={{ y: 300 }}
        animate={{ y: 0 }}
        exit={{ y: 300 }}
        transition={{ type: "spring", stiffness: 200, damping: 22 }}
        onClick={(e) => e.stopPropagation()}
        className="
          bg-white 
          w-full 
          sm:w-105 
          rounded-t-2xl 
          sm:rounded-xl 
          p-5 
          shadow-xl 
          max-h-[80vh] 
          overflow-y-auto
        "
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-bold text-[#172B4D]">
            Seat {seat.number}
          </h2>

          <button onClick={onClose} className="cursor-pointer p-1">
            <X size={22} className="text-[#6B778C]" />
          </button>
        </div>

        {/* Status */}
        <p
          className={`text-sm font-medium mb-4 ${
            isOccupied ? "text-[#0052CC]" : "text-[#36B37E]"
          }`}
        >
          {isOccupied ? "Occupied" : "Available"}
        </p>

        {/* Occupied View */}
        {isOccupied && (
          <div className="mb-4 p-3 bg-[#F4F5F7] rounded-xl">
            <p className="text-xs text-[#6B778C]">Assigned To:</p>
            <p className="font-semibold mt-1 text-[#172B4D] text-base">
              {allStudents.find((s) => s.id === seat.studentId)?.name}
            </p>
          </div>
        )}

        {/* Free Seat → Dropdown */}
        {!isOccupied && (
          <div className="mb-4">
            <label className="text-xs text-[#172B4D] font-semibold">
              Select Student
            </label>

            <select
              value={selectedId}
              onChange={(e) => setSelectedId(Number(e.target.value))}
              className="
                w-full 
                mt-2 
                px-4 
                py-2.5 
                border 
                rounded-xl 
                bg-white 
                text-sm 
                outline-none
              "
            >
              <option value="">Choose student</option>

              {allStudents.map((st) => (
                <option key={st.id} value={st.id}>
                  {st.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Buttons */}
        {!isOccupied ? (
          <button
            onClick={() => {
              if (!selectedId)
                return alert("Please select a student to assign seat.");

              onToggle(seat.rowIndex, seat.seatIndex, selectedId);
              onClose();
            }}
            className="
              w-full 
              py-3 
              bg-[#36B37E] 
              text-white 
              font-semibold 
              rounded-xl
              cursor-pointer
              text-sm
            "
          >
            Assign Seat
          </button>
        ) : (
          <button
            onClick={() => {
              onToggle(seat.rowIndex, seat.seatIndex, null);
              onClose();
            }}
            className="
              w-full 
              py-3 
              bg-[#FF5630] 
              text-white 
              font-semibold 
              rounded-xl
              cursor-pointer
              text-sm
            "
          >
            Release Seat
          </button>
        )}
      </motion.div>
    </motion.div>
  );
}
