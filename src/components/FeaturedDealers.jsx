import React from 'react'

const FeaturedDealers = () => {
  return (

<div className=" px-8 py-10 sm:px-12 lg:px-20 pr-12 mt-14 bg-slate-300">
  <h2 className="text-2xl font-bold text-gray-800 mb-6 hover:text-red-700">Featured Dealers</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
    {[
      { name: "", icon: '/sigma.jpg' },
      { name: "", icon: '/hafiz.jpg' },
      { name: "", icon: '/segal.jpg' },
      { name: '', icon: '/supreme.jpg' },
      { name: '', icon: '/ghani.jpg' },
      { name: '', icon: '/11.jpg' },
    ].map((type, index) => (
      <div key={index} className="bg-slate-100 rounded shadow p-4 hover:shadow-xl transition">
        <img src={type.icon} alt={type.name} className="w-full h-20 object-contain mb-2 mx-auto" />
        <p className="text-gray-700 font-medium hover:text-blue-500">{type.name}</p>
      </div>
    ))}
  </div>
</div>
  )
}

export default FeaturedDealers