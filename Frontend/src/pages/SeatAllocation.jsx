import React, { useState } from "react";
import Seat from "../components/seats/Seat";
import SeatModal from "../components/seats/SeatModal";
import SeatLegend from "../components/seats/SeatLegend";

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
        s === 1 ? { type: 1, status: "free" } : { type: 0 }
      ),
    }))
  );

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSeat, setSelectedSeat] = useState(null);

  // Compute seat numbering dynamically
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

  // Toggle seat (free → occupied → free)
  const toggleSeat = (rowIndex, seatIndex) => {
    setLayout((prev) =>
      prev.map((row, r) =>
        r === rowIndex
          ? {
              ...row,
              seats: row.seats.map((seat, s) =>
                s === seatIndex
                  ? {
                      ...seat,
                      status:
                        seat.status === "free" ? "occupied" : "free",
                    }
                  : seat
              ),
            }
          : row
      )
    );
  };

  return (
    <div className="pb-28 px-3 sm:px-6">
      <h1 className="text-xl font-semibold mb-4 text-center sm:text-left">
        Seat Allocation
      </h1>

      {/* Seat Legend */}
      <div className="flex justify-center sm:justify-start">
        <SeatLegend />
      </div>

      {/* RENDER ROWS */}
      <div className="flex flex-col items-center gap-5 mt-4">
        {layout.map((row, rowIndex) => (
          <div
            key={row.id}
            className="flex items-center gap-3 sm:gap-4 w-full justify-center"
          >
            {/* Row Label (A, B, C...) */}
            <div className="w-5 text-[#172B4D] font-semibold text-sm sm:text-lg text-center">
              {rowLabels[rowIndex]}
            </div>

            {/* Seats */}
            <div className="flex gap-2 sm:gap-4">
              {row.seats.map((seat, seatIndex) =>
                seat.type === 1 ? (
                  <Seat
                    key={seatIndex}
                    seat={{
                      rowIndex,
                      seatIndex,
                      number: computeSeatNumber(
                        layout,
                        rowIndex,
                        seatIndex
                      ),
                      status: seat.status,
                    }}
                    onToggle={() => {
                      setSelectedSeat({
                        rowIndex,
                        seatIndex,
                        number: computeSeatNumber(
                          layout,
                          rowIndex,
                          seatIndex
                        ),
                        status: seat.status,
                      });
                      setModalOpen(true);
                    }}
                  />
                ) : (
                  <div
                    key={seatIndex}
                    className="w-12 h-12 sm:w-16 sm:h-16 bg-transparent"
                  ></div>
                )
              )}
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      <SeatModal
        isOpen={modalOpen}
        seat={selectedSeat}
        onClose={() => setModalOpen(false)}
        onToggle={(rowIndex, seatIndex) =>
          toggleSeat(rowIndex, seatIndex)
        }
      />
    </div>
  );
}
