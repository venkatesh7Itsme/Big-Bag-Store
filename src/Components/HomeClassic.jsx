import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faMoneyBillAlt, faHeadphones } from "@fortawesome/free-solid-svg-icons";

const WinterSalePage = () => {
  const [activeTab, setActiveTab] = useState("New Arrivals");
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      title: "For Women Collection",
      description: "Lorem ipsum dolor sit ameit",
      image: "https://bigbag-html.netlify.app/assets/img/home/featured-collection/product-img1.png"
    },
    {
      title: "For men Collection",
      description: "Lorem ipsum dolor sit ameit",
      image: "https://bigbag-html.netlify.app/assets/img/home/featured-collection/product-img2.png",
    },
    

    
  ];

  const productTabs = [
    { name: "Nike Sportswear", price: "$199", image: "https://bigbag-html.netlify.app/assets/img/home/featured-product/product-img3.jpg" },
    { name: "Dyp Daya Clip", price: "$79", image: "https://bigbag-html.netlify.app/assets/img/home/featured-product/product-img4.jpg" },
    { name: "Polish Spray", price: "$109", image: "https://bigbag-html.netlify.app/assets/img/home/featured-product/product-img5.jpg" },
    { name: "Mauris efficitur", price: "$19", image: "https://bigbag-html.netlify.app/assets/img/home/featured-product/product-img6.jpg" },
  ];

  const services = [
    { icon: faTruck, title: "Free Shipping", description: "Excepteur sint occaecat cupidatat.", color: "border-teal-400 text-teal-400" },
    { icon: faMoneyBillAlt, title: "100% Money Back", description: "Excepteur sint occaecat cupidatat.", color: "border-blue-400 text-blue-400" },
    { icon: faHeadphones, title: "24/7 Support", description: "Excepteur sint occaecat cupidatat.", color: "border-orange-400 text-orange-400" },
  ];

  const images = [
    "https://bigbag-html.netlify.app/assets/img/home/home-gallery/ins-img1.jpg",
    "https://bigbag-html.netlify.app/assets/img/home/home-gallery/ins-img2.jpg",
    "https://bigbag-html.netlify.app/assets/img/home/home-gallery/ins-img3.jpg",
    "https://bigbag-html.netlify.app/assets/img/home/home-gallery/ins-img4.jpg",
    "https://bigbag-html.netlify.app/assets/img/home/home-gallery/ins-img5.jpg",
    "https://bigbag-html.netlify.app/assets/img/home/home-gallery/ins-img6.jpg",
  ];

  return (
    
    <div className="bg-gray-100 overflow-hidden flex flex-col">
    {/* Custom Styles */}
    <style jsx>{`
      .clip-path-triangle {
        clip-path: polygon(0 0, 70% 0, 50% 100%, 0% 100%);
      }
    `}</style>


      {/* Winter Sale Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-white">
          <div className="absolute inset-0 bg-teal-400 clip-path-triangle"></div>
        </div>

        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-64 h-64 md:w-80 md:h-80 flex flex-col items-center justify-center p-8 shadow-lg z-10 border-2 border-teal-400">
        <h2 className="text-3xl font-bold mb-4 text-center">Winter Sale</h2>
        <div className="w-12 h-1 bg-teal-400 mb-4"></div>
        <p className="text-gray-500 text-center text-sm mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim...
        </p>
        <button className="bg-teal-400 text-white px-6 py-2 uppercase font-semibold flex items-center">
          Buy Now
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

        {/* Left Side with Products */}
        <div className="absolute left-8 top-1/4 z-10">
          <div className="relative mb-8">
            <img src="https://bigbag-html.netlify.app/assets/img/home/banner-slider/caption1.png" alt="Smartphone" className="max-h-64" />
            <div className="absolute top-0 left-0 bg-yellow-300 px-2 py-1 font-bold text-sm">35% OFF</div>
          </div>
          <div className="relative mb-8">
            <img src="https://bigbag-html.netlify.app/assets/img/home/banner-slider/caption2.png" alt="Side Table" className="max-h-48" />
            <div className="absolute top-0 left-0 bg-yellow-300 px-2 py-1 font-bold text-sm">20% OFF</div>
          </div>
        </div>

        {/* Right Side with Products */}
        <div className="absolute right-8 top-1/4 z-10">
          <div className="relative mb-8">
            <img src="https://bigbag-html.netlify.app/assets/img/home/banner-slider/caption3.png" alt="Hair Dryer" className="max-h-36" />
            <div className="absolute top-0 left-0 bg-yellow-300 px-2 py-1 font-bold text-sm">50% OFF</div>
          </div>
          <div className="relative">
            <img src="https://bigbag-html.netlify.app/assets/img/home/banner-slider/caption4.png" alt="Watch" className="max-h-36" />
            <div className="absolute top-0 left-0 bg-yellow-300 px-2 py-1 font-bold text-sm">40% OFF</div>
          </div>
        </div>
      </section>

      {/* Tailwind Custom Style for Clip Path */}
      <style jsx>{`
        .clip-path-triangle {
          clip-path: polygon(0 0, 70% 0, 50% 100%, 0% 100%);
        }
      `}</style>

      <section className="text-center py-10 bg-white">
        <h2 className="text-3xl font-semibold text-gray-900 mb-2">Welcome to Bigbag</h2>
        <div className="w-24 h-1 bg-teal-300 mx-auto mb-3"></div>
        <p className="text-gray-500 max-w-5xl mx-auto text-xl leading-loose px-10 text-center">
          Commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse 
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
          sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde 
          omnis iste natus error sit voluptatem accusantium doloremque totam rem aperiam eaque 
          ipsa quae ab illo.
        </p>
      </section>

      {/* Featured Products Section */}
      <section className="w-full py-10 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Title with Navigation Buttons */}
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-900">Featured Products</h2>
            <div className="flex gap-4">
              {/* Prev Button */}
              <button
                onClick={() => setCurrentIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : products.length - 1))}
                className="p-2 bg-gray-100 rounded-full shadow hover:bg-gray-200 transition"
              >
                <FiChevronLeft className="text-2xl text-gray-600" />
              </button>
              {/* Next Button */}
              <button
                onClick={() => setCurrentIndex(prevIndex => (prevIndex < products.length - 1 ? prevIndex + 1 : 0))}
                className="p-2 bg-gray-100 rounded-full shadow hover:bg-gray-200 transition"
              >
                <FiChevronRight className="text-2xl text-gray-600" />
              </button>
            </div>
          </div>
          <div className="w-full h-px bg-gray-300 mt-2 mb-6"></div>

          {/* Product Cards with Thin Divider */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {products.map((product, i) => (
              <div
                key={i}
                className={`p-6 bg-gray-100 flex items-center justify-between shadow-md transition ${
                  i === currentIndex ? "opacity-100" : "opacity-50"
                } ${i === 0 ? "border-r border-gray-300" : ""}`} // Thin divider between cards
              >
                <img src={product.image} alt={product.title} className="h-28 md:h-40 object-contain" />
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900">{product.title}</h3>
                  <p className="text-gray-500 text-sm">{product.description}</p>
                  <button className="mt-4 border border-gray-600 text-gray-900 px-6 py-2 text-sm font-medium hover:bg-gray-200 transition">
                    SHOP NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Tabs Section */}
      <section className="w-full bg-white py-10">
        <div className="max-w-6xl mx-auto px-6">
          {/* Tabs Navigation */}
          <div className="flex space-x-8 border-b border-gray-300">
            {["New Arrivals", "Top Rated", "On Sale"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-lg font-semibold pb-2 transition ${
                  activeTab === tab ? "text-black border-b-2 border-teal-400" : "text-gray-500"
                }`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            {productTabs.map((product, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-100 p-4">
                  <img src={product.image} alt={product.name} className="w-full object-contain" />
                </div>
                <h3 className="text-lg font-medium mt-2">{product.name}</h3>
                <p className="text-gray-700 font-semibold">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full bg-white py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className={`border border-gray-300 p-8 flex flex-col items-center text-center shadow-sm hover:border-${service.color}`}>
                <FontAwesomeIcon icon={service.icon} size="2x" className={service.color} />
                <h3 className="text-lg font-semibold mt-4">{service.title}</h3>
                <p className="text-gray-500 text-sm mt-2">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
   
      <section className="w-full bg-white py-10">
      <div className="max-w-full overflow-hidden">
        <div className="grid grid-cols-6 gap-0">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover"
            />
          ))}
        </div>
      </div>
    </section>



    </div>
  );
};

export default WinterSalePage;