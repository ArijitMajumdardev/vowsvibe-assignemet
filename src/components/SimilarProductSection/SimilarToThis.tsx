import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Heart } from "lucide-react";

const SimilarToThis = ({ products }: { products: Iproducts[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < products.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="mt-14 h-[420px] max-w-7xl mx-auto">
      {/* Section title */}
      <div className="w-full h-12 flex justify-center items-center">
        <h2 className="text-2xl font-semibold text-center">Similar to this</h2>
      </div>

      <div className="mt-10 relative flex justify-center items-center px-15 gap-4">
        {/* Left arrow */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`p-2 rounded-full bg-gray-100 shadow shrink-0 transition-opacity duration-300 ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <ChevronLeft size={20} />
        </button>

        {/* Product cards */}
        <div className="overflow-hidden w-full flex-1 ">
          <div
            className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (15.5 * 16 + 15)}px)`,
            }}
          >
            {products.map((product, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex flex-col items-center justify-between h-[22rem] w-[15.5rem]"
              >
                {/* Product Image and Badges */}
                <div className="relative w-full h-60">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover rounded-lg mt-10"
                  />
                  {product.isBestSeller && (
                    <div className="absolute top-2 w-full flex justify-between items-center pr-3">
                      <span className="bg-[#a40e0e] text-white text-xs px-3 py-1 rounded-r-full text-center h-6">
                        BestSeller
                      </span>
                      <button className="text-gray-600 ">
                        <Heart size={24} fill="white" strokeWidth={1.5} />
                      </button>
                    </div>
                  )}

                  {!product.isBestSeller && (
                    <button className="text-gray-600 absolute top-2 right-3">
                      <Heart size={24} fill="white" strokeWidth={1.5} />
                    </button>
                  )}
                </div>

                {/* Title */}
                <div className="h-16 w-full mt-4">
                  <div className="text-left w-full text-sm font-medium line-clamp-2">
                    {product.title}
                  </div>
                  {/* Price */}
                  <div className="flex gap-2 items-baseline justify-start w-full mt-1">
                    <div className="text-base font-semibold">
                      ₹{product.price}
                    </div>
                    <div className="text-xs text-gray-400 line-through">
                      ₹{product.originalPrice}
                    </div>
                        </div>
                        <div className="text-[0.6rem] text-gray-900 pl-12">({product.rating})</div>
                        
                </div>

                {/* Add to Cart */}
                <button className="w-full h-11 bg-[#CA8787] text-white text-sm mt-4">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right arrow */}
        <button
          onClick={handleNext}
          disabled={currentIndex >= products.length - itemsPerPage}
          className={`p-2 rounded-full bg-gray-100 shadow shrink-0 transition-opacity duration-300 ${
            currentIndex >= products.length - itemsPerPage
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default SimilarToThis;
