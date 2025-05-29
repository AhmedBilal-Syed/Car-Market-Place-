import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { data1 } from "../data/data1"; 

const BodyTypeSection = () => {
  const bodyTypeCategory = data1.find(c => c.title === "Body Type");
  const ITEMS_PER_PAGE = 12;
  const [pageIndex, setPageIndex] = useState(0);

  const pagedItems = bodyTypeCategory.items.slice(
    pageIndex * ITEMS_PER_PAGE,
    (pageIndex + 1) * ITEMS_PER_PAGE
  );

  const pageCount = Math.ceil(bodyTypeCategory.items.length / ITEMS_PER_PAGE);

  const goToPrevPage = () => {
    setPageIndex(prev => Math.max(prev - 1, 0));
  };

  const goToNextPage = () => {
    setPageIndex(prev => Math.min(prev + 1, pageCount - 1));
  };

  return (
    <div className="bg-slate-100 px-4 py-6">
      <h2 className="text-[22px] font-bold text-[#333] mb-6 pl-2">Browse by Body Type</h2>
      
      <div className="grid grid-cols-6 gap-4 px-2 py-4">
        {pagedItems.map((item, index) => (
          <div
            key={index}
            className={`rounded-[4px] p-[10px] border border-[#e5e5e5] cursor-pointer ${bodyTypeCategory.cardClass} flex flex-col items-center`}
            style={{ minHeight: "160px" }}
            title={item.name}
          >
            {item.icon && (
              <img
                src={item.icon}
                alt={item.name}
                className="w-20 h-20 object-contain mb-2 rounded-md"
                onError={(e) => e.target.style.display = "none"}
              />
            )}
            <h3 className="text-[14px] font-medium text-[#3b3b3b] text-center">
              {item.name}
            </h3>
          </div>
        ))}
      </div>

      {pageCount > 1 && (
        <div className="flex justify-center items-center gap-4 mt-4 select-none">
          <button
            onClick={goToPrevPage}
            disabled={pageIndex === 0}
            className={`p-2 rounded border border-[#ddd] hover:bg-[#f5f5f5] ${
              pageIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <ChevronLeft className="h-5 w-5 text-[#666]" />
          </button>
          <span className="text-sm text-[#666]">
            Page {pageIndex + 1} of {pageCount}
          </span>
          <button
            onClick={goToNextPage}
            disabled={pageIndex === pageCount - 1}
            className={`p-2 rounded border border-[#ddd] hover:bg-[#f5f5f5] ${
              pageIndex === pageCount - 1
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            <ChevronRight className="h-5 w-5 text-[#666]" />
          </button>
        </div>
      )}
    </div>
  );
};

export default BodyTypeSection;
