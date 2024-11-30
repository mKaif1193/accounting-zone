import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import Slider from "@/components/Slider";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <main className="min-h-screen space-y-16 sm:space-y-24 md:space-y-36 lg:space-y-48">
      <Slider />
      <AboutSection />
      <ServicesSection />
      <WhyUs />
      <Testimonials />
    </main>
  );
}
