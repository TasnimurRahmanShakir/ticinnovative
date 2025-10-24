'use client'

import React, { useState } from "react";
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCart } from "react-icons/io";

import MobileMenu from "./MobileMenu";

export default function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const onClose = () => setMenuOpen(false);
  console.log('from mobile nav', onClose)
  return (
  
    <>
      

      {/* Bottom nav bar */}
      <div className="fixed bottom-0 w-[80%] mx-auto flex items-center justify-around md:hidden py-3 bg-white">
        <FaHome
          size={30}
          className="text-gray-600 hover:text-foreground transition-colors"
        />
        <IoPersonCircle
          size={30}
          className="text-gray-600 hover:text-foreground transition-colors"
          
        />

        <div className="relative -top-6">
          <span
            onClick={() => setMenuOpen(true)}
            className="flex items-center justify-center w-10 h-10 bg-foreground rounded-full border border-black cursor-pointer"
          >
            <GiHamburgerMenu size={24} className="text-white" />
          </span>
        </div>

        <div className="relative">
          <IoMdCart
            size={30}
            className="text-gray-600 hover:text-foreground transition-colors"
          />
          <span className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center text-white text-xs font-semibold bg-foreground rounded-full">
            0
          </span>
        </div>

        <FaPhoneAlt
          size={24}
          className="text-gray-600 hover:text-foreground transition-colors"
        />
      </div>
      <MobileMenu open={menuOpen} close={onClose} />
    </>
  );
}
