/* eslint-disable no-unused-vars */
import React from "react";
import { Search, UserPlus } from "lucide-react";
import { motion } from "framer-motion";

export default function StudentsPage() {
  const students = [
    { id: 1, name: "Rohit Singh", seat: 12, status: "Active" },
    { id: 2, name: "Aditya Jain", seat: 7, status: "Active" },
    { id: 3, name: "Megha", seat: 3, status: "Inactive" },
    { id: 4, name: "Sahil Verma", seat: 22, status: "Active" },
  ];

  return (
    <motion.div className="pb-24">
      {/* Page Heading */}
      <h1 className="text-xl font-semibold mb-5">Students</h1>

      {/* Search + Add Student */}
      <motion.div className="flex items-center gap-3 mb-5">
        <motion.div className="flex flex-1 items-center bg-bgLight px-3 py-2 rounded-lg">
          <Search size={18} className="text-secondary" />
          <input
            type="text"
            placeholder="Search students..."
            className="ml-2 bg-transparent outline-none text-sm w-full"
          />
        </motion.div>

        <button
          onClick={() => (window.location.href = "/add-student")}
          className="bg-[#0747A6] cursor-pointer text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium hover:bg-[#0747A6] transition"
        >
          <UserPlus size={18} />
          <span className="hidden sm:block">Add</span>
        </button>
      </motion.div>

      {/* Students List - Mobile Card View */}
      <motion.div className="grid grid-cols-1 gap-4 md:hidden">
        {students.map((st, i) => (
          <motion.div key={i} className="relative w-full">
            {/* BACKGROUND BUTTONS (Always hidden behind card) */}
            <motion.div className="absolute inset-0 flex items-center justify-between px-3 z-0">
              {/* EDIT BUTTON (LEFT) */}
              <motion.div className="w-20 h-full flex items-center justify-center bg-[#172B4D] rounded-l-xl">
                <button className="text-white font-semibold text-sm">
                  Edit
                </button>
              </motion.div>
              {/* DELETE BUTTON (RIGHT) */}
              <motion.div className="w-20 h-full bg-[#FF5630] flex items-center justify-center bg-danger rounded-r-xl">
                <button className="text-white  font-semibold text-sm">
                  Delete
                </button>
              </motion.div>
            </motion.div>

            {/* SWIPE CARD */}
            <motion.div
              drag="x"
              dragConstraints={{ left: -80, right: 80 }}
              dragElastic={0.15}
              onDragEnd={(e, info) => {
                // SWIPE LEFT → DELETE
                if (info.offset.x < -60) {
                  console.log("Delete:", st.id);
                }

                // SWIPE RIGHT → EDIT
                if (info.offset.x > 60) {
                  window.location.href = `/edit-student/${st.id}`;
                }
              }}
              onClick={() => (window.location.href = `/student/${st.id}`)}
              className="
          bg-white p-4 rounded-xl shadow-sm border border-gray-200 
          cursor-pointer relative z-10 
        "
              style={{
                x: 0,
                touchAction: "pan-y", // prevents jitter
              }}
            >
              {/* Card Content */}
              <motion.div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold">{st.name}</h2>
                <span
                  className={`px-2 py-1 rounded-md text-xs font-medium ${
                    st.status === "Active"
                      ? "bg-success/20 text-success"
                      : "bg-danger/20 text-danger"
                  }`}
                >
                  {st.status}
                </span>
              </motion.div>

              <p className="text-sm text-secondary">Seat No: {st.seat}</p>
              <p className="text-sm text-secondary mt-1">Student ID: {st.id}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Desktop Table View */}
      <motion.div className="hidden md:block overflow-x-auto bg-white shadow-md rounded-xl border border-gray-200 mt-4">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-bgLight text-secondary text-sm">
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Seat No</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Student ID</th>
            </tr>
          </thead>

          <tbody>
            {students.map((st, i) => (
              <tr
                key={i}
                onClick={() => (window.location.href = `/student/${st.id}`)}
                className="border-t text-sm hover:bg-bgLighter cursor-pointer"
              >
                <td className="py-3 px-4 font-medium">{st.name}</td>
                <td className="py-3 px-4">{st.seat}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded-md text-xs font-medium ${
                      st.status === "Active"
                        ? "bg-success/20 text-success"
                        : "bg-danger/20 text-danger"
                    }`}
                  >
                    {st.status}
                  </span>
                </td>
                <td className="py-3 px-4">{st.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </motion.div>
  );
}
