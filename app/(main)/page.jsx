import Image from "next/image";
import FAQ from "@/components/FAQ";
import GetStartedToday from "@/components/GetStartedToday";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="relative">
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/heroBackgroundImage.webp"
          alt="Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <HeroSection
        title="Your Trusted Partner for Seamless Logistics Solutions"
        desc="Pakphire provides expert Amazon FBA Prep, FBM, WFS, and 3PL services to help you scale your business."
      />
      <Services />
      <HowItWorks />
      <WhyChooseUs />
      <GetStartedToday />
      <Testimonial />
      <FAQ />
    </div>
  );
}
