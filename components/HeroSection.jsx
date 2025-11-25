import React from "react";

import Link from "next/link";

const HeroSection = ({ image, title, desc, buttonText, buttonLink }) => {
  return (
    <section className="relative w-full h-[450px] flex items-center justify-center text-white overflow-hidden ">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Content above the image */}
      {/* 1. Changed 'container' to 'w-full' to fill the screen width */}
      <div className="relative z-10 text-center w-full container mx-auto px-4 font-sans max-w-[1100px]">
        <h1 className="text-4xl md:text-4xl mb-4">{title}</h1>

        {/* 2. Removed 'max-w-2xl' so the text flows to the edges */}
        <p className="text-lg md:text-xl mb-6 mx-auto">{desc}</p>

        {buttonText && (
          <div className="mt-8">
            <Link
              href={buttonLink || "/contact"}
              className="bg-primary hover:bg-[#e68a1e] text-white text-lg font-semibold py-3 px-8 rounded-full transition-all duration-300"
            >
              {buttonText}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
