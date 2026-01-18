/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import { Mail, Phone, Calendar, CreditCard, Activity, User } from "lucide-react";
import { motion } from "framer-motion";

export default function StudentProfile() {
  const { id } = useParams();

  // Dummy data (later backend se aayega)
  const student = {
    id: Number(id),
    name: "Aditya Jain",
    seat: 7,
    status: "Active",
    mobile: "9999999999",
    email: "aditya@example.com",
    joinDate: "2024-02-14",
    fees: {
      total: 1500,
      paid: 1000,
      due: 500,
      lastPaid: "2024-03-01"
    },
    attendance: {
      present: 22,
      absent: 4
    },
    activity: [
      { date: "2024-04-01", event: "Checked-in at 8:45 AM" },
      { date: "2024-03-29", event: "Paid ₹500" },
      { date: "2024-03-21", event: "Checked-out at 6:20 PM" }
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="pb-24"
    >
      {/* Heading */}
      <h1 className="text-xl font-semibold mb-4">Student Profile</h1>

      {/* Profile Card */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">

        {/* Name + Status */}
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-2xl font-bold">{student.name}</h2>

          <span
            className={`px-3 py-1 rounded-md text-xs font-medium ${
              student.status === "Active"
                ? "bg-success/20 text-success"
                : "bg-danger/20 text-danger"
            }`}
          >
            {student.status}
          </span>
        </div>

        {/* Seat & ID */}
        <p className="text-secondary text-sm">Seat: {student.seat}</p>
        <p className="text-secondary text-sm mt-1">Student ID: {student.id}</p>
      </div>

      {/* Contact Info */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
        <h3 className="text-lg font-semibold mb-3">Contact Details</h3>

        <div className="flex items-center gap-3 mb-3">
          <Phone size={18} className="text-primary" />
          <p className="text-sm">{student.mobile}</p>
        </div>

        <div className="flex items-center gap-3 mb-2">
          <Mail size={18} className="text-primary" />
          <p className="text-sm">{student.email}</p>
        </div>

        <div className="flex items-center gap-3 mt-2">
          <Calendar size={18} className="text-primary" />
          <p className="text-sm">Joined: {student.joinDate}</p>
        </div>
      </div>

      {/* Fees Summary */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
        <h3 className="text-lg font-semibold mb-4">Fees Summary</h3>

        <div className="flex justify-between mb-3">
          <p className="text-secondary">Total Fees</p>
          <p className="font-semibold">₹{student.fees.total}</p>
        </div>

        <div className="flex justify-between mb-3">
          <p className="text-secondary">Paid</p>
          <p className="font-semibold text-success">₹{student.fees.paid}</p>
        </div>

        <div className="flex justify-between mb-3">
          <p className="text-danger">Due</p>
          <p className="font-semibold text-danger">₹{student.fees.due}</p>
        </div>

        <div className="flex items-center gap-2 mt-2">
          <CreditCard size={18} className="text-primary" />
          <p className="text-sm">
            Last Payment: {student.fees.lastPaid}
          </p>
        </div>
      </div>

      {/* Attendance */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
        <h3 className="text-lg font-semibold mb-4">Attendance</h3>

        <p className="text-sm">
          Present: <span className="font-semibold">{student.attendance.present}</span>
        </p>
        <p className="text-sm mt-1">
          Absent: <span className="font-semibold">{student.attendance.absent}</span>
        </p>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 h-2 rounded-full mt-3">
          <div
            className="h-2 bg-primary rounded-full"
            style={{
              width: `${
                (student.attendance.present /
                  (student.attendance.present + student.attendance.absent)) *
                100
              }%`
            }}
          ></div>
        </div>
      </div>

      {/* Activity Timeline */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>

        {student.activity.map((act, i) => (
          <div key={i} className="mb-3">
            <p className="text-sm font-medium">{act.event}</p>
            <p className="text-xs text-secondary">{act.date}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
