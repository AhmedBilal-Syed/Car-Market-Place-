import React from 'react';
import FAQSection from '../components/FAQSection';
import { FaQ } from 'react-icons/fa6';
import NewCarsIntro from '../components/NewCarsIntro';

const NewCars = () => {
  return (

    <div className="bg-gray-100 min-h-screen">
      {/* Hero section */}
      <div className="bg-blue-900 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <span className="text-3xl md:text-4xl font-bold mb-2">Find New Cars in Pakistan</span>
          <p className="text-lg text-blue-100">Find information about the latest cars in the market</p>
        </div>
      </div>

      {/* Search box */}
      <div className="container mx-auto px-4 mt-8">
        <div className="bg-white rounded-md shadow-lg p-6 -mt-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <select className="border border-gray-300 rounded px-4 py-2 w-full text-gray-500">
                <option>Make/Model</option>
                <option>Adam</option>
                <option>Austin</option>
                <option>Audi</option>
                <option>BAIC</option>
                <option>Bentley</option>
                <option>BMW</option>
                <option>BYD</option>
                <option>Cherry</option>
                <option>Chevrolet</option>
                <option>Cadillac</option>
                <option>Dodge</option>
                <option>DFSK</option>
                <option>Daihatsu</option>
                <option>Daewoo</option>
                <option>Deepal</option>
                <option>Ferrari</option>
                <option>Faw</option>
                <option>Ford</option>
                <option>GMC</option>
                <option>Golf</option>
                <option>Hillman</option>
                <option>Hino</option>
                <option>Haval</option>
                <option>Honda</option>
                <option>Hummer</option>
                <option>Hyundai</option>
                <option>iszu</option>
                <option>JAC</option>
                <option>Jaguar</option>
                <option>JMC</option>
                <option>Jeep</option>
                <option>KIA</option>
                <option>Lamborgini</option>
                <option>Land Rover</option>
                <option>Lexus</option>
                <option>Mazda</option>
                <option>Mitsubishi</option>
                <option>Mercedes</option>
                <option>MINI</option>
                <option>Mclaren</option>
                <option>MG</option>
                <option>Nissan</option>
                <option>OPAL</option>
                <option>ORA</option>
                <option>proton</option>
                <option>Peugeot</option>
                <option>Porsche</option>
                <option>Power</option>
                <option>Rolls Royce</option>
                <option>Rover</option>
                <option>Royal Enfield</option>
                <option>Seres</option>
                <option>Skoda</option>
                <option>Sogo</option>
                <option>Smart</option>
                <option>Suzuki</option>
                <option>Tesla</option>
                <option>Toyota</option>
                <option>TANK</option>
                <option>United</option>
                <option>Volkswagen</option>
                <option>Volvo</option>
                <option>Willys</option>
                <option>Xiaomi</option>
                <option>ZOTYE</option>
             </select>
            <select className="border border-gray-300 rounded px-4 py-2 w-full text-gray-500">
              <option>From</option>
              <option>3000,000</option>
                <option>800,000</option>
                <option>1,300,000</option>
                <option>1,800,000</option>
                <option>2,300,000</option>
                <option>2,800,000</option>
                <option>3,300,000</option>
                <option>3,800,000</option>
                <option>4,300,000</option>
                <option>4,800,000</option>
                <option>5,300,000</option>
                <option>5,800,000</option>
                <option>6,300,000</option>
                <option>6,800,000</option>
                <option>7,300,000</option>
                <option>8,300,000+</option>
            </select>
            <select className="border border-gray-300 rounded px-4 py-2 w-full text-gray-500">
              <option>To</option>
              <option>3000,000</option>
                <option>800,000</option>
                <option>1,300,000</option>
                <option>1,800,000</option>
                <option>2,300,000</option>
                <option>2,800,000</option>
                <option>3,300,000</option>
                <option>3,800,000</option>
                <option>4,300,000</option>
                <option>4,800,000</option>
                <option>5,300,000</option>
                <option>5,800,000</option>
                <option>6,300,000</option>
                <option>6,800,000</option>
                <option>7,300,000</option>
                <option>8,300,000+</option>
            </select>
            <button className="bg-green-600 hover:bg-green-700 text-white rounded px-4 py-2 w-full">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* On Road Price Box */}
      <div className="container mx-auto px-4 mt-12">
        <div className="bg-white rounded shadow p-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-gray-700">
            <div className="flex items-center space-x-1">
              
            </div>
            <p className='hover:text-blue-600 font-bold'>
              Calculate the final price that you will pay for your brand new car which includes:
              Ex-Factory Price, Freight Charges and applicable Govt. taxes
            </p>
          </div>
          <button className="mt-4 md:mt-0 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-semibold">
            On Road Price
          </button>
        </div>
      </div>  

{/* Popular New Cars */}
<div className="container mx-auto px-4 sm:px-8 lg:px-16 mt-12">

  <h2 className="text-2xl font-bold text-gray-800 mb-6 hover:text-red-700">Popular New Cars</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      {
        name: 'Toyota Corolla',
        price: 'PKR 59.7 - 75.5 lacs',
        reviews: 637,
        image: 'corolla.png',
      },
      {
        name: 'Suzuki Alto',
        price: 'PKR 27.1 - 31.4 lacs',
        reviews: 225,
        image: 'suzualto3.png',
      },
      {
        name: 'Honda City',
        price: 'PKR 46.5 - 58.5 lacs',
        reviews: 468,
        image: 'hondacity.png',
      },
      {
        name: 'Honda Civic',
        price: 'PKR 86.6 - 99.0 lacs',
        reviews: 377,
        image: 'civic.png',
      },
      {
        name: 'Suzuki Cultus',
        price: 'PKR 42.3 - 46.2 lacs',
        reviews: 273,
        image: 'suzucultus.png',
      },
      {
        name: 'Toyota Yaris Sedan',
        price: 'PKR 44.8 - 63.2 lacs',
        reviews: 149,
        image: 'yaris.png',
      },
      {
        name: 'Suzuki Swift',
        price: 'PKR 43.4 - 47.2 lacs',
        reviews: 199,
        image: 'swift.png',
      },
      {
        name: 'Toyota Fortuner',
        price: 'PKR 1.45 - 1.99 crore',
        reviews: 47,
        image: 'fortuner.png',
      },
    ].map((car, index) => (
      <div key={index} className="bg-white rounded shadow p-4 hover:shadow-lg transition-shadow ">
        <img src={car.image} alt={car.name} className="w-full h-40 object-contain mb-3" />
        <h3 className="text-blue-800 font-semibold text-lg hover:text-opacity-65 text-center">{car.name}</h3>
        <p className="text-green-600 text-center">{car.price}</p>
        <div className="flex items-center text-sm text-gray-600 mt-1 text-center justify-center">
          <span className="text-orange-500  ">★★★☆☆</span>
          <span className="ml-2 text-right">{car.reviews} Reviews</span>
        </div>
      </div>
    ))}
  </div>
