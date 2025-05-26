
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CarDetail from "./pages/CarDetail";
import Blog from "./pages/blog";
import NewCars from "./pages/newcars";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
           <Route path="/car-detail/:id" element={<CarDetail />} />
             <Route path="/blog" element={<Blog />} />
             <Route path="/new-cars" element={<NewCars />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
