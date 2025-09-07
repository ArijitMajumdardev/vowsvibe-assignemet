import { useState } from "react";
import {
  Menu,
  Heart,
  Handbag,
  ChevronDown,
} from "lucide-react";
import Drawer from "./Drawer";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      {/* Header component */}
      <header className="h-20 md:bg-[#fbf8f6] w-full px-4 md:px-20 py-[1.375rem] relative z-10">
        <div className="container mx-auto flex items-center justify-between max-w-7xl">
          <div className="flex items-center gap-4">
            <button onClick={toggleDrawer} className="md:hidden">
              <Menu size={26} strokeWidth={1} />
            </button>
            <div className="text-2xl font-bold tracking-wide">LOGO</div>
          </div>

          <nav className="hidden md:flex items-center justify-end gap-[1.75rem] text-sm">
            <a href="#" className="inline-flex items-center gap-[0.1875rem]">
              Collections <ChevronDown size={20} strokeWidth={1} />
            </a>
            <a href="#" className="inline-flex items-center gap-[0.1875rem]">
              Categories <ChevronDown size={20} strokeWidth={1} />
            </a>
            <a href="#">Hot Picks</a>
            <a href="#">Gifts</a>
            <a href="#">Shop All</a>
          </nav>

          <div className="hidden md:flex items-center gap-[0.375rem]">
            <button className="cursor-pointer px-5 py-2 text-[1.125rem] font-bold text-white bg-[#ff8e9c] h-[2.2rem] w-[8rem] flex items-center justify-center">
              LOGIN
            </button>
            <button className="cursor-pointer px-5 py-2 text-[1.125rem] font-bold border border-[#f8c1c1] text-[#ff8e9c] h-[2.2rem] w-[8rem] flex items-center justify-center">
              REGISTER
            </button>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <button>
              <Heart size={26} strokeWidth={1} />
            </button>
            <button>
              <Handbag size={26} strokeWidth={1} />
            </button>
          </div>
        </div>
      </header>

      {/* Side Drawer component */}
         <Drawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Header;
