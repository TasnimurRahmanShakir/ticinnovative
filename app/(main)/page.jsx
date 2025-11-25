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
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z10"
        style={{ backgroundImage: "url('/images/heroBackgroundImage.webp')" }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <HeroSection
        image="/images/heroHome.jpg"
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
