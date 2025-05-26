import React from 'react';


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
        image: 'https://cache4.pakwheels.com/system/car_generation_pictures/7095/original/Toyota_Corolla_-_13th_Generation_-_Facelift.jpg?1650347093',
      },
      {
        name: 'Suzuki Alto',
        price: 'PKR 27.1 - 31.4 lacs',
        reviews: 225,
        image: 'https://cache2.pakwheels.com/system/car_generation_pictures/6117/original/Suzuki_Alto_2019.jpg?1554976973',
      },
      {
        name: 'Honda City',
        price: 'PKR 46.5 - 58.5 lacs',
        reviews: 468,
        image: 'https://cache3.pakwheels.com/system/car_generation_pictures/6725/original/Honda_City_-_7th_Generation.jpg?1619441468',
      },
      {
        name: 'Honda Civic',
        price: 'PKR 86.6 - 99.0 lacs',
        reviews: 377,
        image: 'https://cache2.pakwheels.com/system/car_generation_pictures/6592/original/Honda_Civic.jpg?1609150013',
      },
      {
        name: 'Suzuki Cultus',
        price: 'PKR 42.3 - 46.2 lacs',
        reviews: 273,
        image: 'https://cache4.pakwheels.com/system/car_generation_pictures/6580/original/Suzuki_Cultus.jpg?1609146005',
      },
      {
        name: 'Toyota Yaris Sedan',
        price: 'PKR 44.8 - 63.2 lacs',
        reviews: 149,
        image: 'https://cache3.pakwheels.com/system/car_generation_pictures/6553/original/Toyota_Yaris.jpg?1607503560',
      },
      {
        name: 'Suzuki Swift',
        price: 'PKR 43.4 - 47.2 lacs',
        reviews: 199,
        image: 'https://cache4.pakwheels.com/system/car_generation_pictures/6642/original/Suzuki_Swift.jpg?1614843000',
      },
      {
        name: 'Toyota Fortuner',
        price: 'PKR 1.45 - 1.99 crore',
        reviews: 47,
        image: 'https://cache1.pakwheels.com/system/car_generation_pictures/6594/original/Toyota_Fortuner.jpg?1609150389',
      },
    ].map((car, index) => (
      <div key={index} className="bg-white rounded shadow p-4 hover:shadow-lg transition-shadow ">
        <img src={car.image} alt={car.name} className="w-full h-40 object-contain mb-3" />
        <h3 className="text-blue-800 font-semibold text-lg hover:text-opacity-65 text-center">{car.name}</h3>
        <p className="text-green-600 text-center">{car.price}</p>
        <div className="flex items-center text-sm text-gray-600 mt-1 text-center">
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
        image: '',
      },
      {
        name: 'KIA sorento',
        price: 'PKR 1.37 - 1.6 crore',
        image: '',
      },
      {
        name: 'Hyundai Tucson',
        price: 'PKR 1.1 - 1.2 crore',
        image: '',
      },
      {
        name: 'DongFeng Box',
        price: 'PKR 64 - 68 lacs',
        image: '',
      },
      {
        name: 'Izuzu D-Max',
        price: 'PKR 1.2 - 1.3 crore',
        image: '',
      },
      {
        name: 'BAW pony',
        price: 'PKR 36.0 lacs',
        image: ''
      },
      {
        name: 'BAW Brumpy',
        price: 'PKR 38.0 lacs',
        image: '',
      },
      {
        name: 'Jetour Dashing',
        price: 'PKR 83.0 lacs',
        image: '',
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
        { name: 'Honda', logo: '' },
        { name: 'Suzuki', logo: '' },
        { name: 'KIA', logo: '' },
        { name: 'Hyundai', logo: '' },
        { name: 'Changan', logo: '' },
        { name: 'MG', logo: '' },
        { name: 'DFSK', logo: '' },
        { name: 'Haval', logo: '' },
        { name: 'BAIC', logo: '' },
        { name: 'Peugeot', logo: '' },
        { name: 'Proton', logo: '' },
        { name: 'FAW', logo: '' },
        { name: 'Isuzu', logo: '' },
        { name: 'Nissan', logo: '' },
        { name: 'Chevrolet', logo: '' },
        { name: 'Daihatsu', logo: '' },
        { name: 'Audi', logo: '' },
        { name: 'BMW', logo: '' },
        { name: 'Mercedes', logo: '' },
        { name: 'Ford', logo: '' },
        { name: 'Chery', logo: '' },
        { name: 'Geely', logo: '' },
        { name: 'Lexus', logo: '' },
        { name: 'Porsche', logo: '' },
        { name: 'Rolls-Royce', logo: '' },
        { name: 'Mini', logo: '' },
        { name: 'Hino', logo: '' },
        { name: 'Land Rover', logo: '' },
        { name: 'Jaguar', logo: '' },
        { name: 'Renault', logo: '' },
        { name: 'Tesla', logo: '' },
        { name: 'Volkswagen', logo: '' },
        { name: 'Subaru', logo: '' },
        { name: 'Mitsubishi', logo: '' },
        { name: 'JAC', logo: '' },
      ].map((brand) => (
        <div key={brand.name} className="flex flex-col items-center">
          <div className=" flex items-center justify-center bg-white rounded shadow-sm hover:shadow-md transition">
            <img src={brand.logo} alt={brand.name} className="h-full   object-contain" />
          </div>
          <p className="text-xs mt-2 text-center text-gray-700">{brand.name}</p>
        </div>
      ))}
    </div>
  </div>
</div>

        
    </div>




  );
};


export default NewCars;
