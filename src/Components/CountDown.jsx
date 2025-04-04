import React, { useState } from 'react';

export default function CountdownTimer() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="mb-10">
        <h1 className="text-2xl text-gray-700">ELEMENTS</h1>
        <div className="flex justify-between items-center">
          <div></div>
          <div className="flex gap-4">
            <span className="text-gray-400">HOME</span>
            <span>/</span>
            <span className="text-gray-800">COMPONENTS</span>
          </div>
        </div>
      </div>

 
      <div className="bg-gray-100 p-6 rounded mb-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold">Countdown Timer</h2>
          <button className="border rounded px-3 py-1 text-sm flex items-center">
            &lt;&gt; show code
          </button>
        </div>
        
        <div className="py-2">
          <p className="text-gray-700 mb-2">Example</p>
          <p className="text-gray-700">The countdown is finished!</p>
        </div>
      </div>

    
      <div className="bg-gray-100 p-6 rounded">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold">Timer With Title</h2>
          <button className="border rounded px-3 py-1 text-sm flex items-center">
            &lt;&gt; show code
          </button>
        </div>
        
        <div className="py-2">
          <p className="text-gray-700 mb-2">Example</p>
          <p className="text-gray-700">The countdown is finished!</p>
        </div>
      </div>
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Colored Background</h2>
        
        <div className="py-2">
          <p className="text-gray-700 mb-2">Example</p>
          <div className="bg-teal-500 p-16 text-center">
            <p className="text-gray-800">The countdown is finished!</p>
          </div>
        </div>
      </div>

  
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Image Background</h2>
        
        <div className="py-2">
          <p className="text-gray-700 mb-2">Example</p>
          <div 
            className="bg-navy-900 p-16 h-40" 
            style={{ 
              backgroundImage: 'url("https://bigbag-html.netlify.app/assets/img/about-us/store-bg.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
       
          </div>
        </div>
      </div>

    </div>
  );
}