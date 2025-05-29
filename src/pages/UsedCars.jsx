import React, { useState } from 'react';
import { FaSearch, FaCar, FaUserCheck, FaRegClock, FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { data1 } from '../data/data1';
import { Link } from 'react-router-dom';
import CitySection from '../components/CitySection';
import MakeSection from '../components/MakeSection';
import BodyTypeSection from '../components/BodyType';

const UsedCars = () => {
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [searchFilters, setSearchFilters] = useState({
    make: '',
    city: '',
    priceRange: '',
    bodyType: '',
    transmission: '',
    year: ''
  });

  
  const cityOptions = data1.find(item => item.title === "City").items;
  const budgetOptions = data1.find(item => item.title === "Budget").items;
  const bodyTypeOptions = data1.find(item => item.title === "Body Type").items;

  const toggleMoreOptions = () => setShowMoreOptions(!showMoreOptions);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setSearchFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSearch = () => {
    console.log('Searching with filters:', searchFilters);
  };

  return (
    <>
    <div className="bg-gray-50 py-12 ">
      <div className="max-w-6xl mx-auto ">
   <div className="text-center mb-10 bg-[#0d2159] py-10 rounded-xl">
      <h1 className="text-3xl font-bold text-white mb-3">
        Find Used Cars in Pakistan
      </h1>
      <p className="text-lg text-gray-200">
        With thousands of cars, we have just the right one for you
      </p>
    </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            
            <input
              type="text"
              name="make"
              value={searchFilters.make}
              onChange={handleFilterChange}
              placeholder="Car Make or Model"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            
            
            <select 
              name="city"
              value={searchFilters.city}
              onChange={handleFilterChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Cities</option>
              {cityOptions.map((city) => (
                <option key={city.name} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
            
            
            <select 
              name="priceRange"
              value={searchFilters.priceRange}
              onChange={handleFilterChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Price Range</option>
              {budgetOptions.map((budget) => (
                <option key={budget.name} value={budget.name}>
                  {budget.name}
                </option>
              ))}
            </select>
          </div>

          
          {showMoreOptions && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 transition-all duration-300">
              
              <select 
                name="bodyType"
                value={searchFilters.bodyType}
                onChange={handleFilterChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              >
                <option value="">Body Type</option>
                {bodyTypeOptions.map((type) => (
                  <option key={type.name} value={type.name}>
                    {type.name}
                  </option>
                ))}
              </select>
              
              
              <select 
                name="transmission"
                value={searchFilters.transmission}
                onChange={handleFilterChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              >
                <option value="">Transmission</option>
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
              </select>
              
              
              <select 
                name="year"
                value={searchFilters.year}
                onChange={handleFilterChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              >
                <option value="">Year</option>
                <option value="2020-2023">2020-2023</option>
                <option value="2015-2019">2015-2019</option>
                <option value="2010-2014">2010-2014</option>
              </select>
            </div>
          )}

          <div className="flex justify-between items-center">
            <button 
              onClick={toggleMoreOptions}
              className="flex items-center text-blue-600 font-medium hover:text-blue-800"
            >
              {showMoreOptions ? 'Hide Options' : 'More Search Options'} 
              {showMoreOptions ? <FaArrowUp className="ml-2" /> : <FaArrowDown className="ml-2" />}
            </button>
            <button 
              onClick={handleSearch}
              className="bg-green-700 text-white px-6 py-3 rounded-lg font-medium flex items-center transition-colors"
            >
              <FaSearch className="mr-2" /> Search
            </button>
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 items-center" >
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <img src="/freeadd.svg" alt="freeadd" />
            </div>
            <h3 className="font-bold text-lg mb-2">ADS</h3>
            <p className="text-gray-600">Free Ad</p>
            <p className="text-sm text-gray-500 mt-1">Post your car's ad for free in 30 seconds.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
               <img src="/genbyer.svg" alt="genbyer" />
            </div>
            <h3 className="font-bold text-lg mb-2">Genuine Buyers</h3>
            <p className="text-sm text-gray-500">Get authentic offers from verified buyers.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <img src="/sellfaster.svg" alt="sell faster" />
            </div>
            <h3 className="font-bold text-lg mb-2">Sell Faster</h3>
            <p className="text-sm text-gray-500">Sell your car faster than others at a better price.</p>
          </div>

          <div>
          
             <Link to="/sell-car" className="mt-4 bg-red-700 text-white px-6 py-4 rounded-lg font-medium transition">
              sell your car
            </Link>
          </div>
        </div>

        

      </div>
      
    </div>
    <MakeSection/>
    <BodyTypeSection/>
    <CitySection/>
    </>
  );
};

export default UsedCars;