/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Armchair } from "lucide-react";

export default function Seat({ seat, onToggle }) {
  const isOccupied = seat.status === "occupied";

  // SUPER SUBTLE animation
  const animateConfig = {
    scale: isOccupied ? 1 : 1,       // subtle (was 1.15 → 1.07 → now 1.03)
    backgroundColor: isOccupied ? "#0052CC" : "#36B37E",
    boxShadow: isOccupied
      ? "0 0 10px rgba(0, 82, 204, 0.25)"
      : "0 0 0px rgba(0,0,0,0)",
  };

  const iconAnimate = {
    rotate: isOccupied ? 360 : 0,
    scale: isOccupied ? 1.08 : 1,        // subtle icon scale (clean)
    opacity: 1,
  };

  return (
    <motion.div
      onClick={onToggle}
      initial={false}
      animate={animateConfig}
      whileTap={{ scale: 0.95 }}         // subtle tap feedback
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.25,
      }}
      className="
        w-12 h-12 sm:w-16 sm:h-16
        rounded-xl relative flex flex-col items-center 
        justify-center text-white select-none cursor-pointer overflow-visible
      "
    >
      {/* Seat Number */}
      <motion.div
        className="text-[10px] absolute top-1 font-semibold"
        animate={{ opacity: isOccupied ? 0.85 : 1 }}
      >
        {seat.number}
      </motion.div>

      {/* Icon */}
      <motion.div
        animate={iconAnimate}
        transition={{ type: "spring", duration: 0.45 }}
      >
        <Armchair size={20} strokeWidth={2.4} />
      </motion.div>

      {/* Wave Fill */}
      {isOccupied && (
        <motion.div
          className="absolute bottom-0 left-0 w-full bg-white/10 rounded-xl"
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          style={{ zIndex: -1 }}
        ></motion.div>
      )}

      {/* Glow Pulse Ring */}
      {isOccupied && (
        <motion.div
          className="absolute inset-0 rounded-xl"
          initial={{ scale: 0.7, opacity: 0.4 }}
          animate={{ scale: 1.2, opacity: 0 }}     // SUBTLE glow
          transition={{
            duration: 0.6,
            repeat: 1,
            ease: "easeOut",
          }}
          style={{
            border: "2px solid rgba(0, 82, 204, 0.4)",
            zIndex: -2,
          }}
        ></motion.div>
      )}
    </motion.div>
  );
}
