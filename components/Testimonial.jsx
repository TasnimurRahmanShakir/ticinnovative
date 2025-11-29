import React from "react";
import Image from "next/image";

const items = [
  {
    id: 1,
    message:
      "Since partnering with Pakphire, our fulfillment process has been flawless. Their team is professional, reliable, and truly understands the needs of Amazon sellers.",
    image: "/logo.jpg",
    name: "Sarah Jenkins",
    title: "CEO, Jenkins Enterprises",
  },
  {
    id: 2,
    message:
      "Their 3PL services have allowed us to scale our business without the headaches of managing logistics. Highly recommend their dedicated support team!",
    image: "/logo.jpg",
    name: "Mark Thompson",
    title: "Operations Lead, ScaleUp Inc.",
  },
];

export default function Testimonial() {
  return (
    <section id="testimonials" className="bg-gray-50 w-full relative z-10 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h1>
          <p className="text-lg text-gray-600">
            Hear from our happy clients about their amazing experiences growing
            their businesses with us.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-10 flex flex-col justify-between items-center text-center w-full md:w-1/2 max-w-[600px] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] transition-shadow duration-300"
            >
              <div className="mb-8 relative">
                <p className="text-lg text-gray-700 italic relative z-10 leading-relaxed">
                  {item.message}
                </p>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="p-[3px] rounded-full bg-linear-to-tr from-cyan-400 via-blue-500 to-purple-500 shadow-sm">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="rounded-full bg-white h-16 w-16 object-cover border-2 border-white"
                  />
                </div>

                <div>
                  <h3 className="text-gray-900 font-bold text-lg">
                    {item.name}
                  </h3>
                  {item.title && (
                    <p className="text-gray-500 text-sm">{item.title}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
