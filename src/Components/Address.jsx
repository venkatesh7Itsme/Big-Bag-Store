import React from 'react';
import { 
  FaClipboardList, 
  FaUser, 
  FaMapMarkerAlt, 
  FaList, 
  FaHeart, 
  FaTicketAlt,
  FaEdit,
  FaTrash,
} from 'react-icons/fa';

const MyAddressPage = () => {
  const tabs = [
    { name: 'dashboard', icon: FaClipboardList, label: 'ACCOUNT DASHBOARD' },
    { name: 'profile', icon: FaUser, label: 'PROFILE' },
    { name: 'address', icon: FaMapMarkerAlt, label: 'MY ADDRESS' },
    { name: 'orders', icon: FaList, label: 'ALL ORDERS' },
    { name: 'wishlist', icon: FaHeart, label: 'WISHLIST' },
    { name: 'tickets', icon: FaTicketAlt, label: 'TICKETS' }
  ];

  const addressEntries = [
    {
      company: 'Nokia',
      name: 'Adam Smith',
      address: '9/4 C Babor Road, Mohammad Pur, Dhaka',
      country: 'Bangladesh',
      phone: '+884 5452 6452'
    },
    {
      company: 'Samsung',
      name: 'Adam Smith',
      address: '9/4 C Babor Road, Mohammad Pur, Dhaka',
      country: 'Bangladesh',
      phone: '+884 5452 6452'
    },
    {
      company: 'Motorola',
      name: 'Adam Smith',
      address: '9/4 C Babor Road, Mohammad Pur, Dhaka',
      country: 'Bangladesh',
      phone: '+884 5452 6452'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gray-100 p-0 flex justify-center items-center">
      <div className="w-[90%] h-[85vh] bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
          <h1 className="text-2xl font-bold">MY ADDRESS</h1>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">HOME</span>
            <span className="text-sm text-gray-600">/</span>
            <span className="text-sm text-gray-600">MY ADDRESS</span>
          </div>
        </div>

        <div className="flex items-center px-6 py-4 bg-white mb-6">
          {tabs.map((tab, index) => (
            <div 
              key={tab.name} 
              className={`
                flex items-center mr-4 px-3 py-2 rounded-md cursor-pointer bg-gray-100
                ${tab.name === 'address' 
                  ? 'bg-teal-500 text-white' 
                  : 'text-gray-600'}
              `}
            >
              <tab.icon className="mr-2" />
              <span className="text-sm">{tab.label}</span>
            </div>
          ))}
        </div>

        <div className="p-6 pt-0 overflow-y-auto" style={{height: 'calc(85vh - 200px)'}}>
          <table className="w-full border-separate border-spacing-y-4">
            <thead>
              <tr className="bg-teal-400 text-white">
                <th className="text-left px-4 py-3 rounded-l-lg">Company</th>
                <th className="text-left px-4 py-3">Name</th>
                <th className="text-left px-4 py-3">Address</th>
                <th className="text-left px-4 py-3">Country</th>
                <th className="text-left px-4 py-3">Phone</th>
                <th className="text-right px-4 py-3 rounded-r-lg">Actions</th>
              </tr>
            </thead>
            <tbody>
              {addressEntries.map((entry, index) => (
                <tr 
                  key={index} 
                  className="bg-white shadow-md rounded-lg"
                >
                  <td className="px-4 py-3 rounded-l-lg">{entry.company}</td>
                  <td className="px-4 py-3">{entry.name}</td>
                  <td className="px-4 py-3">{entry.address}</td>
                  <td className="px-4 py-3">{entry.country}</td>
                  <td className="px-4 py-3">{entry.phone}</td>
                  <td className="px-4 py-3 text-right rounded-r-lg">
                    <span className="inline-flex space-x-3">
                      <FaEdit className="text-gray-500 cursor-pointer" />
                      <FaTrash className="text-red-500 cursor-pointer" />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyAddressPage;