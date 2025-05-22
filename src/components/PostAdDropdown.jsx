import { Link } from "react-router-dom";

const PostAdDropdown = () => {
  return (
    <div className="relative  hidden md:block group">
      <div className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-semibold cursor-pointer">
        Post an Ad
      </div>

      <div className="absolute top-full mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md z-50 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200">
        <Link
          to="/sell-car"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Sell Car
        </Link>
        <Link
          to="/sell-bike"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Sell Bike
        </Link>
        <Link
          to="/register-your-car"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Register Your Car
        </Link>
        <Link
          to="/sell-number-plate"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Sell Accesory
        </Link>
      </div>
    </div>
  );
};

export default PostAdDropdown;
