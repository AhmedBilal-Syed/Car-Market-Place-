
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              PakWheels
            </Link>
          </div>

          
          <div className="hidden md:flex space-x-8 text-m  font-medium text-gray-700">
            <Link to="/used-cars" className="hover:text-blue-600">Used Cars</Link>
            <Link to="/new-cars" className="hover:text-blue-600">New Cars</Link>
            <Link to="/bikes" className="hover:text-blue-600">Bikes</Link>
            <Link to="/auto-store" className="hover:text-blue-600">Auto Store</Link>
            <Link to="/videos" className="hover:text-blue-600">Videos</Link>
            <Link to="/forums" className="hover:text-blue-600">Forums</Link>
            <Link to="/blog" className="hover:text-blue-600">Blog</Link>
            <span className="bg-red-500 text-white px-4 py-2 rounded text-xs">New</span>
            <span className="hover:text-blue-600 cursor-pointer">More ▼</span>
          </div>

          
          <div className="hidden md:block">
            <Link
              to="/sell-car"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-semibold"
            >
              Post an Ad
            </Link>
          </div>

          
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        
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
  );
}

export default Navbar;
