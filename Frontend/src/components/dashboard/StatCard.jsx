import React from "react";

export default function StatCard({ title, value, icon, color = "#0052CC", progress }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200 hover:shadow-lg transition">
      
      {/* TOP: Icon + Title */}
      <div className="flex items-start gap-4 mb-4">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center text-white text-xl"
          style={{ backgroundColor: color }}
        >
          {icon}
        </div>

        <div>
          <p className="text-secondary text-sm font-medium">{title}</p>
          <h2 className="text-3xl font-bold text-textDark mt-1">{value}</h2>
        </div>
      </div>

      {/* Progress Bar (only if progress prop exists) */}
      {progress !== undefined && (
        <div className="mt-4">
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 rounded-full transition-all duration-500"
              style={{
                width: `${progress}%`,
                backgroundColor: color,
              }}
            ></div>
          </div>

          <p className="text-sm text-secondary mt-2 font-medium">
            {progress}% occupied
          </p>
        </div>
      )}
    </div>
  );
}
