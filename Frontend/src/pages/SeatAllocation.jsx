import React, { useState } from "react";
import Seat from "../components/seats/Seat";
import SeatModal from "../components/seats/SeatModal";

export default function SeatAllocation() {
  const initialSeats = Array.from({ length: 30 }).map((_, i) => ({
    id: i + 1,
    number: i + 1,
    status: "free",
  }));

  const [seats, setSeats] = useState(initialSeats);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSeat, setSelectedSeat] = useState(null);

  const toggleSeat = (id) => {
    setSeats((prev) =>
      prev.map((s) =>
        s.id === id
          ? { ...s, status: s.status === "free" ? "occupied" : "free" }
          : s,
      ),
    );
  };

  return (
    <div className="pb-24">
      <h1 className="text-xl font-semibold mb-6">Seat Allocation</h1>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {seats.map((seat) => (
          <Seat
            key={seat.id}
            seat={seat}
            onToggle={() => {
              // ❌ Do not toggle here
              // ✔ Only open modal
              setSelectedSeat(seat);
              setModalOpen(true);
            }}
          />
        ))}
      </div>

      <SeatModal
        isOpen={modalOpen}
        seat={selectedSeat}
        onClose={() => setModalOpen(false)}
        onToggle={(id) => toggleSeat(id)}
      />
    </div>
  );
}
