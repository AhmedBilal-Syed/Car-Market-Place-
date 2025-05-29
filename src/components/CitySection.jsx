import React from "react";
import {data1} from "../data/data1"; 

const CitySection = () => {
  const city = data1.find(c => c.title === "City");

  return (
    <div className="px-4 py-6 bg-white rounded-xl shadow-sm">
      <h2 className="text-xl font-bold text-gray-800 mb-4 pl-2">Browse by City</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {city.items.map((item, index) => (
          <div
            key={index}
            className="text-sm font-medium text-gray-700 hover:text-blue-600 hover:underline cursor-pointer transition-colors duration-200 px-2 py-1 rounded hover:bg-blue-50"
            title={`Cars for sale in ${item.name}`}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CitySection;
