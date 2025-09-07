
const YouMightAlsoLike = ({ products }: { products: Iproducts[] }) => {
  return (
    <div className="mt-[57.42px] h-auto block md:hidden">
      {/* Section title */}
      <div className="w-full h-[51px] flex justify-center items-center">
        <h2 className="text-md font-semibold text-center">
          You Might also Like
        </h2>
      </div>

      <div className="mt-[40px] px-4">
        {/* Product cards grid */}
        <div className="grid grid-cols-2 gap-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between h-[22rem] w-full"
            >
              {/* Product Image and Top badges */}
              <div className="w-full h-60 relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover mt-10"
                />
                  {product.isBestSeller && (
                <div className="absolute top-2 w-full flex justify-between items-center h-6 mt-2 pr-3">
                    <span className="bg-[#a40e0e] text-white text-[0.75rem] px-3 py-1 rounded-r-full text-center h-6">
                      BestSeller
                              </span>
                              <button className="text-gray-600 hover:text-red-500">
                    <img
                      src="/public/heart.svg"
                      alt="heart"
                      className="size-4"
                    />
                              </button>
                </div>
                              
                  )}
                      {!product.isBestSeller && (
                          <button className="text-gray-600 hover:text-red-500 absolute top-5 right-3" >
                    <img
                      src="/public/heart.svg"
                      alt="heart"
                      className="size-4"
                    />
                  </button>
                  )}
              </div>

              {/* Title and Price */}
              <div className="h-16 w-full px-2">
                <div className="text-left text-[0.6rem] overflow-hidden whitespace-nowrap text-ellipsis">
                  {product.title}
                </div>
                <div className="flex gap-2 items-baseline justify-start">
                  <div className="text-[1rem] font-semibold">₹{product.price}</div>
                  <div className="text-[0.75rem] text-gray-400 line-through">
                    ₹{product.originalPrice}
                  </div>
                </div>
                <div className="text-[0.4rem] text-gray-900 pl-12">({product.rating})</div>
              </div>

              {/* Add to Cart Button */}
              <button className="w-full h-[2rem] bg-[#CA8787] text-white text-[0.95rem]">
                Move to Bag
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default YouMightAlsoLike;