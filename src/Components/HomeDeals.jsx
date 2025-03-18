import React, { useState } from 'react';
import { FiArrowRight, FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faMoneyBillAlt, faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const FeaturedComponents = () => {
  const [activeStars, setActiveStars] = useState({});
  const [activeTab, setActiveTab] = useState("New Arrivals");
    const [currentIndex, setCurrentIndex] = useState(0);
    

  const products = [
    {
      id: 1,
      name: "Mauris Efficitur",
      price: "$50.00",
      originalPrice: "$80.00",
      image: "https://bigbag-html.netlify.app/assets/img/home/product-deal/product-1.jpg",
      endDate: "20 Oct"
    },
    {
      id: 2,
      name: "Mauris Efficitur",
      price: "$50.00",
      originalPrice: "$80.00",
      image: "https://bigbag-html.netlify.app/assets/img/home/product-deal/product-2.jpg",
      endDate: "20 Oct"
    },
    {
      id: 3,
      name: "Mauris Efficitur",
      price: "$50.00",
      originalPrice: "$80.00",
      image: "https://bigbag-html.netlify.app/assets/img/home/product-deal/product-3.jpg",
      endDate: "20 Oct"
    },
    

  ];

  const productTabs = [
    { name: "Nike Sportswear", price: "$199", image: "https://bigbag-html.netlify.app/assets/img/home/featured-product/product-img7.jpg" },
    { name: "Scarf Ring Corner", price: "$199", image: "https://bigbag-html.netlify.app/assets/img/home/featured-product/product-img8.jpg" },
    { name: "Sun Buddies", price: "$199", image: "https://bigbag-html.netlify.app/assets/img/home/featured-product/product-img9.jpg" },
    { name: "Mauris efficitur", price: "$199", image: "https://bigbag-html.netlify.app/assets/img/home/featured-product/product-img10.jpg" },

    { name: "sunt in culpa", price: "$199", image: "https://bigbag-html.netlify.app/assets/img/home/featured-product/product-img3.jpg" },
    { name: "enim and minim", price: "$79", image: "https://bigbag-html.netlify.app/assets/img/home/featured-product/product-img13.jpg" },
    { name: "Porro quisquam", price: "$109", image: "https://bigbag-html.netlify.app/assets/img/home/featured-product/product-img12.jpg" },
    { name: "Nike Sportswear", price: "$19", image: "https://bigbag-html.netlify.app/assets/img/home/featured-product/product-img11.jpg" },

    
  ];

  const services = [
      { icon: faTruck, title: "Free Shipping", description: "Excepteur sint occaecat cupidatat.", color: "border-teal-400 text-teal-400" },
      { icon: faMoneyBillAlt, title: "100% Money Back", description: "Excepteur sint occaecat cupidatat.", color: "border-blue-400 text-blue-400" },
      { icon: faHeadphones, title: "24/7 Support", description: "Excepteur sint occaecat cupidatat.", color: "border-orange-400 text-orange-400" },
    ];
  

  const handleStarHover = (productId, starIndex) => {
    setActiveStars({
      ...activeStars,
      [productId]: starIndex + 1
    });
  };

  const handleStarLeave = (productId) => {
    setActiveStars({
      ...activeStars,
      [productId]: 0
    });
  };

  return (
    <div className="w-full">
     
      <div className="relative h-screen w-full overflow-hidden">
   
        <div className="flex h-full w-full">
         
          <div className="w-1/2 h-full bg-cover bg-center" style={{ 
            backgroundImage: "url('https://bigbag-html.netlify.app/assets/img/home/bg-banner3.jpg')" 
          }}></div>
          
         
          <div className="w-1/2 h-full bg-gray-100"></div>
        </div>
        
       
        <div className="absolute top-1/2 transform -translate-y-1/2 right-16 w-full max-w-3xl">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="border-b pb-2 mb-6">
              <h2 className="text-2xl font-medium">
                <span className="text-teal-500">FEATURED</span>
                <span className="text-gray-800 ml-2">DEALS</span>
              </h2>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="md:w-3/5">
                <p className="text-gray-700 mb-4">The countdown is finished!</p>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Small Forest Hatchet
                </h3>
                
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-teal-500 text-2xl font-medium">$50.00</span>
                  <span className="text-gray-400 line-through">$80.00</span>
                  <span className="bg-teal-500 text-white px-3 py-1 text-sm rounded">
                    50% off
                  </span>
                </div>
                
                <button className="bg-white border border-teal-500 text-teal-500 px-6 py-2 rounded flex items-center gap-2 hover:bg-teal-50 transition-colors duration-200">
                  BUY NOW <FiArrowRight />
                </button>
              </div>
              
              <div className="md:w-2/5">
                <img 
                  src="https://bigbag-html.netlify.app/assets/img/home/banner-slider/slider-img4.png
" 
                  alt="Small Forest Hatchet" 
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="py-12 px-4 max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-medium text-gray-800">Featured Products</h2>
          <div className="flex gap-4">
            <button className="text-gray-400 hover:text-gray-800 transition-colors">
              <FiChevronLeft size={24} />
            </button>
            <button className="text-gray-400 hover:text-gray-800 transition-colors">
              <FiChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="w-full h-px bg-gray-200 mb-6"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="px-4 py-2 bg-gray-50 flex justify-between items-center">
                <div className="flex items-center">
                  <span className="text-gray-700">End In </span>
                  <span className="text-teal-500 ml-1">{product.endDate}</span>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FiStar 
                      key={i}
                      className={`cursor-pointer ${i < (activeStars[product.id] || 0) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                      onMouseEnter={() => handleStarHover(product.id, i)}
                      onMouseLeave={() => handleStarLeave(product.id)}
                    />
                  ))}
                </div>
              </div>
              
              <div className="p-4 flex justify-center h-64 bg-white overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="object-contain h-full transform transition-transform duration-300 hover:scale-110"
                />
              </div>
              
              <div className="p-4 bg-white">
                <h3 className="text-lg font-medium text-center mb-2">{product.name}</h3>
                <div className="flex justify-center items-center gap-2 mb-4">
                  <span className="text-teal-500 text-xl font-medium">{product.price}</span>
                  <span className="text-gray-400 line-through text-sm">{product.originalPrice}</span>
                </div>
                <button className="w-full border border-teal-500 text-teal-500 py-2 rounded flex items-center justify-center gap-2 transition-colors duration-200 hover:bg-teal-500 hover:text-white group">
                  <span>BUY NOW</span>
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

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

      {/* Review Content */}
      
      <div className="bg-gray-100 p-8 flex justify-center">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md max-w-4xl">

        <div className="p-6 flex items-center justify-center bg-white rounded-l-lg">
          <img 
            src="https://bigbag-html.netlify.app/assets/img/home/testimonial/testimonial-img1.png" 
            alt="Green sleeping bag with red plaid lining" 
            className="max-h-64 object-contain"
          />
        </div>
        
        
        <div className="p-6 flex flex-col justify-between">
         
          <div className="flex text-teal-500 mb-4">
            <FaStar size={24} />
            <FaStar size={24} />
            <FaStar size={24} />
            <FaStar size={24} />
            <FaStarHalfAlt size={24} />
          </div>
          
          <p className="text-gray-700 mb-6">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
            est, qui dolorem ipsum quia dolor sit amet.
          </p>
          
         
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
              <img 
                src="https://bigbag-html.netlify.app/assets/img/home/testimonial/author1.png" 
                alt="Reviewer avatar" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-bold text-gray-800 uppercase tracking-wide">SARAH SMITH</span>
          </div>
        </div>
      </div>
    </div>



    </div>
  );
};

export default FeaturedComponents;