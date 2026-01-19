/* eslint-disable no-unused-vars */
import StatCard from "../components/dashboard/StatCard";
import { Calendar, IndianRupee, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";
import RevenueTable from "../components/revenue/RevenueTable";
import RevenueFilters from "../components/revenue/RevenueFilters";

export default function RevenuePage() {
  // Temporary dummy values (later dynamic)
  const totalSeats = 60;
  const occupiedSeats = 42;

  const dailyPrice = 23; // Full-time daily revenue per seat
  const monthlyPrice = 700;

  const todaysRevenue = occupiedSeats * dailyPrice;
  const expectedMonthlyRevenue = totalSeats * monthlyPrice;

  const handleFilters = (data) => {
    console.log("Filters: ", data);
    // Later API call here
  };

  return (
    <motion.div className="pb-24">
      <h1 className="text-xl font-semibold mb-6">Revenue & Reports</h1>

      {/* TOP CARDS */}
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Today's Revenue"
          value={`₹${todaysRevenue}`}
          color="#36B37E"
          icon={<IndianRupee size={24} />}
        />

        <StatCard
          title="Occupied Seats"
          value={`${occupiedSeats} / ${totalSeats}`}
          color="#0052CC"
          icon={<Users size={24} />}
        />

        <StatCard
          title="Expected Monthly Revenue"
          value={`₹${expectedMonthlyRevenue}`}
          color="#FFAB00"
          icon={<Calendar size={24} />}
        />

        <StatCard
          title="Revenue Trend"
          value="+12%"
          color="#172B4D"
          icon={<TrendingUp size={24} />}
        />
      </motion.div>

      {/* STEP 1: Filters */}
      <motion.div>
        <RevenueFilters
          onFilterChange={(filters) => {
            // Handle filter changes here
          }}
        />
      </motion.div>

      {/* STEP 2: Graph will come here */}
      <motion.div className="mt-10">
        <div className="bg-white rounded-xl shadow-md border p-6">
          <h2 className="text-lg font-semibold mb-4">Revenue Chart</h2>
          <p className="text-secondary text-sm">(Chart Coming Next...)</p>
        </div>
      </motion.div>

      {/* STEP 3: Detailed Revenue Table (Next Step) */}
      <motion.div>
        <RevenueTable />
      </motion.div>
    </motion.div>
  );
}
