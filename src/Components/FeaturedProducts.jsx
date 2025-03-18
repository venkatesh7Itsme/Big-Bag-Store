import { FaHeart, FaShoppingCart, FaEye, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect } from "react";

const ProductCard = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="w-full sm:w-48 text-center relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative w-full overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full" />
                {isHovered && (
                    <div className="absolute inset-0 bg-teal-500 bg-opacity-80 flex justify-center items-center">
                        <div className="flex gap-3 text-white text-lg">
                            <FaHeart className="cursor-pointer" />
                            <FaShoppingCart className="cursor-pointer" />
                            <FaEye className="cursor-pointer" />
                        </div>
                    </div>
                )}
            </div>
            <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
        </div>
    );
};

export default function ProductList() {
    const products = [
        { id: 1, name: "Sun Buddies", price: 109, image: "https://bigbag-html.netlify.app/assets/img/home/featured-product/product-04.jpg" },
        { id: 2, name: "Scarf Ring Corner", price: 79, image: "https://bigbag-html.netlify.app/assets/img/home/featured-product/product-07.jpg" },
        { id: 7, name: "Classic Hat", price: 59, image: "https://bigbag-html.netlify.app/assets/img/home/featured-product/product-01.jpg" },
        
    
        { id: 3, name: "Nike Sportswear", price: 199, image: "https://bigbag-html.netlify.app/assets/img/home/featured-product/product-06.jpg" },
        { id: 4, name: "Nike Sportswear", price: 79.00, image: "https://bigbag-html.netlify.app/assets/img/home/featured-product/product-02.jpg" },
        { id: 5, name: "Casual Wear", price: 129, image: "https://bigbag-html.netlify.app/assets/img/home/featured-product/product-09.jpg" },
        { id: 6, name: "Urban Style", price: 149, image: "https://bigbag-html.netlify.app/assets/img/home/featured-product/product-07.jpg" },
        { id: 7, name: "Classic Hat", price: 59, image: "https://bigbag-html.netlify.app/assets/img/home/featured-product/product-01.jpg" },
    ];

    const [startIndex, setStartIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setItemsPerPage(1);
            } else if (window.innerWidth < 1024) {
                setItemsPerPage(2);
            } else {
                setItemsPerPage(4);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handlePrev = () => {
        setStartIndex((prev) => (prev - itemsPerPage + products.length) % products.length);
    };

    const handleNext = () => {
        setStartIndex((prev) => (prev + itemsPerPage) % products.length);
    };

    return (
        <div className="w-full p-6 mt-8 mb-8"> 
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Featured Products</h2>
                <div className="flex gap-2">
                    <button onClick={handlePrev} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 cursor-pointer">
                        <FaChevronLeft />
                    </button>
                    <button onClick={handleNext} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 cursor-pointer">
                        <FaChevronRight />
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {products.slice(startIndex, startIndex + itemsPerPage).map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