</div>
{/* Popular New Cars */}
<div className="container mx-auto px-4 sm:px-8 lg:px-16 mt-12">

  <h2 className="text-2xl font-bold text-gray-800 mb-6 hover:text-red-700">Newly Launched Cars</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      {
        name: 'Inverex Xio',
        price: 'PKR 35 - 52 lacs',
        image: 'xio.png',
      },
      {
        name: 'KIA sorento',
        price: 'PKR 1.37 - 1.6 crore',
        image: 'sorento2.png',
      },
      {
        name: 'Hyundai Tucson',
        price: 'PKR 1.1 - 1.2 crore',
        image: 'tucson.png',
      },
      {
        name: 'DongFeng Box',
        price: 'PKR 64 - 68 lacs',
        image: 'dongfeng.png',
      },
      {
        name: 'Izuzu D-Max',
        price: 'PKR 1.2 - 1.3 crore',
        image: 'dmax2.png',
      },
      {
        name: 'BAW pony',
        price: 'PKR 36.0 lacs',
        image: 'pony.png'
      },
      {
        name: 'BAW Brumpy',
        price: 'PKR 38.0 lacs',
        image: 'baw.png',
      },
      {
        name: 'Jetour Dashing',
        price: 'PKR 83.0 lacs',
        image: 'dashing.png',
      },
    ].map((car, index) => (
      <div key={index} className="bg-white rounded shadow p-4 hover:shadow-lg transition-shadow ">
        <img src={car.image} alt={car.name} className="w-full h-40 object-contain mb-3" />
        <h3 className="text-blue-800 font-semibold text-lg hover:text-opacity-65 text-center">{car.name}</h3>
        <p className="text-green-600 text-center">{car.price}</p>
        <div className="flex items-center text-sm text-gray-600 mt-1 text-center">
          <span className="ml-2 text-right">{car.launch}</span>
        </div>
      </div>
    ))}
  </div>
