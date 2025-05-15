
import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const CarDetail = () => {
  const { id } = useParams(); 

  // car details 
  const carDetails = {
    1: {
      title: "2019 Honda Civic",
      price: "0000",
      imgSrc: "https://picsum.photos/200/300",
      year: "2019",
      mileage: "30,000 miles",
      color: "Blue",
      description:
        "This is a great car with excellent fuel efficiency and low mileage.",
    },
    2: {
      title: "2020 Toyota Corolla",
      price: "0000",
      imgSrc: "https://picsum.photos/200/300",
      year: "2020",
      mileage: "15,000 miles",
      color: "Red",
      description: "Reliable, spacious, and perfect for family trips.",
    },
    3: {
      title: "2018 Ford Mustang",
      price: "000",
      imgSrc: "https://picsum.photos/200/300",
      year: "2018",
      mileage: "20,000 miles",
      color: "Black",
      description: "A classic muscle car with stunning design and power.",
    },
  };

  // Fetch the details based on the ID from URL
  const car = carDetails[id];

  if (!car) {
    return <p>Car not found!</p>;
  }

  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Car Image */}
          <img
            src={car.imgSrc}
            alt={car.title}
            className="w-full sm:w-1/2 h-96 object-cover rounded-lg shadow-md"
          />

          {/* Car Details */}
          <div className="sm:w-1/2 ml-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {car.title}
            </h2>
            <p className="text-xl font-bold text-gray-900 mb-4">{car.price}</p>
            <p className="text-gray-700 mb-4">
              <strong>Year:</strong> {car.year}
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Mileage:</strong> {car.mileage}
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Color:</strong> {car.color}
            </p>
            <p className="text-gray-700 mb-8">{car.description}</p>

            {/*  back to Home  */}
            <Link
              to="/"
              className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
