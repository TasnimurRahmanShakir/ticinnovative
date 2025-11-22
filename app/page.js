

import GetStartedToday from "@/components/GetStartedToday";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import NavItems from "@/components/Navbar/NavItems";
import Services from "@/components/Services";
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
      <NavItems />
      <HeroSection />
      <Services />
      <HowItWorks />
      <WhyChooseUs />
      <GetStartedToday />
    </div>
  );
}
