import React, { useState } from 'react';
import { FaShoppingBag, FaShoppingCart, FaMinus, FaPlus, FaTimes, FaCog } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const CartPage = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Perfumes',
      price: 23.00,
      quantity: 1,
     image: 'https://bigbag-html.netlify.app/assets/img/products/cart-image01.jpg'
         },
    {
         id: 2,
         name: 'Watches',
         price: 43.00,
         quantity: 1,
         image: 'https://bigbag-html.netlify.app/assets/img/products/cart-image02.jpg'
         },


    { 
        id: 3,
         name: 'Shoes',
        price: 33.00,
         quantity: 1,
         image: 'https://bigbag-html.netlify.app/assets/img/products/cart-image03.jpg'
         }
  ]);
  
  const [couponCode, setCouponCode] = useState('');

  const updateQuantity = (id, change) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const vat = subtotal * 0.18; 
  const grandTotal = subtotal + vat;

  const handleCheckout = () => {
    navigate('/shop'); 
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <FaShoppingBag className="text-teal-500 text-2xl mr-2" />
            <span className="text-2xl font-bold"><span className="text-gray-800">BIG</span><span className="text-teal-500">BAG</span></span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="font-medium">HOME</Link>
            <Link to="/shop" className="font-medium text-teal-500">SHOP</Link>
            <a href="#" className="font-medium">PAGES</a>
            <a href="#" className="font-medium">BLOG</a>
            <a href="#" className="font-medium">MY ACCOUNT</a>
            <a href="#" className="font-medium">COMPONENTS</a>
          </nav>
          <div className="flex items-center">
            <div className="relative">
              <FaShoppingCart className="text-2xl" />
              <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            </div>
          </div>
        </div>
      </header>
      <div 
        className="bg-cover bg-center h-48 flex flex-col justify-center items-center text-white"
        style={{ backgroundImage: `url(https://bigbag-html.netlify.app/assets/img/products/page-header-image.jpg)` }}
      >
        <h1 className="text-4xl font-bold mb-2">CART</h1>
        <div className="flex items-center space-x-2">
          <Link to="/" className="hover:underline">HOME</Link>
          <span>/</span>
          <span>CART</span>
        </div>
      </div>


      <div className="container mx-auto px-4 py-12">
        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
         
          <table className="w-full">
            <thead className="bg-teal-500 text-white">
              <tr>
                <th className="px-6 py-4 text-left"></th>
                <th className="px-6 py-4 text-left"></th>
                <th className="px-6 py-4 text-left">Product Name</th>
                <th className="px-6 py-4 text-left">Price</th>
                <th className="px-6 py-4 text-left">Quantity</th>
                <th className="px-6 py-4 text-left">Sub Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4">
                    <button 
                      className="text-teal-500 hover:text-teal-700"
                      onClick={() => removeItem(item.id)}
                    >
                      <FaTimes />
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
                  </td>
                  <td className="px-6 py-4 font-medium">{item.name}</td>
                  <td className="px-6 py-4">${item.price.toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <button 
                        className="bg-gray-200 p-2 rounded-l"
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        <FaMinus size={12} />
                      </button>
                      <input 
                        type="text" 
                        value={item.quantity} 
                        readOnly 
                        className="w-12 text-center border-t border-b border-gray-200 py-2"
                      />
                      <button 
                        className="bg-gray-200 p-2 rounded-r"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        <FaPlus size={12} />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium">${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

    
          <div className="flex flex-col md:flex-row justify-between items-center p-6 border-t border-gray-200">
            <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
              <input 
                type="text" 
                placeholder="I have a discount coupon" 
                className="border border-gray-300 rounded-l px-4 py-2 w-full md:w-64"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <button className="bg-gray-800 text-white px-4 py-2 rounded-r font-medium">
                APPLY COUPON
              </button>
            </div>
            <button className="bg-gray-800 text-white px-6 py-2 rounded font-medium w-full md:w-auto">
              UPDATE CART
            </button>
          </div>
        </div>

        <div className="md:w-1/3 md:ml-auto">
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="font-medium">Sub Total</span>
              <span className="font-medium">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="font-medium">UK Vat</span>
              <span className="font-medium">${vat.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="font-medium">Grand Total</span>
              <span className="font-bold">${grandTotal.toFixed(2)}</span>
            </div>
            <button 
              onClick={handleCheckout}
              className="mt-6 bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-6 rounded w-full flex items-center justify-center"
            >
              CHECKOUT <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </div>

    
      <div className="fixed right-4 bottom-24 z-10">
        <button className="bg-gray-800 text-white p-4 rounded-full shadow-lg">
          <FaCog />
        </button>
      </div>
    </div>
  );
};

export default CartPage;