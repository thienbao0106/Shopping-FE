import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import Category from "./pages/category/Category";
import Sale from "./pages/sale/Sale";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="lg:px-40 px-2 pt-5 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/sale/:id" element={<Sale />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
