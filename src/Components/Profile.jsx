import React, { useState } from 'react';
import { FaUser, FaMapMarkerAlt, FaList, FaHeart, FaTicketAlt, FaClipboardList } from "react-icons/fa";

const Profile = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    { name: 'dashboard', icon: FaClipboardList, label: 'ACCOUNT DASHBOARD' },
    { name: 'profile', icon: FaUser, label: 'PROFILE' },
    { name: 'address', icon: FaMapMarkerAlt, label: 'MY ADDRESS' },
    { name: 'orders', icon: FaList, label: 'ALL ORDERS' },
    { name: 'wishlist', icon: FaHeart, label: 'WISHLIST' },
    { name: 'tickets', icon: FaTicketAlt, label: 'TICKETS' }
  ];

  return (
    <div className="max-w-7xl mx-auto p-8 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">PROFILE</h2>
      
      <div className="flex bg-white border-b mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`
              flex items-center px-6 py-3 text-sm
              ${tab.name === activeTab 
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
      
      <div className="flex space-x-8">
        <div className="flex flex-col items-center">
          <img
            src="https://bigbag-html.netlify.app/assets/img/products/profile/profile-image.jpg"
            alt="Avatar"
            className="w-24 h-24 rounded-full border"
          />
          <button className="mt-2 px-4 py-2 bg-teal-500 text-white rounded-md text-sm">CHANGE AVATAR</button>
        </div>
        
        <div className="flex-1 grid grid-cols-1 gap-4">
          <div className="flex items-center">
            <label className="w-40 text-gray-600">First Name</label>
            <input type="text" value="Adam" className="flex-1 p-3 border rounded-md bg-gray-100" readOnly />
          </div>
          <div className="flex items-center">
            <label className="w-40 text-gray-600">Last Name</label>
            <input type="text" value="Smith" className="flex-1 p-3 border rounded-md bg-gray-100" readOnly />
          </div>
          <div className="flex items-center">
            <label className="w-40 text-gray-600">Phone Number</label>
            <input type="text" value="+884 5452 6432" className="flex-1 p-3 border rounded-md bg-gray-100" readOnly />
          </div>
          <div className="flex items-center">
            <label className="w-40 text-gray-600">Email Address</label>
            <input type="email" value="adamsmith@bigbag.com" className="flex-1 p-3 border rounded-md bg-gray-100" readOnly />
          </div>
          <div className="flex items-center">
            <label className="w-40 text-gray-600">Password</label>
            <input type="password" value="************" className="flex-1 p-3 border rounded-md bg-gray-100" readOnly />
          </div>
          <div className="flex items-center">
          <label className="w-40 text-gray-600">New Password</label>
          <input type="password" value="************" className="flex-1 p-3 rounded-md bg-transparent border-none text-gray-500" readOnly />
        </div>
      </div>
      
      <div className="mt-6 text-right">
        <button className="px-6 py-2 bg-teal-500 text-white rounded-md text-sm">SAVE INFO</button>
      </div>
        </div>
      </div>
   
  );
};

export default Profile;
