import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const slides = [
  {
    id: 1,
    title: "Huge Summer Sale",
    text: "Hats, Sunglasses, Bags, Shoes & much more.",
    image: "https://bigbag-html.netlify.app/assets/img/home/banner-slider/sl1.png",
  },
 

  {
    id: 2,
    title: "Ladies Backpack",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit...", 
    image: "https://bigbag-html.netlify.app/assets/img/home/banner-slider/sl2.png",
  },
  {
    id: 3,
    title: "Trendy Footwear Collection",
    text: "Step into style with our latest shoe collection.",
    image: "https://bigbag-html.netlify.app/assets/img/home/banner-slider/shoe1.png",
  },
];

const CustomPagination = ({ activeIndex, totalSlides, onSlideChange }) => {
  return (
    <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 z-10">
      <div className="bg-[#22cbc7] h-8 md:h-10 px-8 md:px-10 flex items-center justify-center" 
           style={{
             clipPath: "polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%)"
           }}>
        <div className="flex space-x-3 md:space-x-4">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => onSlideChange(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
                activeIndex === index ? 'bg-white' : 'bg-[#5fd8d4]'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
  
        </div>
      </div>
    </div>
  );
};

const Slider = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  // Custom navigation buttons
  const goToPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goToNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-[#fcf6e9] relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        fontFamily: "Oxygen, sans-serif",
        fontSize: "12px",
        lineHeight: "18px",
        color: "#252525",
        fontWeight: 400,
      }}
    >
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination]}
        loop={true}
        className="w-full h-full"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div
              className={`w-full h-full flex flex-col md:flex-row items-center px-4 md:px-10 lg:px-20 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
             
              <div className="w-full md:w-1/2 space-y-2 md:space-y-4 text-center md:text-left mt-8 md:mt-0">
                <p className="text-base md:text-lg text-gray-600">Limited time offer!</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">{slide.title}</h2>
                <p className="text-lg md:text-xl text-gray-700">{slide.text}</p>
                <button className="mt-2 md:mt-4 px-4 md:px-6 py-2 md:py-3 text-base md:text-lg border-2 border-[#22cbc7] text-[#22cbc7] hover:bg-[#22cbc7] hover:text-white transition">
                  BUY NOW ➜
                </button>
              </div>
              
            
              <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-4 md:mt-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full max-w-xs md:max-w-sm lg:max-w-lg h-auto object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

   
      <CustomPagination 
        activeIndex={activeIndex} 
        totalSlides={slides.length} 
        onSlideChange={(index) => {
          if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index + 1);
          }
        }}
      />

     
      <div
        className={`absolute top-1/2 transform -translate-y-1/2 left-1 md:left-2 z-10 transition-opacity ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <button 
          onClick={goToPrev}
          className="h-10 w-10 md:h-[60px] md:w-[60px] bg-black/50 text-white text-base md:text-xl flex items-center justify-center transition-all duration-300 hover:bg-black hover:scale-110"
          aria-label="Previous slide"
        >
          ❮
        </button>
      </div>
      <div
        className={`absolute top-1/2 transform -translate-y-1/2 right-1 md:right-2 z-10 transition-opacity ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <button 
          onClick={goToNext}
          className="h-10 w-10 md:h-[60px] md:w-[60px] bg-black/50 text-white text-base md:text-xl flex items-center justify-center transition-all duration-300 hover:bg-black hover:scale-110"
          aria-label="Next slide"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Slider;