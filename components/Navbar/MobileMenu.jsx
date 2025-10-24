"use client";

import React, { useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { cn } from "@/lib/utils";

const menuItems = [
  "Home",
  "Amazon FBM / FBA Prep Services",
  "WFS Prep Services",
  "Storage / Warehouse",
  "Boxes or Cartons Supply",
  "Shipping / Cargo USA & International",
  "Courier & Delivery",
  "Carton Handling",
  "Our Products",
  "Media",
  "About US",
  "Warehouse",
  "Payment",
  "Contact Us",
];

export default function MobileMenu({ open, close }) {
  const menuRef = useRef();

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        close && close();
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, close]);

  return (
    <div
      className={cn(
        "fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-300",
        open ? "opacity-100 visible" : "opacity-0 invisible"
      )}
    >
      <div
        ref={menuRef}
        className={cn(
          "fixed h-full w-full max-w-[400px] left-0 px-4 bg-white flex flex-col items-start py-3 gap-3 overflow-y-scroll thin-scrollbar transform transition-transform duration-300",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between w-full font-semibold bg-[rgb(52,58,64)] text-white p-2.5 rounded-md">
          <span className="cursor-pointer">Menu</span>
          <span
            className="flex items-center gap-1 cursor-pointer"
            onClick={close}
          >
            Close <IoClose size={20} />
          </span>
        </div>

        <button className="w-full flex items-center justify-center bg-[rgb(204,229,255)] font-semibold p-3 rounded-md">
          Login
        </button>

        <ul className="w-full">
          {menuItems.map((item, index) => (
            <li
              key={item}
              className={cn(
                "border-b-2 border-zinc-300 p-3 w-full hover:bg-[rgb(234,237,237)] cursor-pointer",
                index === menuItems.length - 1 ? "border-none" : ""
              )}
              onClick={close} // closes menu on click
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
