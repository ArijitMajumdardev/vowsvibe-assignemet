import { Linkedin, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#D9D9D9] mt-16 pt-15">
      {/* Main Footer */}
      <div className="w-full mx-auto px-4 py-6 md:px-28 max-w-7xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 md:gap-0">
          <div className="flex justify-start md:gap-34 gap-14 md:col-span-3">
            {/* Quick Links */}
            <div>
              <h3 className="text-[14px] font-semibold text-[#A40303] mb-3">
                Quick Links
              </h3>
              <ul className="space-y-2 md:space-y-2 text-[11px] font-medium text-gray-900">
                <li>
                  <a href="/reviews" className="hover:underline">
                    Customer Reviews
                  </a>
                </li>
                <li>
                  <a href="/blogs" className="hover:underline">
                    Our Blogs
                  </a>
                </li>
                <li>
                  <a href="/stores" className="hover:underline">
                    Store Locator
                  </a>
                </li>
                <li>
                  <a href="/care" className="hover:underline">
                    Jewellery Care
                  </a>
                </li>
                <li>
                  <a href="/careers" className="hover:underline">
                    Join Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Details */}
            <div>
              <h3 className="text-[14px] font-semibold text-[#A40303] mb-3">
                Details
              </h3>
              <ul className="space-y-2 md:space-y-3 text-[11px] font-medium text-gray-900">
                <li>
                  <a href="/shipping" className="hover:underline">
                    Shipping & Returns
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/international" className="hover:underline">
                    International Shipping
                  </a>
                </li>
                <li>
                  <a href="/faq" className="hover:underline">
                    FAQ’s and Support
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:underline">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            {/* Duplicate Details (desktop only) */}
            <div className="hidden md:block">
              <h3 className="text-[14px] font-semibold text-[#A40303] mb-3">
                Details
              </h3>
              <ul className="space-y-2 md:space-y-3 text-[11px] font-medium text-gray-900">
                <li>
                  <a href="/shipping" className="hover:underline">
                    Shipping & Returns
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/international" className="hover:underline">
                    International Shipping
                  </a>
                </li>
                <li>
                  <a href="/faq" className="hover:underline">
                    FAQ’s and Support
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:underline">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Us */}
          <div className="sm:col-span-2 md:col-span-1 mt-6 sm:mt-0">
            <h3 className="text-[14px] font-semibold text-[#A40303] mb-3">
              Contact Us
            </h3>
            <p className="text-[11px] font-medium text-gray-900 leading-5">
              Elegant Jewels
              <br />
              SF-11, Ansal Fortune Arcade, K Block, K-27,
              <br />
              Sector 18, Noida, Uttar Pradesh 201301
            </p>
            <p className="text-[11px] font-medium text-gray-900 leading-5 mt-[0.75rem]">
              For any suggestions, queries or complaints please
              <br className="md:hidden" /> contact us:
            </p>
            <p className="text-[11px] font-medium text-gray-900 mt-[0.75rem] mb-4 leading-6.5">
              Elegantjewel Private Limited
              <br />
              <a
                href="mailto:contact@elegantjewels.com"
                className="hover:underline"
              >
                contact@elegantjewels.com
              </a>
              <br />
              <a href="tel:+15551234567" className="hover:underline">
                +1 (555) 123-4567
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className="sm:col-span-2 md:col-span-1 mt-6 md:mt-0">
            <p className="text-[11px] font-medium text-gray-900 mb-2">
              Our Social Links:
            </p>
            <div className="flex gap-5 text-[#A40303] text-[26px]">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="cursor-pointer hover:opacity-80" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="cursor-pointer hover:opacity-80" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="cursor-pointer hover:opacity-80" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr className="border border-[#a40e0e] mt-10" />

      {/* Copyright Bar */}
      <div className="bg-[#CA8787] max-w-7xl mx-auto text-white text-left px-4 py-2 text-[13px] mt-20 md:px-16">
        © {new Date().getFullYear()} Elegant Jewels. All Rights Reserved.
      </div>
    </footer>
  );
}
