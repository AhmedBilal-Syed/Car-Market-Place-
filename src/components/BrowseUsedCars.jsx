import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { categories } from "../data/cars";

const UsedCarsBrowser = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);
  const scrollRef = useRef(null);

  const ITEMS_PER_PAGE = 12; 

  const isPagedGridCategory = ["Category", "Body Type", "Make"].includes(
    categories[activeCategory].title
  );

  const pagedItems = isPagedGridCategory
    ? categories[activeCategory].items.slice(
        pageIndex * ITEMS_PER_PAGE,
        (pageIndex + 1) * ITEMS_PER_PAGE
      )
    : categories[activeCategory].items;

  const pageCount = isPagedGridCategory
    ? Math.ceil(categories[activeCategory].items.length / ITEMS_PER_PAGE)
    : 1;

  const goToPrevPage = () => {
    setPageIndex((prev) => Math.max(prev - 1, 0));
  };

  const goToNextPage = () => {
    setPageIndex((prev) => Math.min(prev + 1, pageCount - 1));
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  React.useEffect(() => {
    setPageIndex(0);
  }, [activeCategory]);

  return (
    <div className="bg-slate-100">
      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-[22px] font-bold text-[#333] mb-6 pl-2">Browse Used Cars</h1>

        <div className="flex gap-8 mb-6 border-b border-[#e5e5e5] pb-[9px] overflow-x-auto no-scrollbar pl-2">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`whitespace-nowrap pb-[3px] px-1 text-[15px] font-medium ${
                activeCategory === index
                  ? "text-[#0066cc] border-b-2 border-[#0066cc]"
                  : "text-[#666] hover:text-[#0066cc]"
              }`}
              onClick={() => setActiveCategory(index)}
            >
              {category.title}
            </button>
          ))}
        </div>

        <div className="relative px-2">
          {isPagedGridCategory ? (
            <>
              <div className="grid grid-cols-6 gap-4 px-2 py-4">
                {pagedItems.map((item, index) => (
                  <div
                    key={index}
                    className={`rounded-[4px] p-[10px] border border-[#e5e5e5] cursor-pointer ${categories[activeCategory].cardClass} flex flex-col items-center`}
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
            </>
          ) : ["City", "Budget"].includes(categories[activeCategory].title) ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-2 py-4">
              {categories[activeCategory].items.map((item, index) => (
                <div
                  key={index}
                  className="text-m font-semibold text-[#333] hover:text-[#0066cc] hover:underline cursor-pointer"
                  title={`Cars for sale in ${item.name}`}
                >
                  {item.name}
                </div>
              ))}
            </div>
          ) : (
            <div
              ref={scrollRef}
              className="flex gap-[15px] overflow-x-auto py-2 px-2 scroll-smooth no-scrollbar"
              style={{
                scrollSnapType: "x mandatory",
                scrollbarWidth: "none",
                msOverflowStyle: "none"
              }}
            >
              <style>
                {`
                  div::-webkit-scrollbar {
                    display: none;
                  }
                `}
              </style>
              {categories[activeCategory].items.map((item, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-[178px] rounded-[4px] p-[10px] border border-[#e5e5e5] cursor-pointer ${categories[activeCategory].cardClass}`}
                  style={{ scrollSnapAlign: "start" }}
                >
                  <div className="h-[100px] w-full mb-[10px] bg-white rounded-[2px] flex flex-col items-center justify-center text-[#999]">
                    {item.icon && (
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-16 h-16 object-contain mb-2"
                        onError={(e) => e.target.style.display = "none"}
                      />
                    )}
                    <span className="text-[12px]">Image placeholder</span>
                  </div>
                  <h3 className="text-[14px] font-medium text-[#333] mb-[5px] leading-tight text-center">
                    {item.name}
                  </h3>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UsedCarsBrowser;