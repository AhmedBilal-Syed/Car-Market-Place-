
import React from "react";
import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Car Image */}
      <img
        src={car.imgSrc}
        alt={car.title}
        className="w-full h-56 object-cover"
      />

      {/* Car Details */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900">{car.title}</h3>
        <p className="text-sm text-gray-500 mb-4">Year: 2020</p>
        <p className="text-xl font-bold text-gray-900">{car.price}</p>
        
        {/* Link to Car Detail page */}
        <Link
          to={`/car-detail/${car.id}`}
          className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-4 block"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CarCard;

