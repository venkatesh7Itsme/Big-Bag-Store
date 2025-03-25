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
import Register from "./Components/Register";
import RegisterLogin from "./Components/RegisterLogin";
import Login from'./Components/Login';
import PasswordRecovery from'./Components/PasswordRecovery';
import PrivacyPolicy from "./Components/PrivacyPolicy.jsx";
import TermsConditions from "./Components/TermsConditions.jsx";
import FAQ from "./Components/Faq.jsx";
import PageNot from "./Components/PageNot.jsx";
import ComingSoon from "./Components/ComingSoon.jsx";


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
        <Route path="/register" element={<Register/>} /> 
        <Route path="/register-login" element={<RegisterLogin/>} /> 
        <Route path="/login" element={<Login/>} /> 
        <Route path="/password-recovery" element={<PasswordRecovery/>} /> 
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} /> 
        <Route path="/terms-conditions" element={<TermsConditions/>} /> 
        <Route path="/faq" element={<FAQ/>} /> 
        <Route path="*" element={<PageNot />} />
        <Route path="/coming-soon" element={<ComingSoon/>} /> 





      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
