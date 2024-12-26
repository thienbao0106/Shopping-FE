import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import CategorySection from "./pages/category/CategorySection";
import SaleSection from "./pages/sale/SaleSection";
import ProductSection from "./pages/product/ProductSection";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="lg:px-40 px-2 py-5 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:id" element={<CategorySection />} />
            <Route path="/sale/:id" element={<SaleSection />} />
            <Route path="/product/:id" element={<ProductSection />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
