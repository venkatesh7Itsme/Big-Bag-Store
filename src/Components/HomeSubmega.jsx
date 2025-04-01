import React, { useState } from 'react';

const HomeSubmega = () => {
  const [activeTab, setActiveTab] = useState('clothing'); 
  const [menActiveSlide, setMenActiveSlide] = useState(0);
  const [womenActiveSlide, setWomenActiveSlide] = useState(0);
  const [jewelryActiveSlide, setJewelryActiveSlide] = useState(0);
  const [bagsActiveSlide, setBagsActiveSlide] = useState(0);

  const menCategories = [
    'Down Jackets', 'T Shirts', 'Jeans', 'Casual Pants', 'Sunglasses', 'Hoodies'
  ];


  const womenCategories = [
    'Casual Dresses', 'Sweaters', 'Coats & Jackets', 'Cosmetic', 'T Shirts', 'Shoes'
  ];

  
  const jewelryCategories = [
    'Jewlery Sets', 'Earring Sets', 'DIY Jewelry', 'Pendant Necklaces', 'Popupar Bracelets', 'Pendant'
  ];

 
  const bagsCategories = [
    'Women\'s Boots', 'Women\'s Casual Shoes', 'Women\'s Bags', 'Men\'s Boots', 'Men\'s Casual Shoes', 'Men\'s Bags'
  ];


  const clothingProducts = [
    { id: 1, name: 'Nike Sportswear',
       price: '$199',
    image: '/api/placeholder/200/200', discount: '50% OFF' },
    { id: 2, name: 'Nike Sportswear', price: '$199', image: 'https://bigbag-html.netlify.app/assets/img/home/category/category-img7.jpg', discount: '50% OFF' },
    { id: 3, name: 'Nike Sportswear', price: '$199', image: 'https://bigbag-html.netlify.app/assets/img/home/category/category-img8.jpg' },
    { id: 4, name: 'Nike Sportswear', price: '$199', image: 'https://bigbag-html.netlify.app/assets/img/home/category/category-img9.jpg', discount: '50% OFF' },
    { id: 5, name: 'Nike Sportswear', price: '$199', image: 'https://bigbag-html.netlify.app/assets/img/home/category/category-img10.jpg' },
    { id: 6, name: 'Nike Sportswear', price: '$199', image: 'https://bigbag-html.netlify.app/assets/img/home/category/category-img11.jpg' }
  ];

  const accessoriesProducts = [
    { id: 7, name: 'Nike Sportswear', 
     price: '$199',
     image: 'https://bigbag-html.netlify.app/assets/img/home/category/category-img13.jpg',
     discount: '30% OFF',
      type: 'jewelry'
     },
    { id: 8, name: 'Nike Sportswear', price: '$199',
         image: 'https://bigbag-html.netlify.app/assets/img/home/category/category-img14.jpg',
          type: 'jewelry'
         },
    { id: 9, name: 'Nike Sportswear', price: '$199',
         image: 'https://bigbag-html.netlify.app/assets/img/home/category/category-img12.jpg',
          type: 'jewelry'
         },
    { id: 10, name: 'Nike Sportswear', price: '$199',
         image: 'https://bigbag-html.netlify.app/assets/img/home/category/category-img15.jpg',
          discount: '30% OFF',
           type: 'bags'
         },
    { id: 11, name: 'Nike Sportswear',
         price: '$199',
         image: 'https://bigbag-html.netlify.app/assets/img/home/category/category-img16.jpg', 
         type: 'bags'
         },
    { id: 12, name: 'Nike Sportswear', 
        price: '$199',
         image: 'https://bigbag-html.netlify.app/assets/img/home/category/category-img17.jpg', 
         type: 'bags' }
  ];


  const nextSlide = (section) => {
    if (section === 'men') {
      setMenActiveSlide((prev) => (prev + 1) % 3);
    } else if (section === 'women') {
      setWomenActiveSlide((prev) => (prev + 1) % 3);
    } else if (section === 'jewelry') {
      setJewelryActiveSlide((prev) => (prev + 1) % 3);
    } else if (section === 'bags') {
      setBagsActiveSlide((prev) => (prev + 1) % 3);
    }
  };

  const prevSlide = (section) => {
    if (section === 'men') {
      setMenActiveSlide((prev) => (prev === 0 ? 2 : prev - 1));
    } else if (section === 'women') {
      setWomenActiveSlide((prev) => (prev === 0 ? 2 : prev - 1));
    } else if (section === 'jewelry') {
      setJewelryActiveSlide((prev) => (prev === 0 ? 2 : prev - 1));
    } else if (section === 'bags') {
      setBagsActiveSlide((prev) => (prev === 0 ? 2 : prev - 1));
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      
      <div className="flex mb-4">
        <button 
          className={`mr-4 py-2 px-4 ${activeTab === 'clothing' ? 'border-b-2 border-teal-500 text-teal-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('clothing')}
        >
          Clothing
        </button>
        <button 
          className={`py-2 px-4 ${activeTab === 'accessories' ? 'border-b-2 border-teal-500 text-teal-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('accessories')}
        >
          Accessories
        </button>
      </div>

      {activeTab === 'clothing' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="border rounded-lg overflow-hidden">
            <div className="p-4 border-b">
              <h2 className="text-2xl font-medium text-teal-500">Men's Clothing</h2>
            </div>
            
            <div className="flex">
             
              <div className="w-1/3 border-r">
                <ul className="py-2">
                  {menCategories.map((category, index) => (
                    <li key={index} className="py-2 px-4 hover:bg-gray-100 cursor-pointer text-gray-700">
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
              
            
              <div className="w-2/3 relative">
                <div className="relative h-64 bg-gray-200">
                  <img 
                    src="https://bigbag-html.netlify.app/assets/img/home/category/category-img3.jpg" 
                    alt="Men's fashion"
                    className="w-full h-full object-cover"
                  />
                  <button 
                    onClick={() => prevSlide('men')} 
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2"
                  >
                    &lt;
                  </button>
                  <button 
                    onClick={() => nextSlide('men')} 
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2"
                  >
                    &gt;
                  </button>
                </div>
              </div>
            </div>
            
           
            <div className="grid grid-cols-3 gap-2 p-2">
              {clothingProducts.slice(0, 3).map((product) => (
                <div key={product.id} className="border relative">
                  <img src={product.image} alt={product.name} className="w-full h-32 object-cover" />
                  {product.discount && (
                    <div className="absolute top-0 left-0 bg-teal-500 text-white text-xs px-2 py-1">
                      {product.discount}
                    </div>
                  )}
                  <div className="p-2">
                    <p className="text-sm">{product.name}</p>
                    <p className="text-gray-500">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
         
          <div className="border rounded-lg overflow-hidden">
            <div className="p-4 border-b">
              <h2 className="text-2xl font-medium text-teal-500">woMen's Clothing</h2>
            </div>
            
            <div className="flex">
       \
              <div className="w-1/3 border-r">
                <ul className="py-2">
                  {womenCategories.map((category, index) => (
                    <li key={index} className="py-2 px-4 hover:bg-gray-100 cursor-pointer text-gray-700">
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
              
            
              <div className="w-2/3 relative">
                <div className="relative h-64 bg-gray-200">
                  <img 
                    src="https://bigbag-html.netlify.app/assets/img/home/category/category-img2.jpg" 
                    alt="Women's fashion"
                    className="w-full h-full object-cover"
                  />
                  <button 
                    onClick={() => prevSlide('women')} 
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2"
                  >
                    &lt;
                  </button>
                  <button 
                    onClick={() => nextSlide('women')} 
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2"
                  >
                    &gt;
                  </button>
                </div>
              </div>
            </div>
            
           
            <div className="grid grid-cols-3 gap-2 p-2">
              {clothingProducts.slice(3).map((product) => (
                <div key={product.id} className="border relative">
                  <img src={product.image} alt={product.name} className="w-full h-32 object-cover" />
                  {product.discount && (
                    <div className="absolute top-0 left-0 bg-teal-500 text-white text-xs px-2 py-1">
                      {product.discount}
                    </div>
                  )}
                  <div className="p-2">
                    <p className="text-sm">{product.name}</p>
                    <p className="text-gray-500">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

  
      {activeTab === 'accessories' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         
          <div className="border rounded-lg overflow-hidden">
            <div className="p-4 border-b">
              <h2 className="text-2xl font-medium text-teal-500">Jewelry Collections</h2>
            </div>
            
            <div className="flex">
         
              <div className="w-1/3 border-r">
                <ul className="py-2">
                  {jewelryCategories.map((category, index) => (
                    <li key={index} className="py-2 px-4 hover:bg-gray-100 cursor-pointer text-gray-700">
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
              
            
              <div className="w-2/3 relative">
                <div className="relative h-64 bg-gray-200">
                  <img 
                    src="https://bigbag-html.netlify.app/assets/img/home/category/category-img4.jpg" 
                    alt="Jewelry"
                    className="w-full h-full object-cover"
                  />
                  <button 
                    onClick={() => prevSlide('jewelry')} 
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2"
                  >
                    &lt;
                  </button>
                  <button 
                    onClick={() => nextSlide('jewelry')} 
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2"
                  >
                    &gt;
                  </button>
                </div>
              </div>
            </div>
            
            
            <div className="grid grid-cols-3 gap-2 p-2">
              {accessoriesProducts.filter(p => p.type === 'jewelry').map((product) => (
                <div key={product.id} className="border relative">
                  <img src={product.image} alt={product.name} className="w-full h-32 object-cover" />
                  {product.discount && (
                    <div className="absolute top-0 left-0 bg-teal-500 text-white text-xs px-2 py-1">
                      {product.discount}
                    </div>
                  )}
                  <div className="p-2">
                    <p className="text-sm">{product.name}</p>
                    <p className="text-gray-500">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
         
          <div className="border rounded-lg overflow-hidden">
            <div className="p-4 border-b">
              <h2 className="text-2xl font-medium text-teal-500">Bags & Shoes</h2>
            </div>
            
            <div className="flex">
            \
              <div className="w-1/3 border-r">
                <ul className="py-2">
                  {bagsCategories.map((category, index) => (
                    <li key={index} className="py-2 px-4 hover:bg-gray-100 cursor-pointer text-gray-700">
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
              
             
              <div className="w-2/3 relative">
                <div className="relative h-64 bg-gray-200">
                  <img 
                    src="https://bigbag-html.netlify.app/assets/img/home/category/category-img5.jpg" 
                    alt="Bags and shoes"
                    className="w-full h-full object-cover"
                  />
                  <button 
                    onClick={() => prevSlide('bags')} 
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2"
                  >
                    &lt;
                  </button>
                  <button 
                    onClick={() => nextSlide('bags')} 
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2"
                  >
                    &gt;
                  </button>
                </div>
              </div>
            </div>
            
         
            <div className="grid grid-cols-3 gap-2 p-2">
              {accessoriesProducts.filter(p => p.type === 'bags').map((product) => (
                <div key={product.id} className="border relative">
                  <img src={product.image} alt={product.name} className="w-full h-32 object-cover" />
                  {product.discount && (
                    <div className="absolute top-0 left-0 bg-teal-500 text-white text-xs px-2 py-1">
                      {product.discount}
                    </div>
                  )}
                  <div className="p-2">
                    <p className="text-sm">{product.name}</p>
                    <p className="text-gray-500">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      
    </div>
  );
};

export default HomeSubmega;