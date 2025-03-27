import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {  FaCog,  FaHome,  FaUser,  FaMapMarkerAlt,  FaListAlt,  FaHeart,  FaTicketAlt,} from 'react-icons/fa';

 
const wishlistItems = [
  {
    id: 1,
    image: 'https://bigbag-html.netlify.app/assets/img/products/cart-image01.jpg',
    name: 'Perfumes',
    price: 23.00,
    status: 'In Stock'
  },
  {
    id: 2,
    image: 'https://bigbag-html.netlify.app/assets/img/products/cart-image02.jpg',
    name: 'Watches',
    price: 43.00,
    status: 'In Stock'
  },
  {
    id: 3,
    image: 'https://bigbag-html.netlify.app/assets/img/products/cart-image03.jpg',
    name: 'Shoes',
    price: 33.00,
    status: 'In Stock'
  }
];
const NavButton = ({ icon: Icon, text, active = false }) => {
    return (
      <button className={`flex items-center space-x-2 px-4 py-2 rounded ${
        active ? 'bg-teal-500 text-white' : 'bg-gray-200 text-gray-700'
      }`}>
        <Icon />
        <span>{text}</span>
      </button>
    );
  };
  
const WishlistPage = () => {
  return (
    
        <div className="container mx-auto p-3">
          <header className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">WishList</h1>
            <div className="flex items-center space-x-2">
              <span>HOME</span>
              <span>/</span>
              <span className="text-gray-500">WishList</span>
            </div>
          </header>
    
          <nav className="flex space-x-4 mb-6">
            <NavButton icon={FaHome} text="ACCOUNT DASHBOARD" />
            <NavButton icon={FaUser} text="PROFILE" />
            <NavButton icon={FaMapMarkerAlt} text="MY ADDRESS" />
            <NavButton icon={FaListAlt} text="ALL ORDERS" active />
            <NavButton icon={FaHeart} text="WISHLIST" />
            <NavButton icon={FaTicketAlt} text="TICKETS" />
            <div className="ml-auto">
              <FaCog className="text-gray-600" />
            </div>
          </nav>
    
         

    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg">
        
        <div className="w-full">
        
          <div className="grid grid-cols-12 bg-teal-400 text-white font-semibold p-3">
            <div className="col-span-1 text-center border-r border-white/30">
              <FontAwesomeIcon icon={faTimes} />
            </div>
            <div className="col-span-4 pl-4 border-r border-white/30">Product Name</div>
            <div className="col-span-2 text-right border-r border-white/30 pr-4">Unit Price</div>
            <div className="col-span-3 text-right border-r border-white/30 pr-4">Stock Status</div>
            <div className="col-span-2 text-center">Add to Cart</div>
          </div>

     
          {wishlistItems.map((item) => (
            <div 
              key={item.id} 
              className="grid grid-cols-12 items-center border-b p-3 hover:bg-gray-50 transition-colors"
            >
            
              <div className="col-span-1 flex justify-center border-r pr-2">
                <button className="text-gray-400 hover:text-red-500">
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>

             
              <div className="col-span-4 flex items-center space-x-4 pl-4 border-r">
                <div className="flex flex-col space-y-2">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-20 h-20 object-cover rounded-md border"
                  />
                  <span className="font-medium text-sm">{item.name}</span>
                </div>
              </div>

              <div className="col-span-2 text-right font-semibold border-r pr-4">
                $ {item.price.toFixed(2)}
              </div>

              <div className="col-span-3 text-right text-green-600 font-medium border-r pr-4">
                {item.status}
              </div>

              <div className="col-span-2 flex justify-center pl-2">
                <button className="bg-teal-400 text-white px-4 py-2 rounded-md hover:bg-teal-500 transition-colors">
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default WishlistPage;