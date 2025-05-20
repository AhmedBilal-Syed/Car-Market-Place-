
import React from "react";
import Hero from "../components/Hero";
import UsedCars from "./UsedCars";
import CarCard from "../components/CarCard";
import { Link } from "react-router-dom";

const Home = () => {
  
  const featuredCars = [
    { id: 1, title: "2019 Honda Civic", price: "0000", imgSrc: "/images/car1.jpg" },
    { id: 2, title: "2020 Toyota Corolla", price: "0000", imgSrc: "/images/car2.jpg" },
    { id: 3, title: "2018 Ford Mustang", price: "0000", imgSrc: "/images/car3.jpg" },
  ];

  return (
    <div>
      

      <Hero />
      <UsedCars/>


    
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Cars</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-12 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Sell Your Car?
          </h2>
          <p className="mb-6">Post your car for sale in just a few clicks!</p>
          <Link
            to="/sell-car"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-semibold text-lg"
          >
            Post an Ad
          </Link>
        </div>
      </section>
      
    </div>
    
  );
};

export default Home;