</div>
{/* CARS MAKE */}
<div className="bg-white py-10">
  <div className="max-w-[1320px] mx-auto px-4">
    <h2 className="text-2xl font-bold text-gray-800 text-center mb-6 hover:text-red-700">New Cars by Make</h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-8 place-items-center">
      {[
        { name: 'Toyota', logo: 'Toyota.png' },
        { name: 'Honda', logo: 'hondalogo.png' },
        { name: 'Suzuki', logo: 'suzulogo.png' },
        { name: 'KIA', logo: 'kialogo.png' },
        { name: 'Hyundai', logo: 'hyundailogo.png' },
        { name: 'Changan', logo: 'changanlogo.png' },
        { name: 'MG', logo: 'mglogo.png' },
        { name: 'DFSK', logo: 'dfsklogo.png' },
        { name: 'Haval', logo: 'havallogo.png' },
        { name: 'BAIC', logo: 'baiclogo.png' },
        { name: 'Peugeot', logo: 'peugeotlogo.png' },
        { name: 'Proton', logo: 'protonlogo.png' },
        { name: 'JW forland', logo: 'jwlogo.png' },
        { name: 'Isuzu', logo: 'Isuzulogo.png' },
        { name: 'BYD', logo: 'bydlogo.png' },
        { name: 'Prince', logo: 'princelogo.png' },
        { name: 'Audi', logo: 'audilogo.png' },
        { name: 'BMW', logo: 'bmwlogo.png' },
        { name: 'Mercedes', logo: 'benzlogo.png' },
        { name: 'ORA', logo: 'oralogo.png' },
        { name: 'Chery', logo: 'cherylogo.png' },
        { name: 'Tank', logo: 'tanklogo.png' },
        { name: 'JMC', logo: 'jmclogo.png' },
        { name: 'Porsche', logo: 'porschelogo.png' },
        { name: 'GUGO', logo: 'gugologo.png' },
        { name: 'Honri', logo: 'honrilogo.png' },
        { name: 'Jetour', logo: 'jetourlogo.png' },
        { name: 'Deepal', logo: 'deepallogo.png' },
        { name: 'Dongfeng', logo: 'dongfenglogo.png' },
        { name: 'BAW', logo: 'bawlogo.png' },
        { name: 'Tesla', logo: 'teslalogo.png' },
        { name: 'Seres', logo: 'sereslogo.png' },
        { name: 'Inverex', logo: 'Inverexlogo.png' },
        { name: 'Daehan', logo: 'daehanlogo.png' },
        { name: 'JAC', logo: 'jaclogo.png' },
      ].map((brand) => (
        <div key={brand.name} className="flex flex-col items-center">
          <div className=" flex items-center justify-center bg-white rounded-full shadow-sm hover:shadow-md transition">
            <img src={brand.logo} alt={brand.name} className="h-full   object-contain" />
          </div>
          <p className="text-md font-semibold hover:text-blue-500 mt-2 text-center text-gray-700">{brand.name}</p>
        </div>
      ))}
    </div>
  </div>
</div>

{/* upcoming cars */}
<div className="container mx-auto px-4 sm:px-8 lg:px-16 mt-12">

  <h2 className="text-2xl font-bold text-gray-800 mb-6 hover:text-red-700">Newly Launched Cars</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      {
        name: '2025 Changan Lumin',
        launch: 'Launching June 2025',
        image: 'lumin.png',
      },
      {
        name: '2025 BYD Shark',
        launch: 'Launching June 2025',
        image: '2025byd.png',
      },
      {
        name: '2025 DFSK Glory 500',
        launch: 'Launching August 2025',
        image: 'glory500.png',
      },
      {
        name: '2025 Chery Tiggo 8 Pro',
        launch: 'Launching August 2025',
        image: 'tiggo2025.png',
      },
      {
        name: '2025 BYD sealion 6',
        launch: 'Launching August 2025',
        image: 'sealion.png',
      },
    ].map((car, index) => (
      <div key={index} className="bg-white rounded shadow p-4 hover:shadow-lg transition-shadow ">
        <img src={car.image} alt={car.name} className="w-full h-40 object-contain mb-3" />
        <h3 className="text-blue-800 font-semibold text-lg hover:text-opacity-65 text-center">{car.name}</h3>
        <div className="flex items-center text-sm text-gray-600 mt-1 text-center justify-center">
          <span className="ml-2 text-right">{car.launch}</span>
        </div>
      </div>
    ))}
  </div>
</div>



