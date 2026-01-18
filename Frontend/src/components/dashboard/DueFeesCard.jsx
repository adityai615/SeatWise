import React from "react";
import { Wallet, AlertTriangle } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "Mon", amount: 1200 },
  { day: "Tue", amount: 800 },
  { day: "Wed", amount: 500 },
  { day: "Thu", amount: 1500 },
  { day: "Fri", amount: 1200 },
];

export default function DueFeesCard() {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200 mt-10">
      
      {/* Heading */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-lg bg-danger flex items-center justify-center text-white">
          <AlertTriangle size={22} />
        </div>

        <div>
          <p className="text-sm text-secondary font-medium">Due Fees</p>
          <h2 className="text-2xl font-bold text-textDark">₹7,200</h2>
          <p className="text-sm text-secondary mt-1">12 Students Pending</p>
        </div>
      </div>

      {/* Mini Chart */}
      <div className="w-full h-40">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <Tooltip />

            <Bar dataKey="amount" fill="#FF5630" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
