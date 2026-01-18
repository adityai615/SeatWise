/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Armchair } from "lucide-react"; // Seat Icon

export default function Seat({ seat, onToggle }) {
  const isOccupied = seat.status === "occupied";

  // Animation Config
  const animateConfig = {
    scale: isOccupied ? 1.2 : 1,
    backgroundColor: isOccupied ? "#0052CC" : "#36B37E",
    boxShadow: isOccupied
      ? "0 0 18px rgba(0, 82, 204, 0.5)"
      : "0 0 0px rgba(0,0,0,0)",
  };

  const iconAnimate = {
    rotate: isOccupied ? 360 : 0,
    scale: isOccupied ? 1.3 : 1,
    opacity: isOccupied ? 1 : 0.8,
  };

  return (
    <motion.div
      onClick={() => onToggle(seat.id)}
      initial={false}
      animate={animateConfig}
      whileTap={{ scale: 0.9 }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 20,
        duration: 0.25,
      }}
      className="
        w-16 h-16 rounded-xl relative flex flex-col items-center 
        justify-center text-white font-semibold select-none cursor-pointer
      "
    >
      {/* Seat Number */}
      <motion.div
        className="text-[10px] absolute top-1"
        animate={{ opacity: isOccupied ? 0.8 : 1 }}
      >
        {seat.number}
      </motion.div>

      {/* Icon Animation */}
      <motion.div
        animate={iconAnimate}
        transition={{
          type: "spring",
          duration: 0.5,
        }}
      >
        <Armchair size={22} strokeWidth={2.4} />
      </motion.div>

      {/* Wave Fill Animation (ONLY on allocate) */}
      {isOccupied && (
        <motion.div
          className="absolute bottom-0 left-0 w-full h-full bg-white/10 backdrop-blur-sm rounded-xl"
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          style={{ borderRadius: "12px", zIndex: -1 }}
        ></motion.div>
      )}
    </motion.div>
  );
}
