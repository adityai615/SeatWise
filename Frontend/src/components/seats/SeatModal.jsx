/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function SeatModal({ isOpen, onClose, seat, onToggle }) {
  if (!isOpen || !seat) return null;

  const isOccupied = seat.status === "occupied";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-end justify-center z-50"
      onClick={onClose}
    >
      {/* Bottom Sheet */}
      <motion.div
        initial={{ y: 300 }}
        animate={{ y: 0 }}
        exit={{ y: 300 }}
        transition={{ type: "spring", stiffness: 200, damping: 22 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full rounded-t-2xl p-6 shadow-xl"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Seat {seat.number}</h2>

          <button onClick={onClose}>
            <X size={24} className="text-secondary" />
          </button>
        </div>

        {/* Status */}
        <p
          className={`text-sm font-medium mb-4 ${
            isOccupied ? "text-primary" : "text-success"
          }`}
        >
          {isOccupied ? "Occupied" : "Available"}
        </p>

        {/* If occupied → show student info */}
        {isOccupied ? (
          <div className="mb-6">
            <p className="text-sm">Assigned To:</p>
            <p className="font-semibold mt-1">Aditya Jain</p>
            <p className="text-secondary text-sm">Seat No: {seat.number}</p>
          </div>
        ) : (
          <p className="text-sm text-secondary mb-6">
            This seat is currently free.
          </p>
        )}

        {/* Buttons */}
        {!isOccupied ? (
          <button
            onClick={() => {
              onToggle(seat.id); // correctly updates state in parent
              onClose();
            }}
            className="w-full py-3 cursor-pointer bg-[#36B37E] text-white font-semibold rounded-xl"
          >
            Assign Seat
          </button>
        ) : (
          <button
            onClick={() => {
              onToggle(seat.id); // correctly updates state in parent
              onClose();
            }}
            className="w-full py-3 cursor-pointer bg-[#FF5630] text-white font-semibold rounded-xl"
          >
            Release Seat
          </button>
        )}
      </motion.div>
    </motion.div>
  );
}
