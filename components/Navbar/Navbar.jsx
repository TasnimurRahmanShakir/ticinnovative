"use client";

import React, { useState } from "react";
import Image from "next/image";
import MobileNav from "./MobileNav";
import MobileMenu from "./MobileMenu";

import { IoPersonCircleSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  const [cartItems, setCartItems] = useState(0);

  const addToCart = () => setCartItems((prev) => prev + 1);

  return (
    <>
      <nav className="container mx-auto hidden md:block">
        <div className="bg-bg-one duration-300 flex items-center justify-between py-6">
          {/* Logo */}
          <div className="cursor-pointer lg:pr-10">
            <Image
              src="/logo.jpg"
              alt="ticinnovative-logo"
              width={100}
              height={120}
            />
          </div>

          <div className="flex items-center justify-between gap-5 w-[80%]">
            {/* Search bar */}
            <div className="flex flex-1 px-10 min-w-0">
              <input
                type="text"
                placeholder="Search for products..."
                className="flex-1 px-4 py-2 border border-r-0 border-zinc-300 focus:outline-none rounded-l-md focus:shadow-[0_1px_5px_rgba(0,0,0,0.1)] transition-shadow duration-300 min-w-0"
              />

              <button className="bg-foreground px-4 py-2 rounded-r-md text-white font-semibold hover:bg-foreground/70 cursor-pointer transition-colors duration-300">
                SEARCH
              </button>
            </div>

            {/* User icon */}
            <div className="cursor-pointer border border-foreground rounded-full p-1 flex items-center justify-center">
              <IoPersonCircleSharp size={36} />
            </div>

            {/* Cart */}
            <div className="flex items-center justify-between gap-3 border border-foreground pr-2 pl-4 rounded-full">
              <FaShoppingCart size={24} className="cursor-pointer" />
              <div className="flex flex-col items-center font-semibold whitespace-nowrap pr-2">
                <span>Your Cart</span>
                <span className="text-foreground">
                  {cartItems} item{cartItems !== 1 ? "s" : ""}
                </span>
              </div>

              <button
                className="bg-foreground rounded-full px-3 py-1 hidden lg:block"
                onClick={addToCart} // demo click
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
          </nav>
          
          <MobileNav />
          <MobileMenu />

    </>
  );
}
