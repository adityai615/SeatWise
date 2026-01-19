import React, { useState } from "react";
import Seat from "../components/seats/Seat";
import SeatModal from "../components/seats/SeatModal";
import SeatLegend from "../components/seats/SeatLegend";
import { Edit } from "lucide-react";

export default function SeatAllocation() {
  const savedLayout = JSON.parse(localStorage.getItem("seatLayout"));
  const rowLabels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const initialLayout = savedLayout
    ? savedLayout
    : [{ id: 1, seats: [1, 1, 1] }];

  const [layout, setLayout] = useState(
    initialLayout.map((row) => ({
      ...row,
      seats: row.seats.map((s) =>
        s === 1 ? { type: 1, status: "free", studentId: null } : { type: 0 }
      ),
    }))
  );

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSeat, setSelectedSeat] = useState(null);

  const allStudents = [
    { id: 1, name: "Aditya Jain" },
    { id: 2, name: "Rohit Singh" },
    { id: 3, name: "Megha" },
    { id: 4, name: "Sahil" },
  ];

  // Compute seat numbers
  const computeSeatNumber = (layout, rowIndex, seatIndex) => {
    let count = 1;
    for (let r = 0; r <= rowIndex; r++) {
      for (let s = 0; s < layout[r].seats.length; s++) {
        if (layout[r].seats[s].type === 1) {
          if (r === rowIndex && s === seatIndex) return count;
          count++;
        }
      }
    }
  };

  // Toggle seat
  const toggleSeat = (rowIndex, seatIndex, studentId = null) => {
    setLayout((prev) =>
      prev.map((row, r) =>
        r === rowIndex
          ? {
              ...row,
              seats: row.seats.map((seat, s) =>
                s === seatIndex
                  ? {
                      ...seat,
                      status: seat.status === "free" ? "occupied" : "free",
                      studentId: seat.status === "free" ? studentId : null,
                    }
                  : seat
              ),
            }
          : row
      )
    );
  };

  return (
    <div className="pb-32 px-3 mt-6 w-full overflow-x-hidden">

      {/* HEADER */}
      <div className="mb-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Seat Allocation</h1>

        <button
          onClick={() => (window.location.href = "/layout-builder")}
          className="hidden sm:flex px-4 py-2 bg-[#36B37E] text-white rounded-lg cursor-pointer shadow-md text-sm font-medium gap-1 items-center"
        >
          <Edit size={16} /> Edit Layout
        </button>
      </div>

      {/* Floating Button (Mobile) */}
      <button
        onClick={() => (window.location.href = "/layout-builder")}
        className="
          sm:hidden 
          fixed bottom-24 right-4 
          bg-[#36B37E] text-white 
          px-4 py-3 rounded-xl shadow-xl 
          cursor-pointer flex items-center gap-2
          z-50
        "
      >
        <Edit size={18} />
        Edit Layout
      </button>

      {/* LEGEND */}
      <div className="flex justify-center">
        <SeatLegend />
      </div>

      {/* SEAT ROWS */}
      <div className="mt-5 flex flex-col gap-5 w-full">
        {layout.map((row, rowIndex) => (
          <div
            key={row.id}
            className="flex items-start gap-3 w-full"
          >
            {/* Row Label */}
            <div className="min-w-6.5 text-[#172B4D] m font-semibold text-lg pt-2">
              {rowLabels[rowIndex]}
            </div>

            {/* Seats (scrollable) */}
            <div className="flex gap-2 overflow-x-auto overflow-y-hidden py-1 no-scrollbar">
              {row.seats.map((seat, seatIndex) =>
                seat.type === 1 ? (
                  <Seat
                    key={seatIndex}
                    seat={{
                      rowIndex,
                      seatIndex,
                      number: computeSeatNumber(layout, rowIndex, seatIndex),
                      status: seat.status,
                      studentId: seat.studentId,
                    }}
                    onToggle={() => {
                      setSelectedSeat({
                        rowIndex,
                        seatIndex,
                        number: computeSeatNumber(layout, rowIndex, seatIndex),
                        status: seat.status,
                        studentId: seat.studentId,
                      });
                      setModalOpen(true);
                    }}
                  />
                ) : (
                  <div
                    key={seatIndex}
                    className="w-10 h-10 sm:w-14 sm:h-14 bg-transparent"
                  />
                )
              )}
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      <SeatModal
        key={selectedSeat?.rowIndex + "-" + selectedSeat?.seatIndex}
        isOpen={modalOpen}
        seat={selectedSeat}
        allStudents={allStudents}
        onClose={() => setModalOpen(false)}
        onToggle={(rowIndex, seatIndex, studentId) =>
          toggleSeat(rowIndex, seatIndex, studentId)
        }
      />
    </div>
  );
}
