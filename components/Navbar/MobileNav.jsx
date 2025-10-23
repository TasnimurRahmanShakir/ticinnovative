import React from "react";

import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCart } from "react-icons/io";

export default function MobileNav() {
  return (
    <div className="fixed bottom-0 w-[80%]  mx-auto flex items-center justify-around md:hidden py-3">
      <FaHome size={30} />
      <IoPersonCircle size={30} />
      <div className="relative">
        <span className="absolute p-2 border bg-foreground rounded-full">
          <GiHamburgerMenu size={26} className="text-white" />
        </span>
      </div>
      <div className="relative">
        <IoMdCart size={30} />
        <span className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center text-white text-xs font-semibold bg-foreground rounded-full">
          0
        </span>
      </div>

      <FaPhoneAlt size={30} />
    </div>
  );
}
