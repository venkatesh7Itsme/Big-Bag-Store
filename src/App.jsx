import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import FeaturedCollection from "./Components/FeatureSection";
import ViewProducts from "./Components/ViewProducts";
import FeaturedProducts from "./Components/FeaturedProducts";
import LatestArticles from "./Components/LatestArticles";
import Comments from "./Components/Comments";
import Footer from "./Components/Footer";
import HomeClassic from "./Components/HomeClassic"; 
import HomeDeals from "./Components/HomeDeals";
import HomeOnepage from "./Components/HomeOnepage";
import Shop from "./Components/Shop";
import Cart from "./Components/Cart";
import Aboutus from "./Components/Aboutus"
import ContactUs from "./Components/ContactUs";

import "./App.css";

function App() {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <FeaturedCollection />
            <FeaturedProducts />
            <LatestArticles />
          </>
        } />

        {/* View Products page */}
        <Route path="/view-products" element={<ViewProducts />} />

        {/* Comments page */}
        <Route path="/comments" element={<Comments />} />

        {/* Home Classic page */}
        <Route path="/home-classic" element={<HomeClassic />} /> 
        <Route path="/home-deals" element={<HomeDeals />} /> 
      
        <Route path="/home-onepage" element={<HomeOnepage />} /> 
        
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} /> 

        <Route path="/about-us" element={<Aboutus />} /> 
        <Route path="/contact-us" element={<ContactUs />} /> 
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
