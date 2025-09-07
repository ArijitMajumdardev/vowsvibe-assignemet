export default function ProductActions() {
  return (
    <div className="order-1 lg:order-2 flex flex-row gap-3">
      <button className="h-[3rem] flex-1 border border-gray-300 bg-white text-sm sm:text-base text-[#ff8e9c] font-bold cursor-pointer">
        ADD TO CART
      </button>
      <button className="h-[3rem] flex-1 bg-[#ff8e9c] text-white font-bold text-sm sm:text-base hover:brightness-95 transition cursor-pointer">
        BUY NOW
      </button>
    </div>
  );
}
