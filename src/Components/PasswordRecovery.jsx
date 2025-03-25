import React, { useState } from 'react';

const PasswordRecovery = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Password reset requested for:', email);
   
  };

  return (
    <div className="min-h-screen bg-gray-100">
     
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl text-gray-500 font-light">LOST PASSWORD</h1>
          <div className="flex items-center space-x-2 text-sm">
            <a href="/" className="text-gray-400 hover:text-gray-600">HOME</a>
            <span className="text-gray-300">/</span>
            <span className="text-gray-800">LOST PASSWORD</span>
          </div>
        </div>
      </header>

  
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <div className="bg-white shadow-md overflow-hidden">
            {/* Form Header */}
            <div className="bg-teal-400 py-4 px-6">
              <h2 className="text-white text-xl text-center">Lost Password</h2>
            </div>

         
            <div className="p-6">
              <p className="text-gray-700 mb-6">
                Enter the e-mail address associated with your account. Click submit to have your
                password e-mailed to you.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Enter Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-gray-100 py-3 px-4 rounded"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-400 text-white py-3 uppercase font-medium hover:bg-teal-500 transition duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PasswordRecovery;