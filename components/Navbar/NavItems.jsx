"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { navItems } from "@/Constants/NavItems";
import Link from "next/link";

export default function NavItems() {
  const [activeItem, setActiveItem] = useState(navItems[0]?.id || 0);

  const handleActiveItem = (id) => {
    setActiveItem(id);
  };

  return (
    <nav className=" hidden md:block bg-[#f79420] w-full relative z-10">
      <ul className="flex flex-wrap items-start justify-start w-full container mx-auto ">
        {navItems.map((item) => (
          <li
            key={item.id}
            onClick={() => handleActiveItem(item.id)}
            className={cn(
              "border-x border-[#e27b03] px-2 py-2 text-white text-lg transition-colors duration-300 cursor-pointer",
              "hover:bg-[#343a40]",
              activeItem === item.id ? "bg-[#343a40]" : ""
            )}
          >
            <Link href={item.href} className="block w-full h-full">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
