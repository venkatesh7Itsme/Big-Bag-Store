import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faClock, 
  faPhone, 
  faEnvelope, 
  faCog 
} from '@fortawesome/free-solid-svg-icons';

const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gray-100 py-6 px-4 md:px-8 flex justify-between items-center">
        <h1 className="text-3xl text-gray-600 font-medium">CONTACT US</h1>
        <div className="flex items-center gap-2">
          <a href="/" className="text-gray-500 hover:text-gray-700">HOME</a>
          <span className="text-gray-500">/</span>
          <span className="text-gray-800">CONTACT US</span>
          <div className="ml-4 relative">
            <button className="bg-gray-800 p-3 rounded-md">
              <FontAwesomeIcon icon={faCog} className="text-white w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow px-4 md:px-8 py-8">
        {/* Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {/* Address Card */}
          <div className="bg-white p-6 flex flex-col items-center border rounded-sm">
            <div className="bg-teal-400 rounded-full p-4 mb-4 flex items-center justify-center w-16 h-16">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white text-xl" />
            </div>
            <h2 className="text-xl font-medium mb-2">Main store address</h2>
            <p className="text-gray-600 text-center mb-4">
              514 S. Magnolia St. Orlando, FL 32806, USA
            </p>
            <a href="#" className="text-teal-400 hover:text-teal-500 flex items-center">
              Click to see map <span className="ml-1">↓</span>
            </a>
          </div>

          {/* Working Hours Card */}
          <div className="bg-white p-6 flex flex-col items-center border rounded-sm">
            <div className="bg-teal-400 rounded-full p-4 mb-4 flex items-center justify-center w-16 h-16">
              <FontAwesomeIcon icon={faClock} className="text-white text-xl" />
            </div>
            <h2 className="text-xl font-medium mb-2">Working hours</h2>
            <p className="text-gray-600 text-center">
              Mon - Fri: 10AM - 19PM Sat: 11AM - 17PM
            </p>
          </div>

          {/* Phone Numbers Card */}
          <div className="bg-white p-6 flex flex-col items-center border rounded-sm">
            <div className="bg-teal-400 rounded-full p-4 mb-4 flex items-center justify-center w-16 h-16">
              <FontAwesomeIcon icon={faPhone} className="text-white text-xl" />
            </div>
            <h2 className="text-xl font-medium mb-2">Phone numbers</h2>
            <div className="text-center">
              <p className="text-gray-500 mb-1">Customer service:</p>
              <p className="text-teal-400 mb-3">+1(847) 252 765 33</p>
              <p className="text-gray-500 mb-1">Tech support:</p>
              <p className="text-teal-400">+1(786) 322 560 40</p>
            </div>
          </div>

          {/* Email Addresses Card */}
          <div className="bg-white p-6 flex flex-col items-center border rounded-sm">
            <div className="bg-teal-400 rounded-full p-4 mb-4 flex items-center justify-center w-16 h-16">
              <FontAwesomeIcon icon={faEnvelope} className="text-white text-xl" />
            </div>
            <h2 className="text-xl font-medium mb-2">Email addresses</h2>
            <div className="text-center">
              <p className="text-gray-500 mb-1">Customer service:</p>
              <p className="text-teal-400 mb-3">customer@example.com</p>
              <p className="text-gray-500 mb-1">Tech support:</p>
              <p className="text-teal-400">support@example.com</p>
            </div>
          </div>
        </div>

        {/* Partner Outlet Stores */}
        <h2 className="text-3xl text-center mb-8">Partner outlet stores</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Orlando Store Card */}
          <div className="bg-white p-6 border rounded-sm">
            <h3 className="text-xl font-medium mb-2">Orland, USA</h3>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt condimentum lectus, sit amet posuere metus.
            </p>
            <div className="flex items-start mb-4">
              <div className="bg-teal-400 rounded-full p-2 mr-3 mt-1 flex-shrink-0 w-8 h-8 flex items-center justify-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white text-sm" />
              </div>
              <div>
                <p className="text-gray-500 mb-1">Find us</p>
                <p className="text-teal-400">514 S. Magnolia St. Orlando, FL 32806, USA</p>
              </div>
            </div>
            <div className="flex items-start mb-4">
              <div className="bg-teal-400 rounded-full p-2 mr-3 mt-1 flex-shrink-0 w-8 h-8 flex items-center justify-center">
                <FontAwesomeIcon icon={faPhone} className="text-white text-sm" />
              </div>
              <div>
                <p className="text-gray-500 mb-1">Call us</p>
                <p className="text-teal-400">+1(847) 252 765 33</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-teal-400 rounded-full p-2 mr-3 mt-1 flex-shrink-0 w-8 h-8 flex items-center justify-center">
                <FontAwesomeIcon icon={faEnvelope} className="text-white text-sm" />
              </div>
              <div>
                <p className="text-gray-500 mb-1">Mail us</p>
                <p className="text-teal-400">orlando@unishop.com</p>
              </div>
            </div>
          </div>

          {/* Chicago Store Card */}
          <div className="bg-white p-6 border rounded-sm">
            <h3 className="text-xl font-medium mb-2">Chicago, USA</h3>
            <p className="text-gray-600 mb-6">
              This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </p>
            <div className="flex items-start mb-4">
              <div className="bg-teal-400 rounded-full p-2 mr-3 mt-1 flex-shrink-0 w-8 h-8 flex items-center justify-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white text-sm" />
              </div>
              <div>
                <p className="text-gray-500 mb-1">Find us</p>
                <p className="text-teal-400">44 Shirley Ave. West side, IL 60185, Chicago</p>
              </div>
            </div>
            <div className="flex items-start mb-4">
              <div className="bg-teal-400 rounded-full p-2 mr-3 mt-1 flex-shrink-0 w-8 h-8 flex items-center justify-center">
                <FontAwesomeIcon icon={faPhone} className="text-white text-sm" />
              </div>
              <div>
                <p className="text-gray-500 mb-1">Call us</p>
                <p className="text-teal-400">+1(786) 322 560 40</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-teal-400 rounded-full p-2 mr-3 mt-1 flex-shrink-0 w-8 h-8 flex items-center justify-center">
                <FontAwesomeIcon icon={faEnvelope} className="text-white text-sm" />
              </div>
              <div>
                <p className="text-gray-500 mb-1">Write us</p>
                <p className="text-teal-400">chicago@example.com</p>
              </div>
            </div>
          </div>

          {/* New York Store Card */}
          <div className="bg-white p-6 border rounded-sm">
            <h3 className="text-xl font-medium mb-2">New York, USA</h3>
            <p className="text-gray-600 mb-6">
              Duis condimentum lacus eu fermentum viverra. Donec finibus varius ex nec pharetra. Fusce lectus libero, imperdiet ac est in.
            </p>
            <div className="flex items-start mb-4">
              <div className="bg-teal-400 rounded-full p-2 mr-3 mt-1 flex-shrink-0 w-8 h-8 flex items-center justify-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white text-sm" />
              </div>
              <div>
                <p className="text-gray-500 mb-1">Find us</p>
                <p className="text-teal-400">89 Clinton Dr. Holbrook, NY 11741, Holbrook</p>
              </div>
            </div>
            <div className="flex items-start mb-4">
              <div className="bg-teal-400 rounded-full p-2 mr-3 mt-1 flex-shrink-0 w-8 h-8 flex items-center justify-center">
                <FontAwesomeIcon icon={faPhone} className="text-white text-sm" />
              </div>
              <div>
                <p className="text-gray-500 mb-1">Call us</p>
                <p className="text-teal-400">+1(212) 477 690 000</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-teal-400 rounded-full p-2 mr-3 mt-1 flex-shrink-0 w-8 h-8 flex items-center justify-center">
                <FontAwesomeIcon icon={faEnvelope} className="text-white text-sm" />
              </div>
              <div>
                <p className="text-gray-500 mb-1">Mail us</p>
                <p className="text-teal-400">newyork@unishop.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form and Map Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Google Map */}
          <div className="bg-white p-6 border rounded-sm h-full">
            <div className="w-full h-full min-h-64 bg-gray-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112063.08037261526!2d-81.41005423736476!3d28.53802757252933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77c4abe7c3f3d%3A0x13dc5bd602e29ae9!2sOrlando%2C%20FL%2C%20USA!5e0!3m2!1sen!2s!4v1571233742092!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                className="min-h-64"
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 border rounded-sm">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              <textarea
                placeholder="Your message"
                rows="6"
                className="w-full p-3 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-teal-400"
              ></textarea>
              <button 
                type="submit" 
                className="bg-teal-400 text-white py-3 px-6 uppercase font-medium hover:bg-teal-500 transition-colors duration-300"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;