{/* New Cars by Body Type */}
<div className=" px-8 py-10 sm:px-12 lg:px-20 pr-12 mt-14 bg-white">
  <h2 className="text-2xl font-bold text-gray-800 mb-6 hover:text-red-700">New Cars by Body Type</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
    {[
      { name: 'Sedan', icon: 'sedanpin.png.svg' },
      { name: 'Hatchback', icon: 'hatchpin.png.svg' },
      { name: 'SUV', icon: 'suvpin.png.svg' },
      { name: 'Pickup Truck', icon: 'pickuppin.png.svg' },
      { name: 'Van', icon: 'vanpin.png.svg' },
      { name: 'Coupe', icon: 'coupepin.png.svg' },
    ].map((type, index) => (
      <div key={index} className="bg-white rounded shadow p-4 hover:shadow-xl transition">
        <img src={type.icon} alt={type.name} className="w-full h-20 object-contain mb-2 mx-auto" />
        <p className="text-gray-700 font-medium hover:text-blue-500">{type.name}</p>
      </div>
    ))}
  </div>
</div>

{/* New Cars by Category */}
<div className="px-8 py-10 sm:px-12 lg:px-20 pr-12">
  <h2 className="text-2xl font-bold text-gray-800 mb-6 hover:text-red-700">New Cars by Category</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
    {[
      { name: 'Electric Cars', icon: 'elecric.png.svg' },
      { name: 'Sports Cars', icon: 'sports.png.svg' },
      { name: 'Luxury Cars', icon: 'luxury.png.svg' },
      { name: 'Family Cars', icon: 'family.png.svg' },
      { name: 'Big Cars', icon: 'big.png.svg' },
      { name: 'Smalll Cars', icon: 'small.png.svg' },
    ].map((category, index) => (
      <div key={index} className="bg-white rounded shadow p-4 hover:shadow-xl transition">
        <img src={category.icon} alt={category.name} className="w-full h-20 object-contain mb-2 mx-auto" />
        <p className="text-gray-700 font-medium hover:text-blue-500">{category.name}</p>
      </div>
    ))}
  </div>
</div>


