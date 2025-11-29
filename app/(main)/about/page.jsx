import React from "react";
import Image from "next/image";

export const metadata = {
  title: "About Us | Pakphire LLC",
  description: "About Us",
};

export default function AboutUs() {
  const teamMembers = [
    { name: "Kashif Arif", role: "Managing Member", image: "/team/Kashif-Arif.png" },
    {
      name: "Asif Omar",
      role: "Member",
      image: "/team/Asif-Omar.png",
    },
    { name: "Afshan Omar", role: "Managing Member", image: "/team/Afshan-Omar.png" },
  ];

  return (
    <section className="container mx-auto py-12">
      <div className="pb-12 w-full lg:w-[80%] mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">About Us</h1>
        <p className="text-lg text-clip">
          <span className="font-semibold">Pakphire LLC</span> is a trusted
          logistics and fulfillment partner dedicated to streamlining Amazon and
          Walmart operations for sellers across the USA. Our mission is simple:
          help businesses save time, cut costs, and scale effortlessly through
          reliable, end-to-end support. <br />
          <br /> From FBA prep to FBM order handling, delivery, carton
          management, and full 3PL services, we ensure your eCommerce workflow
          runs smoothly—every step of the way. Backed by a skilled team,{" "}
          <span className="font-semibold">24/7 customer support</span>, and{" "}
          <span className="font-semibold">
            one-to-one dedicated representatives
          </span>
          , Pakphire LLC is committed to delivering fast, accurate, and
          dependable solutions tailored to your business needs.
        </p>

        {/* <button className="bg-[#1e388c] text-white px-4 py-3 rounded-lg mt-4">
          Download Company Profile
        </button> */}
      </div>

      <div className="w-full lg:w-[80%] mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md text-center border border-gray-100">
            <h3 className="text-xl font-bold text-[#1e388c] mb-3">Delivery</h3>
            <p className="text-gray-600">
              Timely, secure shipping services across the USA.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center border border-gray-100">
            <h3 className="text-xl font-bold text-[#1e388c] mb-3">Pick-Pack</h3>
            <p className="text-gray-600">
              Accurate, efficient, and streamlined order fulfillment.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center border border-gray-100">
            <h3 className="text-xl font-bold text-[#1e388c] mb-3">Drop-Off</h3>
            <p className="text-gray-600">
              Hassle-free handling of client shipments.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Additional Support Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#1e388c] mr-3 mt-1">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </span>
                  <span className="text-lg text-gray-700">
                    Product label support
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1e388c] mr-3 mt-1">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </span>
                  <span className="text-lg text-gray-700">
                    Brand approval assistance
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1e388c] mr-3 mt-1">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </span>
                  <span className="text-lg text-gray-700">
                    Product buying support <br />
                    <span className="text-sm text-gray-500">
                      (Walmart → Amazon, & Amazon → other marketplaces)
                    </span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <p className="text-gray-700 leading-relaxed">
                We work closely with trusted carriers, including{" "}
                <span className="font-bold text-[#1e388c]">FedEx</span>,{" "}
                <span className="font-bold text-[#1e388c]">UPS</span>, and{" "}
                <span className="font-bold text-[#1e388c]">USPS</span>, to
                guarantee reliability and nationwide coverage.
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="w-full h-[2px] border-[#1e388c] mx-auto lg:w-[80%] pb-10" />
      <div>
        <h1 className="text-3xl font-bold mb-4 text-center">
          Our Magnificent <br />{" "}
          <span className="text-[#1e388c]">Management</span>
        </h1>

        <div className="relative mt-20 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-20 lg:gap-12 w-full lg:w-[90%] mx-auto px-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white h-[200px] shadow-card rounded-xl p-6 pt-20 text-center relative shadow-lg"
            >
              <hr className="absolute top-0 left-0 w-full border-[#1e388c] border-4 mx-auto overflow-hidden " />

              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-28 h-28 bg-gray-200 rounded-2xl border-4 border-white shadow-md overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                {member.name}
              </h3>
              <p className="text-gray-500 font-medium text-sm uppercase tracking-wide">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
