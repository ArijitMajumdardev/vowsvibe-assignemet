
export default function ProductOffers({ offers }: ProductOffersProps) {
  return (
    <div className="order-3 lg:order-3">
      <div className="flex justify-between text-base sm:text-lg font-semibold">
        <div className="flex items-center gap-2">
          <span>Offers</span>
          <span className="font-normal text-gray-500 text-sm sm:text-base">
            {offers.length} available
          </span>
        </div>
        <button className="text-[#e56f6f] font-semibold text-sm sm:text-base">
          Check
        </button>
      </div>
      <ul className="mt-2 text-sm sm:text-base text-gray-600 italic list-disc pl-6">
        {offers.map((offer, i) => (
          <li key={i}>{offer}</li>
        ))}
      </ul>
    </div>
  );
}
