import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { ChevronDown, ChevronUp } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [showNewsletter, setShowNewsletter] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }
    console.log("Subscribed email:", email);
    alert(`Subscribed successfully: ${email}`);
    setEmail("");
  };

  return (


    <footer className="bg-slate-950 text-white text-sm pt-10 pb-6">
      <div className="max-w-6xl mx-auto px-4">
        
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-12">
          <FooterColumn title="Cars By Make" items={[
            "Toyota Cars for Sale", "Suzuki Cars for Sale", "Honda Cars for Sale", "Daihatsu Cars for Sale",
            "Mitsubishi Cars for Sale", "Nissan Cars for Sale", "Mercedes Cars for Sale", "Hyundai Cars for Sale", "BMW Cars for Sale"
          ]} />

          <FooterColumn title="Cars By City" items={[
            "Cars in Karachi", "Cars in Lahore", "Cars in Islamabad", "Cars in Rawalpindi", "Cars in Peshawar",
            "Cars in Faisalabad", "Cars in Multan", "Cars in Gujranwala", "Cars in Sialkot"
          ]} />

          <FooterColumn title="Explore PakWheels" items={[
            "Used Cars", "Used Bikes", "New Cars", "Auto Parts & Accessories", "Cool Rides", "Forums", "Autoshow", "Sitemap"
          ]} />

          <FooterColumn title="PakWheels.com" items={[
            "About Us", "Our Products", "Advertise With Us", "How To Pay", "FAQs", "Refunds & Returns", "Careers", "Contact Us"
          ]} />
        </div>

        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-12">
          <FooterColumn title="Cars By Category" items={[
            "Jeep", "Japanese Cars", "Imported Cars", "Automatic Cars", "Low Priced Cars", "4x4 Cars", "660cc Cars", "1000cc Cars"
          ]} />

          <FooterColumn title="Cars By Body Type" items={[
            "Compact SUV", "Crossover", "Hatchback", "Mini Van", "MPV", "Sedan", "SUV", "Van"
          ]} />

          <FooterColumn title="Cars By Color" items={[
            "Black Cars", "Blue Cars", "Gold Cars", "Green Cars", "Grey Cars", "Red Cars", "Silver Cars", "White Cars"
          ]} />
        
          
          <div>
            <div className="sm:hidden mb-4 flex justify-between items-center">
              <h3 className="font-semibold text-base">Stay Connected</h3>
              <button onClick={() => setShowNewsletter(!showNewsletter)} className="text-slate-400">
                {showNewsletter ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
            </div>

            <div className={`${showNewsletter ? "block" : "hidden"} sm:block`}>
              <h3 className="font-semibold text-base mb-2 hidden sm:block">Stay Connected</h3>
              <p className="text-slate-400 mb-2">Subscribe to our Newsletter</p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="name@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-2 py-1 rounded bg-slate-800 text-white border border-slate-600 placeholder:text-slate-400"
                />
                <button type="submit" className="bg-blue-600 px-4 py-1 rounded text-white hover:bg-blue-700 transition">
                  Subscribe
                </button>
              </form>
              <p className="mt-4 text-slate-400">Follow Us</p>
              <div className="flex space-x-4 mt-2 text-xl text-slate-400">
                <FaFacebookF className="hover:text-white cursor-pointer" />
                <FaInstagram className="hover:text-white cursor-pointer" />
                <FaYoutube className="hover:text-white cursor-pointer" />
              </div>
              <p className="mt-4 text-slate-400 hover:text-white cursor-pointer">
                Download Mobile Apps
              </p>
            </div>
          </div>
        </div>

        
        <div className="border-t border-[#444] pt-4 text-center text-xs text-[#777]">
          <p>Copyright © 2003 - 2025 PakEheels (Pvt) Ltd. - All Rights Reserved.</p>
          <p className="mt-1">Terms of Service | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};


const FooterColumn = ({ title, items }) => (
  <div>
    <h3 className="font-semibold text-base mb-2">{title}</h3>
    <ul className="space-y-1 text-slate-500">
      {items.map((item) => (
        <li key={item} className="hover:text-white transition cursor-pointer">{item}</li>
      ))}
    </ul>
  </div>
);

export default Footer;
