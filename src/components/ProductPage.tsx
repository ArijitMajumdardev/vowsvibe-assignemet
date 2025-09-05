import { ChevronDown, ChevronLeft, ChevronRight, Play } from "lucide-react";
import React from "react";

// Tailwind assumptions:
// - font-sans is your default UI font.
// - You have container sizes similar to Tailwind defaults.
// - Colors approximated to match the Figma screenshot.

// Small inline icons to match the look
const Star = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden>
    <path d="M12 2l2.95 6.1 6.73.98-4.87 4.75 1.15 6.71L12 17.77 6.04 20.54l1.15-6.71L2.32 9.08l6.73-.98L12 2z" />
  </svg>
);

const BoxIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden>
    <path fill="#efefef" d="M2 7.5L12 2l10 5.5-10 5.5L2 7.5z" />
    <path fill="#d4d4d4" d="M2 7.5V17L12 22V12.5L2 7.5z" />
    <path fill="#bdbdbd" d="M22 7.5V17L12 22V12.5l10-5z" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden>
    <path
      fill="#e5e7eb"
      d="M12 2l8 3v6c0 5.25-3.5 9.98-8 11-4.5-1.02-8-5.75-8-11V5l8-3z"
    />
    <path
      fill="#9ca3af"
      d="M12 4.5L6 6.7v4.2c0 4.2 2.8 7.98 6 8.86 3.2-.88 6-4.66 6-8.86V6.7L12 4.5z"
    />
  </svg>
);

const MedalIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden>
    <circle cx="12" cy="10" r="5" fill="#f3f4f6" />
    <circle cx="12" cy="10" r="3" fill="#9ca3af" />
    <path fill="#d1d5db" d="M8 14l-2 8 4-3 2 2 2-2 4 3-2-8" />
  </svg>
);

