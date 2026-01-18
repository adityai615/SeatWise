import React from "react";
import StatCard from "../components/dashboard/StatCard";
import { Users, CreditCard, Armchair, Activity } from "lucide-react";
import RevenueChart from "../components/dashboard/RevenueChart";
import DueFeesCard from "../components/dashboard/DueFeesCard";

export default function DashboardOverview() {
  return (
    <div className="pb-24">
      <h1 className="text-xl font-semibold mb-6">Dashboard Overview</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Seats */}
        <StatCard
          title="Occupied Seats"
          value="42 / 60"
          color="#172B4D"
          icon={<Activity size={24} />}
          progress={Math.round((42 / 60) * 100)}
        />

        {/* Total Chairs */}
        <StatCard
          title="Total Chairs"
          value="60"
          color="#FF5630"
          icon={<Armchair size={24} />}
        />

        {/* Daily Revenue */}
        <StatCard
          title="Today's Revenue"
          value="₹1,840"
          color="#36B37E"
          icon={<CreditCard size={24} />}
        />

        {/* Active Students */}
        <StatCard
          title="Active Students"
          value="34"
          color="#FFAB00"
          icon={<Users size={24} />}
        />
      </div>
      <RevenueChart />
      <DueFeesCard />
    </div>
  );
}
