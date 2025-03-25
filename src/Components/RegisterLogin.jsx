import React, { useState } from 'react';

const RegisterLogin = () => {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
   
      <div className="flex justify-between items-center p-4 bg-white shadow-sm">
        <h1 className="text-2xl text-gray-500 font-light">SIGN UP</h1>
        <div className="space-x-4">
          <a href="#" className="text-gray-400 hover:text-gray-700">HOME</a>
          <span className="text-gray-400">/</span>
          <a href="#" className="text-gray-700 font-medium">SIGN UP</a>
        </div>
      </div>

     
      <div className="container mx-auto p-8">
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
          
          <div className="w-full md:w-1/2">
            <div className="bg-teal-400 text-white py-4 text-center text-xl">
              Create An Account
            </div>
            <div className="bg-white p-6 space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">First Name</label>
                <input 
                  type="text" 
                  className="w-full p-3 bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Last Name</label>
                <input 
                  type="text" 
                  className="w-full p-3 bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Enter Email</label>
                <input 
                  type="email" 
                  className="w-full p-3 bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Password</label>
                <input 
                  type="password" 
                  className="w-full p-3 bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
              <button className="w-full bg-teal-400 text-white py-3 uppercase hover:bg-teal-500 transition duration-300">
                Sign Up
              </button>
              <div className="text-center">
                <span className="text-gray-600">All Have An Account? </span>
                <a href="#" className="text-teal-400 hover:underline">Log In</a>
              </div>
            </div>
          </div>

        
          <div className="w-full md:w-1/2">
            <div className="bg-teal-400 text-white py-4 text-center text-xl">
              Already Registered?
            </div>
            <div className="bg-white p-6 space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Enter Email</label>
                <input 
                  type="email" 
                  className="w-full p-3 bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Password</label>
                <input 
                  type="password" 
                  className="w-full p-3 bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="remember" 
                  className="w-4 h-4 text-teal-400 rounded focus:ring-teal-400"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <label htmlFor="remember" className="ml-2 text-gray-700">Remember me</label>
              </div>
              <button className="w-full bg-teal-400 text-white py-3 uppercase hover:bg-teal-500 transition duration-300">
                Submit
              </button>
              <div className="text-center">
                <a href="#" className="text-teal-400 hover:underline">Forgot Password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Button */}
      <div className="fixed right-8 bottom-16">
        <button className="bg-gray-800 text-white p-4 rounded-md hover:bg-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default RegisterLogin;
