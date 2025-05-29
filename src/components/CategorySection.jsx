import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { categories } from "../data/cars";

const ITEMS_PER_PAGE = 12;

const CategorySection = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const category = categories.find(c => c.title === "Category");

  const pagedItems = category.items.slice(
    pageIndex * ITEMS_PER_PAGE,
    (pageIndex + 1) * ITEMS_PER_PAGE
  );
  const pageCount = Math.ceil(category.items.length / ITEMS_PER_PAGE);

  return (
    <div className="px-4 py-6 bg-white rounded-xl shadow-sm">
      <h2 className="text-xl font-bold text-gray-800 mb-4 pl-2">
        Browse by Category
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {pagedItems.map((item, index) => (
          <div
            key={index}
            className={`rounded-lg p-4 border border-gray-200 cursor-pointer ${category.cardClass} flex flex-col items-center transition-transform hover:scale-105 bg-slate-50`}
            style={{ minHeight: "160px" }}
          >
            {item.icon && (
              <img
                src={item.icon}
                alt={item.name}
                className="w-20 h-20 object-contain mb-2 rounded-md"
                onError={(e) => (e.target.style.display = "none")}
              />
            )}
            <h3 className="text-sm font-medium text-gray-800 text-center">
              {item.name}
            </h3>
          </div>
        ))}
      </div>

      {pageCount > 1 && (
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            onClick={() => setPageIndex(prev => Math.max(prev - 1, 0))}
            disabled={pageIndex === 0}
            className={`p-2 rounded border border-gray-300 hover:bg-gray-100 transition ${
              pageIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
          <span className="text-sm text-gray-600">
            Page {pageIndex + 1} of {pageCount}
          </span>
          <button
            onClick={() => setPageIndex(prev => Math.min(prev + 1, pageCount - 1))}
            disabled={pageIndex === pageCount - 1}
            className={`p-2 rounded border border-gray-300 hover:bg-gray-100 transition ${
              pageIndex === pageCount - 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      )}
    </div>
  );
};

export default CategorySection;
