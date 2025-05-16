import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const UsedCarsBrowser = () => {
  const categories = [
    {
      title: "Category",
      items: ["City", "Make", "Model", "Budget", "Body Type"]
    },
    {
      title: "Automatic cars",
      items: ["Family Cars", "5 Seater", "Small cars", "Big cars", "Imported cars" ,"japanes cars"]
    },
    {
      title: "Old Cars",
      items: ["5 Door", "4 Door", "1000cc cars", "1300cc cars", "Japanese cars"]
    }
  ];

  const [activeCategory, setActiveCategory] = useState(0);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Browse Used Cars</h1>

      {/* Category Tabs */}
      <div className="flex gap-6 mb-6 border-b border-gray-200 pb-2">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-1 pb-2 font-medium ${
              activeCategory === index
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveCategory(index)}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Cards Container with Arrows */}
      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md border border-gray-200 hover:bg-gray-50"
        >
          <ChevronLeft className="text-gray-600 h-5 w-5" />
        </button>
        
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md border border-gray-200 hover:bg-gray-50"
        >
          <ChevronRight className="text-gray-600 h-5 w-5" />
        </button>

        {/* Horizontal Cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide py-2 px-1"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {categories[activeCategory].items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-48 bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-md cursor-pointer"
              style={{ scrollSnapAlign: "start" }}
            >
              <h3 className="font-medium text-gray-800">{item}</h3>
              {/* Empty space where image would be */}
              <div className="h-20 mt-2 bg-gray-100 rounded flex items-center justify-center text-gray-400">
                Image placeholder
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsedCarsBrowser;