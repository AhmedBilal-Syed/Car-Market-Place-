import React from 'react';

function RegisterYourCar() {
  return (
    <div className="pt-24 px-4 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-2">Get your car registered in PakWheels Sell It For Me</h1>
      <p className="mb-6 text-sm text-gray-600">
        Let PakWheels experts take the difficulty out of selling your car! We will manage your ad and find the best possible deal for you.
        Choose what's best for you today.
      </p>

      <form className="space-y-6 bg-white p-6 shadow rounded-xl border">
        
        <div>
          <label className="block mb-1 font-medium">Model Year<span className="text-red-500">*</span></label>
          <input type="text" placeholder="Year" className="w-full border rounded px-3 py-2" required />
        </div>

        
        <div>
          <label className="block mb-1 font-medium">Car Info<span className="text-red-500">*</span></label>
          <input type="text" placeholder="Make / Model" className="w-full border rounded px-3 py-2" required />
        </div>

    
        <div>
          <label className="block mb-1 font-medium">Registered In</label>
          <select className="w-full border rounded px-3 py-2">
            <option value="">Select City</option>
            <option value="Un-Registered">Un-Registered</option>
            <option value="Punjab">Punjab</option>
            <option value="Sindh">Sindh</option>
            <option value="Karachi">Karachi</option>
            <option value="Lahore">Lahore</option>
            <option value="Islamabad">Islamabad</option>
            <option value="Rawalpindi">Rawalpindi</option>
            <option value="Peshawar">Peshawar</option>
            
          </select>
        </div>

        
        <div>
          <label className="block mb-1 font-medium">Assembly<span className="text-red-500">*</span></label>
          <select className="w-full border rounded px-3 py-2" required>
            <option value="">Select</option>
            <option value="Local">Local</option>
          </select>
        </div>

        
        <div>
          <label className="block mb-1 font-medium">Location<span className="text-red-500">*</span></label>
          <input type="text" placeholder="City / Area" className="w-full border rounded px-3 py-2" required />
        </div>

        
        <div>
          <label className="block mb-1 font-medium">Address<span className="text-red-500">*</span></label>
          <input type="text" placeholder="Street Address" className="w-full border rounded px-3 py-2" required />
        </div>

        
        <div>
          <label className="block mb-1 font-medium">Inspection Slot<span className="text-red-500">*</span></label>
          <input type="text" placeholder="Select preferred time" className="w-full border rounded px-3 py-2" required />
        </div>

        
        <div>
          <label className="block mb-1 font-medium">Full Name<span className="text-red-500">*</span></label>
          <input type="text" placeholder="Your name" className="w-full border rounded px-3 py-2" required />
        </div>

        
        <div>
          <label className="block mb-1 font-medium">Phone<span className="text-red-500">*</span></label>
          <input type="tel" placeholder="03XXXXXXXXX" className="w-full border rounded px-3 py-2" required />
        </div>

        
        <div className="text-xs text-gray-500">
          Initial payment starting from Rs. 2,000 will be charged for inspection depending upon your car make and model at the time of onboarding.
          1% of the car's selling price will be charged as commission once the car is sold.
          By registering on the service you are agreeing to the <span className="text-blue-600 underline cursor-pointer">Eligibility Criteria</span>,
          <span className="text-blue-600 underline cursor-pointer"> Required Documents</span>,
          <span className="text-blue-600 underline cursor-pointer"> Pricing/Commission</span> and
          <span className="text-blue-600 underline cursor-pointer"> Terms of Service</span>.
        </div>

        
        <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition">
          Let PakWheels Help You Sell Your Car
        </button>
      </form>

      
    

      
      <div className="mt-6 text-center  mb-4 text-sm">
        <p>Not interested? <span className="text-blue-600 underline cursor-pointer">Post a normal Ad</span></p>
      </div>
    </div>
  );
}

export default RegisterYourCar;
