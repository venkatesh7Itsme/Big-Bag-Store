import React from 'react';
import { FaSearch } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="text-center space-y-6">
        <h1 className="text-[180px] font-bold text-teal-500 drop-shadow-lg" style={{
          textShadow: '4px 4px 6px rgba(0,0,0,0.1)'
        }}>
          404
        </h1>
        <p className="text-2xl text-gray-600 tracking-wide">Oops! Page Not Found</p>
        
        <div className="max-w-md mx-auto">
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
            <input 
              type="text" 
              placeholder="Search again" 
              className="py-3 px-4 w-full focus:outline-none text-lg"
            />
            <div className="h-6 w-px bg-gray-300 mx-2"></div>
            <div className="pr-4 text-gray-400">
              <FaSearch className="w-6 h-6" />
            </div>
          </div>
        </div>
        
        <div>
          <button 
            className="mt-6 px-8 py-3 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors text-lg"
          >
            GO BACK
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;