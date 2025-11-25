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
        image="/images/heroBackgroundImage.webp"
        title="Streamline Your Amazon Business with Expert FBA Prep, FBM, Delivery,
          and 3PL Services"
        desc="Welcome to TIC Innovative Inc, your trusted partner for Amazon FBA
          Prep, FBM, Delivery, Carton Handling, 3PL Services, and Warehouse
          Support. We specialize in helping Amazon sellers like you save time,
          reduce costs, and scale your business with seamless logistics
          solutions."
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
