export default function ProductDelivery() {
  return (
    <div className="order-4 lg:order-2">
      <div className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
        Estimated Delivery Time
      </div>
      <div className="flex border border-gray-400 items-center w-full h-[3rem] px-3">
        <input
          placeholder="Enter Pincode"
          className="flex-1 h-full text-sm sm:text-base outline-none"
        />
        <button className="text-sm sm:text-base text-[#e56f6f] font-semibold">
          Check
        </button>
      </div>
    </div>
  );
}
