import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import Slider from "@/components/Slider";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";

const images = [
  "/consultation/consultation1.jpg",
  "/consultation/consultation2.jpg",
  "/consultation/consultation3.jpg",
  "/consultation/consultation4.jpg",
  "/consultation/consultation5.jpg",
];

export default function Home() {
  return (
    <main className="min-h-screen space-y-16 sm:space-y-24 md:space-y-36 lg:space-y-48">
      <Slider
        title="Unlock your financial potential with expert guidance"
        description="Comprehensive financial consulting services tailored to your needs"
        images={images}
      />
      <AboutSection />
      <ServicesSection />
      <WhyUs />
      <Testimonials />
    </main>
  );
}
