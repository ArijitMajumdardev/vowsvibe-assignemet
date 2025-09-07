
export default function ProductRatingPrice({
  rating,
  reviewsCount,
  price,
  originalPrice,
  discount,
}: ProductRatingPriceProps) {
  return (
    <div>
      <div className="flex items-center gap-2 text-sm sm:text-base">
        <span className="inline-flex items-center gap-1 px-2 py-1 text-sm bg-[#388E3C] text-white font-semibold">
          {rating} <img src="/star.svg" alt="star" />
        </span>
        <span className="text-gray-700 text-sm sm:text-base font-medium">
          ({reviewsCount})
        </span>
      </div>

      <div className="mt-2 flex items-baseline gap-3">
        <div className="text-2xl sm:text-3xl font-bold tracking-tight">
          ₹ {price.toLocaleString()}
        </div>
        <div className="text-gray-400 line-through text-[15px]">
          ₹ {originalPrice.toLocaleString()}
        </div>
        <div className="text-[#159f46] font-semibold text-sm sm:text-base">
          ({discount})
        </div>
      </div>
    </div>
  );
}
