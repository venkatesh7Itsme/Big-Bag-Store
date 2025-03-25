import React, { useState } from 'react';
import { FaCheck, FaTwitter, FaFacebook, FaInstagram, FaTumblr, FaDribbble } from 'react-icons/fa';

const ComingSoon = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(false);

  const validateEmail = (email) => {
    return email.includes("@") && email.includes(".") && email.indexOf("@") < email.lastIndexOf(".");
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    if (inputEmail === '') {
      setError('');
      setIsValid(false);
    } else if (!validateEmail(inputEmail)) {
      setError('Invalid email address');
      setIsValid(false);
    } else {
      setError('');
      setIsValid(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValid) {
      setError('Please enter a valid email address');
      return;
    }

    console.log('Submitted email:', email);
    alert('Thank you for subscribing!');
    setEmail('');
    setIsValid(false);
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url("https://bigbag-html.netlify.app/assets/img/comming-soon/comming-soon-bg.jpg")`
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      <div className="relative z-10 text-center max-w-lg p-8">
        <img 
          src="https://bigbag-html.netlify.app/assets/img/comming-soon/logo-comming.png" 
          alt="BigBag Logo" 
          className="mx-auto mb-6 w-24 h-24"
        />
        
        <h1 className="text-4xl font-bold text-white mb-4">We Are Coming Soon!</h1>
        <p className="text-gray-300 mb-8">
          We Are Currently Working On Awesome New Site. Stay Tuned!
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col mb-6">
          <div className="relative flex">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter email for notification"
              className="w-full p-3 pr-10 bg-transparent border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-white"
            />
            {isValid && (
              <button 
                type="submit" 
                className="bg-blue-500 text-white p-3 rounded-r-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center"
              >
                <FaCheck />
              </button>
            )}
          </div>
          {error && (
            <p className="text-red-500 text-sm mt-2 text-left">{error}</p>
          )}
        </form>
        
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-white hover:text-blue-300">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="text-white hover:text-blue-300">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="text-white hover:text-blue-300">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="text-white hover:text-blue-300">
            <FaTumblr size={20} />
          </a>
          <a href="#" className="text-white hover:text-blue-300">
            <FaDribbble size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;