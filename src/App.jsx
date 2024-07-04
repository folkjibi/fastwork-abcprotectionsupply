import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// compomnent
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// page
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
