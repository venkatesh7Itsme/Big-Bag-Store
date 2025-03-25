import React, { useState } from 'react';
import { FaFacebook, FaGoogle, FaCog } from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', { email, password, rememberMe });
    
  };

  return (
    <div className="min-h-screen bg-gray-100">
     
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-normal text-gray-500">LOG IN</h1>
          <div className="flex items-center">
            <a href="/" className="text-gray-400 hover:text-gray-600 mr-2">HOME</a>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-gray-600">LOG IN</span>
          </div>
        </div>
      </header>

    
      <main className="container mx-auto px-4 py-8 flex justify-center">
      <div className="w-full max-w-2xl bg-white rounded shadow-md relative">
         
          
          <form onSubmit={handleSubmit}>
            <div className="bg-teal-400 text-white py-4 text-center text-xl">
              Log In
            </div>
            
            <div className="p-6">
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Enter Email</label>
                <input
                  type="email"
                  className="w-full p-3 bg-gray-100 rounded"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  className="w-full p-3 bg-gray-100 rounded"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <span className="text-gray-700">Remember me</span>
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full bg-teal-400 text-white py-3 rounded hover:bg-teal-500 transition duration-300"
              >
                LOG IN
              </button>
              
              <div className="mt-4 grid grid-cols-2 gap-4">
                <button
                  type="button"
                  className="flex justify-center items-center bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition duration-300"
                >
                  <FaFacebook className="mr-2" />
                  LOG IN WITH FACEBOOK
                </button>
                
                <button
                  type="button"
                  className="flex justify-center items-center bg-red-500 text-white py-3 rounded hover:bg-red-600 transition duration-300"
                >
                  <FaGoogle className="mr-2" />
                  LOG IN WITH GOOGLE-PLUS
                </button>
              </div>
              
              <div className="mt-4 text-center">
                <a href="/forgot-password" className="text-teal-400 hover:underline">
                  Forgot Password?
                </a>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;