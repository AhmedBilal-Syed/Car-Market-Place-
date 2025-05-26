import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FAQSection from '../components/FAQSection';

const SellCar = () => {
  return (
    <>
      <main className="bg-slate-300 py-12 px-4 lg:px-20">
        <h2 className="text-3xl font-bold text-center text-blue-950">
          Sell Your Car Online in Pakistan Instantly!
        </h2>
        <p className="text-center text-3xl font-semibold mt-2 text-gray-700">
          Choose How To Sell Your Car
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          
          <section className="bg-white p-6 rounded-xl shadow-md text-center min-h-[24rem]">
            <img
              src="/postimg.png"
              alt="Post your car ad"
              className="w-32 sm:w-40 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-4">
              Post your Ad on PakWheels
            </h3>
            <ul className="text-left text-sm text-gray-600 space-y-4 leading-relaxed">
              <li>✔️ Post your Ad for Free in 3 Easy Steps</li>
              <li>✔️ Get Genuine offers from Verified Buyers</li>
              <li>✔️ Sell your car Fast at the Best Price</li>
            </ul>
            <Link
              to="/post-ad"
              className="inline-block mt-6 bg-[#0d2159] text-white px-6 py-2 rounded-md font-medium hover:bg-[#092045] transition-all"
              aria-label="Navigate to Post Your Ad page"
            >
              Post An Ad
            </Link>
          </section>

          
          <section className="bg-white p-6 rounded-xl shadow-md text-center min-h-[24rem]">
            <img
              src="/postsifm.png"
              alt="Sell it for me service"
              className="w-32 sm:w-40 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-4">
              Try PakWheels Sell It For Me
            </h3>
            <ul className="text-left text-sm text-gray-600 space-y-4 leading-relaxed">
              <li>✔️ Dedicated Sales Expert to Sell your Car</li>
              <li>✔️ We Bargain for you and share the Best Offer</li>
              <li>✔️ We ensure Safe & Secure Transaction</li>
            </ul>
            <p className="text-xs text-red-600 mt-2">
              * Service available only in Karachi, Lahore, Islamabad and Rawalpindi
            </p>
            <Link
              to="/register-your-car"
              className="inline-block mt-6 bg-[#0d2159] text-white px-6 py-2 rounded-md font-medium hover:bg-[#092045] transition-all"
              aria-label="Navigate to Sell It For Me registration page"
            >
              Sell It For Me
            </Link>
          </section>
        </div>

        <p className="text-center text-xs text-gray-500 mt-10">
          * By continuing, you are agreeing to the{" "}
          <a href="#" className="underline text-blue-600">
            terms of service
          </a>{" "}
          and{" "}
          <a href="#" className="underline text-blue-600">
            privacy policy
          </a>
          .
        </p>
      </main>

      
      <div className="max-w-6xl mx-auto py-12 px-4 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Why Sell Your Car On PakWheels?
          </h2>
        </div>

    
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
            <p className="text-2xl font-bold text-blue-600 mb-2">#1</p>
            <p className="text-gray-700">Pakistan's #1 automotive marketplace</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
            <p className="text-2xl font-bold text-blue-600 mb-2">5</p>
            <p className="text-lg font-bold text-gray-900 mb-1">Lakh</p>
            <p className="text-gray-700">5 lac+ visitors daily</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
            <p className="text-2xl font-bold text-blue-600 mb-2">3M</p>
            <p className="text-gray-700">3 million+ cars sold</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
            <p className="text-2xl font-bold text-blue-600 mb-2">48 Hours</p>
            <p className="text-gray-700">80% cars sold within 48 hours</p>
          </div>
        </div>

        
        <div className="mt-16 bg-slate-100 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-12">
            3 Simple Steps To Sell Your Car
          </h3>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            
            <div className="flex-1 flex flex-col items-center">
              <img 
                src="/signup.svg" 
                alt="Sign up step"
                className="w-20 h-20 object-contain mb-4"
              />
              <div className=" p-6  shadow-sm w-full">
                <h4 className="font-semibold text-lg mb-2 text-center">Sign up</h4>
                <p className="text-gray-600 text-center">Register yourself on PakWheels.com to post an ad.</p>
              </div>
            </div>
            
            
            <div className="flex-1 flex flex-col items-center">
              <img 
                src="/mobil.svg" 
                alt="Create ad step"
                className="w-20 h-20 object-contain mb-4"
              />
              <div className=" shadow-sm w-full">
                <h4 className="font-semibold text-lg mb-2 text-center">Create your ad</h4>
                <p className="text-gray-600 text-center">Provide necessary details about your used car and make sure to upload clear photos.</p>
              </div>
            </div>
            
            
            <div className="flex-1 flex flex-col items-center">
              <img 
                src="/car.svg" 
                alt="Get offers step"
                className="w-20 h-20 object-contain mb-4"
              />
              <div className=" p-6 rounded-lg shadow-sm w-full">
                <h4 className="font-semibold text-lg mb-2 text-center">Get Instant Offers</h4>
                <p className="text-gray-600 text-center">Relax & get ready for instant offers from genuine buyers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


<div className="max-w-6xl mx-auto py-12 px-4 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            How To Sell Your Car Quickly?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 text-blue-600 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4">
                1
              </div>
              <h3 className="text-xl font-semibold">Upload Good Quality Photos</h3>
            </div>
            <p className="text-gray-600 ml-12">
              Take photos in landscape mode. Ads with multiple good quality images have 90% more views and are likely to be sold faster.
            </p>
          </div>

          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 text-blue-600 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4">
                2
              </div>
              <h3 className="text-xl font-semibold">Feature Your Ad</h3>
            </div>
            <p className="text-gray-600 ml-12">
              Feature your ad to bring it to the top. Ads with a featured tag get sold 10 times faster.
            </p>
          </div>

          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 text-blue-600 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4">
                3
              </div>
              <h3 className="text-xl font-semibold">Attach Auction Sheet</h3>
            </div>
            <p className="text-gray-600 ml-12">
              For imported Japanese cars, attaching PakWheels Verified Auction Sheet saves you time from needless calls of buyers inquiring about your car's history.
            </p>
          </div>

        
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 text-blue-600 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4">
                4
              </div>
              <h3 className="text-xl font-semibold">Attach Inspection Report</h3>
            </div>
            <p className="text-gray-600 ml-12">
              Trust is built on credibility. Make your ad more credible with PakWheels Inspection Report to avail the best possible price for your car.
            </p>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-12">
          <p className="text-yellow-700">
            <span className="font-semibold">Note:</span> In case you are short on time to follow these tips yourself, then PakWheels Sell It For Me service is the right choice for you. Our trained sales team takes full responsibility, from posting your ad to ensuring that you get the best offer.
          </p>
        </div>

       
      </div>



<div className="max-w-6xl mx-auto py-12 px-4 bg-white">
  <div className="text-center mb-12">
    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
      Interesting Tips
    </h2>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
      <div className="flex items-center mb-3">
        <div className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold">Repair Minor Defects</h3>
      </div>
      <p className="text-gray-600">
        Get your car repaired and fix any minor defects to increase its resale value
      </p>
    </div>

    
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
      <div className="flex items-center mb-3">
        <div className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold">Set Reasonable Price</h3>
      </div>
      <p className="text-gray-600">
        Set up a reasonable price as it will determine how long it will take for your car to sell
      </p>
    </div>

    
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
      <div className="flex items-center mb-3">
        <div className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold">Beware of Fraud</h3>
      </div>
      <p className="text-gray-600">
        Beware of unrealistic offers and carry out safe transactions to avoid being defrauded
      </p>
    </div>

    
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
      <div className="flex items-center mb-3">
        <div className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold">Get Inspection</h3>
      </div>
      <p className="text-gray-600">
        Get your car inspected by PakWheels to get premium rates
      </p>
    </div>
  </div>
</div>

<FAQSection/>
    </>
  );
};

export default SellCar;