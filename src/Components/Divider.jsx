import React from 'react';
// Import Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCircle, 
  faStar, 
  faUser, 
  faCircleNotch 
} from '@fortawesome/free-solid-svg-icons';

export default function DividerStyles() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
       
        <div className="bg-gray-200 p-6 mb-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Divider Styles</h1>
          <button className="px-3 py-1 border border-gray-300 rounded bg-white text-gray-600 text-sm">
            &lt;&gt; show code
          </button>
        </div>

     
        <div className="mb-12">
          <h2 className="text-lg font-medium text-gray-700 mb-4">Example</h2>
          
     
          <p className="text-gray-800 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis totam, laudantium officia praesentium expedita omnis unde tempora beatae, modi, sequi quis. Est quas corporis nobis aperiam cumque, minima, libero rem itaque quo vitae odit deserunt cupiditate fugit ipsum, nam quis suscipit tempora recusandae blanditiis porro incidunt maxime soluta. Voluptas, rem.
          </p>
          
          
          <hr className="my-4" />
          
          
          <p className="text-gray-800 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia voluptate voluptatum a fuga, inventore, velit doloremque illum repudiandae, eaque laudantium distinctio aliquid quis rem voluptas in excepturi. Voluptates quam possimus nostrum, cum aspernatur, odit nihil.
          </p>
     
          <hr className="my-4 border-t-2" />
    
          <p className="text-gray-800 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia voluptate voluptatum a fuga, inventore, velit doloremque illum repudiandae, eaque laudantium distinctio aliquid quis rem voluptas in excepturi. Voluptates quam possimus nostrum, cum aspernatur, odit nihil.
          </p>
          
        
          <div className="my-6 border-t" />
          
       
          <p className="text-gray-800 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia voluptate voluptatum a fuga, inventore, velit doloremque illum repudiandae, eaque laudantium distinctio aliquid quis rem voluptas in excepturi. Voluptates quam possimus nostrum, cum aspernatur, odit nihil.
          </p>
          
       
          <hr className="my-4 border-t border-gray-300" />
          
     
          <p className="text-gray-800 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia voluptate voluptatum a fuga, inventore, velit doloremque illum repudiandae, eaque laudantium distinctio aliquid quis rem voluptas in excepturi. Voluptates quam possimus nostrum, cum aspernatur, odit nihil.
          </p>
          
        
          <hr className="my-4 border-t border-gray-200" />
          
      
          <p className="text-gray-800 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia voluptate voluptatum a fuga, inventore, velit doloremque illum repudiandae, eaque laudantium distinctio aliquid quis rem voluptas in excepturi. Voluptates quam possimus nostrum, cum aspernatur, odit nihil.
          </p>
        </div>

        
        <div className="bg-gray-200 p-6 mb-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Icon Divider</h1>
          <button className="px-3 py-1 border border-gray-300 rounded bg-white text-gray-600 text-sm">
            &lt;&gt; show code
          </button>
        </div>

      
        <div className="mb-12">
         
          <p className="text-gray-800 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi omnis, magni eos! Quis eos deleniti aperiam voluptatibus vel nemo commodi, repellendus harum esse quidem accusamus reprehenderit deserunt ducimus, doloribus, sunt!
          </p>
          
         
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-300"></div>
            <div className="mx-4 text-gray-400">
              <FontAwesomeIcon icon={faCircle} className="text-gray-400 text-lg" />
            </div>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
          
        
          <p className="text-gray-800 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi omnis, magni eos! Quis eos deleniti aperiam voluptatibus vel nemo commodi, repellendus harum esse quidem accusamus reprehenderit deserunt ducimus, doloribus, sunt!
          </p>
          
       
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-300"></div>
            <div className="mx-4 text-gray-400">
              <FontAwesomeIcon icon={faStar} className="text-gray-400 text-lg" />
            </div>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
          
    
          <p className="text-gray-800 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi omnis, magni eos! Quis eos deleniti aperiam voluptatibus vel nemo commodi, repellendus harum esse quidem accusamus reprehenderit deserunt ducimus, doloribus, sunt!
          </p>
          
         
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-300"></div>
            <div className="mx-4 text-gray-400">
              <FontAwesomeIcon icon={faUser} className="text-gray-400 text-lg" />
            </div>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
          
     
          <p className="text-gray-800 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi omnis, magni eos! Quis eos deleniti aperiam voluptatibus vel nemo commodi, repellendus harum esse quidem accusamus reprehenderit deserunt ducimus, doloribus, sunt!
          </p>
          
    
          <div className="flex items-center my-6">
            <div className="mr-4 text-gray-400">
              <FontAwesomeIcon icon={faCircleNotch} className="text-gray-400 text-lg" />
            </div>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
        </div>

        <div className="bg-gray-200 p-6 mb-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Dividers Mixed</h1>
          <button className="px-3 py-1 border border-gray-300 rounded bg-white text-gray-600 text-sm">
            &lt;&gt; show code
          </button>
        </div>

        
        <div className="mb-12">
          {/* First paragraph */}
          <p className="text-gray-800 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ipsum quia, reiciendis tenetur rerum! Consequuntur error quas ex doloribus modi veritatis quam possimus molestiae nesciunt, odio quasi rerum, perferendis rem!
          </p>
          
          {/* Teal Circle Divider */}
          <div className="flex items-center my-8">
            <div className="flex-grow h-px bg-gray-300"></div>
            <div className="mx-4">
              <div className="w-6 h-6 bg-teal-500 rounded-full"></div>
            </div>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
          
         
          <p className="text-gray-800 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi tempore doloremque quidem delectus officiis eligendi repellat esse consectetur. Recusandae voluptatem ex odio nisi, odit expedita facilis ducimus est ullam. Dolorum!
          </p>
          
      
          <div className="flex items-center my-8">
            <div className="flex-grow">
              <div className="h-px bg-gray-300 mb-1"></div>
              <div className="h-px bg-gray-300"></div>
            </div>
            <div className="mx-4">
              <div className="w-10 h-10 bg-teal-500 rounded-md flex items-center justify-center">
                <FontAwesomeIcon icon={faUser} className="text-white text-lg" />
              </div>
            </div>
            <div className="flex-grow">
              <div className="h-px bg-gray-300 mb-1"></div>
              <div className="h-px bg-gray-300"></div>
            </div>
          </div>
          
        
          <p className="text-gray-800 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi tempore doloremque quidem delectus officiis eligendi repellat esse consectetur. Recusandae voluptatem ex odio nisi, odit expedita facilis ducimus est ullam. Dolorum!
          </p>
        </div>
      </div>
    </div>
  );
}