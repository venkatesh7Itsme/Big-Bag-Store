import { FaFacebookF, FaTwitter, FaBasketballBall, FaTumblr, FaCcVisa, FaCcPaypal, FaCcMastercard, FaCcDiscover } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-sm">
      <div className="bg-gray-100 py-4 border-b-4 border-teal-500">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-around items-center">
          {["https://bigbag-html.netlify.app/assets/img/home/partners/partner-01.png", 
            "https://bigbag-html.netlify.app/assets/img/home/partners/partner-02.png", 
            "https://bigbag-html.netlify.app/assets/img/home/partners/partner-03.png", 
            "https://bigbag-html.netlify.app/assets/img/home/partners/partner-04.png", 
            "https://bigbag-html.netlify.app/assets/img/home/partners/partner-05.png"
          ].map((src, index) => (
            <img key={index} src={src} alt="Brand Logo" className="h-12 px-4 cursor-pointer" />
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-3 grid grid-cols-1 md:grid-cols-5 gap-3 text-gray-300">
        <div>
          <h3 className="text-gray-300 font-semibold mb-2 cursor-pointer">ACCESSORIES</h3>
          <ul className="space-y-1">
            {["Body care", "Chambray", "Floral", "Rejuvination", "Shaving", "Toilette"].map((item) => (
              <li key={item} className="hover:text-teal-400 transition duration-300 cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-gray-300 font-semibold mb-2 cursor-pointer">BRANDS</h3>
          <ul className="space-y-1">
            {["Barbour", "Brioni", "Oliver Spencer", "Belstaff"].map((brand) => (
              <li key={brand} className="hover:text-teal-400 transition duration-300 cursor-pointer">{brand}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-gray-300 font-semibold mb-2 cursor-pointer">ACCESSORIES</h3>
          <ul className="space-y-1">
            {["Hats", "Scarves", "Belts", "Sunglasses", "Gloves"].map((item) => (
              <li key={item} className="hover:text-teal-400 transition duration-300 cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-gray-300 font-semibold mb-2 cursor-pointer">GET IN TOUCH</h3>
          <p className="cursor-pointer">Call us at (555)-555-5555</p>
          <p className="mb-3 cursor-pointer">support@iamabdus.com</p>
          <div className="flex space-x-3 text-gray-300 text-lg">
            <FaTwitter className="hover:text-teal-400 transition duration-300 cursor-pointer" />
            <FaFacebookF className="hover:text-teal-400 transition duration-300 cursor-pointer" />
            <FaBasketballBall className="hover:text-teal-400 transition duration-300 cursor-pointer" />
            <FaTumblr className="hover:text-teal-400 transition duration-300 cursor-pointer" />
          </div>
        </div>
        <div>
          <h3 className="text-gray-300 font-semibold mb-2 cursor-pointer">NEWSLETTER</h3>
          <p className="mb-3 cursor-pointer">Enter your email address and get notified about new products. We hate spam!</p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="your email address"
              className="p-2 rounded-l bg-gray-500 text-white border-none focus:ring-0 flex-grow cursor-pointer"
            />
            <button className="bg-teal-500 px-4 py-2 rounded-r text-white hover:bg-teal-600 transition duration-300 cursor-pointer">GO</button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-500 flex flex-col md:flex-row justify-between items-center py-4 text-gray-400 max-w-7xl mx-auto px-6">
        <p className="cursor-pointer">&copy; 2025 Copyright Bigbag Store Bootstrap Template by Abdus.</p>
        <div className="flex space-x-4 text-white text-2xl mt-4 md:mt-0">
          <FaCcVisa className="hover:text-teal-400 transition duration-300 cursor-pointer" />
          <FaCcPaypal className="hover:text-teal-400 transition duration-300 cursor-pointer" />
          <FaCcMastercard className="hover:text-teal-400 transition duration-300 cursor-pointer" />
          <FaCcDiscover className="hover:text-teal-400 transition duration-300 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}