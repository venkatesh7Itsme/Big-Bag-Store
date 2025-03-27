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

const AllOdersPage = () => {
  const tabs = [
    { name: 'dashboard', icon: FaClipboardList, label: 'ACCOUNT DASHBOARD' },
    { name: 'profile', icon: FaUser, label: 'PROFILE' },
    { name: 'address', icon: FaMapMarkerAlt, label: 'MY ADDRESS' },
    { name: 'orders', icon: FaList, label: 'ALL ORDERS' },
    { name: 'wishlist', icon: FaHeart, label: 'WISHLIST' },
    { name: 'tickets', icon: FaTicketAlt, label: 'TICKETS' }
  ];

  return (
    <div className="w-full min-h-screen bg-gray-100 p-0 flex justify-center items-center overflow-hidden">
      <div className="w-[90%] h-[85vh] bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
          <h1 className="text-2xl font-bold">ALL ORDERS</h1>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">HOME</span>
            <span className="text-sm text-gray-600">/</span>
            <span className="text-sm text-gray-600">ALL ORDERS</span>
          </div>
        </div>

        <div className="flex items-center px-6 py-4 bg-white mb-6">
          {tabs.map((tab) => (
            <div 
              key={tab.name} 
              className={`
                flex items-center mr-4 px-3 py-2 rounded-md cursor-pointer bg-gray-100
                ${tab.name === 'orders' 
                  ? 'bg-teal-500 text-white' 
                  : 'text-gray-600'}
              `}
            >
              <tab.icon className="mr-2" />
              <span className="text-sm">{tab.label}</span>
            </div>
          ))}
        </div>

        <div className="p-6 pt-0 overflow-hidden" style={{ height: 'calc(85vh - 200px)' }}>
          <table className="w-full border-separate border-spacing-y-4">
            <thead>
              <tr className="bg-teal-400 text-white">
                <th className="text-left px-4 py-3 rounded-l-lg">Order ID</th>
                <th className="text-left px-4 py-3">Date</th>
                <th className="text-left px-4 py-3">Items</th>
                <th className="text-left px-4 py-3">Total Price</th>
                <th className="text-left px-4 py-3">Status</th>
                <th className="text-right px-4 py-3 rounded-r-lg">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[ 
                { id: '#451231', date: 'March 25, 2021', items: 2, price: '$99.00', status: 'Processing', statusColor: 'bg-blue-500' },
                { id: '#451231', date: 'March 25, 2021', items: 3, price: '$150.00', status: 'Completed', statusColor: 'bg-green-500' },
                { id: '#451231', date: 'March 25, 2021', items: 3, price: '$150.00', status: 'Canceled', statusColor: 'bg-red-500' },
                { id: '#451231', date: 'March 25, 2021', items: 2, price: '$99.00', status: 'On Hold', statusColor: 'bg-blue-400' },
                { id: '#451231', date: 'March 25, 2021', items: 3, price: '$150.00', status: 'Pending', statusColor: 'bg-yellow-500' },
              ].map((order, index) => (
                <tr key={index} className="bg-white shadow-md rounded-lg">
                  <td className="px-4 py-3 rounded-l-lg">{order.id}</td>
                  <td className="px-4 py-3">{order.date}</td>
                  <td className="px-4 py-3">{order.items}</td>
                  <td className="px-4 py-3">{order.price}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 text-white text-xs font-bold rounded ${order.statusColor}`}>{order.status}</span>
                  </td>
                  <td className="px-4 py-3 text-right rounded-r-lg">
                    <button className="px-4 py-2 bg-gray-200 text-black rounded-md">VIEW</button>
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

export default AllOdersPage;