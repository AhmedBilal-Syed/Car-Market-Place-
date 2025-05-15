import React from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="w-full max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-4 flex items-center  gap-x-3">
      {/* Search Icon */}
      <Search className="text-gray-400 w-5 h-5" />

      {/* Input Field */}
      <input
        type="text"
        placeholder="Search by make, model, or city..."
        className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400 text-base"
      />
    </div>
  );
};

export default SearchBar;
