import React, { useState } from 'react';

const NewCarsIntro = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleContent = () => setShowMore(!showMore);

  return (
    <div className="max-w-4xl mx-auto p-4 text-gray-800">
      <p className="mb-4">
        Find <strong>new cars</strong> from PakWheels.com to avoid any hassle. You can see the <strong>new car prices in Pakistan</strong> through our new car price section. Moreover, one can get the exact price of the vehicles through the on-road price calculator as well. You can choose your desired vehicles and buy your dream car within the right budget through our find new cars section.
      </p>

      {showMore && (
        <>
          <p className="mb-4">
            As we are the leading automotive website in the country, you can also get first-hand knowledge of new car launch in Pakistan, and also the <strong>latest vehicles in Pakistan</strong> that are being introduced by the companies such as Honda, Toyota, Suzuki, Kia, Hyundai, Changan, MG and Proton.
          </p>
          <p className="mb-4">
            If you are having trouble finding the car dealers, then you can easily find it from our dealers’ section. Furthermore, if there is any trouble at deciding which vehicle to buy, you can <strong>browse our videos</strong> of cars, can read <strong>car reviews</strong> on our blog section, and see the <strong>car comparison</strong>; these will help you in deciding the vehicle you want. When it's time to get rid of your car, you can post FREE Ad and <strong>sell car</strong> easily through PakWheels.
          </p>
          <p className="mb-4">
            Moving onwards, you can also finance your car and view the <strong>banks for new car financing</strong>. Additionally, you can also find the vehicle through <strong>Cars By Make, Cars By City, Cars by Category, Cars by Body Type, Cars by Color, and Cars by Province</strong> sections. If you are interested, we have another feature, namely Featured New Cars, where you can view popular, upcoming, and newly launched cars. You can also buy <strong>Car Parts</strong> online in Pakistan through PakWheels.com.
          </p>
          <p className="mb-4">
            Lastly, you can also explore PakWheels’ Cool Rides, Forums, and Auto Show sections.
          </p>
        </>
      )}

      <button
        onClick={toggleContent}
        className="text-blue-600 hover:underline font-medium"
      >
        {showMore ? 'Show Less ▲' : 'Show More ▼'}
      </button>
    </div>
  );
};

export default NewCarsIntro;
