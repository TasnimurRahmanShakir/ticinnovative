import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[450px] flex items-center justify-center text-white overflow-hidden ">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/heroBackgroundImage.webp')" }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Content above the image */}
      {/* 1. Changed 'container' to 'w-full' to fill the screen width */}
      <div className="relative z-10 text-center w-full container px-4 font-sans max-w-[1100px]">
        <h1 className="text-4xl md:text-4xl mb-4">
          Streamline Your Amazon Business with Expert FBA Prep, FBM, Delivery,
          and 3PL Services
        </h1>

        {/* 2. Removed 'max-w-2xl' so the text flows to the edges */}
        <p className="text-lg md:text-xl mb-6 mx-auto">
          Welcome to TIC Innovative Inc, your trusted partner for Amazon FBA
          Prep, FBM, Delivery, Carton Handling, 3PL Services, and Warehouse
          Support. We specialize in helping Amazon sellers like you save time,
          reduce costs, and scale your business with seamless logistics
          solutions.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
