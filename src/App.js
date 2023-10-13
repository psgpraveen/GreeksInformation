import React from "react";
import "./App.css";
import Header from "./components/header";
import Home from "./modules/home";
import Product from "./modules/Products";
import CategoryProducts from "./modules/categoryProducts";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Pro from "./modules/Product";
import Cart from "./modules/Card";
function App() {
  return (
    <div className="text-gray-600 text-4xl">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product/>} />
        <Route path="/products" element={<Pro/>} />
        <Route path="/categories/:name" element={<CategoryProducts/>} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path="*" element={<div> Error 404</div>} />
      </Routes>
      <Footer />
      {/* <Home/> */}
    </div>
  );
}

export default App;
