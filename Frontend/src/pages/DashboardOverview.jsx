import React from "react";
import StatCard from "../components/dashboard/StatCard";
import { Users, CreditCard, Armchair, Activity, Edit, Grid } from "lucide-react";
import RevenueChart from "../components/dashboard/RevenueChart";
import DueFeesCard from "../components/dashboard/DueFeesCard";

export default function DashboardOverview() {
  return (
    <div className="pb-24 px-3 sm:px-6">

      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-[#172B4D]">Dashboard</h1>
          <p className="text-sm text-[#6B778C] mt-1">
            Welcome back! Here's your library performance summary.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-2 mt-3 sm:mt-0">
          <button
            onClick={() => (window.location.href = "/seat-allocation")}
            className="px-4 py-2 bg-[#0052CC] text-white rounded-lg shadow-md cursor-pointer text-sm font-medium"
          >
            Manage Seats
          </button>

          <button
            onClick={() => (window.location.href = "/layout-builder")}
            className="px-4 py-2 bg-[#36B37E] text-white rounded-lg shadow-md cursor-pointer text-sm font-medium flex items-center gap-1"
          >
            <Edit size={16} /> Edit Layout
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <StatCard
          title="Occupied Seats"
          value="42 / 60"
          color="#0052CC"
          icon={<Activity size={24} />}
          progress={Math.round((42 / 60) * 100)}
        />

        <StatCard
          title="Total Seats"
          value="60"
          color="#FF5630"
          icon={<Armchair size={24} />}
        />

        <StatCard
          title="Today's Revenue"
          value="₹1,840"
          color="#36B37E"
          icon={<CreditCard size={24} />}
        />

        <StatCard
          title="Active Students"
          value="34"
          color="#FFAB00"
          icon={<Users size={24} />}
        />
      </div>

      {/* Revenue Section */}
      <div className="mt-8 bg-white rounded-2xl p-6 shadow-md border border-gray-200">
        <h2 className="text-lg font-semibold text-[#172B4D] mb-4">Revenue Overview</h2>
        <RevenueChart />
      </div>

      {/* Due Fees */}
      <div className="mt-8">
        <DueFeesCard />
      </div>

    </div>
  );
}
