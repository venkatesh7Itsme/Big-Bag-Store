import React, { useState } from 'react';
import {  FaShoppingBag,  FaSearch,  FaShoppingCart,  FaBars,  FaChevronRight,  FaTshirt,  FaCamera,  FaGem,  FaLaptop,  FaMobileAlt,  FaDesktop } from 'react-icons/fa';
import HomeSubmega from './HomeSubmega';

const HomeMega = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <div className="min-h-screen flex flex-col">
      
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          
          <div className="flex items-center">
            <div className="text-teal-500 mr-2">
              <FaShoppingBag className="h-8 w-8" />
            </div>
            <div className="text-2xl font-bold">
              <span className="text-gray-800">BIG</span>
              <span className="text-teal-500">BAG</span>
            </div>
          </div>
          
         
          <div className="flex flex-1 max-w-xl mx-8">
            <div className="relative flex w-full">
              <select className="border border-r-0 rounded-l px-4 py-2 bg-white text-gray-700 appearance-none">
                <option>All Categories</option>
              </select>
              <input
                type="text"
                placeholder="Search Items..."
                className="flex-1 border py-2 px-4"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="bg-teal-500 text-white px-4 py-2 rounded-r hover:bg-teal-600">
                <FaSearch className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          {/* Cart */}
          <div className="flex items-center bg-teal-500 text-white py-2 px-4 rounded">
            <FaShoppingCart className="h-6 w-6 mr-2" />
            <div>
              <div className="text-sm">YOUR CART (3)</div>
              <div className="text-sm">$99.00</div>
            </div>
          </div>
        </div>
      </div>
      
 
      <div className="bg-gray-100 shadow">
        <div className="container mx-auto flex">
         
          <div className="w-60 bg-teal-500 text-white py-3 px-4">
            <div className="flex items-center justify-between">
              <span className="font-semibold">CATEGORY</span>
              <FaBars className="h-5 w-5" />
            </div>
          </div>
          

          <nav className="flex-1">
            <ul className="flex">
              <li className="px-6 py-3 text-teal-500 font-medium">HOME</li>
              <li className="px-6 py-3 text-gray-800 font-medium">SHOP</li>
              <li className="px-6 py-3 text-gray-800 font-medium">PAGES</li>
              <li className="px-6 py-3 text-gray-800 font-medium">BLOG</li>
              <li className="px-6 py-3 text-gray-800 font-medium">MY ACCOUNT</li>
              <li className="px-6 py-3 text-gray-800 font-medium">COMPONENTS</li>
            </ul>
          </nav>
        </div>
      </div>
      
    
      <div className="flex flex-1 container mx-auto">
     
        <div className="w-60 bg-white border-r">
          <ul>
            <li className="border-b">
              <a href="#" className="flex items-center px-4 py-3 hover:bg-gray-50">
                <FaTshirt className="h-5 w-5 mr-3 text-gray-500" />
                <span>Fashion</span>
                <FaChevronRight className="h-4 w-4 ml-auto text-gray-400" />
              </a>
            </li>
            <li className="border-b">
              <a href="#" className="flex items-center px-4 py-3 hover:bg-gray-50">
                <FaCamera className="h-5 w-5 mr-3 text-gray-500" />
                <span>Accessories</span>
              </a>
            </li>
            <li className="border-b">
              <a href="#" className="flex items-center px-4 py-3 hover:bg-gray-50">
                <FaGem className="h-5 w-5 mr-3 text-gray-500" />
                <span>Cosmetic</span>
              </a>
            </li>
            <li className="border-b">
              <a href="#" className="flex items-center px-4 py-3 hover:bg-gray-50">
                <FaLaptop className="h-5 w-5 mr-3 text-gray-500" />
                <span>Electronics</span>
                <FaChevronRight className="h-4 w-4 ml-auto text-gray-400" />
              </a>
            </li>
            <li className="border-b">
              <a href="#" className="flex items-center px-4 py-3 hover:bg-gray-50">
                <FaMobileAlt className="h-5 w-5 mr-3 text-gray-500" />
                <span>Mobile</span>
              </a>
            </li>
            <li className="border-b">
              <a href="#" className="flex items-center px-4 py-3 hover:bg-gray-50">
                <FaDesktop className="h-5 w-5 mr-3 text-gray-500" />
                <span>Computer</span>
              </a>
            </li>
          
            <li className="border-b p-4">
              <div className="text-center">
                <h3 className="font-medium text-gray-800 mb-1">Wireless</h3>
                <h3 className="font-medium text-gray-800 mb-3">Headphone</h3>
                <img src="https://bigbag-html.netlify.app/assets/img/home/category/category-img1.jpg" alt="Wireless Headphones" className="mx-auto" />
              </div>
            </li>
          </ul>
        </div>
        
     
        <div className="flex-1 bg-gray-100 p-6">
          <div className="bg-gray-200 rounded-lg overflow-hidden relative flex">
            <div className="w-1/2 p-12 flex flex-col justify-center">
              <div className="text-teal-500 text-xl mb-2">WINTER OFFER</div>
              <h1 className="text-5xl font-bold text-gray-800 mb-4">UP TO 50% OFF</h1>
              <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
              <button className="bg-white border border-gray-300 text-gray-800 px-6 py-3 w-32 hover:bg-gray-50">
                BUY NOW
              </button>
            </div>
            <div className="w-1/2">
              <img src="https://bigbag-html.netlify.app/assets/img/home/banner-slider/slider-img1.jpg" alt="Happy woman with headphones" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </div>



      <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        
        <div className="flex-1 relative overflow-hidden rounded-lg">
          <div className="bg-gray-200 aspect-video md:aspect-auto md:h-64 lg:h-80 relative">
           
            <div className="absolute inset-0 bg-gray-300">
              <img 
                src="https://bigbag-html.netlify.app/assets/img/home/featured-collection/product-img4.jpg" 
                alt="Woman wearing red high heels" 
                className="w-full h-full object-cover object-center opacity-80"
              />
            </div>
            
           
            <div className="absolute inset-0 flex items-center justify-end pr-8">
              <div className="text-right">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">women's Shoes</h2>
                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet</p>
                <button className="border-2 border-gray-800 text-gray-800 px-6 py-2 font-medium hover:bg-gray-800 hover:text-white transition-colors">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>
        
        
        <div className="flex-1 relative overflow-hidden rounded-lg">
          <div className="bg-yellow-100 aspect-video md:aspect-auto md:h-64 lg:h-80 relative">
      
            <div className="absolute inset-0">
              <img 
                src="https://bigbag-html.netlify.app/assets/img/home/featured-collection/product-img5.jpg" 
                alt="Wireless headphones" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            
            <div className="absolute inset-0 flex items-center justify-end pr-8">
              <div className="text-right">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Headphone wifi</h2>
                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet</p>
                <button className="border-2 border-gray-800 text-gray-800 px-6 py-2 font-medium hover:bg-gray-800 hover:text-white transition-colors">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

<HomeSubmega/>
    </div>
  );
};

export default HomeMega;