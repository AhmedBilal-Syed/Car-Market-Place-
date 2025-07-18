﻿import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import SearchBar from "./SearchBar";
import PostAdDropdown from "./PostAdDropdown";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const overlayRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSearch = () => setShowSearch(!showSearch);

  
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (overlayRef.current && !overlayRef.current.contains(e.target)) {
        setShowSearch(false);
      }
    };
    if (showSearch) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showSearch]);

  return (
    <>
      <nav className="bg-gradient-to-br from-blue-700 via-blue-950 to-blue-700  shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-white">
                PakWheels
              </Link>
            </div>

            
            <div className="hidden md:flex space-x-8 text-m font-medium text-white items-center">
              <Link to="/used-cars" className="hover:text-blue-600">Used Cars</Link>
              <Link to="/new-cars" className="hover:text-blue-600">New Cars</Link>
              <Link to="/bikes" className="hover:text-blue-600">Bikes</Link>
              <Link to="/auto-store" className="hover:text-blue-600">Auto Store</Link>
              <Link to="/videos" className="hover:text-blue-600">Videos</Link>
              <Link to="/forums" className="hover:text-blue-600">Forums</Link>
              <Link to="/blog" className="hover:text-blue-600">Blog</Link>
             
              <span className="hover:text-blue-600 cursor-pointer">More ▼</span>

              
              <button
                onClick={toggleSearch}
                className=" focus:outline-none"
                title="Search"
              >
                <Search size={20} />
              </button>
            </div>

          
            <div className=" md:block">
             <PostAdDropdown/>
            </div>

            
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-white">
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          
          {isOpen && (
            <div className="md:hidden mt-2 space-y-2 text-sm font-medium text-white
            ">
              <Link to="/used-cars" className="block hover:text-blue-600">Used Cars</Link>
              <Link to="/new-cars" className="block hover:text-blue-600">New Cars</Link>
              <Link to="/bikes" className="block hover:text-blue-600">Bikes</Link>
              <Link to="/auto-store" className="block hover:text-blue-600">Auto Store</Link>
              <Link to="/videos" className="block hover:text-blue-600">Videos</Link>
              <Link to="/forums" className="block hover:text-blue-600">Forums</Link>
              <Link to="/blog" className="block hover:text-blue-600">Blog</Link>
              
              <span className="block hover:text-blue-600">More ▼</span>
             
            </div>
          )}
        </div>
      </nav>

      
      {showSearch && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center  justify-center z-[999]">
          <div ref={overlayRef} className="relative w-full max-w-4xl px-4">
    

            
            <div className="">
              <SearchBar />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
