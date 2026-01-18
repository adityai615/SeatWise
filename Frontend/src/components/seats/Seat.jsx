/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Armchair } from "lucide-react";

export default function Seat({ seat, onToggle }) {
  const isOccupied = seat.status === "occupied";

  // Main animation
  const animateConfig = {
    scale: isOccupied ? 1.15 : 1,
    backgroundColor: isOccupied ? "#0052CC" : "#36B37E",
    boxShadow: isOccupied
      ? "0 0 20px rgba(0, 82, 204, 0.45)"
      : "0 0 0px rgba(0,0,0,0)",
  };

  // Icon animation
  const iconAnimate = {
    rotate: isOccupied ? 360 : 0,
    scale: isOccupied ? 1.25 : 1,
    opacity: 1,
  };

  return (
    <motion.div
      onClick={onToggle}
      initial={false}
      animate={animateConfig}
      whileTap={{ scale: 0.9 }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 18,
        duration: 0.25,
      }}
      className="w-16 h-16 rounded-xl relative flex flex-col items-center justify-center text-white select-none cursor-pointer overflow-hidden"
    >
      {/* Seat Number */}
      <motion.div
        className="text-[11px] absolute top-1 font-semibold"
        animate={{ opacity: isOccupied ? 0.85 : 1 }}
      >
        {seat.number}
      </motion.div>

      {/* ARMCHAIR ICON */}
      <motion.div
        animate={iconAnimate}
        transition={{ type: "spring", duration: 0.5 }}
      >
        <Armchair size={22} strokeWidth={2.4} />
      </motion.div>

      {/* Wave Fill (Allocate Animation) */}
      {isOccupied && (
        <motion.div
          className="absolute bottom-0 left-0 w-full bg-white/10 rounded-xl"
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          style={{ zIndex: -1 }}
        ></motion.div>
      )}

      {/* Glow Pulse Ring (ONLY when occupied) */}
      {isOccupied && (
        <motion.div
          className="absolute inset-0 rounded-xl"
          initial={{ scale: 0.6, opacity: 0.5 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{
            duration: 0.8,
            repeat: 1,
            ease: "easeOut",
          }}
          style={{
            border: "2px solid rgba(0, 82, 204, 0.7)",
            zIndex: -2,
          }}
        ></motion.div>
      )}
    </motion.div>
  );
}
