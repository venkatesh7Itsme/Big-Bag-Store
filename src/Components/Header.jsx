import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaTwitter, FaFacebookF, FaDribbble, FaVimeoV, FaTumblr } from "react-icons/fa";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [hoverMenu, setHoverMenu] = useState(null);  
  const [createAccountModalOpen, setCreateAccountModalOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  
  const lastScrollY = useRef(0);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setShow(false);
      } else {
        setShow(true);
      }
      lastScrollY.current = window.scrollY;
    };

    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLoginClick = (e) => {
    e.preventDefault();
    setLoginModalOpen(true);
    setCreateAccountModalOpen(false);
  };

  const handleCreateAccountClick = (e) => {
    e.preventDefault();
    setCreateAccountModalOpen(true);
    setLoginModalOpen(false);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const closeCreateAccountModal = () => {
    setCreateAccountModalOpen(false);
  };

  // Hide navbar on home-onepage
  if (location.pathname === "/home-onepage") {
    return null;
  }

  // Navigation menu configuration
  const navigationMenus = [
    { 
      name: "HOME", 
      submenu: [
        { text: "Home Default", link: "/" },
        { text: "Home Classic", link: "/home-classic" },
        { text: "Home Deals", link: "/home-deals" },
        { text: "Home Mega", link: "/home-mega" },
        { text: "Home Onepage", link: "/home-onepage" }
      ]
    },
    {
      name: "SHOP",
      isMegaMenu: true,
      submenu: [
        {
          title: "PRODUCTS GRID VIEW",
          links: [
            { text: "Products Sidebar Left", link: "/products/sidebar-left" },
            { text: "Products Sidebar Right", link: "/products/sidebar-right" },
            { text: "Products 3 Columns V1", link: "/products/3-columns-v1" },
            { text: "Products 3 Columns V2", link: "/products/3-columns-v2" },
            { text: "Products 4 Columns", link: "/products/4-columns" }
          ]
        },
        {
          title: "PRODUCTS LIST VIEW",
          links: [
            { text: "Products Sidebar Left", link: "/products/list-sidebar-left" },
            { text: "Products Sidebar Right", link: "/products/list-sidebar-right" }
          ]
        },
        {
          title: "PRODUCT SINGLE",
          links: [
            { text: "Single Product", link: "/product/single" },
            { text: "Product Comparison", link: "/product/comparison" }
          ]
        },
        {
          title: "CHECKOUT",
          links: [
            { text: "Step 1 - Shipping", link: "/checkout/shipping" },
            { text: "Step 2 - Payment", link: "/checkout/payment" },
            { text: "Step 3 - Review", link: "/checkout/review" },
            { text: "Step 4 - Complete", link: "/checkout/complete" }
          ]
        },
        {
          title: "OTHERS",
          links: [
            { text: "Product Categories", link: "/product-categories" },
            { text: "Cart Page", link: "/cart" }
          ]
        }
      ]
    },
    { 
      name: "PAGES", 
      submenu: [
        { text: "About Us", link: "/about-us" },
        { text: "Contact Us", link: "/contact-us" },
        { text: "Register", link: "/register" },
        { text: "Register Or Login", link: "/register-login" },
        { text: "Login", link: "/login" },
        { text: "Password Recovery", link: "/password-recovery" },
        { text: "Privacy Policy", link: "/privacy-policy" },
        { text: "Terms & Conditions", link: "/terms-conditions" },
        { text: "FAQ", link: "/faq" },
        { text: "404 Not Found", link: "/404" },
        { text: "Coming Soon", link: "/coming-soon" }
      ] 
    },
    { 
      name: "BLOG", 
      submenu: [
        { text: "Right Sidebar", link: "/right-sidebar" },
        { text: "Left Sidebar", link: "/left-sidebar" },
        { text: "Full Width", link: "/full-width" },
        { text: "Single Blog", link: "/single-blog" },
        { text: "Single Rightsidebar", link: "/single-rightsidebar" },
        { text: "Single Leftsidebar", link: "/single-leftsidebar" }

      ] 
    },
    { 
      name: "MY ACCOUNT", 
      submenu: [
        { text: "Dashboard", link: "/dashboard" },
        { text: "Profile", link: "/profile" },
        { text: "All Orders", link: "/all-orders" },
        { text: "Single Orders", link: "/single-orders" },
        { text: "Wishlist", link: "/wishlist" },
        { text: "Address", link: "/address" },
        { text: "My Tickets", link: "/my-tickets" },
        { text: "Single Tickets", link: "/single-tickets" },
      ] 
    },
    { 
      name: "COMPONENTS", 
      submenu: [
        { text: "Accordions", link: "/accordions" },
        { text: "Alert", link: "/alert" },
        { text: "Badge", link: "badge" },
        { text: "Buttons", link: "/buttons" },
        { text: "Button Group", link: "/button-group" },
        { text: "Cards", link: "/cards" },
        {text: "Countdown", link:"/count-down"},
        {text: "Divider", link:"/divider"},
        {text: "Heading", link:"/heading"}
       
      ] 
    }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${show ? "translate-y-0" : "-translate-y-full"}`}>
       
        <div className="hidden md:flex bg-black text-gray-400 text-sm justify-between items-center px-12 md:px-16 py-2">
   
          <div className="flex space-x-4">
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaDribbble className="hover:text-white cursor-pointer" />
            <FaVimeoV className="hover:text-white cursor-pointer" />
            <FaTumblr className="hover:text-white cursor-pointer" />
          </div>

        
          <div className="flex items-center space-x-6">
            <div>
              <Link 
                to="#" 
                className="mr-2 hover:text-white" 
                onClick={handleLoginClick}
              >
                Log in
              </Link> or
              <Link 
                to="#" 
                className="ml-2 hover:text-white" 
                onClick={handleCreateAccountClick}
              >
                Create an account
              </Link>
            </div>
            <div className="w-px h-6 bg-gray-500"></div>
            <div className="flex items-center space-x-4">
              {/* Search Button */}
              <button 
                className="bg-gray-700 p-2 rounded-full cursor-pointer" 
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <FiSearch className="text-white text-lg" />
              </button>
              
              {/* Search Dropdown */}
              {searchOpen && (
                <div ref={searchRef} className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-md p-4 border border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 text-sm">Search...</span>
                    <button onClick={() => setSearchOpen(false)} className="text-gray-500 hover:text-black">
                      <IoClose className="text-xl" />
                    </button>
                  </div>
                  <div className="mt-3 flex">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-teal-400"
                    />
                    <button className="bg-teal-400 text-white px-4 py-2 rounded-r hover:bg-teal-500">
                      SUBMIT
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="bg-teal-400 text-white px-4 py-2 rounded flex items-center space-x-2 cursor-pointer">
              <FiShoppingCart className="text-xl" />
              <span>$99</span>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="bg-white shadow-md px-12 md:px-16 py-6 flex justify-between items-center">
          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            <HiMenu />
          </button>
<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="166px" height="31px" className="md:mr-8">
            <path className="logo-pl" fillRule="evenodd" fill="rgb(71, 186, 193)" d="M157.432,17.855 L157.573,15.904 L166.011,15.904 L166.011,27.436 C164.581,28.174 163.195,28.687 161.853,28.974 C160.511,29.261 158.921,29.404 157.081,29.404 C155.487,29.404 154.019,29.179 152.678,28.728 C151.336,28.277 150.178,27.646 149.206,26.838 C148.233,26.029 147.410,25.066 146.736,23.946 C146.062,22.827 145.558,21.597 145.224,20.255 C144.890,18.913 144.723,17.492 144.723,15.992 C144.723,13.355 145.216,11.021 146.200,8.987 C147.184,6.954 148.652,5.346 150.603,4.162 C152.554,2.979 154.866,2.387 157.538,2.387 C160.467,2.387 163.069,3.061 165.343,4.408 L164.341,6.219 C163.380,5.633 162.293,5.161 161.080,4.804 C159.867,4.446 158.692,4.268 157.555,4.268 C155.844,4.268 154.318,4.572 152.976,5.182 C151.634,5.791 150.548,6.632 149.716,7.704 C148.883,8.776 148.254,10.010 147.826,11.404 C147.398,12.799 147.184,14.316 147.184,15.957 C147.184,17.703 147.401,19.279 147.835,20.686 C148.268,22.092 148.919,23.308 149.786,24.333 C150.653,25.359 151.766,26.150 153.126,26.706 C154.485,27.263 156.055,27.541 157.837,27.541 C159.676,27.541 161.704,27.102 163.919,26.223 L163.919,17.855 L157.432,17.855 ZM137.244,20.123 L126.398,20.123 L122.917,29.000 L120.685,29.000 L130.898,2.844 L133.060,2.844 L142.904,29.000 L140.583,29.000 L137.244,20.123 ZM131.953,5.111 C131.812,5.627 131.349,6.998 130.564,9.225 C129.779,11.451 129.029,13.549 128.314,15.518 L127.259,18.471 L136.435,18.471 C133.798,10.901 132.304,6.447 131.953,5.111 ZM118.250,17.398 C119.223,18.594 119.709,20.006 119.709,21.635 C119.709,23.944 118.977,25.748 117.512,27.049 C116.047,28.350 113.797,29.000 110.762,29.000 L101.902,29.000 L101.902,2.844 L109.039,2.844 C112.285,2.844 114.655,3.383 116.149,4.461 C117.644,5.539 118.391,7.180 118.391,9.383 C118.391,9.641 118.388,9.834 118.382,9.963 C118.376,10.092 118.350,10.347 118.303,10.728 C118.256,11.108 118.183,11.428 118.083,11.686 C117.983,11.943 117.828,12.263 117.617,12.644 C117.406,13.025 117.151,13.355 116.853,13.637 C116.554,13.918 116.164,14.202 115.684,14.489 C115.203,14.777 114.658,15.014 114.049,15.201 C115.877,15.471 117.277,16.203 118.250,17.398 ZM114.357,13.540 C114.901,13.183 115.312,12.673 115.587,12.011 C115.862,11.349 116.000,10.525 116.000,9.541 C116.000,7.713 115.435,6.445 114.304,5.735 C113.173,5.026 111.383,4.672 108.934,4.672 L104.152,4.672 L104.152,14.498 L110.147,14.498 C111.072,14.498 111.869,14.428 112.537,14.287 C113.205,14.146 113.812,13.898 114.357,13.540 ZM109.162,16.221 L104.152,16.221 L104.152,27.242 L110.182,27.242 C114.928,27.242 117.301,25.373 117.301,21.635 C117.301,19.608 116.644,18.198 115.332,17.407 C114.020,16.616 111.963,16.221 109.162,16.221 Z"></path>
            <path className="logo-pm" fillRule="evenodd" fill="rgb(51, 51, 51)" d="M86.846,18.752 L86.882,15.008 L96.725,15.008 L96.725,27.436 C95.131,28.092 93.623,28.578 92.199,28.895 C90.775,29.211 89.231,29.369 87.567,29.369 C83.641,29.369 80.574,28.186 78.365,25.818 C76.156,23.451 75.051,20.211 75.051,16.098 C75.051,13.485 75.567,11.185 76.598,9.198 C77.629,7.212 79.147,5.662 81.151,4.549 C83.155,3.436 85.522,2.879 88.253,2.879 C91.382,2.879 94.065,3.553 96.303,4.900 L94.757,8.451 C92.624,7.303 90.485,6.729 88.341,6.729 C85.739,6.729 83.694,7.572 82.206,9.260 C80.717,10.947 79.973,13.244 79.973,16.150 C79.973,19.033 80.635,21.313 81.960,22.988 C83.284,24.664 85.223,25.502 87.778,25.502 C89.419,25.502 90.907,25.244 92.243,24.729 L92.243,18.752 L86.846,18.752 ZM65.972,3.248 L70.736,3.248 L70.736,29.000 L65.972,29.000 L65.972,3.248 ZM60.760,17.478 C61.604,18.573 62.025,19.924 62.025,21.529 C62.025,23.955 61.167,25.807 59.450,27.084 C57.733,28.361 55.357,29.000 52.322,29.000 L42.777,29.000 L42.777,3.248 L50.811,3.248 C54.221,3.248 56.763,3.746 58.439,4.742 C60.115,5.738 60.953,7.396 60.953,9.717 C60.953,10.092 60.930,10.461 60.883,10.824 C60.836,11.188 60.730,11.601 60.566,12.063 C60.402,12.527 60.185,12.945 59.916,13.320 C59.646,13.695 59.271,14.062 58.791,14.419 C58.310,14.777 57.748,15.055 57.104,15.254 C58.697,15.641 59.916,16.382 60.760,17.478 ZM54.985,7.502 C54.077,6.998 52.633,6.746 50.652,6.746 L47.541,6.746 L47.541,13.883 L51.619,13.883 C54.771,13.883 56.348,12.682 56.348,10.279 C56.348,8.932 55.893,8.006 54.985,7.502 ZM55.785,18.154 C54.871,17.521 53.459,17.205 51.549,17.205 L47.541,17.205 L47.541,25.555 L51.672,25.555 C55.328,25.555 57.156,24.125 57.156,21.266 C57.156,19.824 56.699,18.787 55.785,18.154 Z"></path>
            <path className="logo-pf" fillRule="evenodd" opacity="0.6" fill="rgb(71, 186, 193)" d="M18.000,9.000 L10.000,9.000 L6.000,9.000 L2.000,9.000 C0.900,9.000 -0.000,9.900 -0.000,11.000 L-0.000,23.000 C-0.000,27.400 3.600,31.000 8.000,31.000 L20.000,31.000 C24.400,31.000 28.000,27.400 28.000,23.000 L28.000,11.000 C28.000,9.900 27.100,9.000 26.000,9.000 L22.000,9.000 L18.000,9.000 ZM22.000,13.000 L24.000,13.000 L24.000,23.000 C24.000,25.206 22.205,27.000 20.000,27.000 L8.000,27.000 C5.794,27.000 4.000,25.206 4.000,23.000 L4.000,13.000 L6.000,13.000 L10.000,13.000 L18.000,13.000 L22.000,13.000 Z"></path>
            <path className="logo-pf" fillRule="evenodd" opacity="0.6" fill="rgb(71, 186, 193)" d="M6.000,10.334 L6.000,14.000 L6.000,16.000 C6.000,17.103 6.896,18.000 8.000,18.000 C9.104,18.000 10.000,17.103 10.000,16.000 L10.000,14.000 L10.000,10.000 L10.000,8.000 C10.000,5.791 11.791,4.000 14.000,4.000 C16.209,4.000 18.000,5.791 18.000,8.000 L18.000,10.000 L18.000,14.000 L18.000,16.000 C18.000,17.103 18.896,18.000 20.000,18.000 C21.103,18.000 22.000,17.103 22.000,16.000 L22.000,14.000 L22.000,10.000 L22.000,8.000 C22.000,3.582 18.418,-0.000 14.000,-0.000 C9.582,-0.000 6.000,3.582 6.000,8.000 L6.000,10.000 "></path>
          </svg>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10 text-[16px] font-semibold ml-auto relative px-16 py-6">
            {navigationMenus.map((menu, index) => (
              <div 
                key={index} 
                className="relative group"
                onMouseEnter={() => setHoverMenu(menu.name)}
                onMouseLeave={() => setHoverMenu(null)}
              >
                <button
                  className={`text-black transition duration-200 ${hoverMenu === menu.name ? 'text-teal-400' : 'hover:text-teal-400'}`}
                >
                  {menu.name}
                </button>

                {/* Mega Menu for SHOP */}
                {menu.isMegaMenu && hoverMenu === menu.name && (
                  <div className="absolute left-0 mt-2 w-[800px] bg-white shadow-lg rounded-lg py-6 px-8 grid grid-cols-5 gap-4 z-50">
                    {menu.submenu.map((category, catIndex) => (
                      <div key={catIndex} className="border-r border-gray-200 last:border-r-0 px-4 first:pl-0 last:pr-0">
                        <h3 className="text-gray-900 font-semibold mb-3 pb-2 border-b border-gray-100">{category.title}</h3>
                        {category.links.map((link, linkIndex) => (
                          <Link
                            key={linkIndex}
                            to={link.link}
                            className="block text-gray-600 hover:text-teal-400 py-1.5 transition text-sm"
                          >
                            {link.text}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}

                {/* Regular Dropdowns for other menus */}
                {!menu.isMegaMenu && menu.name !== "PAGES" && hoverMenu === menu.name && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50">
                    {menu.submenu.map((item, subIndex) => (
                      <Link
                        key={subIndex}
                        to={item.link}
                        className="block px-4 py-2 text-gray-700 hover:bg-teal-100 hover:text-teal-500 transition"
                      >
                        {item.text}
                      </Link>
                    ))}
                  </div>
                )}

             
                {menu.name === "PAGES" && hoverMenu === menu.name && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50">
                    {menu.submenu.map((item, subIndex) => (
                      <Link
                        key={subIndex}
                        to={item.link}
                        className="block px-4 py-2 text-gray-700 hover:bg-teal-100 hover:text-teal-500 transition"
                      >
                        {item.text}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="relative cursor-pointer block md:hidden">
          <Link to="/cart">
            <FiShoppingCart className="text-black text-2xl" />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-1.5 py-0.5 rounded-full">
              3
            </span>
            </Link>
          </div>
        </div>

      
        <div className="bg-white px-4 py-3 flex md:hidden justify-center">
          <div className="w-full max-w-lg relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-gray-100 px-4 py-2 rounded-full outline-none"
            />
            <FiSearch className="absolute right-4 top-3 text-gray-500" />
          </div>
        </div>

        {menuOpen && (
          <nav className="bg-white shadow-md px-4 py-4 md:hidden flex justify-end">
            <div className="flex flex-col space-y-3 text-[14px] font-semibold items-end text-right">
              {navigationMenus.map((menu, index) => (
                <Link 
                  key={index} 
                  to={menu.submenu[0]?.link || '#'} 
                  className={`${index === 0 ? 'text-teal-400' : 'text-black hover:text-teal-400'}`}
                >
                  {menu.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>

   
      {loginModalOpen && (
        <div className="fixed inset-0 bg-transperent bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-[100] transition-opacity duration-150 ease-linear">
          <div className="bg-white w-full max-w-md mx-4 rounded-lg overflow-hidden shadow-xl">
            <div className="bg-teal-400 text-white px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold">LOG IN</h2>
              <button 
                onClick={closeLoginModal}
                className="text-white text-2xl focus:outline-none"
              >
                <IoClose />
              </button>
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Enter Email</label>
                <input 
                  type="email" 
                  className="w-full p-3 border border-gray-200 rounded bg-gray-100 focus:outline-none focus:border-teal-400"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Password</label>
                <input 
                  type="password" 
                  className="w-full p-3 border border-gray-200 rounded bg-gray-100 focus:outline-none focus:border-teal-400"
                />
              </div>
              
              <div className="mb-6 flex items-center">
                <input 
                  type="checkbox" 
                  id="remember" 
                  className="mr-2 h-5 w-5 text-teal-400 border-gray-300 rounded"
                />
                <label htmlFor="remember" className="text-gray-700">Remember me</label>
              </div>
              
              <button 
                className="w-full bg-teal-400 hover:bg-teal-500 text-white py-3 px-4 rounded font-medium transition duration-200"
              >
                LOG IN
              </button>
              
              <div className="mt-4 text-center">
                <a href="#" className="text-teal-400 hover:underline">Forgot Password?</a>
              </div>
            </div>
          </div>
        </div>
      )}

     
      {createAccountModalOpen && (
        <div className="fixed inset-0 bg-transperent bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-[100] transition-opacity duration-150 ease-linear">
          <div className="bg-white w-full max-w-md mx-4 rounded-lg overflow-hidden shadow-xl">
            <div className="bg-teal-400 text-white px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold">CREATE AN ACCOUNT</h2>
              <button 
                onClick={closeCreateAccountModal}
                className="text-white text-2xl focus:outline-none"
              >
                <IoClose />
              </button>
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Enter Email</label>
                <input 
                  type="email" 
                  className="w-full p-3 border border-gray-200 rounded bg-gray-100 focus:outline-none focus:border-teal-400"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Password</label>
                <input 
                  type="password" 
                  className="w-full p-3 border border-gray-200 rounded bg-gray-100 focus:outline-none focus:border-teal-400"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Confirm Password</label>
                <input 
                  type="password" 
                  className="w-full p-3 border border-gray-200 rounded bg-gray-100 focus:outline-none focus:border-teal-400"
                />
              </div>
              
              <button 
                className="w-full bg-teal-400 hover:bg-teal-500 text-white py-3 px-4 rounded font-medium transition duration-200"
              >
                SIGN UP
              </button>
              
              <div className="mt-4 text-center">
                <span className="text-gray-700">Already have an account? </span>
                <a href="#" className="text-teal-400 hover:underline" onClick={(e) => {
                  e.preventDefault();
                  setCreateAccountModalOpen(false);
                  setLoginModalOpen(true);
                }}>Log in</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}