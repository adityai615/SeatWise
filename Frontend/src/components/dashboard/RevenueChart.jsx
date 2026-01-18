import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "Mon", revenue: 1200 },
  { day: "Tue", revenue: 2150 },
  { day: "Wed", revenue: 1800 },
  { day: "Thu", revenue: 2400 },
  { day: "Fri", revenue: 2000 },
  { day: "Sat", revenue: 3200 },
  { day: "Sun", revenue: 2900 },
];

export default function RevenueChart() {
  return (
    <div className="bg-white p-6 shadow-md rounded-xl border border-gray-200 mt-10">
      <h2 className="text-lg font-semibold mb-4 text-textDark">
        Weekly Revenue
      </h2>

      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />

            <XAxis dataKey="day" stroke="#172B4D" />
            <YAxis stroke="#172B4D" />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#0052CC"
              strokeWidth="3"
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
