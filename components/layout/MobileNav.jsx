"use client";

import React, { useState } from "react";
import {
  IoHomeOutline,
  IoPersonOutline,
  IoCartOutline,
  IoCallOutline,
  IoMenuOutline,
} from "react-icons/io5";
import Link from "next/link";

import MobileMenu from "./MobileMenu";
import { useCartData } from "@/lib/hooks/useCartData";

export default function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCartData();
  const onClose = () => setMenuOpen(false);

  return (
    <>
      {/* Bottom nav bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 w-full bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] pb-safe">
        <div className="flex items-center justify-around py-3 max-w-md mx-auto">
          <Link
            href="/"
            className="flex flex-col items-center gap-1 text-gray-500 hover:text-orange-500 transition-colors"
          >
            <IoHomeOutline size={24} />
            <span className="text-[10px] font-medium">Home</span>
          </Link>

          <Link
            href="/profile"
            className="flex flex-col items-center gap-1 text-gray-500 hover:text-orange-500 transition-colors"
          >
            <IoPersonOutline size={24} />
            <span className="text-[10px] font-medium">Profile</span>
          </Link>

          {/* Floating Action Button (Hamburger) */}
          <div className="relative -top-6">
            <button
              onClick={() => setMenuOpen(true)}
              className="flex items-center justify-center w-14 h-14 bg-orange-500 rounded-full shadow-lg shadow-orange-200 hover:scale-105 transition-transform border-4 border-white"
            >
              <IoMenuOutline size={28} className="text-white" />
            </button>
          </div>

          <Link
            href="/cart"
            className="relative flex flex-col items-center gap-1 text-gray-500 hover:text-orange-500 transition-colors cursor-pointer"
          >
            <div className="relative">
              <IoCartOutline size={26} />
              <span className="absolute -top-1 -right-2 w-4 h-4 flex items-center justify-center text-white text-[10px] font-bold bg-orange-500 rounded-full">
                {cartCount}
              </span>
            </div>
            <span className="text-[10px] font-medium">Cart</span>
          </Link>

          <a
            href="https://wa.me/+17036091602"
            className="flex flex-col items-center gap-1 text-gray-500 hover:text-orange-500 transition-colors"
          >
            <IoCallOutline size={24} />
            <span className="text-[10px] font-medium">Call</span>
          </a>
        </div>
      </div>

      {/* The Slide-out Drawer */}
      <MobileMenu open={menuOpen} close={onClose} />
    </>
  );
}
