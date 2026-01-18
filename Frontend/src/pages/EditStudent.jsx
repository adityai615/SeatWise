/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { motion } from "framer-motion";

export default function EditStudent() {
  const { id } = useParams();

  // Dummy data (later backend se aayega)
  const allStudents = [
    { id: 1, name: "Rohit Singh", mobile: "9999999999", email: "rohit@gmail.com", seat: 12, join: "2024-01-10", fees: 1200, status: "Active" },
    { id: 2, name: "Aditya Jain", mobile: "8888888888", email: "aditya@gmail.com", seat: 7, join: "2024-02-14", fees: 1400, status: "Active" },
    { id: 3, name: "Megha", mobile: "7777777777", email: "megha@gmail.com", seat: 3, join: "2024-03-05", fees: 1100, status: "Inactive" },
    { id: 4, name: "Sahil Verma", mobile: "6666666666", email: "sahil@gmail.com", seat: 22, join: "2024-02-28", fees: 1300, status: "Active" }
  ];

  const [student, setStudent] = useState(null);
  const [status, setStatus] = useState("Active");

  const studentData = allStudents.find((s) => s.id === Number(id));

  if (!student) return <p>Loading...</p>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="pb-24"
    >
      <h1 className="text-xl font-semibold mb-6">Edit Student</h1>

      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">

        <Input
          label="Full Name"
          placeholder="Enter full name"
          value={student.name}
          onChange={(e) =>
            setStudent({ ...student, name: e.target.value })
          }
        />

        <Input
          label="Mobile Number"
          type="number"
          placeholder="Enter mobile number"
          value={student.mobile}
          onChange={(e) =>
            setStudent({ ...student, mobile: e.target.value })
          }
        />

        <Input
          label="Email"
          type="email"
          placeholder="Enter email"
          value={student.email}
          onChange={(e) =>
            setStudent({ ...student, email: e.target.value })
          }
        />

        <Input
          label="Seat Number"
          type="number"
          placeholder="Enter seat number"
          value={student.seat}
          onChange={(e) =>
            setStudent({ ...student, seat: e.target.value })
          }
        />

        <div className="mb-4">
          <label className="block text-textDark mb-1 font-medium text-sm">
            Joining Date
          </label>
          <input
            type="date"
            value={student.join}
            onChange={(e) =>
              setStudent({ ...student, join: e.target.value })
            }
            className="w-full p-3 bg-[#F4F6F8] border border-[#D5D9DF] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 transition text-sm"
          />
        </div>

        <Input
          label="Fees Amount (₹)"
          type="number"
          value={student.fees}
          onChange={(e) =>
            setStudent({ ...student, fees: e.target.value })
          }
        />

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

        <Button>Save Changes</Button>
      </div>
    </motion.div>
  );
}
