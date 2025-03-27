import React from 'react';
import {  FaCog,  FaHome,  FaUser,  FaMapMarkerAlt,  FaListAlt,  FaHeart,  FaTicketAlt, FaPrint, FaFilePdf, FaTimesCircle } from 'react-icons/fa';
import {  faBox,  faCheckCircle,  faTruck,  faShoppingBag  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SingleOrderPage = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">SINGLE ORDER</h1>
        <div className="flex items-center space-x-2">
          <span>HOME</span>
          <span>/</span>
          <span className="text-gray-500">SINGLE ORDER</span>
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

     
      <OrderTracking />
    </div>
  );
};


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


const OrderTracking = () => {
    const orderStages = [
      { 
        stage: 'Ordered', 
        date: '18/03/21', 
        time: '13:19', 
        icon: faShoppingBag,
        completed: true 
      },
      { 
        stage: 'Ready', 
        date: '20/03/21', 
        time: '15:29', 
        icon: faBox,
        completed: true 
      },
      { 
        stage: 'Shipped', 
        date: '20/03/21', 
        time: '17:05', 
        icon: faTruck,
        completed: true 
      },
      { 
        stage: 'Dispatched', 
        date: '25/03/21', 
        time: '14:00', 
        icon: faCheckCircle,
        completed: true 
      },
      { 
        stage: 'Delivered', 
        date: '30/03/21', 
        time: '16:00', 
        icon: faCheckCircle,
        completed: true 
      }
    ];
    const orderUpdates = [
        {
          date: 'Mar 18, 2021',
          location: 'Shyamoli, Dhaka',
          event: 'Ordered',
          carrier: 'Carrier BD',
          details: '#451221'
        },
        {
          date: 'Mar 20, 2021',
          location: 'Babor Road, Mohammad Pur',
          event: 'Ready',
          carrier: 'Waiting For Carrier',
          details: ''
        },
        {
          date: 'Mar 20, 2021',
          location: '9/4 Road, BD',
          event: 'Shipped',
          carrier: 'Carrier BD',
          details: 'Tracking Nr: L295637'
        },
        {
          date: 'Mar 25, 2021',
          location: 'Mohammad Pur, Shyamoli',
          event: 'Dispatched',
          carrier: 'Carrier BD',
          details: 'Time: 14:00'
        },
        {
          date: 'Mar 30, 2021',
          location: 'Dhaka, BD',
          event: 'Delivered',
          carrier: 'Credit Card - VISA',
          details: ''
        }
      ];


      const items = [
        { 
          name: 'Perfumes', 
          price: 23.00, 
          quantity: 1, 
          image: 'https://bigbag-html.netlify.app/assets/img/products/cart-image01.jpg' 
        },
        { 
          name: 'Watches', 
          price: 43.00, 
          quantity: 1, 
          image: 'https://bigbag-html.netlify.app/assets/img/products/cart-image02.jpg' 
        },
        { 
          name: 'Shoes', 
          price: 33.00, 
          quantity: 1, 
          image: 'https://bigbag-html.netlify.app/assets/img/products/cart-image03.jpg' 
        }
      ];
      const subTotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const ukVat = subTotal * 0.18;
      const grandTotal = subTotal + ukVat;    
    
    return (
        <div className="w-full max-w-full px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">Order #451221</h2>
            <button className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition">
              ORDER DETAILS
            </button>
          </div>
    
          <div className="relative w-full mb-12">
            {/* Order Stages */}
            <div className="relative flex justify-between mb-4">
              {orderStages.map((stage) => (
                <div key={stage.stage} className="flex flex-col items-center z-10">
                  <div className="text-center">
                    <div className="font-semibold text-gray-800 text-sm">{stage.stage}</div>
                    <div className="text-xs text-gray-600">{stage.date}</div>
                    <div className="text-xs text-gray-600">{stage.time}</div>
                  </div>
                </div>
              ))}
            </div>
    
            {/* Thick Progress Bar */}
            <div className="relative w-full h-3">
              <div className="absolute left-0 top-0 w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-teal-500" 
                  style={{ width: `${(orderStages.findIndex(stage => stage.stage === 'Shipped') / (orderStages.length - 1)) * 100}%` }}
                ></div>
              </div>
            </div>
    
            {/* Gray Dots for Later Stages */}
            <div className="absolute left-0 top-[calc(100%-0.75rem)] w-full flex justify-between">
              {orderStages.map((stage, index) => (
                index > orderStages.findIndex(s => s.stage === 'Shipped') && (
                  <div 
                    key={stage.stage}
                    className="w-4 h-4 rounded-full bg-gray-200 shadow-md"
                  />
                )
              ))}
            </div>
          </div>

          <div className="max-w-6xl mx-auto p-6 bg-white shadow-md">
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-700">Order Details</h1>
      </div>
      
      <div className="flex">
        <div className="w-1/3 pr-6">
          <div className="mb-4">
            <p className="text-gray-600"><strong>Email:</strong> adamsmith@bigbag.com</p>
            <p className="text-gray-600"><strong>Phone:</strong> +884 5452 6432</p>
          </div>
          
          <div>
            <h2 className="font-semibold text-gray-700 mb-2">Additional Information:</h2>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco 
              laboris nisi ut aliquip
            </p>
          </div>
        </div>

        <div className="w-2/3">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-teal-400 text-white">
                  <th className="p-3 text-left">Date</th>
                  <th className="p-3 text-left">Location</th>
                  <th className="p-3 text-left">Event</th>
                </tr>
              </thead>
              <tbody>
                {orderUpdates.map((update, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-3">{update.date}</td>
                    <td className="p-3">{update.location}</td>
                    <td className="p-3">
                      <div>{update.event}</div>
                      <div className="text-xs text-gray-500">{update.carrier}</div>
                      {update.details && (
                        <div className="text-xs text-gray-500">{update.details}</div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <button className="bg-teal-400 text-white px-6 py-2 rounded hover:bg-teal-500 transition-colors">
          BACK TO ORDER DETAILS
        </button>
      </div>
    </div>
    


    <div className="w-full max-w-7xl mx-auto p-6">
      <table className="w-full border-collapse shadow-lg">
        <thead>
          <tr className="bg-teal-400 text-white">
            <th className="p-3 text-left w-1/3 pl-6">Product Name</th>
            <th className="p-3 text-right w-1/6">Price</th>
            <th className="p-3 text-right w-1/6">Quantity</th>
            <th className="p-3 text-right w-1/6 pr-6">Sub Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="p-3 pl-6 flex items-center">
                <div className="w-20 h-20 mr-4 flex items-center justify-center border border-gray-200 rounded">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="max-w-full max-h-full object-contain" 
                  />
                </div>
                <span className="font-medium">{item.name}</span>
              </td>
              <td className="p-3 text-right">${item.price.toFixed(2)}</td>
              <td className="p-3 text-right">{item.quantity}</td>
              <td className="p-3 text-right pr-6">${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className="p-3 text-right font-semibold pl-6">Sub Total</td>
            <td className="p-3 text-right pr-6">${subTotal.toFixed(2)}</td>
          </tr>
          <tr>
            <td colSpan="3" className="p-3 text-right font-semibold pl-6">UK Vat</td>
            <td className="p-3 text-right pr-6">${ukVat.toFixed(2)}</td>
          </tr>
          <tr className="font-bold bg-teal-50">
            <td colSpan="3" className="p-3 text-right pl-6">Grand Total</td>
            <td className="p-3 text-right text-teal-600 pr-6">${grandTotal.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
    </div>


    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Billing Address</h2>
            <p>Adam Smith</p>
            <p>9/4 C Babor Road, Mohammad pur,</p>
            <p>Shyamoli, Dhaka</p>
            <p>Bangladesh</p>
          </div>
        </div>
        
        <div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>
            <p>Adam Smith</p>
            <p>9/4 C Babor Road, Mohammad pur,</p>
            <p>Shyamoli, Dhaka</p>
            <p>Bangladesh</p>
          </div>
        </div>
        
        <div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
            <p>Credit Card - VISA</p>
          </div>
        </div>
        
        <div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Shipping Method</h2>
            <p>Post Air Mail</p>
          </div>
        </div>
      </div>
    </div>




      {/* Action Buttons */}
      <div className="col-span-2 flex space-x-4 mt-6">
        <button className="flex items-center space-x-2 bg-teal-500 text-white px-4 py-2 rounded">
          <FaPrint />
          <span>PRINT</span>
        </button>
        <button className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded">
          <FaFilePdf />
          <span>SAVE TO PDF</span>
        </button>
        <button className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded">
          <FaTimesCircle />
          <span>CANCEL ORDER</span>
        </button>
      </div>
    </div>
    
  );
};

export default SingleOrderPage;
