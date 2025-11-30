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
        title="Empowering Your E-commerce Growth"
        desc="Globally trusted logistics partner for FBA Prep, FBM, WFS, and 3PL. We handle the complexities of fulfillment while you focus on building your brand."
        buttonText="Get Your Custom Quote"
        buttonLink="/contact"
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