{/* Car Reviews */}
<div className="px-8 py-10 sm:px-12 lg:px-20 pr-12 mt-14 bg-white">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-2xl font-bold text-gray-800 hover:text-red-700">Car Reviews</h2>
    <a href="#" className="text-blue-600 text-sm hover:underline">Read All Car Reviews</a>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {[
      {
        title: 'Good 7 seater Hybrid SUV',
        car: 'Hyundai Santa Fe Signature',
        author: 'Mr Hamza Ashraf',
        date: 'May 25, 2025',
        rating: 4,
        content: 'Very good comfort 7 Sester hybrid SUV Exelant suspension i drived at long root from Lahore to Karachi too good milage 16.7 km/hour ventilated fron seats , Head to disply very amazing feature and sound system vofer base too good',
        image: 'santafe2.png'
      },
      {
        title: 'Bad price',
        car: 'Honda Civic RS',
        author: 'Maryam Farooq',
        date: 'May 24, 2025',
        rating: 3,
        content: 'Price very high I thing price just 75lak good price booking time 11 month what a joke no see any road new model Honda Civic sale 0% is problem price problem price very high sell or not purchase this car same price chaganX7 and Toyota',
        image: 'civic.png'
      }
    ].map((review, index) => (
      <div key={index} className="flex gap-4 bg-white p-4 rounded shadow hover:shadow-md transition-shadow">
        <img src={review.image} alt={review.title} className="w-28 h-24 object-cover rounded border" />
        <div className="flex-1">
          <h3 className="font-semibold text-blue-800 text-base hover:underline cursor-pointer">{review.title}</h3>
          <p className="text-sm text-gray-600">{review.car}</p>
          <div className="flex items-center text-orange-500 text-sm mb-1">
            {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
            <span className="text-gray-600 ml-2">{review.author}</span>
            <span className="text-gray-500 text-xs ml-2">{review.date}</span>
          </div>
          <p className="text-sm text-gray-700 line-clamp-4">{review.content}</p>
        </div>
      </div>
    ))}
  </div>
</div>


{/* Car Comparisons */}
<div className="container mx-auto px-4 sm:px-8 lg:px-16 mt-12">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-2xl font-bold text-gray-800 hover:text-red-700 ">Car Comparisons</h2>
    <a href="#" className="text-blue-600 text-sm hover:underline">All Car Comparisons</a>
  </div>

  <div className="bg-white w-full max-w-4xl mx-auto p-4 rounded-md shadow">
    {/* Left side with images and primary comparison */}
    <div className="flex flex-col items-center space-y-2">
      <div className="flex items-center space-x-4">
        <img src="x7.png" alt="Changan Oshan X7" className="w-full h-full " />
        <div className="bg-red-600 text-white px-2 py-1 mt-4 rounded-full text-xl font-semibold">vs</div>
        <img src="x70.png" alt="Jetour X70 Plus" className="w-full h-full" />
      </div>
      <div className="flex justify-between w-full text-center font-medium hover: text-blue-700 text-sm mt-2">
        <span className="flex-1">Changan Oshan X7</span>
        <span className="flex-1">Jetour X70 Plus</span>
      </div>
      <button className="mt-3 border border-blue-700 text-blue-700 py-1 px-4 rounded hover:bg-blue-700 hover:text-white transition">
        View Comparison
      </button>
    </div>
  </div>
</div>


{/* new car dealers */}
<section className="bg-gray-100 py-12 px-4 md:px-16">
  <h2 className="text-2xl font-semibold text-center mb-10 hover:text-red-700">New Car Prices And Dealers</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
    {/* Car Prices */}
    <div className="space-y-2">
      <p className="text-gray-700 hover:text-blue-500">Suzuki Car Prices</p>
      <p className="text-gray-700 hover:text-blue-500">Toyota Car Prices</p>
      <p className="text-gray-700 hover:text-blue-500">Honda Car Prices</p>
      <p className="text-gray-700 hover:text-blue-500">KIA Car Prices</p>
      <p className="text-gray-700 hover:text-blue-500">Hyundai Car Prices</p>
      <p className="text-gray-700 hover:text-blue-500">BYD Car Prices</p>

      <button className="mt-4 border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition">
        View All Car Prices
      </button>
    </div>

    {/* Dealers */}
    <div className="space-y-2">
      <p className="text-gray-700 hover:text-blue-500">Toyota Dealers</p>
      <p className="text-gray-700 hover:text-blue-500">Suzuki Dealers</p>
      <p className="text-gray-700 hover:text-blue-500">Honda Dealers</p>
      <p className="text-gray-700 hover:text-blue-500">BMW Dealers</p>
      <p className="text-gray-700 hover:text-blue-500">Changan Dealers</p>
      <p className="text-gray-700 hover:text-blue-500">FAW Dealers</p>

      <button className="mt-4 border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition">
        View All Dealers
      </button>
    </div>
  </div>
</section>


{/* Banks for Cars */}
<div className=" px-8 py-10 sm:px-12 lg:px-20 pr-12 mt-14 bg-white">
  <h2 className="text-2xl font-bold text-gray-800 mb-6 hover:text-red-700">Banks For New Car Financing</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
    {[
      { icon: 'faysalbank.png' },
      { icon: 'mcb.png' },
      { icon: 'dubaibank.png' },
      { icon: 'mcb2.png' },
      { icon: 'albaraka.png' },
      { icon: 'bankalfalah.png' },
    ].map((type, index) => (
      <div key={index} className="bg-white rounded shadow p-4 hover:shadow-xl transition">
        <img src={type.icon} alt={type.name} className="w-full h-20 object-contain mb-2 mx-auto" />
        <p className="text-gray-700 font-medium hover:text-blue-500">{type.name}</p>
      </div>
    ))}
  </div>
</div>

{/* insurance companies */}
<div className="px-8 py-10 sm:px-12 lg:px-20 pr-12">
  <h2 className="text-2xl font-bold text-gray-800 mb-6 hover:text-red-700">Cars Insurance Companies</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
    {[
      { icon: 'ublinsurance.png' },
      { icon: 'EFU.png' },
      { icon: 'igi.png' },
      { icon: 'TPL.png' },
      { icon: 'UIC.png' },
      { icon: 'Jubilee.png' },
    ].map((category, index) => (
      <div key={index} className="bg-white rounded shadow p-4 hover:shadow-xl transition">
        <img src={category.icon} alt={category.name} className="w-full h-20 object-contain mb-2 mx-auto" />
        <p className="text-gray-700 font-medium hover:text-blue-500">{category.name}</p>
      </div>
    ))}
  </div>
</div>
<FAQSection/>


<div className='px-8 py-10 sm:px-12 lg:px-20 pr-12 mt-14 bg-white'>
  <NewCarsIntro/>
</div>


<section className="bg-slate-100 py-10">
  <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
    
    {/* Text Section */}
    <div className="flex-1">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
        Get The PakWheels App
      </h2>
      <p className="text-gray-700 mb-5">
        Buy & Sell Cars, Bikes and Auto Parts faster and better using our App
      </p>
      
      {/* Store Buttons */}
      <div className="flex flex-wrap gap-3">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
          alt="Google Play"
          className="h-12 cursor-pointer"
        />
        <img
          src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
          alt="App Store"
          className="h-12 cursor-pointer"
        />

      </div>
    </div>

   
  </div>
</section>





        
    </div>




  );
};

export default NewCars;
