// Used Cars Page
import React from "react";

const UsedCars = () => {
  const filters = [
    "Automatic cars",
    "Family Cars",
    "5 Seater",
    "Small cars",
    "Big cars",
    "Imported cars",
    "Old Cars",
    "5 Door",
    "4 Door",
    "1000cc cars",
    "1300cc cars",
    "Japanese cars",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Browse Used Cars</h1>

      {/* Top filter categories */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-10">
        {["Category", "City", "Make", "Model", "Budget", "Body Type"].map((item) => (
          <button
            key={item}
            className="bg-gray-100 text-gray-700 py-2 px-4 rounded hover:bg-blue-100 transition"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Quick filter tags */}
      <div className="flex flex-wrap gap-3">
        {filters.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-50 text-blue-600 border border-blue-200 rounded-full px-4 py-2 text-sm hover:bg-blue-100 cursor-pointer"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default UsedCars;
