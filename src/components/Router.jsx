import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Home from "../pages/Home.jsx";
import Contact from "../pages/Contact.jsx";
import Searchbar from "./Searchbar.jsx";
// import ProductCard from "./ProductCard.jsx";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Searchbar />
        {/* <ProductCard /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
