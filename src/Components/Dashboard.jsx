import React, { useState } from 'react';
import { FaUser, FaMapMarkerAlt, FaClipboardList, FaHeart, FaTicketAlt, FaCog, FaTimes } from 'react-icons/fa';

const AccountDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [unpaidOrders] = useState([
    {
      id: '#252125',
      date: 'Mar. 25, 2021',
      items: 3,
      totalPrice: 99.00
    }
  ]);

  const [pendingWarrantyClaims] = useState([
    {
      id: '#252125',
      date: 'Mar. 25, 2021',
      productCode: 'Z - 45263',
      productName: 'Perfume, Watch & Shoes'
    }
  ]);

  const tabs = [
    { name: 'dashboard', icon: FaClipboardList, label: 'ACCOUNT DASHBOARD' },
    { name: 'profile', icon: FaUser, label: 'PROFILE' },
    { name: 'address', icon: FaMapMarkerAlt, label: 'MY ADDRESS' },
    { name: 'orders', icon: FaClipboardList, label: 'ALL ORDERS' },
    { name: 'wishlist', icon: FaHeart, label: 'WISHLIST' },
    { name: 'tickets', icon: FaTicketAlt, label: 'TICKETS' }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">ACCOUNT DASHBOARD</h1>
        <div className="text-sm text-gray-600 mt-2">
          HOME / ACCOUNT DASHBOARD
        </div>
      </div>

      <div className="flex justify-end items-center mb-4">
        <button className="text-gray-600 hover:text-gray-900">
          <FaCog size={20} />
        </button>
      </div>

      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
       
        <div className="flex bg-white border-b">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`
                flex items-center px-4 py-3 text-sm
                ${tab.name === 'dashboard' 
                  ? 'bg-teal-500 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'}
                transition-colors
              `}
            >
              <tab.icon className="mr-2" />
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-6 space-y-6">
        
          <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-3 rounded-lg flex justify-between items-center">
            <span>Warning! You have one unpaid order.</span>
            <button className="text-yellow-700 hover:text-yellow-900">
              <FaTimes size={20} />
            </button>
          </div>

         
          <div className="bg-white shadow rounded-lg p-6">
            <h1 className="text-2xl font-bold mb-2 text-gray-800">Welcome Adam Smith</h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

    
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="bg-teal-500 text-white px-4 py-3 font-bold">
              Unpaid Orders
            </div>
            <table className="w-full">
              <thead className="bg-teal-50">
                <tr>
                  <th className="text-left p-3 border-b">Order ID</th>
                  <th className="text-left p-3 border-b">Date</th>
                  <th className="text-left p-3 border-b">Items</th>
                  <th className="text-left p-3 border-b">Total Price</th>
                  <th className="text-right p-3 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {unpaidOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="p-3">{order.id}</td>
                    <td className="p-3">{order.date}</td>
                    <td className="p-3">{order.items}</td>
                    <td className="p-3">${order.totalPrice.toFixed(2)}</td>
                    <td className="p-3 text-right">
                      <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">
                        PAY NOW
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="bg-teal-500 text-white px-4 py-3 font-bold">
              Pending Warranty Claims
            </div>
            <table className="w-full">
              <thead className="bg-teal-50">
                <tr>
                  <th className="text-left p-3 border-b">Order ID</th>
                  <th className="text-left p-3 border-b">Date</th>
                  <th className="text-left p-3 border-b">Product Code</th>
                  <th className="text-left p-3 border-b">Product Name</th>
                  <th className="text-right p-3 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {pendingWarrantyClaims.map((claim) => (
                  <tr key={claim.id} className="hover:bg-gray-50">
                    <td className="p-3">{claim.id}</td>
                    <td className="p-3">{claim.date}</td>
                    <td className="p-3">{claim.productCode}</td>
                    <td className="p-3">{claim.productName}</td>
                    <td className="p-3 text-right">
                      <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">
                        VIEW
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDashboard;