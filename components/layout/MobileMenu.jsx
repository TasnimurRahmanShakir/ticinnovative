"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  IoClose,
  IoChevronDown,
  IoChevronUp,
  IoLogInOutline,
} from "react-icons/io5";
import { NAV_LINKS } from "@/Constants/NavItems";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function MobileMenu({ open, close }) {
  const menuRef = useRef();
  const [expandedMenu, setExpandedMenu] = useState(null);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        close && close();
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, close]);

  const toggleSubmenu = (name) => {
    if (expandedMenu === name) {
      setExpandedMenu(null);
    } else {
      setExpandedMenu(name);
    }
  };

  return (
    <div
      className={cn(
        "fixed inset-0 bg-black/50 z-60 transition-opacity duration-300 backdrop-blur-sm",
        open ? "opacity-100 visible" : "opacity-0 invisible"
      )}
    >
      <div
        ref={menuRef}
        className={cn(
          "fixed h-full w-[85%] max-w-[320px] left-0 bg-white flex flex-col shadow-2xl transform transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100 bg-orange-500 text-white">
          <span className="font-bold text-lg">Menu</span>
          <button
            onClick={close}
            className="p-1 rounded-full hover:bg-white/20 transition-colors"
          >
            <IoClose size={24} />
          </button>
        </div>

        {/* Login Button Area */}
        <div className="p-4">
          <button className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white font-medium py-3 rounded-lg hover:bg-gray-800 transition-colors">
            <IoLogInOutline size={20} />
            Login / Register
          </button>
        </div>

        {/* Navigation List */}
        <div className="flex-1 overflow-y-auto px-4 pb-20 thin-scrollbar">
          <ul className="space-y-1">
            {NAV_LINKS.map((item) => (
              <li
                key={item.name}
                className="border-b border-gray-50 last:border-none"
              >
                {item.isDropdown ? (
                  // Dropdown Item Logic
                  <div>
                    <div
                      onClick={() => toggleSubmenu(item.name)}
                      className="flex items-center justify-between w-full py-3 text-gray-700 font-medium cursor-pointer hover:text-orange-600"
                    >
                      {item.name}
                      {expandedMenu === item.name ? (
                        <IoChevronUp />
                      ) : (
                        <IoChevronDown />
                      )}
                    </div>

                    {/* Submenu Animation Wrapper */}
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-300 ease-in-out bg-orange-50/50 rounded-lg",
                        expandedMenu === item.name
                          ? "max-h-96 opacity-100 mb-2"
                          : "max-h-0 opacity-0"
                      )}
                    >
                      <ul className="p-2 space-y-1">
                        {item.subItems.map((sub, index) => (
                          <li key={sub.id + index}>
                            <Link
                              href={sub.href}
                              onClick={close}
                              className="block py-2 px-3 text-sm text-gray-600 rounded-md hover:bg-orange-100 hover:text-orange-700"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  // Standard Link Logic
                  <Link
                    href={item.href}
                    onClick={close}
                    className="block py-3 text-gray-700 font-medium hover:text-orange-600 hover:pl-2 transition-all"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
