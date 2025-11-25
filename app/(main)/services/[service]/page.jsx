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
    <>
      {service === "amazon-fba-fbm" && (
        <>
          <HeroSection
            image="/images/heroAmazonFBA.webp"
            title="Streamline Your Amazon Business with Expert Amazon FBA Prep And Amazon FBM Services."
            desc="Welcome to Pakphire, your trusted partner for Amazon FBA Prep, FBM, Delivery, Carton Handling, 3PL Services, and Warehouse Support. We specialize in helping Amazon sellers like you save time, reduce costs, and scale your business with seamless logistics solutions."
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
      {service === "warehouse-support" && <div>hello Warehouse</div>}
    </>
  );
}
