import React from "react";
import Image from "next/image";
import Icon from "./UI/Icons";

const items = [
  {
    id: 1,
    title: "Experienced Team",
    desc: "Years of expertise in Amazon logistics and fulfillment.",
  },
  {
    id: 2,
    title: "Cost-Effective Solutions",
    desc: "Save money with our competitive pricing.",
  },
  {
    id: 3,
    title: "Scalable Services",
    desc: "Grow your business without worrying about logistics.",
  },
  {
    id: 4,
    title: "Customer-Centric Approach",
    desc: "Dedicated support tailored to your needs.",
  },
  {
    id: 5,
    title: "State-of-the-Art Facilities",
    desc: "Secure, modern warehouses with advanced technology.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white relative z-10 pb-18">
      <div className="container mx-auto lg:px-28 px-4">
        <h1 className="text-3xl py-18">Why Choose Us?</h1>

        <div className="flex flex-col md:flex-row gap-10 items-start justify-between">
          <div className="w-full md:w-1/2 space-y-2">
            {items.map((item) => (
              <div key={item.id} className="flex gap-3 items-center">
                <Icon
                  name="Done"
                  className="text-[#f79420] h-12 w-12 border-4 p-px font-semibold border-[#f79420] rounded-full shrink-0 "
                />
                <div>
                  <h2 className="text-xl ">{item.title}</h2>
                  <p className="text-lg text-gray-600 pb-3">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full md:w-1/2 md:top-24">
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="/images/whyChooseUs.png"
                alt="Why Choose Us"
                width={600}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
