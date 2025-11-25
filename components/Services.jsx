import React from "react";
import {
  amazonService,
  amazonFBMService,
  deliveryCartonService,
  threePLService,
  warehouseSupportService,
} from "@/Constants/ServiceItems";
import ServiceCard from "./UI/ServiceCard";


export default function Services() {
  return (
    <section id="services" className="w-full bg-white relative z-10">
      <ServiceCard
        items={amazonService}
        align="md:flex-row"
        image="/images/ServiceOne.jpg"
        header={true}
      />
      <ServiceCard
        items={amazonFBMService}
        align="md:flex-row-reverse"
        image="/images/ServiceTwo.jpg"
        bgColor="bg-[#e3ebf5]"
      />
      <ServiceCard
        items={deliveryCartonService}
        align="md:flex-row"
        image="/images/ServiceThree.jpg"
      />
      <ServiceCard
        items={threePLService}
        align="md:flex-row-reverse"
        image="/images/ServiceFour.png"
        bgColor="bg-[#e3ebf5]"
      />
      <ServiceCard
        items={warehouseSupportService}
        align="md:flex-row"
        image="/images/ServiceFive.jpg"
      />
    </section>
  );
}
