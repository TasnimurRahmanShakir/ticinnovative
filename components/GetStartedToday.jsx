import React from "react";

export default function GetStartedToday() {
  return (
    <section className="w-full relative z-10 bg-[#f79420] py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="text-white max-w-3xl md:text-left md:w-3/4 w-full">
          <h2 className="text-2xl md:text-3xl font-serif mb-4">
            Get Started Today!
          </h2>
          <p className="text-lg md:text-xl opacity-95 ">
            Ready to take your Amazon business to the next level? Let us handle
            the logistics so you can focus on growing your brand. Contact us
            today for a free consultation or quote!
          </p>
        </div>

        {/* Right Side: Button */}
        <div className="shrink-0 md:w-1/4 w-full">
          <button className="bg-[#333333] hover:scale-105 text-white text-lg font-semibold py-3 px-10 rounded-full transition-all duration-300 cursor-pointer">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
