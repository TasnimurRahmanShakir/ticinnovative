import React from "react";
import { notFound } from "next/navigation";
import ServiceCard from "@/components/UI/ServiceCard";
import {
  amazonService,
  amazonFBMService,
} from "@/Constants/ServiceItems";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import GetStartedToday from "@/components/GetStartedToday";
import CourierDelivery from "./CourierDelivery";
import {
  wfsHero,
  wfsIntro,
  wfsHowItWorks,
  wfsServices,
  wfsWhyChooseUs,
  wfsCta,
} from "@/Constants/WfsData";
import WarehouseSupport from "./WarehouseSupport";

export default async function Page({ params }) {
  const { service } = await params;

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
    <>
      {service === "amazon-fba-fbm" && (
        <>
          <HeroSection
            image="/images/fba-fbm.png"
            title="Scale Your Amazon Business"
            desc="Pakphire LLC handles your FBA Prep, FBM, and 3PL needs. We save you time and reduce costs so you can focus on growth."
            buttonText="Get a Quote"
            buttonLink="/contact"
          />
          <section id="services" className="w-full bg-white relative z-10">
            {" "}
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
            />{" "}
          </section>
        </>
      )}
      {service === "wfs-service" && (
        <>
          <HeroSection {...wfsHero} />
          <ContentSection {...wfsIntro} />
          <HowItWorks
            items={wfsHowItWorks}
            title="Your Path to Seamless Fulfillment"
          />
          <section id="services" className="w-full bg-white relative z-10">
            <ServiceCard
              items={wfsServices}
              align="md:flex-row"
              image="/images/ServiceThree.jpg"
              header={true}
              bgColor="bg-[#e3ebf5]"
            />
          </section>
          <WhyChooseUs
            items={wfsWhyChooseUs}
            title="The Partner You Need for The Growth You Want"
            image="/images/ServiceFour.png"
          />
          <GetStartedToday {...wfsCta} />
        </>
      )}
      {service === "courier-delivery" && <CourierDelivery />}
      {service === "warehouse-support" && <WarehouseSupport />}
    </>
  );
}
