import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function ServiceCard({ items, align, image, bgColor = null, header = null }) {

  return (
    <section className={cn("w-full px-4 py-15", bgColor)}>
      <div className="container mx-auto">
        {header && (
          <h1 className="text-center w-full text-3xl font-bold mb-10 text-gray-800">
            Our Services
          </h1>
        )}

        {/* Main Flex Container: Stacks on mobile, Row on Desktop */}
        <div
          className={cn(
            "flex flex-col md:flex-row gap-10 items-start justify-between",
            align 
          )}
        >
          {/* Left Column: Text Content */}
          <div className="w-full md:w-1/2 space-y-8">
            {items.map((item) => (
              <div
                key={item.id}
                className="border-b border-gray-200 pb-6 last:border-0"
              >
                <h2 className="text-3xl font-bold py-2 text-[#f79420]">
                  {item.id}. {item.title}
                </h2>

                <p className="text-lg text-gray-600 pb-4 leading-relaxed">
                  {item.desc}
                </p>

                <ul className="list-disc pl-5 space-y-2">
                  {item.services.map((service) => (
                    <li key={service.id} className="text-gray-700">
                      <span className="font-bold text-gray-900">
                        {service.heading}:
                      </span>{" "}
                      {service.desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="w-full md:w-1/2 md:top-24">
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src={image}
                alt={items[0].title}
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
