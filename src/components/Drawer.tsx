import { Plus } from "lucide-react";

const drawerItems = [
  {
    type: "icon",
    icon: <Plus size={20} />,
    label: "Add Account",
    border: true,
  },
  {
    type: "image",
    src: "/received2.png",
    alt: "recieved",
    label: "Gold Jewellery",
  },
  {
    type: "image",
    src: "/received2.png",
    alt: "recieved",
    label: "Silver Jewellery",
  },
  {
    type: "image",
    src: "/received2.png",
    alt: "recieved",
    label: "Trending Collection",
  },
  {
    type: "image",
    src: "/received2.png",
    alt: "recieved",
    label: "Gifts",
  },
  {
    type: "image",
    src: "/received2.png",
    alt: "recieved",
    label: "Shop by Occasion",
  },
];

export default function Drawer({ isDrawerOpen, toggleDrawer }: DrawerProps) {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-full bg-black/50 transition-all duration-300 z-20 ${
        isDrawerOpen ? "visible" : "invisible"
      }`}
      onClick={toggleDrawer}
    >
      <div
        className={`h-full w-3/4 max-w-[20rem] bg-[#c38989] transition-transform duration-300 transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col p-6 space-y-4 text-white">
          {drawerItems.map((item, index) => (
            <button
              key={index}
              className={`flex items-center gap-3 py-4 border-b border-white/30 text-white hover:text-gray-200 ${
                item.border ? "" : ""
              }`}
            >
              {item.type === "icon" ? (
                item.icon
              ) : (
                <img src={item.src} alt={item.alt} className="size-5" />
              )}
              <span>{item.label}</span>
            </button>
          ))}

          {/* Login / Signup */}
          <button className="flex items-center gap-3 py-3 bg-white text-[#2D2D2D] justify-left px-2 hover:bg-gray-100 mt-4">
            <img
              src="/user-tick.svg"
              alt="recieved"
              className="size-5"
            />
            <span>Login / SignUp</span>
          </button>
        </div>
      </div>
    </div>
  );
}
