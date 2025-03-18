import React from "react";
import { useNavigate } from "react-router-dom"; 

const categories = [
  {
    title: "Bags BagPacks",
    price: "$150.00",
    image: "https://bigbag-html.netlify.app/assets/img/home/featured-collection/featured-collection-02.jpg",
  },
  {
    title: "Glass Collections",
    price: "$25.00",
    image: "https://bigbag-html.netlify.app/assets/img/home/featured-collection/featured-collection-03.jpg",
  },
  {
    title: "Shoes Collections",
    price: "$59.00",
    image: "https://bigbag-html.netlify.app/assets/img/home/featured-collection/featured-collection-01.jpg",
  },
];

const FeaturedCollection = () => {
  const navigate = useNavigate(); 

  return (
    <div className="container mx-auto mt-10 px-5 font-oxygen text-[#252525]">
      <h2 className="text-[22px] font-semibold mb-6 tracking-[1px] border-b border-gray-500">
        Featured Collection
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center items-center">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative w-full max-w-[320px] mx-auto p-4 bg-gray-100 rounded-lg overflow-hidden shadow-lg group"
          >
            
            <div className="absolute inset-0 bg-teal-600 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
              <button
                onClick={() => navigate("/view-products")} 
                className="bg-white text-black px-4 py-2 rounded shadow-md"
              >
                View Products
              </button>
            </div>

           
            <div className="absolute top-5 left-5 text-black bg-white bg-opacity-75 px-3 py-1 rounded">
              <h3 className="text-lg font-bold">{category.title}</h3>
              <p className="text-sm">Start From {category.price}</p>
            </div>

            <img
              src={category.image}
              alt={category.title}
              className="w-full h-80 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCollection;
