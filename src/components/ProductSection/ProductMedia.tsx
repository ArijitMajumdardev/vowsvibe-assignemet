import { ChevronLeft, ChevronRight, Play, ArrowLeft } from "lucide-react";

export default function ProductMedia() {
  return (
    <>
      {/* Desktop Media */}
      <div className="lg:col-span-6 relative h-[18rem] sm:h-[24rem] lg:h-[32rem] w-full lg:max-w-[28rem] mx-auto hidden md:block">
        <div className="absolute bottom-0 w-full flex justify-between px-2 lg:px-0">
          <button className="h-12 w-10 flex justify-center items-center cursor-pointer">
            <ChevronLeft size={20} strokeWidth={1} />
          </button>
          <div className="w-14 h-14 bg-gray-700/70 flex items-center justify-center shadow-inner cursor-pointer">
            <div className="w-6 h-6 rounded-xl border-2 border-white/30 grid place-items-center">
              <Play size={12} className="text-white/30" />
            </div>
          </div>
          <button className="h-12 w-10 flex justify-center items-center cursor-pointer">
            <ChevronRight size={20} strokeWidth={1} />
          </button>
        </div>
      </div>

      {/* Mobile Media */}
      <div className="lg:hidden">
        <span className="text-md font-medium m-3 flex justify-left items-center">
          <ArrowLeft size={26} strokeWidth={1} />
          Product Details
        </span>
        <div className="relative h-[18rem] sm:h-[24rem] w-full mx-auto">
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <span className="w-2 h-2 rounded-full bg-pink-500"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          </div>
        </div>
      </div>
    </>
  );
}
