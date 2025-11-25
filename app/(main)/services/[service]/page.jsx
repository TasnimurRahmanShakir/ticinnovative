import React from "react";
import { notFound } from "next/navigation";
import ServiceCard from "@/components/UI/ServiceCard";
import {
  amazonService,
  amazonFBMService,
  deliveryCartonService,
  threePLService,
  warehouseSupportService,
} from "@/Constants/ServiceItems";

export default async function Page({ params }) {
  const { service } = await params;

  await new Promise((resolve) => setTimeout(resolve, 3000));
  const validServices = [
    "amazon-fba-fbm",
    "wfs-service",
    "courier-delivery",
    "warehouse-support",
  ];

  if (!validServices.includes(service)) {
    return notFound();
  }

  return (
    <section id="services" className="w-full bg-white relative z-10">
      {service === "amazon-fba-fbm" && (
        <>
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
        </>
      )}
      {service === "wfs-service" && <div>hello WFS</div>}
      {service === "courier-delivery" && <div>hello Courier</div>}
      {service === "warehouse-support" && <div>hello Warehouse</div>}
    </section>
  );
}
