import React, { useState } from "react";
import Header from "../Components/Header";

const ProductGrid = () => {
  
  const [openCategories, setOpenCategories] = useState({
    Women: false,
    Men: false,
    Kids: false,
    Accessories: false,
  });

 
  const [priceRange, setPriceRange] = useState([20, 300]);


  const handlePriceChange = (event) => {
    const value = event.target.value;
    setPriceRange([value[0], value[1]]);
  };

  
  const toggleCategory = (category) => {
    setOpenCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  
  const categoryData = {
    Women: ["Accessories (6)", "Bag (6)", "Cloths (25)", "Bed & Bath (2)", "Swimming costume (5)", "Sport Tops & Shoes (3)"],
    Men: ["T-Shirts (12)", "Shirts (10)", "Jeans (7)", "Shoes (6)"],
    Kids: ["Clothing (20)", "Shoes (8)", "Toys (12)", "Accessories (5)"],
    Accessories: ["Bags (6)", "Hats (4)", "Jewelry (10)", "Scarves (5)"]
  };

  

  const products = [
   
    { id: 1, name:"Nike Sportswear", price: "$249", img: "https://bigbag-html.netlify.app/assets/img/products/products-01.jpg" },
    { id: 2, name:"Dip Dyed Sweater" , price: "$129", img: "https://bigbag-html.netlify.app/assets/img/products/products-02.jpg" },
    { id: 3, name:"Sun Buddies" , price: "$199", img: "https://bigbag-html.netlify.app/assets/img/products/products-03.jpg" },
    { id: 4, name: "Nike Sportswear", price: "$249", img: "https://bigbag-html.netlify.app/assets/img/products/products-04.jpg" },
    { id: 5, name: "Dip Dyed Sweater", price: "$199", img: "https://bigbag-html.netlify.app/assets/img/products/products-05.jpg" },
    { id: 6, name: "Scarf Ring Coner", price: "$149", img:"https://bigbag-html.netlify.app/assets/img/products/products-06.jpg"  },
    { id: 7, name: "Sun Buddies", price: "$179", img: "https://bigbag-html.netlify.app/assets/img/products/products-07.jpg"},
    { id: 8, name: "Nike Sportwear", price: "$149", img: "https://bigbag-html.netlify.app/assets/img/products/products-08.jpg" },
    { id: 9, name: "Dip Dyed Sweater", price: "$199", img: "https://bigbag-html.netlify.app/assets/img/products/products-09.jpg"},
    { id: 10, name: "Scarf Ring Coner", price: "$249", img: "https://bigbag-html.netlify.app/assets/img/products/products-10.jpg" },
    { id: 11, name: "Sun Buddies", price: "$179", img: "https://bigbag-html.netlify.app/assets/img/products/products-11.jpg" },
    { id: 12, name: "Sun Buddies", price: "$149", img: "https://bigbag-html.netlify.app/assets/img/products/products-12.jpg" },

  ];

  const colors = [
    { name: "Black", count: 15 },
    { name: "White", count: 10 },
    { name: "Red", count: 7 },
    { name: "Blue", count: 12 },
    { name: "Orange", count: 12 },
  ];

  const sizes = [
    { name: "Small", count: 15 },
    { name: "Medium", count: 10 },
    { name: "Large", count: 7 },
    { name: "Extra Large", count: 12 },
  ];

  return (
    <>
      <Header />

      <div className="pt-[80px] p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-gray-600 mb-2">SWEATER</h1>

        <div className="w-full h-[2px] bg-gray-300 mb-4"></div>

        <div className="flex">
       
          <aside className="w-1/4 space-y-6">
            
         
            <div className="p-4 bg-white shadow-md rounded-lg">
              <h2 className="text-lg font-semibold text-white bg-teal-500 py-2 px-4 rounded-t">
                PRODUCT CATEGORIES
              </h2>
              <ul className="space-y-2 text-gray-700 pb-4">
                {Object.keys(categoryData).map((category) => (
                  <li key={category}>
                    <div
                      className="flex justify-between cursor-pointer font-semibold text-teal-600 px-2 py-1"
                      onClick={() => toggleCategory(category)}
                    >
                      {category}
                      <span>{openCategories[category] ? "−" : "+"}</span>
                    </div>
                    {openCategories[category] && (
                      <ul className="ml-4 text-gray-500 space-y-1">
                        {categoryData[category].map((item, index) => (
                          <li key={index} className="cursor-pointer hover:text-teal-700">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>

          
            <div className="p-4 bg-white shadow-md rounded-lg">
              <h2 className="text-lg font-semibold text-white bg-teal-500 py-2 px-4 rounded-t">
                FILTER BY PRICE
              </h2>
              <div className="p-4">
                <input
                  type="range"
                  min="20"
                  max="300"
                  value={priceRange}
                  onChange={handlePriceChange}
                  className="w-full cursor-pointer"
                />
                <button className="mt-2 bg-teal-500 text-white px-4 py-1 rounded">
                  FILTER
                </button>
                <p className="mt-2 text-gray-600">
                  Price: <span className="font-bold">${priceRange[0]} - ${priceRange[1]}</span>
                </p>
              </div>
            </div>

            
            <div className="p-4 bg-white shadow-md rounded-lg">
              <h2 className="text-lg font-semibold text-white bg-teal-500 py-2 px-4 rounded-t">
                FILTER BY COLOR
              </h2>
              <ul className="p-4 space-y-2">
                {colors.map((color) => (
                  <li key={color.name} className="flex justify-between text-gray-700 cursor-pointer hover:text-teal-700">
                    {color.name} <span>({color.count})</span>
                  </li>
                ))}
              </ul>
            </div>

          
            <div className="p-4 bg-white shadow-md rounded-lg">
              <h2 className="text-lg font-semibold text-white bg-teal-500 py-2 px-4 rounded-t">
                FILTER BY SIZE
              </h2>
              <ul className="p-4 space-y-2">
                {sizes.map((size) => (
                  <li key={size.name} className="flex justify-between text-gray-700 cursor-pointer hover:text-teal-700">
                    {size.name} <span>({size.count})</span>
                  </li>
                ))}
              </ul>
            </div>

          </aside>

      
          <div className="w-3/4 pl-6">
            <div className="flex justify-between mb-4">
              <select className="p-2 border rounded">
                <option>Default sorting</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
              <div>
                <button className="p-2 bg-teal-500 text-white rounded">Grid</button>
                <button className="p-2 ml-2 border rounded">List</button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-white p-4 shadow-md rounded-lg">
                  <img src={product.img} alt={product.name} className="w-full rounded" />
                  <h3 className="mt-2 font-semibold">{product.name}</h3>
                  <p className="text-gray-500">{product.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductGrid;
