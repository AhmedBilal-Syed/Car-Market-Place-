

import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className=" py-12 px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Find the Right Car for You
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Search from thousands of new and used cars across Pakistan.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
          to="/used-cars"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Browse Used Cars
        </Link>
        <Link
          to="/sell-car"
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
        >
          Sell Your Car
        </Link>
      </div>
    </section>
  );
}

export default Hero;
