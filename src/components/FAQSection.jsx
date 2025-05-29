import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Which are the most popular new cars available in Pakistan in 2025?",
      answer: "Popular new cars in Pakistan include Honda Civic, Suzuki Alto and Toyota Corolla."
    },
    {
      question: "Which are the most popular new car brands in Pakistan?",
      answer: "Popular new car brands in Pakistan include Honda, Toyota and Suzuki."
    },
    {
      question: "Are there any upcoming cars in Pakistan?",
      answer: "There are a total of 5 new car models expected to launch in Pakistan with 2025 Changan Lumin, 2025 BYD Shark and 2025 DFSK Glory 500 launching soon."
    },
    {
      question: "Which brands offer electric cars in Pakistan?",
      answer: "Electric cars are offered by Audi, MG, and BMW in Pakistan."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 hover:text-red-700">
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