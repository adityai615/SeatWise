/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Bar } from "react-chartjs-2";

export default function RevenuePage() {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  const [selectedMonth, setSelectedMonth] = useState("January");

  const summary = {
    monthlyRevenue: 23800,
    fullTime: 18,
    halfTime: 9,
    emptySeats: 12,
  };

  const chartData = {
    labels: ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
    datasets: [
      {
        label: "Revenue",
        data: [18000, 21000, 19500, 23000, 22000, 23800],
        backgroundColor: "rgba(54, 179, 126, 0.90)",
        hoverBackgroundColor: "rgba(54, 179, 126, 1)",
        borderRadius: 6,
        maxBarThickness: 32,
      },
    ],
  };

  const dueFees = [
    { name: "Rohit Singh", amount: 400, dueOn: "05 Feb" },
    { name: "Megha", amount: 700, dueOn: "08 Feb" },
  ];

  return (
    <div className="pb-32 px-4 w-full max-w-full">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center mb-6"
      >
        <h1 className="text-xl sm:text-2xl font-semibold text-[#172B4D]">
          Revenue Dashboard
        </h1>

        {/* Month Filter */}
        <div className="relative cursor-pointer">
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="appearance-none px-4 py-2 bg-white border border-gray-200 rounded-lg 
                       text-sm font-medium shadow-sm focus:outline-none"
          >
            {months.map((m) => (
              <option key={m}>{m}</option>
            ))}
          </select>

          <ChevronDown
            size={18}
            className="absolute right-3 top-3 text-gray-500 pointer-events-none"
          />
        </div>
      </motion.div>

      {/* SUMMARY CARDS */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6"
      >
        {[
          { title: "Monthly Revenue", value: `₹${summary.monthlyRevenue}`, color: "#36B37E" },
          { title: "Full-Time Students", value: summary.fullTime, color: "#0052CC" },
          { title: "Half-Time Students", value: summary.halfTime, color: "#FFAB00" },
          { title: "Empty Seats", value: summary.emptySeats, color: "#FF5630" },
        ].map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-4 bg-white rounded-xl shadow-md border border-gray-100"
          >
            <p className="text-xs text-gray-500">{card.title}</p>
            <h2
              className="text-xl font-semibold mt-1"
              style={{ color: card.color }}
            >
              {card.value}
            </h2>
          </motion.div>
        ))}
      </motion.div>

      {/* REVENUE CHART */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-5 rounded-xl shadow-md border border-gray-100 mb-6"
      >
        <h2 className="font-semibold text-[#172B4D] mb-4 text-lg">
          6-Month Revenue Trend
        </h2>

        <div className="h-64">
          <Bar
            key={selectedMonth}
            data={chartData}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: { display: false },
              },
              scales: {
                y: { grid: { color: "#F0F0F0" } },
                x: { grid: { display: false } },
              },
            }}
          />
        </div>
      </motion.div>

      {/* DUE FEES */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-5 rounded-xl shadow-md border border-gray-100 mb-6"
      >
        <h2 className="font-semibold text-[#172B4D] mb-4 text-lg">
          Due Fees
        </h2>

        {dueFees.length === 0 ? (
          <p className="text-sm text-gray-500">No pending fees 🎉</p>
        ) : (
          <div className="space-y-4">
            {dueFees.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex justify-between items-center p-4 
                           bg-gray-50 rounded-lg border"
              >
                <div>
                  <p className="font-medium text-[#172B4D] text-sm">{d.name}</p>
                  <p className="text-xs text-gray-500">Due on: {d.dueOn}</p>
                </div>

                <span className="text-red-500 font-semibold text-sm">
                  ₹{d.amount}
                </span>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>

      {/* BILLING TABLE */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-5 rounded-xl shadow-md border border-gray-100"
      >
        <h2 className="font-semibold text-[#172B4D] mb-4 text-lg">
          Student Billing (This Month)
        </h2>

        <div className="w-full overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left text-gray-600">
                {["Name", "Seat", "Type", "Amount", "Start", "End", "Status"]
                  .map((head) => (
                    <th key={head} className="p-3">{head}</th>
                  ))}
              </tr>
            </thead>

            <tbody>
              {[
                {
                  name: "Aditya Jain",
                  seat: "A-3",
                  type: "Full-Time",
                  amount: 700,
                  start: "01 Jan",
                  end: "31 Jan",
                  status: "Paid",
                },
                {
                  name: "Rohit Singh",
                  seat: "B-1",
                  type: "Half-Time",
                  amount: 400,
                  start: "05 Jan",
                  end: "04 Feb",
                  status: "Pending",
                },
              ].map((st, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-3">{st.name}</td>
                  <td className="p-3">{st.seat}</td>
                  <td className="p-3">{st.type}</td>
                  <td className="p-3">₹{st.amount}</td>
                  <td className="p-3">{st.start}</td>
                  <td className="p-3">{st.end}</td>
                  <td
                    className={`p-3 font-medium ${
                      st.status === "Paid"
                        ? "text-[#36B37E]"
                        : "text-[#FF5630]"
                    }`}
                  >
                    {st.status}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
