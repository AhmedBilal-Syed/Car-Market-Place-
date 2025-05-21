import React from 'react';
import { FaCar, FaFileInvoice, FaSearch, FaShieldAlt, FaMoneyBillWave, FaFileSignature } from 'react-icons/fa';

const services = [
  {
    id: 1,
    icon: <FaCar className="text-3xl text-blue-600" />,
    title: "Sell It For Me",
    description: "Let our experts sell your car for the best price",
    tag: "PakWheels"
  },
  {
    id: 2,
    icon: <FaFileInvoice className="text-3xl text-blue-600" />,
    title: "Auction Sheet Verification",
    description: "Verify authenticity of imported vehicles",
    tag: "PakWheels"
  },
  {
    id: 3,
    icon: <FaSearch className="text-3xl text-blue-600" />,
    title: "Car Inspection",
    description: "Comprehensive vehicle inspection service",
    tag: "PakWheels"
  },
  {
    id: 4,
    icon: <FaShieldAlt className="text-3xl text-blue-600" />,
    title: "Car Insurance",
    description: "Get the best insurance deals for your vehicle",
    tag: "PakWheels"
  },
  {
    id: 5,
    icon: <FaMoneyBillWave className="text-3xl text-blue-600" />,
    title: "Car Finance",
    description: "Easy financing options for car buyers",
    tag: "PakWheels"
  },
  {
    id: 6,
    icon: <FaFileSignature className="text-3xl text-blue-600" />,
    title: "Ownership Transfer",
    description: "Hassle-free transfer of vehicle ownership",
    tag: "PakWheels"
  }
];

const Offerings = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">PakWheels Offerings</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    {service.icon}
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                      {service.tag}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mt-1">{service.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center">
                  Learn more
                 
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offerings;