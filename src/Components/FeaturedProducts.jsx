import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaShoppingBasket, FaEye } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';

const FeaturedProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: "Nike Sportswear",
      price: 79.00,
      image: "https://bigbag-html.netlify.app/assets/img/home/featured-product/product-05.jpg",
      category: "Nike Sportswear"
    },
    {
      id: 2,
      name: "Scarf Ring Corner",
      price: 79.00,
      image: "https://bigbag-html.netlify.app/assets/img/home/featured-product/product-03.jpg",
      category: "Scarf Ring Corner"
    },
    {
      id: 3,
      name: "Nike Sportswear",
      price: 199,
      image: "https://bigbag-html.netlify.app/assets/img/home/featured-product/product-06.jpg",
      category: "Nike Sportswear"
    },
    {
      id: 4,
      name: "Dip Dyed Sweater",
      price: 149,
      image: "https://bigbag-html.netlify.app/assets/img/home/featured-product/product-02.jpg",
      category: "Dip Dyed Sweater"
    },

    {
      id: 5,
      name: "Nike Sportswear",
      price: 79.00,
      image: "https://bigbag-html.netlify.app/assets/img/home/featured-product/product-05.jpg",
      category: "Nike Sportswear"
    },
    {
      id: 6,
      name: "Scarf Ring Corner",
      price: 79.00,
      image: "https://bigbag-html.netlify.app/assets/img/home/featured-product/product-03.jpg",
      category: "Scarf Ring Corner"
    },
    {
      id: 7,
      name: "Nike Sportswear",
      price: 199,
      image: "https://bigbag-html.netlify.app/assets/img/home/featured-product/product-06.jpg",
      category: "Nike Sportswear"
    },
    {
      id: 8,
      name: "Dip Dyed Sweater",
      price: 149,
      image: "https://bigbag-html.netlify.app/assets/img/home/featured-product/product-02.jpg",
      category: "Dip Dyed Sweater"
    },

  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };


  const visibleProducts = () => {
    const result = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % products.length;
      result.push(products[index]);
    }
    return result;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-medium text-gray-800">Featured Products</h2>
        <div className="flex gap-2">
          <button 
            onClick={prevSlide} 
            className="text-gray-400 hover:text-gray-700 transition-colors"
            aria-label="Previous products"
          >
            <FaChevronLeft className="text-xl" />
          </button>
          <button 
            onClick={nextSlide} 
            className="text-gray-400 hover:text-gray-700 transition-colors"
            aria-label="Next products"
          >
            <FaChevronRight className="text-xl" />
          </button>
        </div>
      </div>
      
      <div className="border-b border-gray-200 mb-6"></div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {visibleProducts().map((product) => (
          <div key={product.id} className="group relative">
            <div className="bg-gray-100 rounded-md overflow-hidden aspect-square relative">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex bg-white rounded-md shadow-md">
                  <button className="p-3 hover:bg-gray-50 transition-colors" aria-label="Add to wishlist">
                    <FaRegHeart className="text-gray-600" />
                  </button>
                  <button className="p-3 hover:bg-gray-50 transition-colors border-l border-r border-gray-200" aria-label="Add to cart">
                    <FaShoppingBasket className="text-gray-600" />
                  </button>
                  <button className="p-3 hover:bg-gray-50 transition-colors" aria-label="Quick view">
                    <FaEye className="text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <h3 className="text-sm text-gray-600">{product.category}</h3>
              <div className="flex justify-between items-center mt-1">
                <span className="text-gray-500 text-lg font-medium">
                  ${typeof product.price === 'number' ? product.price.toFixed(2) : product.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;