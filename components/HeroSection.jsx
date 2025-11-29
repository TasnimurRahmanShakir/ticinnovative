import React from "react";

import Image from "next/image";
import Button from "./UI/Button";

const HeroSection = ({
  image,
  title,
  desc,
  buttonText,
  buttonLink,
}) => {
  return (
    <section className="relative w-full h-[450px] flex items-center justify-center text-white overflow-hidden ">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={image || "/images/heroBackgroundImage.webp"}
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content above the image */}
      {/* 1. Changed 'container' to 'w-full' to fill the screen width */}
      <div className="relative z-10 text-center w-full container mx-auto px-4 font-sans max-w-[1100px]">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          {title}
        </h1>

        {/* 2. Removed 'max-w-2xl' so the text flows to the edges */}
        <p className="text-lg md:text-xl mb-8 mx-auto max-w-3xl leading-relaxed">
          {desc}
        </p>

        {buttonText && (
          <div className="mt-8">
            <Button
              href={buttonLink || "/contact"}
              variant="primary"
              size="lg"
              className="rounded-full px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
            >
              {buttonText}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
