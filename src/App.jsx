
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CarDetail from "./components/CarDetail";
import BrowseUsedCars from "./components/BrowseUsedCars"
import RegisterYourCar from "./pages/RegisterYourCar";
import SellCar from "./pages/SellCar";
import UsedCars from"./pages/UsedCars"


function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
           <Route path="/car-detail/:id" element={<CarDetail />} />
           <Route path="/browse-used-cars" element={< BrowseUsedCars/>} />
           <Route path="/register-your-car" element={<RegisterYourCar />} />
           <Route path="/used-cars" element={<UsedCars />} />
           
           <Route path="/sell-car" element={<SellCar />} />


          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
