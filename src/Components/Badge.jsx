import React from 'react';
import { FaBell, FaInbox, FaUser } from 'react-icons/fa';

const Badge = ({ children, variant = 'primary', size = 'md', count, dot }) => {

  const variantClasses = {
    primary: 'bg-blue-500 text-white',
    secondary: 'bg-gray-500 text-white',
    success: 'bg-green-500 text-white',
    danger: 'bg-red-500 text-white',
    warning: 'bg-yellow-500 text-black',
    info: 'bg-sky-500 text-white',
  };


  const sizeClasses = {
    sm: 'text-xs px-1.5 py-0.5',
    md: 'text-sm px-2 py-1',
    lg: 'text-base px-3 py-1.5',
  };


  const badgeClasses = `
    inline-flex items-center rounded font-medium
    ${variantClasses[variant] || variantClasses.primary}
    ${sizeClasses[size] || sizeClasses.md}
  `;

  return (
    <span className="relative inline-block">
      {children}
      
      {count && (
        <span className={`absolute -top-2 -right-2 ${badgeClasses}`}>
          {count > 99 ? '99+' : count}
        </span>
      )}
      
      {dot && (
        <span className="absolute top-0 right-0 block w-2 h-2 rounded-full bg-red-500 ring-2 ring-white" />
      )}
    </span>
  );
};


const BadgeExamples = () => {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-4">Badge Examples</h2>
        
        
        <div className="space-y-4 mb-8">
          <h3 className="text-lg font-medium">Example 1</h3>
          <div className="space-y-2">
            <div className="text-2xl font-bold">
              Example heading <span className="bg-blue-500 text-white text-sm px-2 py-1 rounded">New</span>
            </div>
            <div className="text-xl font-bold">
              Example heading <span className="bg-blue-500 text-white text-sm px-2 py-1 rounded">New</span>
            </div>
            <div className="text-lg font-bold">
              Example heading <span className="bg-blue-500 text-white text-sm px-2 py-1 rounded">New</span>
            </div>
            <div className="text-base font-bold">
              Example heading <span className="bg-blue-500 text-white text-sm px-2 py-1 rounded">New</span>
            </div>
            <div className="text-sm font-bold">
              Example heading <span className="bg-blue-500 text-white text-sm px-2 py-1 rounded">New</span>
            </div>
            <div className="text-xs font-bold">
              Example heading <span className="bg-blue-500 text-white text-sm px-2 py-1 rounded">New</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Example 2</h3>
          <div className="flex space-x-4">
            <button className="relative bg-teal-500 text-white px-4 py-2 rounded">
              Notifications <span className="bg-gray-800 text-white text-xs px-1.5 py-0.5 rounded ml-1">4</span>
              <FaBell className="inline ml-1" />
            </button>
            
            <Badge count="99+">
              <button className="bg-teal-500 text-white px-4 py-2 rounded">
                Inbox <FaInbox className="inline ml-1" />
              </button>
            </Badge>
            
            <Badge dot>
              <button className="bg-teal-500 text-white px-4 py-2 rounded">
                Profile <FaUser className="inline ml-1" />
              </button>
            </Badge>
          </div>
        </div>
      </div>
      
     
      <div>
        <h2 className="text-xl font-semibold mb-4">Badge Variants</h2>
        <div className="flex flex-wrap gap-4">
          <span className="bg-blue-500 text-white text-sm px-2 py-1 rounded">Primary</span>
          <span className="bg-gray-500 text-white text-sm px-2 py-1 rounded">Secondary</span>
          <span className="bg-green-500 text-white text-sm px-2 py-1 rounded">Success</span>
          <span className="bg-red-500 text-white text-sm px-2 py-1 rounded">Danger</span>
          <span className="bg-yellow-500 text-black text-sm px-2 py-1 rounded">Warning</span>
          <span className="bg-sky-500 text-white text-sm px-2 py-1 rounded">Info</span>
        </div>
      </div>
    </div>
  );
};

export default BadgeExamples;