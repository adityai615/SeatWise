/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

export default function AddStudent() {
  const [status, setStatus] = useState("Active");

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="pb-24"
    >
      {/* Heading */}
      <h1 className="text-xl font-semibold mb-6">Add New Student</h1>

      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">

        {/* Full Name */}
        <Input label="Full Name" placeholder="Enter full name" />

        {/* Mobile Number */}
        <Input label="Mobile Number" type="number" placeholder="Enter mobile number" />

        {/* Email */}
        <Input label="Email" type="email" placeholder="Enter email" />

        {/* Seat Number */}
        <Input label="Seat Number" type="number" placeholder="Assign seat number" />

        {/* Joining Date */}
        <div className="mb-4">
          <label className="block text-textDark mb-1 font-medium text-sm">
            Joining Date
          </label>
          <input
            type="date"
            className="w-full p-3 bg-[#F4F6F8] border border-[#D5D9DF] rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-primary/40 transition text-sm"
          />
        </div>

        {/* Fees */}
        <Input label="Fees Amount (₹)" type="number" placeholder="Enter fee amount" />

        {/* Status */}
        <div className="mb-6">
          <label className="block text-textDark mb-2 font-medium text-sm">
            Status
          </label>

          <div className="flex gap-3">
            <button
              onClick={() => setStatus("Active")}
              className={`px-4 py-2 rounded-lg text-sm font-medium border transition ${
                status === "Active"
                  ? "bg-success text-white border-success"
                  : "border-gray-300"
              }`}
            >
              Active
            </button>

            <button
              onClick={() => setStatus("Inactive")}
              className={`px-4 py-2 rounded-lg text-sm font-medium border transition ${
                status === "Inactive"
                  ? "bg-danger text-white border-danger"
                  : "border-gray-300"
              }`}
            >
              Inactive
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <Button>Add Student</Button>
      </div>
    </motion.div>
  );
}
