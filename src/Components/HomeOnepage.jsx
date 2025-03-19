import React, { useState } from "react";
import { FaGamepad, FaVideo, FaRocket, FaPlay, FaPause, FaTools, FaTv } from "react-icons/fa";

const FeatureItem = ({ icon, title, description }) => {
  return (
    <div className="flex items-start space-x-4">
      <div>{icon}</div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
};

const BigBagHeader = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isDroneVideoPlaying, setIsDroneVideoPlaying] = useState(false);

  const playVideo = () => {
    setIsVideoPlaying(true);
  };
  
  const toggleDroneVideo = () => {
    setIsDroneVideoPlaying(!isDroneVideoPlaying);
  };

  const features = [
    {
      icon: <FaTools className="text-teal-500 text-4xl" />,
      title: "Easy Disassembly",
      description:
        "Connect to a world of content and entertainment at home with Mi Box. It runs on the latest Android TV 6.0 which is easy to use, supports voice controls, and Google Cast™.",
    },
    {
      icon: <FaGamepad className="text-teal-500 text-4xl" />,
      title: "Remote Included",
      description:
        "Connect to a world of content and entertainment at home with Mi Box. It runs on the latest Android TV 6.0 which is easy to use, supports voice controls, and Google Cast™.",
    },
    {
      icon: <FaTv className="text-teal-500 text-4xl" />,
      title: "High Resolution",
      description:
        "Connect to a world of content and entertainment at home with Mi Box. It runs on the latest Android TV 6.0 which is easy to use, supports voice controls, and Google Cast™.",
    },
    {
      icon: <FaVideo className="text-teal-500 text-4xl" />,
      title: "HDR Video",
      description:
        "Connect to a world of content and entertainment at home with Mi Box. It runs on the latest Android TV 6.0 which is easy to use, supports voice controls, and Google Cast™.",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Nike Drone",
      price: 199.00,
      image: "https://bigbag-html.netlify.app/assets/img/home/featured-product/product-img14.jpg"
    },
    {
      id: 2,
      name: "Dip Dyed Drone",
      price: 149.00,
      image: "https://bigbag-html.netlify.app/assets/img/home/featured-product/product-img15.jpg"
    },
    {
      id: 3,
      name: "Drone Ring Corner",
      price: 79,
      image: "https://bigbag-html.netlify.app/assets/img/home/featured-product/product-img16.jpg"
    },
    {
      id: 4,
      name: "Drone Buddies",
      price: 109,
      image: "https://bigbag-html.netlify.app/assets/img/home/featured-product/product-img17.jpg"
    }
  ];

  const galleryImages = [
    "https://bigbag-html.netlify.app/assets/img/home/featured-product/pg1.jpg",
    "https://bigbag-html.netlify.app/assets/img/home/featured-product/pg2.jpg",
    "https://bigbag-html.netlify.app/assets/img/home/featured-product/pg3.jpg"
  ];



  return (
    <div>
      {/* Header Section */}
      <div
        className="relative w-full h-screen flex flex-col justify-between bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://bigbag-html.netlify.app/assets/img/home/banner-slider/slider-bg2.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[rgba(27,45,84,0.6)]"></div>

        {/* Navbar */}
        <div className="relative z-10 bg-opacity-90 shadow-lg py-4">
          <nav className="container mx-auto flex items-center justify-between px-8">
            <div className="flex items-center">
              <svg
                className="w-8 h-8 text-teal-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="text-3xl font-bold ml-2">
                <span className="text-white">BIG</span>
                <span className="text-teal-400">BAG</span>
              </div>
            </div>

            <div className="hidden md:flex space-x-8">
              {["HOME", "ABOUT", "FEATURES", "TESTIMONIAL", "ACCESSORIES", "GALLERY", "ELEMENTS"].map((item) => (
                <a key={item} href="#" className="text-white hover:text-teal-300 transition">
                  {item}
                </a>
              ))}
            </div>
          </nav>
          <div className="h-px bg-gray-700 w-full"></div>
        </div>

        {/* Hero Content */}
        <div className="relative container mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
              Easy Intuitive Controls
            </h1>
            <p className="text-xl text-gray-200 mb-8 drop-shadow">
              4K Android TVTM set-top box, HDR video support Bluetooth voice remote included
            </p>
            <button className="border border-teal-400 text-teal-400 px-6 py-3 inline-flex items-center hover:bg-teal-400 hover:text-white transition duration-300">
              ORDER NOW
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div className="md:w-1/2 px-6">
            <div className="bg-white p-2 rounded-lg shadow-lg border border-gray-200">
              {isVideoPlaying ? (
                <div className="relative" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/g3-VxLQO7do?autoplay=1"
                    title="Product Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <div className="relative cursor-pointer group" onClick={playVideo} style={{ paddingBottom: "56.25%" }}>
                  <img
                    src="https://bigbag-html.netlify.app/assets/img/home/banner-slider/images/video-over.jpg"
                    alt="Video Thumbnail"
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-teal-400 rounded-full p-6 flex items-center justify-center transition transform group-hover:scale-110">
                      <svg
                        className="w-10 h-10 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Second Section with Drone */}
      <div
        className="relative w-full py-12 flex flex-col items-center justify-center text-center px-4"
        style={{
          backgroundImage: "url('https://bigbag-html.netlify.app/assets/img/about-us/bg-about.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white opacity-95"></div>

        <div className="relative z-10 max-w-2xl">
          <h1 className="text-2xl md:text-2xl font-semibold text-gray-800">
            Think out of the box with <br /> Android TV 6.0
          </h1>
          <p className="mt-4 text-gray-600 text-base md:text-lg">
            Connect to a world of content and entertainment at home with Mi Box. It runs on the latest Android TV 6.0which is easy to use, supports voice controls and Google CastTM. Catch your favorite TV shows, play games,watch the news or switch to radio.
          </p>
        </div>

        <div className="relative z-10 mt-6">
          <img src="https://bigbag-html.netlify.app/assets/img/about-us/about.png" alt="Drone" className="w-full max-w-xl mx-auto" />
        </div>

        <div className="relative z-10 mt-6">
          <button className="bg-teal-500 text-white px-6 py-3 text-lg font-semibold rounded shadow-lg hover:bg-teal-600 transition">
            ORDER NOW
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-8">
        {/* Centered Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Key Features</h2>
          <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
            HDR is quickly making its way to TV, first to set-top boxes with Mi Box. Watch videos indetail like never before with select HDR content.
          </p>
        </div>

        {/* Content Container */}
        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Left Side - Features */}
          <div className="md:w-1/2">
            <div className="space-y-8">
              <FeatureItem 
                icon={<div className="bg-teal-50 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                  <FaGamepad className="text-teal-500 text-2xl" />
                </div>} 
                title="Remote Included"
                description="Connect to a world of content and entertainment at home with Mi Box. It runs on the latest Android TV 6.0 which is easy to use supports voice controls and Google CastTM."
              />

              <FeatureItem 
                icon={<div className="bg-teal-50 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                  <FaVideo className="text-green-500 text-2xl" />
                </div>} 
                title="HDR Video"
                description="Connect to a world of content and entertainment at home with Mi Box. It runs on the latest Android TV 6.0 which is easy to use supports voice controls and Google CastTM."
              />

              <FeatureItem 
                icon={<div className="bg-teal-50 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                  <FaRocket className="text-teal-400 text-2xl" />
                </div>} 
                title="Supper Speed"
                description="Connect to a world of content and entertainment at home with Mi Box. It runs on the latest Android TV 6.0 which is easy to use supports voice controls and Google CastTM."
              />
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
            <img
              src="https://bigbag-html.netlify.app/assets/img/about-us/feature-promo.jpg"
              alt="DJI Drone"
              className="max-w-full"
            />
          </div>
        </div>
      </div>

      {/* Drone Video Section - NEWLY ADDED */}
      <div className="relative w-full h-screen">
        {/* Video background */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        
        <div className="relative w-full h-full overflow-hidden">
          {/* Background image */}
          <img 
            src="https://bigbag-html.netlify.app/assets/img/home/bg-cta.jpg" 
            alt="Drone background" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Content overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              How to work Drone
            </h1>
            
            <p className="text-white text-lg md:text-xl max-w-2xl mb-12">
              Connect to a world of content and entertainment at home with Mi Box. It runs on the latest Android TV 6.0 which is easy.
            </p>
            
            {/* Play button */}
            <button 
              onClick={toggleDroneVideo} 
              className="w-16 h-16 bg-white bg-opacity-25 rounded-full flex items-center justify-center hover:bg-opacity-40 transition-all duration-300"
            >
              {isDroneVideoPlaying ? (
                <FaPause className="text-white text-2xl" />
              ) : (
                <FaPlay className="text-white text-2xl ml-1" />
              )}
            </button>
          </div>
        </div>
        
        {/* Video embed (would be shown when play is clicked) */}
        {isDroneVideoPlaying && (
          <div className="absolute inset-0 z-30">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/g3-VxLQO7do?autoplay=1"
              title="Drone Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>

      {/* More Features Section - UPDATED */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side Image - DECREASED SIZE */}
          <div className="flex justify-center">
            <img
              src="https://bigbag-html.netlify.app/assets/img/about-us/mf2.png"
              alt="Feature Image"
              className="w-full max-w-sm" // Changed from max-w-md to max-w-sm to decrease image size
            />
          </div>

          {/* Right Side Features */}
          <div>
            {/* CENTERED HEADING */}
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-2">
              More Features
            </h2>
            {/* DECREASED PARAGRAPH FONT SIZE */}
            <p className="text-gray-600 text-center mt-2 text-sm"> {/* Added text-center and text-sm */}
              HDR is quickly making its way to TV, first to set-top boxes with Mi Box. Watch videos in detail like never before with select HDR content.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="mb-2">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 mt-1 text-sm"> {/* Added text-sm to decrease paragraph font size */}
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen relative bg-gray-100">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
        style={{ backgroundImage: "url('https://bigbag-html.netlify.app/assets/img/bg-testimoni.jpg')" }}
      />
      
      {/* Top Bar with Settings Icon */}
      <div className="flex justify-end p-4">
        <button className="bg-gray-800 text-white p-3 rounded-md shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </div>
      
      {/* Profile Section */}
      <div className="flex flex-col items-center justify-center pt-16 pb-8">
        <div className="relative w-24 h-24 mb-4">
          <img 
            src="https://bigbag-html.netlify.app/assets/img/home/testimonial/author2.png" 
            alt="Profile" 
            className="rounded-full border-4 border-white shadow-lg"
          />
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Samanta Doe</h1>
        <span className="text-cyan-500 text-sm">Customer</span>
      </div>
      
      {/* Bio Section */}
      <div className="max-w-2xl mx-auto px-6 text-center text-gray-600">
        <p className="text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
        </p>
      </div>
      </div>
      <section className="px-4 md:px-12 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-gray-100 rounded-lg overflow-hidden flex flex-col">
              <div className="p-4 flex items-center justify-center">
                <img src={product.image} alt={product.name} className="h-40 object-contain" />
              </div>
              <div className="p-4">
                <h3 className="text-gray-800 font-medium">{product.name}</h3>
                <p className="text-gray-600 mt-1">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      

      {/* Gallery Section - No Navigation Arrows or Bottom Bar */}
      <section className="px-4 md:px-12 py-8">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">Gallery</h2>
        <p className="text-sm text-center text-gray-600 mb-6 max-w-3xl mx-auto">
          FandangoNOW and more. Stream, play and be entertained for hours with access to hit shows
        </p>
        
        <div className="flex justify-center gap-4">
          {galleryImages.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Gallery image ${index + 1}`} className="h-32 w-64 object-cover rounded-lg" />
            </div>
          ))}
        </div>
      </section>

      <div className="w-full bg-teal-400 py-16 px-4 text-center text-white">
      <h1 className="text-4xl font-bold mb-6">Enjoy With Drone</h1>
      
      <p className="max-w-lg mx-auto mb-8">
        Pair with Mi Box for a realistic gaming experience. Dual-motor vibration feedback and a 3-axis G sensor deliver precise shocks and better control.
      </p>
      
      <button className="bg-white text-gray-700 px-8 py-3 font-medium flex items-center mx-auto">
        BUY NOW
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>



      {/* Settings button */}
      <div className="fixed bottom-4 right-4">
        <button className="bg-gray-800 text-white p-3 rounded-md shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </div>

    </div>
  );
};

export default BigBagHeader;