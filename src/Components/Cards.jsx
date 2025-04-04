import React from 'react';

const Cards = () => {
  return (
    <div className="container mx-auto p-4">
 
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Basic Cards</h2>
        <div className="flex flex-wrap gap-6">
         
          <div className="flex-1 min-w-64">
            <div className="bg-white rounded shadow-md overflow-hidden">
              <img 
                src="https://bigbag-html.netlify.app/assets/img/about-us/people-01.jpg" 
                alt="Card image" 
                className="w-full h-64 object-cover" 
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Card title</h3>
                <p className="text-gray-600 mb-3">Sub-title</p>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusm tempor
                </p>
                <button className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
          
          {/* Middle Card */}
          <div className="flex-1 min-w-64">
            <div className="bg-white rounded shadow-md overflow-hidden">
              <div className="p-4">
                <h3 className="text-xl font-semibold">Card title</h3>
                <p className="text-gray-600 mb-3">Sub-title</p>
              </div>
              <img 
                src="https://bigbag-html.netlify.app/assets/img/about-us/people-03.jpg" 
                alt="Card image" 
                className="w-full h-64 object-cover" 
              />
              <div className="p-4">
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusm tempor
                </p>
                <button className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
          
          {/* Right Card */}
          <div className="flex-1 min-w-64">
            <div className="bg-white rounded shadow-md overflow-hidden">
              <div className="p-4">
                <h3 className="text-xl font-semibold">Card title</h3>
                <p className="text-gray-600 mb-3">Sub-title</p>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusm tempor
                </p>
                <button className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600">
                  READ MORE
                </button>
              </div>
              <img 
                src="https://bigbag-html.netlify.app/assets/img/about-us/people-04.jpg" 
                alt="Card image" 
                className="w-full h-64 object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
      
     
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Card Grid</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded shadow-md overflow-hidden">
              <img 
                src="https://bigbag-html.netlify.app/assets/img/about-us/people-04.jpg" 
                alt="Card image" 
                className="w-full h-64 object-cover" 
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Card title</h3>
                <p className="text-gray-600 mb-3">Sub-title</p>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusm tempor
                </p>
                <button className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600">
                  READ MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
   
      
      <div className="container mx-auto p-4">
      <div className="bg-gray-100 p-6 mb-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Card Ribbons</h2>
          <button className="bg-white border border-gray-300 rounded px-3 py-1 text-sm text-gray-600 flex items-center">
            &lt;&gt; show code
          </button>
        </div>
      </div>
      
      <div className="mb-6">
        <p className="text-lg mb-6">Example</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Top-left Ribbon (Popular) */}
          <div className="relative bg-white border border-gray-200 shadow-sm">
            <div className="absolute top-0 left-0">
              <div className="w-32 h-32 overflow-hidden relative">
                <div className="bg-teal-500 text-white font-medium py-2 px-8 text-center transform origin-top-right rotate-45 absolute top-0 left-0 -translate-x-8 translate-y-4">
                  Popular
                </div>
              </div>
            </div>
            <div className="p-6 pt-8 text-center">
              <h3 className="text-xl font-medium mb-2">Ribbon</h3>
              <p className="text-gray-700 mb-6">
                With supporting text below as a natural lead-in to additional content.
              </p>
              <button className="bg-teal-500 text-white w-full py-2 px-4 font-medium">
                GO SOMEWHERE
              </button>
            </div>
          </div>
          
          {/* Top-right Ribbon (Best Value) */}
          <div className="relative bg-white border border-gray-200 shadow-sm">
            <div className="absolute top-0 right-0">
              <div className="w-32 h-32 overflow-hidden relative">
                <div className="bg-green-500 text-white font-medium py-2 px-8 text-center transform origin-top-left -rotate-45 absolute top-0 right-0 translate-x-8 translate-y-4">
                  Best Value
                </div>
              </div>
            </div>
            <div className="p-6 pt-8 text-center">
              <h3 className="text-xl font-medium mb-2">Ribbon</h3>
              <p className="text-gray-700 mb-6">
                With supporting text below as a natural lead-in to additional content.
              </p>
              <button className="bg-green-500 text-white w-full py-2 px-4 font-medium">
                GO SOMEWHERE
              </button>
            </div>
          </div>
          
          {/* Bottom-left Ribbon (Popular) */}
          <div className="relative bg-white border border-gray-200 shadow-sm">
            <div className="absolute bottom-0 left-0">
              <div className="w-32 h-32 overflow-hidden relative">
                <div className="bg-yellow-500 text-white font-medium py-2 px-8 text-center transform origin-bottom-right -rotate-45 absolute bottom-0 left-0 -translate-x-8 -translate-y-4">
                  Popular
                </div>
              </div>
            </div>
            <div className="p-6 pb-8 text-center">
              <h3 className="text-xl font-medium mb-2">Ribbon</h3>
              <p className="text-gray-700 mb-6">
                With supporting text below as a natural lead-in to additional content.
              </p>
              <button className="bg-yellow-500 text-white w-full py-2 px-4 font-medium">
                GO SOMEWHERE
              </button>
            </div>
          </div>
          
          {/* Bottom-right Ribbon (Best Value) */}
          <div className="relative bg-white border border-gray-200 shadow-sm">
            <div className="absolute bottom-0 right-0">
              <div className="w-32 h-32 overflow-hidden relative">
                <div className="bg-red-500 text-white font-medium py-2 px-8 text-center transform origin-bottom-left rotate-45 absolute bottom-0 right-0 translate-x-8 -translate-y-4">
                  Best Value
                </div>
              </div>
            </div>
            <div className="p-6 pb-8 text-center">
              <h3 className="text-xl font-medium mb-2">Ribbon</h3>
              <p className="text-gray-700 mb-6">
                With supporting text below as a natural lead-in to additional content.
              </p>
              <button className="bg-red-500 text-white w-full py-2 px-4 font-medium">
                GO SOMEWHERE
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="p-6 bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Card Styles</h1>
        <button className="bg-white px-3 py-1 border border-gray-300 rounded flex items-center">
          <code>&lt;&gt;</code> <span className="ml-2">show code</span>
        </button>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-4">Background color</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
       
          <div className="bg-teal-500 text-white rounded overflow-hidden">
            <div className="p-2 bg-opacity-20 ">Header</div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Primary</h3>
              <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>

  
          <div className="bg-gray-600 text-white rounded overflow-hidden">
            <div className="p-2 bg-opacity-20 ">Header</div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Secondary</h3>
              <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>

    
          <div className="bg-green-500 text-white rounded overflow-hidden">
            <div className="p-2 bg-opacity-20 ">Header</div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Success</h3>
              <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>

    
          <div className="bg-red-500 text-white rounded overflow-hidden">
            <div className="p-2 bg-opacity-20 ">Header</div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Danger</h3>
              <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>

          <div className="bg-yellow-500 text-white rounded overflow-hidden">
            <div className="p-2 bg-opacity-20 ">Header</div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Warning</h3>
              <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>

        
          <div className="bg-blue-500 text-white rounded overflow-hidden">
            <div className="p-2 bg-opacity-20 ">Header</div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Info</h3>
              <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>

      
          <div className="bg-gray-200 text-gray-800 rounded overflow-hidden">
            <div className="p-2 bg-opacity-10 bg-black">Header</div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Light</h3>
              <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>

       
          <div className="bg-gray-900 text-white rounded overflow-hidden">
            <div className="p-2 bg-opacity-20 ">Header</div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Dark</h3>
              <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
</div>

    </div>
  );
};

export default Cards;