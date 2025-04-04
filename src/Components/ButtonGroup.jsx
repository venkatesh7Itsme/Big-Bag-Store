import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const ButtonGroups = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-4xl text-gray-500 font-light">ELEMENTS</h1>
          <div className="flex items-center space-x-2">
            <span className="text-gray-400">HOME</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700">COMPONENTS</span>
          </div>
        </div>

       
        <div className="bg-gray-100 p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl text-gray-700">Button groups</h2>
            <button className="flex items-center px-4 py-2 bg-white text-gray-500 rounded hover:bg-gray-50">
              <FontAwesomeIcon icon={faCode} className="mr-2" />
              show code
            </button>
          </div>

          <div className="mt-8">
            <p className="font-medium text-lg mb-4">Example:</p>
            
           
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            
              <div className="flex">
                <button className="bg-gray-100 text-gray-700 px-6 py-2 border border-gray-300">LEFT</button>
                <button className="bg-gray-100 text-gray-700 px-6 py-2 border-t border-b border-gray-300">MIDDLE</button>
                <button className="bg-gray-100 text-gray-700 px-6 py-2 border border-gray-300">RIGHT</button>
              </div>
              
             
              <div className="flex">
                <button className="bg-teal-500 text-white px-6 py-2">LEFT</button>
                <button className="bg-teal-500 text-white px-6 py-2">MIDDLE</button>
                <button className="bg-teal-500 text-white px-6 py-2">RIGHT</button>
              </div>
              
          
              <div className="flex">
                <button className="bg-green-500 text-white px-6 py-2">LEFT</button>
                <button className="bg-green-500 text-white px-6 py-2">MIDDLE</button>
                <button className="bg-green-500 text-white px-6 py-2">RIGHT</button>
              </div>
              
              {/* Blue button group */}
              <div className="flex">
                <button className="bg-blue-500 text-white px-6 py-2">LEFT</button>
                <button className="bg-blue-500 text-white px-6 py-2">MIDDLE</button>
                <button className="bg-blue-500 text-white px-6 py-2">RIGHT</button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
              {/* Yellow button group */}
              <div className="flex">
                <button className="bg-yellow-400 text-white px-6 py-2">LEFT</button>
                <button className="bg-yellow-400 text-white px-6 py-2">MIDDLE</button>
                <button className="bg-yellow-400 text-white px-6 py-2">RIGHT</button>
              </div>
              
              {/* Red button group */}
              <div className="flex">
                <button className="bg-red-500 text-white px-6 py-2">LEFT</button>
                <button className="bg-red-500 text-white px-6 py-2">MIDDLE</button>
                <button className="bg-red-500 text-white px-6 py-2">RIGHT</button>
              </div>
              
              {/* Dark button group */}
              <div className="flex">
                <button className="bg-gray-700 text-white px-6 py-2">LEFT</button>
                <button className="bg-gray-700 text-white px-6 py-2">MIDDLE</button>
                <button className="bg-gray-700 text-white px-6 py-2">RIGHT</button>
              </div>
              
              {/* Multi-colored button group */}
              <div className="flex">
                <button className="bg-red-400 text-white px-6 py-2">LEFT</button>
                <button className="bg-yellow-400 text-white px-6 py-2">MIDDLE</button>
                <button className="bg-green-500 text-white px-6 py-2">RIGHT</button>
              </div>
            </div>
          </div>

          {/* Outlined button group section */}
          <div className="mb-16">
            <h2 className="text-3xl text-gray-700 mb-6">Outlined button group</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {/* White/Gray outlined button group */}
              <div className="flex">
                <button className="border border-gray-300 text-gray-700 px-6 py-2">LEFT</button>
                <button className="border-t border-b border-gray-300 text-gray-700 px-6 py-2">MIDDLE</button>
                <button className="border border-gray-300 text-gray-700 px-6 py-2">RIGHT</button>
              </div>
              
              {/* Teal outlined button group */}
              <div className="flex">
                <button className="border border-teal-500 text-teal-500 px-6 py-2">LEFT</button>
                <button className="border-t border-b border-teal-500 text-teal-500 px-6 py-2">MIDDLE</button>
                <button className="border border-teal-500 text-teal-500 px-6 py-2">RIGHT</button>
              </div>
              
              {/* Green outlined button group */}
              <div className="flex">
                <button className="border border-green-500 text-green-500 px-6 py-2">LEFT</button>
                <button className="border-t border-b border-green-500 text-green-500 px-6 py-2">MIDDLE</button>
                <button className="border border-green-500 text-green-500 px-6 py-2">RIGHT</button>
              </div>
              
              {/* Blue outlined button group */}
              <div className="flex">
                <button className="border border-blue-500 text-blue-500 px-6 py-2">LEFT</button>
                <button className="border-t border-b border-blue-500 text-blue-500 px-6 py-2">MIDDLE</button>
                <button className="border border-blue-500 text-blue-500 px-6 py-2">RIGHT</button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Yellow outlined button group */}
              <div className="flex">
                <button className="border border-yellow-400 text-yellow-400 px-6 py-2">LEFT</button>
                <button className="border-t border-b border-yellow-400 text-yellow-400 px-6 py-2">MIDDLE</button>
                <button className="border border-yellow-400 text-yellow-400 px-6 py-2">RIGHT</button>
              </div>
              
              {/* Red outlined button group */}
              <div className="flex">
                <button className="border border-red-500 text-red-500 px-6 py-2">LEFT</button>
                <button className="border-t border-b border-red-500 text-red-500 px-6 py-2">MIDDLE</button>
                <button className="border border-red-500 text-red-500 px-6 py-2">RIGHT</button>
              </div>
              
              {/* Dark outlined button group */}
              <div className="flex">
                <button className="border border-gray-700 text-gray-700 px-6 py-2">LEFT</button>
                <button className="border-t border-b border-gray-700 text-gray-700 px-6 py-2">MIDDLE</button>
                <button className="border border-gray-700 text-gray-700 px-6 py-2">RIGHT</button>
              </div>
            </div>
          </div>

          {/* Rounded button group section */}
          <div className="mb-16">
            <h2 className="text-3xl text-gray-700 mb-6">Rounded button group</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {/* White/Gray rounded button group */}
              <div className="flex rounded-full overflow-hidden">
                <button className="bg-gray-100 text-gray-700 px-6 py-2">LEFT</button>
                <button className="bg-gray-100 text-gray-700 px-6 py-2">MIDDLE</button>
                <button className="bg-gray-100 text-gray-700 px-6 py-2">RIGHT</button>
              </div>
              
              {/* Teal rounded button group */}
              <div className="flex rounded-full overflow-hidden">
                <button className="bg-teal-500 text-white px-6 py-2">LEFT</button>
                <button className="bg-teal-500 text-white px-6 py-2">MIDDLE</button>
                <button className="bg-teal-500 text-white px-6 py-2">RIGHT</button>
              </div>
              
              {/* Green rounded button group */}
              <div className="flex rounded-full overflow-hidden">
                <button className="bg-green-500 text-white px-6 py-2">LEFT</button>
                <button className="bg-green-500 text-white px-6 py-2">MIDDLE</button>
                <button className="bg-green-500 text-white px-6 py-2">RIGHT</button>
              </div>
              
              {/* Blue rounded button group */}
              <div className="flex rounded-full overflow-hidden">
                <button className="bg-blue-500 text-white px-6 py-2">LEFT</button>
                <button className="bg-blue-500 text-white px-6 py-2">MIDDLE</button>
                <button className="bg-blue-500 text-white px-6 py-2">RIGHT</button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {/* Yellow rounded button group */}
              <div className="flex rounded-full overflow-hidden">
                <button className="bg-yellow-400 text-white px-6 py-2">LEFT</button>
                <button className="bg-yellow-400 text-white px-6 py-2">MIDDLE</button>
                <button className="bg-yellow-400 text-white px-6 py-2">RIGHT</button>
              </div>
              
              {/* Red rounded button group */}
              <div className="flex rounded-full overflow-hidden">
                <button className="bg-red-500 text-white px-6 py-2">LEFT</button>
                <button className="bg-red-500 text-white px-6 py-2">MIDDLE</button>
                <button className="bg-red-500 text-white px-6 py-2">RIGHT</button>
              </div>
              
              {/* Dark rounded button group */}
              <div className="flex rounded-full overflow-hidden">
                <button className="bg-gray-700 text-white px-6 py-2">LEFT</button>
                <button className="bg-gray-700 text-white px-6 py-2">MIDDLE</button>
                <button className="bg-gray-700 text-white px-6 py-2">RIGHT</button>
              </div>
              
              {/* Multi-colored rounded button group */}
              <div className="flex rounded-full overflow-hidden">
                <button className="bg-red-400 text-white px-6 py-2">LEFT</button>
                <button className="bg-yellow-400 text-white px-6 py-2">MIDDLE</button>
                <button className="bg-green-500 text-white px-6 py-2">RIGHT</button>
              </div>
            </div>
          </div>

          {/* Size variations section */}
          <div className="bg-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl text-gray-700">Size Variations</h2>
              <button className="flex items-center px-4 py-2 bg-white text-gray-500 rounded hover:bg-gray-50">
                <FontAwesomeIcon icon={faCode} className="mr-2" />
                show code
              </button>
            </div>

            <p className="font-medium text-lg mb-4">Example:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Small size button group */}
              <div className="flex">
                <button className="bg-gray-100 text-gray-700 px-3 py-1 text-sm border border-gray-300">LEFT</button>
                <button className="bg-gray-100 text-gray-700 px-3 py-1 text-sm border-t border-b border-gray-300">MIDDLE</button>
                <button className="bg-gray-100 text-gray-700 px-3 py-1 text-sm border border-gray-300">RIGHT</button>
              </div>
              
              {/* Medium size teal button group */}
              <div className="flex">
                <button className="bg-teal-500 text-white px-6 py-2">LEFT</button>
                <button className="bg-teal-500 text-white px-6 py-2">MIDDLE</button>
                <button className="bg-teal-500 text-white px-6 py-2">RIGHT</button>
              </div>
              
              {/* Large size blue button group */}
              <div className="flex">
                <button className="bg-blue-500 text-white px-8 py-3">LEFT</button>
                <button className="bg-blue-500 text-white px-8 py-3">MIDDLE</button>
                <button className="bg-blue-500 text-white px-8 py-3">RIGHT</button>
              </div>
              
              {/* Extra Large multi-colored button group */}
              <div className="flex">
                <button className="bg-red-400 text-white px-10 py-4">LEFT</button>
                <button className="bg-yellow-400 text-white px-10 py-4">MIDDLE</button>
                <button className="bg-green-500 text-white px-10 py-4">RIGHT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonGroups;