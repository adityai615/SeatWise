/* eslint-disable no-unused-vars */
import React from "react";
import { Calendar, IndianRupee } from "lucide-react";
import { motion } from "framer-motion";

export default function RevenueTable() {
  // Temporary static logs (later backend se dynamic)
  const logs = [
    {
      date: "2026-01-15",
      occupied: 42,
      totalSeats: 60,
      dailyPrice: 23,
    },
    {
      date: "2026-01-14",
      occupied: 39,
      totalSeats: 60,
      dailyPrice: 23,
    },
    {
      date: "2026-01-13",
      occupied: 45,
      totalSeats: 60,
      dailyPrice: 23,
    },
  ];

  return (
    <div className="mt-10">
      <h2 className="text-lg font-semibold mb-4">Revenue Details</h2>

      {/* DESKTOP TABLE */}
      <div className="hidden md:block bg-white rounded-xl shadow-md border overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-[#F4F5F7] text-[#172B4D]">
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Occupied Seats</th>
              <th className="py-3 px-4">Daily Revenue</th>
              <th className="py-3 px-4">Expected Max Revenue</th>
              <th className="py-3 px-4">Loss (Empty Seats)</th>
            </tr>
          </thead>

          <tbody>
            {logs.map((l, i) => {
              const revenue = l.occupied * l.dailyPrice;
              const maxRevenue = l.totalSeats * l.dailyPrice;
              const loss = maxRevenue - revenue;

              return (
                <tr key={i} className="border-t hover:bg-[#FAFBFC]">
                  <td className="py-3 px-4">{l.date}</td>
                  <td className="py-3 px-4">{l.occupied} / {l.totalSeats}</td>
                  <td className="py-3 px-4">₹{revenue}</td>
                  <td className="py-3 px-4">₹{maxRevenue}</td>
                  <td className="py-3 px-4 text-[#FF5630]">₹{loss}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* MOBILE CARD VIEW */}
      <div className="md:hidden flex flex-col gap-4 mt-4">
        {logs.map((l, i) => {
          const revenue = l.occupied * l.dailyPrice;
          const maxRevenue = l.totalSeats * l.dailyPrice;
          const loss = maxRevenue - revenue;

          return (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md border p-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <Calendar size={18} className="text-[#172B4D]" />
                <p className="font-medium text-[#172B4D]">{l.date}</p>
              </div>

              <div className="text-sm text-[#172B4D]">
                <p><strong>Occupied:</strong> {l.occupied} / {l.totalSeats}</p>
                <p>
                  <strong>Daily Revenue:</strong>{" "}
                  <span className="text-[#36B37E] font-semibold">₹{revenue}</span>
                </p>
                <p><strong>Expected Max:</strong> ₹{maxRevenue}</p>
                <p className="text-[#FF5630]">
                  <strong>Loss:</strong> ₹{loss}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
