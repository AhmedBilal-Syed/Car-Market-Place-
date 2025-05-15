import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import SearchBar from "./SearchBar";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const overlayRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSearch = () => setShowSearch(!showSearch);

  // Close overlay if clicked outside search container
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
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-blue-600">
                PakWheels
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8 text-m font-medium text-gray-700 items-center">
              <Link to="/used-cars" className="hover:text-blue-600">Used Cars</Link>
              <Link to="/new-cars" className="hover:text-blue-600">New Cars</Link>
              <Link to="/bikes" className="hover:text-blue-600">Bikes</Link>
              <Link to="/auto-store" className="hover:text-blue-600">Auto Store</Link>
              <Link to="/videos" className="hover:text-blue-600">Videos</Link>
              <Link to="/forums" className="hover:text-blue-600">Forums</Link>
              <Link to="/blog" className="hover:text-blue-600">Blog</Link>
              <span className="bg-red-500 text-white px-4 py-2 rounded text-xs">New</span>
              <span className="hover:text-blue-600 cursor-pointer">More ▼</span>

              {/* 🔍 Search Icon */}
              <button
                onClick={toggleSearch}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
                title="Search"
              >
                <Search size={20} />
              </button>
            </div>

            {/* Post Ad (Desktop) */}
            <div className="hidden md:block">
              <Link
                to="/sell-car"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-semibold"
              >
                Post an Ad
              </Link>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-700">
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown */}
          {isOpen && (
            <div className="md:hidden mt-2 space-y-2 text-sm font-medium text-gray-700">
              <Link to="/used-cars" className="block hover:text-blue-600">Used Cars</Link>
              <Link to="/new-cars" className="block hover:text-blue-600">New Cars</Link>
              <Link to="/bikes" className="block hover:text-blue-600">Bikes</Link>
              <Link to="/auto-store" className="block hover:text-blue-600">Auto Store</Link>
              <Link to="/videos" className="block hover:text-blue-600">Videos</Link>
              <Link to="/forums" className="block hover:text-blue-600">Forums</Link>
              <Link to="/blog" className="block hover:text-blue-600">Blog</Link>
              <span className="inline-block bg-red-500 text-white px-2 py-0.5 rounded text-xs">New</span>
              <span className="block hover:text-blue-600">More ▼</span>
              <Link
                to="/sell-car"
                className="block bg-blue-600 hover:bg-blue-700 text-white text-center px-4 py-2 rounded-md text-sm font-semibold"
              >
                Post an Ad
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/*  Search Overlay */}
      {showSearch && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center  justify-center z-[999]">
          <div ref={overlayRef} className="relative w-full max-w-4xl px-4">
    

            {/* Search Bar */}
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