const Silver925Icon = () => (
  <svg viewBox="0 0 32 32" className="w-7 h-7" aria-hidden>
    <rect x="3" y="6" width="26" height="20" rx="6" fill="#f3f4f6" />
    <text
      x="16"
      y="20"
      textAnchor="middle"
      fontSize="10"
      fill="#6b7280"
      fontFamily="Inter, ui-sans-serif"
    >
      925
    </text>
  </svg>
);

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-montserrat">
      {/* Promo bar */}
      <div className="w-full bg-[#ca8787] text-white text-[13px] tracking-[-0.01em] flex justify-center items-center h-[43px]">
        <span>
          50% off on all items Only Limited Time Deal Offer ending in 03:34:15
        </span>
      </div>

      {/* Header */}
      <header className="h-[85px] bg-[#fbf8f6] w-full  px-[126px] py-[22px]">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-[30px] font-bold tracking-wide">LOGO</div>
          <nav className="hidden md:flex items-center gap-[28px] h-[22px] w-[515px] b text-[16px]">
            <button className="inline-flex items-center gap-[3px]">
              Collections <ChevronDown size={20} strokeWidth={1} />
            </button>
            <button className="inline-flex items-center gap-[3px]">
              Categories <ChevronDown size={20} strokeWidth={1} />
            </button>
            <button>Hot Picks</button>
            <button>Gifts</button>
            <button>Shop All</button>
          </nav>
          <div className="flex items-center gap-[6px]">
            <button className="px-5 py-2 text-[18px] font-bold text-white bg-[#ff8e9c] h-[40px] w-[139px] flex items-center justify-center">
              LOGIN
            </button>
            <button className="px-5 py-2 text-[18px] font-bold  border border-[#f8c1c1] text-[#ff8e9c] bg-[#fff5f5] h-[40px] w-[139px] flex items-center justify-center">
              REGISTER
            </button>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className=" pt-[58px] pl-[128px] text-[16px] text-gray-500  ">
        <div className="flex items-center gap-2 flex-wrap  h-[20px] w-[617px] ">
          {[
            "Home",
            "Jewellery",
            "Gifts",
            "Necklace",
            "Chains",
            "Shining Diva…",
          ].map((item) => (
            <React.Fragment key={item}>
              <span>{item}</span>
              <span className="text-gray-700">
                <ChevronRight size={16} strokeWidth={1} />
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Main */}
      <main className="  grid grid-cols-1 lg:grid-cols-12 gap-10 pb-20 pl-[125px] pt-[48px]">
        {/* Left media column */}
        <div className="lg:col-span-6 relative h-[739px] w-[651px] ">
          {/* <div className="aspect-[4/3]   border border-gray-200" /> */}
          {/* Back chevron */}
          {/* <button className="absolute left-0 top-1/2 -translate-y-1/2 ml-2 p-2 rounded-full bg-white/80 shadow border border-gray-200">‹</button> */}
          {/* Floating video thumb */}
          <div className="absolute bottom-0 w-full  flex justify-between">
            <button className="h-[108px] w-[86px] flex justify-center items-center">
              <ChevronLeft size={26} strokeWidth={1} />
            </button>
            <div className="w-[104.75px] h-[110px] bg-gray-700/70 flex items-center justify-center shadow-inner">
              <div className="w-8 h-8 rounded-xl border-2 border-white/30 grid place-items-center">
                <Play size={16} className="text-white/30" />
              </div>
            </div>
            <button className="h-[108px] w-[86px] flex justify-center items-center">
              <ChevronRight size={26} strokeWidth={1} />
            </button>
          </div>
        </div>

        {/* Right details column */}
        <div className="lg:col-span-6">
          <div>
            <h1 className="text-[28px] leading-9 font-semibold text-gray-900">
              Gold-Plated Pearls Necklace
            </h1>
            <p className="text-[28px] leading-9 font-semibold text-gray-700 mt-1">
              Made with 925 Silver
            </p>

            {/* Rating */}
            <div className="mt-4 flex items-center gap-3 text-[15px]">
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-[#e7f3e7] text-[#2a7b2e] font-semibold">
                4.1 <Star />
              </span>
              <span className="text-gray-700">(23)</span>
            </div>

            {/* Price */}
            <div className="mt-4 flex items-baseline gap-4">
              <div className="text-3xl font-semibold tracking-tight">
                ₹ 1,600
              </div>
              <div className="text-gray-400 line-through">₹ 2,000</div>
              <div className="text-[#159f46] font-semibold">(20% off)</div>
            </div>
          </div>

          {/* USPs */}
          <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex items-center gap-3">
              <BoxIcon />
              <span className="text-[15px]">Easy 30 Day Return</span>
            </div>
            <div className="flex items-center gap-3">
              <Silver925Icon />
              <span className="text-[15px]">925 Silver Plating</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldIcon />
              <span className="text-[15px]">
                <span className="mr-1">6-</span> Month Warranty
              </span>
            </div>
            <div className="flex items-center gap-3">
              <MedalIcon />
              <span className="text-[15px]">Premium Gold</span>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="h-12 px-6 rounded-md border border-gray-300 bg-white shadow-sm text-[#e56f6f] font-semibold hover:shadow transition">
              ADD TO CART
            </button>
            <button className="h-12 px-7 rounded-md bg-[#ef6f79] text-white font-semibold shadow-sm hover:brightness-95 transition">
              BUY NOW
            </button>
          </div>

          {/* Delivery */}
          <div className="mt-8">
            <div className="text-sm font-medium text-gray-800 mb-2">
              Estimated Delivery Time
            </div>
            <div className="flex items-stretch max-w-xl">
              <input
                placeholder="Enter Pincode"
                className="flex-1 h-12 rounded-l-md border border-gray-300 px-4 text-[15px] outline-none focus:ring-2 focus:ring-rose-200"
              />
              <button className="h-12 px-6 rounded-r-md border border-l-0 border-gray-300 text-[#e56f6f] font-semibold bg-white">
                Check
              </button>
            </div>
          </div>

          {/* Offers */}
          <div className="mt-6 max-w-xl">
            <div className="text-sm font-semibold">
              Offers{" "}
              <span className="font-normal text-gray-500">2 available</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-sm text-gray-600">
              <div>Coupon can be applied at checkout</div>
              <button className="text-[#e56f6f] font-semibold">Check</button>
            </div>
          </div>

          <hr className="mt-8 border-gray-200" />
        </div>
      </main>

      <style>{`
        .clip-path-triangle { clip-path: polygon(0 0, 100% 50%, 0 100%); }
      `}</style>
    </div>
  );
}
