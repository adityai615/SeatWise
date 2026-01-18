import React, { useState } from "react";
import { Plus, Trash, SquarePlus } from "lucide-react";

export default function LayoutBuilder() {
  const [layout, setLayout] = useState([
    { id: 1, seats: [1, 1, 1] }, // 1 = seat, 0 = gap
  ]);

  const [preview, setPreview] = useState(false);

  // Auto seat numbering function
  const computeSeatNumbers = (layout) => {
    let count = 1;
    return layout.map((row) => ({
      ...row,
      seats: row.seats.map((seat) => {
        if (seat === 1) {
          return { type: 1, num: count++ };
        }
        return { type: 0, num: null }; // gap
      }),
    }));
  };

  const numberedLayout = computeSeatNumbers(layout);

  // Add a new empty row
  const addRow = () => {
    setLayout((prev) => [...prev, { id: Date.now(), seats: [] }]);
  };

  // Add seat in row
  const addSeat = (rowIndex) => {
    const updated = [...layout];
    updated[rowIndex].seats.push(1);
    setLayout(updated);
  };

  // Add gap in row
  const addGap = (rowIndex) => {
    const updated = [...layout];
    updated[rowIndex].seats.push(0);
    setLayout(updated);
  };

  // Delete whole row
  const deleteRow = (rowIndex) => {
    setLayout((prev) => prev.filter((_, i) => i !== rowIndex));
  };

  // Delete seat or gap
  const deleteSeatInRow = (rowIndex, seatIndex) => {
    const updated = [...layout];
    updated[rowIndex].seats.splice(seatIndex, 1);
    setLayout(updated);
  };

  if (preview) {
    return (
      <div className="pb-24">
        <h1 className="text-xl font-semibold mb-6">Preview Layout</h1>

        <button
          onClick={() => setPreview(false)}
          className="mb-6 px-4 py-2 bg-[#172B4D] text-white rounded-lg font-medium"
        >
          Exit Preview
        </button>

        <button
          onClick={() => {
            localStorage.setItem("seatLayout", JSON.stringify(layout));
            alert("Layout saved successfully!");
          }}
          className="mb-6 ml-3 px-4 py-2 bg-[#36B37E] text-white rounded-lg font-medium"
        >
          Save Layout
        </button>

        <div className="flex flex-col gap-6 bg-gray-100 p-6 rounded-xl border shadow-md">
          {numberedLayout.map((row) => (
            <div key={row.id} className="flex gap-3 justify-center">
              {row.seats.map((seat, seatIndex) =>
                seat.type === 1 ? (
                  <div
                    key={seatIndex}
                    className="w-14 h-14 bg-[#0747A6] text-white flex items-center justify-center rounded-lg font-semibold text-sm shadow-md"
                  >
                    {seat.num}
                  </div>
                ) : (
                  <div
                    key={seatIndex}
                    className="w-14 h-14 bg-transparent"
                  ></div>
                ),
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="pb-24">
      <h1 className="text-xl font-semibold mb-6">Layout Builder</h1>

      {/* Add Row Button */}
      <button
        onClick={addRow}
        className="mb-6 px-4 py-2 bg-[#0747A6] text-white rounded-lg font-medium"
      >
        + Add Row
      </button>

      <button
        onClick={() => setPreview(!preview)}
        className="mb-6 ml-2 px-4 py-2 bg-[#172B4D] text-white rounded-lg font-medium"
      >
        {preview ? "Exit Preview" : "Preview Layout"}
      </button>

      {/* Layout Rows */}
      <div className="flex flex-col gap-6">
        {numberedLayout.map((row, rowIndex) => (
          <div key={row.id}>
            {/* Row Header */}
            <div className="flex justify-between mb-2">
              <h2 className="font-semibold">Row {rowIndex + 1}</h2>

              <button
                onClick={() => deleteRow(rowIndex)}
                className="text-[#FF5630] flex items-center gap-1 font-medium"
              >
                <Trash size={16} /> Remove Row
              </button>
            </div>

            {/* Seats Preview */}
            <div className="flex gap-2 flex-wrap">
              {row.seats.map((seat, seatIndex) => (
                <div key={seatIndex} className="relative">
                  {/* Seat */}
                  {seat.type === 1 ? (
                    <div className="w-12 h-12 bg-[#0747A6] text-white flex items-center justify-center rounded-md font-semibold text-sm">
                      {seat.num}
                    </div>
                  ) : (
                    /* Gap */
                    <div className="w-12 h-12 bg-gray-300 text-gray-700 flex items-center justify-center rounded-md font-medium text-sm">
                      —
                    </div>
                  )}

                  {/* DELETE BUTTON (for seat & gap both) */}
                  <button
                    onClick={() => deleteSeatInRow(rowIndex, seatIndex)}
                    className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#FF5630] text-white text-xs flex items-center justify-center cursor-pointer shadow"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>

            {/* Row Controls */}
            <div className="flex gap-3 mt-3">
              {/* Add Seat */}
              <button
                onClick={() => addSeat(rowIndex)}
                className="px-3 py-2 bg-[#36B37E] text-white rounded-md text-sm flex items-center gap-1 font-medium"
              >
                <Plus size={16} /> Add Seat
              </button>

              {/* Add Gap */}
              <button
                onClick={() => addGap(rowIndex)}
                className="px-3 py-2 bg-[#FFAB00] text-black rounded-md text-sm flex items-center gap-1 font-medium"
              >
                <SquarePlus size={16} /> Add Gap
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
