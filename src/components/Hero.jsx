import { Link } from "react-router-dom";
import { motion } from "framer-motion";


function Hero() {
  return (
    <>
      
      <section className="relative w-full h-[60vh] md:h-[65vh] flex items-center justify-center bg-gradient-to-br from-blue-700 via-blue-950 to-blue-700 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight drop-shadow-md">
            Find the Right Car for You
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="text-base md:text-lg text-blue-100 mb-6 max-w-2xl mx-auto drop-shadow-sm"
          >
            Search from thousands of new and used cars across Pakistan.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              to="/used-cars"
              className="bg-white text-blue-700 px-6 py-3 rounded-xl text-base font-semibold shadow hover:shadow-xl hover:bg-gray-100 transition-all duration-200 hover:ring-2 hover:ring-blue-300"
            >
              Browse Used Cars
            </Link>
            <Link
              to="/sell-car"
              className="border border-white text-white px-6 py-3 rounded-xl text-base font-semibold hover:bg-white hover:text-blue-800 transition-all duration-200"
            >
              Sell Your Car
            </Link>
          </motion.div>
        </motion.div>
      </section>

<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
  className="max-w-6xl mx-auto px-4 pt-6 pb-12 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white"
>
  
  <div className="border border-gray-300 rounded-md p-6">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">
      Post your Ad on PakWheels
    </h3>
    <ul className="text-sm text-gray-800 space-y-2 mb-6">
      <li>✔️ Post your Ad for Free in 3 Easy Steps</li>
      <li>✔️ Get Genuine offers from Verified Buyers</li>
      <li>✔️ Sell your car Fast at the Best Price</li>
    </ul>
    <Link
      to="/sell-car"
      className="inline-block bg-red-700 hover:bg-red-800 text-white text-sm font-semibold px-5 py-2 rounded transition"
    >
      Post Your Ad
    </Link>
  </div>


  <div className="border border-gray-300 rounded-md p-6">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">
      Try PakWheels Sell It For Me
    </h3>
    <ul className="text-sm text-gray-800 space-y-2 mb-6">
      <li>✔️ Dedicated Sales Expert to Sell your Car</li>
      <li>✔️ We Bargain for you and share the Best Offer</li>
      <li>✔️ We ensure Safe & Secure Transaction</li>
    </ul>
    <Link
      to="/register-your-car"
      className="inline-block bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-5 py-2 rounded transition"
    >
      Register Your Car
    </Link>
  </div>
</motion.div>


    </>
  );
}

export default Hero;
