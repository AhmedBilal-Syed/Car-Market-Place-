import React, { useState } from 'react';
import { FaChevronRight, FaTimes } from 'react-icons/fa';

const offerings = [
  {
    id: 1,
    image: "/sellitforme.png",
    title: "Sell It For Me",
    shortDesc: "Let our experts sell your car",
    fullDesc: "Our professional sales team will handle everything from valuation to negotiations, ensuring you get the best price for your vehicle with minimal hassle.",
    features: [
      "Free vehicle valuation",
      "Professional photography",
      "Dedicated sales expert",
      "Secure payment handling"
    ],
    link: "/register-your-car",
    color: "bg-blue-100 text-blue-600"
  },
  {
    id: 2,
    image: "/auctionsheetverifi.png",
    title: "Auction Sheet Verification",
    shortDesc: "Verify imported vehicles",
    fullDesc: "Ensure the authenticity of your imported vehicle with our comprehensive auction sheet verification service that checks for any discrepancies or tampering.",
    features: [
      "Expert verification",
      "Genuine auction reports",
      "Damage history check",
      "Odometer verification"
    ],
    link: "/services/auction-verification",
    color: "bg-amber-100 text-amber-600"
  },
  {
    id: 3,
    image: "/inspection.png",
    title: "Car Inspection",
    shortDesc: "Comprehensive vehicle inspection service",
    fullDesc: "Our certified mechanics perform a 200+ point inspection to assess the condition of your car, ensuring peace of mind before buying or selling.",
    features: [
      "200+ point inspection",
      "Engine and transmission check",
      "Body and paint analysis",
      "Interior and electronics testing"
    ],
    link: "/services/car-inspection",
    color: "bg-green-100 text-green-600"
  },
  {
    id: 4,
    image: "/carinsurence.png",
    title: "Car Insurance",
    shortDesc: "Get the best insurance deals for your vehicle",
    fullDesc: "Compare and choose from top insurance providers offering comprehensive, third-party, or customized plans for your vehicle.",
    features: [
      "Compare multiple providers",
      "Instant quotes",
      "Online policy generation",
      "Dedicated support"
    ],
    link: "/services/car-insurance",
    color: "bg-purple-100 text-purple-600"
  },
  {
    id: 5,
    image: "/carfinance.png",
    title: "Car Finance",
    shortDesc: "Easy financing options for car buyers",
    fullDesc: "Access a wide range of car financing options with low interest rates and flexible payment terms tailored to your budget.",
    features: [
      "Low interest rates",
      "Flexible payment terms",
      "Fast approval",
      "Trusted banks and providers"
    ],
    link: "/services/car-finance",
    color: "bg-pink-100 text-pink-600"
  },
  {
    id: 6,
    image: "/transfer.png",
    title: "Ownership Transfer",
    shortDesc: "Hassle-free transfer of vehicle ownership",
    fullDesc: "Avoid the hassle and let us manage your vehicle’s ownership transfer with all legal documentation and regulatory compliance.",
    features: [
      "Document verification",
      "NOC issuance support",
      "Fast processing",
      "Pickup and delivery service"
    ],
    link: "/services/ownership-transfer",
    color: "bg-cyan-100 text-cyan-600"
  }
];

const OfferingsSection = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">PakWheels Offerings</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Premium services designed to make your car journey easier
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((service) => (
            <div 
              key={service.id}
              className={`bg-white rounded-lg border border-gray-200 overflow-hidden transition-all duration-300 ${
                expandedCard === service.id ? 'shadow-lg border-blue-300' : 'hover:shadow-md'
              }`}
            >
              <div 
                className={`p-6 cursor-pointer ${expandedCard === service.id ? 'hidden' : 'block'}`}
                onClick={() => toggleCard(service.id)}
              >
                <div className="w-25 h-20 mb-4">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-22 h-20  rounded-lg" 
                    onError={(e) => e.target.src = '/placeholder.png'} 
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.shortDesc}</p>
                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-800">
                  <span>Learn more</span>
                  <FaChevronRight className="ml-2 text-sm" />
                </div>
              </div>

              {expandedCard === service.id && (
                <div className="p-6 relative">
                  <button 
                    onClick={() => toggleCard(service.id)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                  >
                    <FaTimes />
                  </button>

                  <div className="w-12 h-12 mb-4">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-contain rounded-lg" 
                      onError={(e) => e.target.src = '/placeholder.png'} 
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.fullDesc}</p>

                  {service.features?.length > 0 && (
                    <ul className="mb-6 space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-500 mr-2">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <a 
                    href={service.link}
                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
                  >
                    Get Started
                    <FaChevronRight className="ml-2" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
