"use client";
import React, { useState } from "react";
import {
  IoSearch,
  IoCartOutline,
  IoPersonOutline,
  IoChevronDown,
} from "react-icons/io5";
import { NAV_LINKS } from "@/Constants/NavItems";
import MobileNav from "./MobileNav"; 
import Image from "next/image";
import Link from "next/link";
import { useCartData } from "@/lib/hooks/useCartData";


export default function Navbar() {
  const { cartCount } = useCartData();
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  return (
    <>
      {/* --- MAIN TOP NAVBAR --- */}
      <nav className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm font-sans">
        <div className="container mx-auto sm:px-6">
          <div className="flex justify-between items-center h-20">
            {/* 1. LOGO */}
            <div className="flex items-center cursor-pointer">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="PakPhire Logo"
                  width={150} 
                  height={50} 
                  className="h-12 w-auto object-contain"
                  priority 
                />
              </Link>
            </div>

            {/* 2. DESKTOP NAVIGATION (Hidden on Mobile) */}
            <div className="hidden lg:flex items-center space-x-8 px-2">
              {NAV_LINKS.map((link) => (
                <div
                  key={link.name}
                  className="relative group h-full flex items-center"
                >
                  {link.isDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsServiceOpen(true)}
                      onMouseLeave={() => setIsServiceOpen(false)}
                    >
                      <button className="flex items-center gap-1 text-gray-700 hover:text-orange-500 font-medium transition-colors py-6">
                        {link.name}
                        <IoChevronDown
                          className={`transition-transform duration-200 ${
                            isServiceOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Dropdown */}
                      <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-200 transform ${
                          isServiceOpen
                            ? "opacity-100 translate-y-0 visible"
                            : "opacity-0 translate-y-2 invisible"
                        }`}
                      >
                        {link.subItems.map((sub, index) => (
                          <Link
                            key={sub.id + index}
                            href={sub.href}
                            className="block px-4 py-3 text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors border-b border-gray-50 last:border-0"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-orange-600 font-medium text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* 3. UTILITIES (Search, Cart, Profile) */}
            <div className="flex items-center gap-3">
              {/* Search - Visible on Mobile too, but smaller */}
              <div className="flex items-center bg-[#e3ebf5] rounded-full px-3 py-2 focus-within:ring-2 focus-within:ring-orange-200 transition-all">
                <IoSearch className="text-gray-400 text-lg" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent border-none outline-none text-sm ml-2 w-20 md:w-32 focus:w-40 transition-all placeholder-gray-400 text-gray-700"
                />
              </div>

              {/* Desktop Only Icons (Mobile has them in bottom bar) */}
              <div className="hidden lg:flex items-center gap-2">
                  <Link href="/cart" className="p-2 hover:bg-gray-100 rounded-full text-gray-600 transition-colors relative">
                  <IoCartOutline size={24} />
                  {cartCount > 0 && (
                    <span className="absolute top-0 right-0 h-4 w-4 bg-orange-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                      {cartCount}
                    </span>
                  )}
                </Link>
                <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600 transition-colors">
                  <IoPersonOutline size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="lg:hidden">
        <MobileNav />
      </div>
    </>
  );
}
