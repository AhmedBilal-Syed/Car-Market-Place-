import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How long will it take to sell a car on PakWheels?",
      answer: "According to our past data, it takes a couple of days or even hours to sell a car. The price, pictures and description decides how soon you can sell your car. Get your ad featured to sell it even faster. Check out PakWheels Used Car Selling Guide for more information."
    },
    {
      question: "How can I sell car online in Pakistan?",
      answer: "Go to PakWheels.com & post a free ad to sell your car online. PakWheels connects you to millions of buyers easily and quickly from the comfort of your home. All you have to do is post a free ad to sell your car, put up a reasonable price and that's it! You will get genuine offers from verified buyers."
    },
    {
      question: "How can I get the most money for selling my car?",
      answer: "Post detailed description including condition of the car, mileage, service history, documents and ownership details etc. Upload good quality pictures and set a fair price based on market value."
    },
    {
      question: "Which site is best to sell car online in Pakistan?",
      answer: "PakWheels.com is the best site to sell cars online in Pakistan. It has millions of verified buyers and tons of other car selling features including PakWheels Sell it For Me, used car price calculator."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Used Car Sell FAQs
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <button
              className="w-full flex justify-between items-center p-6 text-left"
              onClick={() => toggleFAQ(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`faq-${index}`}
            >
              <h3 className="text-lg font-semibold text-blue-600">
                {faq.question}
              </h3>
              <svg
                className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${activeIndex === index ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div
              id={`faq-${index}`}
              className={`px-6 pb-6 pt-0 transition-all duration-300 ${activeIndex === index ? 'block' : 'hidden'}`}
            >
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;