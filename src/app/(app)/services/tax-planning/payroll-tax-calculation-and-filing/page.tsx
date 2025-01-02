import React from "react";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesFooter from "@/components/services/ServicesFooter";
import FAQs from "@/components/services/FAQs";
import Slider from "@/components/Slider";

const KeyBenefitsCards = [
  {
    title: "",
    description: "",
  },
  {
    title: "",
    description: "",
  },
  {
    title: "",
    description: "",
  },
  {
    title: "",
    description: "",
  },
  {
    title: "",
    description: "",
  },
  {
    title: "",
    description: "",
  },
];

const CoreComponentsCards = [
  {
    title: "",
    description: "",
  },
  {
    title: "",
    description: "",
  },
  {
    title: "",
    description: "",
  },
  {
    title: "",
    description: "",
  },
  {
    title: "",
    description: "",
  },
  {
    title: "",
    description: "",
  },
];

const WhyYouNeedCards = [
  {
    title: "",
    description: "",
  },
  {
    title: "",
    description: "",
  },
  {
    title: "",
    description: "",
  },
  {
    title: "",
    description: "",
  },
];

const OurApproachCards = [
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
];

export default function PayrollTaxCalculationAndFiling() {
  return (
    <main>
      <Slider
        images={["/consultation/consultation1.jpg"]}
        title="Financial Clarity"
        description="Simplifying Your Finances, Amplifying Your Growth."
      />

      <article className="overflow-hidden mb-[80px] md:mb-[120px] lg:mb-[160px] xl:mb-[210px] mx-8 sm:mx-20 lg:mx-auto p-[40px_0_60px] md:p-[60px_0_80px] lg:p-[100px_0_120px] xl:p-[150px_0_200px]">
        <div className="flex flex-col mst-7 dsm:mts-[150px] mx-auto overflow-hidden lg:flex-row lg:justify-between">
          <section className="w-full">
            <div className="lg:max-w-[1100px] mx-auto container">
              <div className="flex flex-col lg:flex-row">
                <div className="w-full order-1 mx-auto lg:order-none">
                  <h2 className="text-2xl lg:text-3xl lg:mst-12 mb-[35px] lg:mb-[66px] font-bold text-black"></h2>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <p className="mt-[15px] lg:mt-[26px]"></p>
                  </div>

                  <ServicesGrid
                    title="Key Benefits"
                    gridCards={KeyBenefitsCards}
                  />

                  <ServicesGrid
                    title="Our Core Components"
                    gridCards={CoreComponentsCards}
                  />

                  <ServicesGrid
                    title="Why You Need "
                    gridCards={WhyYouNeedCards}
                  />

                  <FAQs title="Our Approach" faqs={OurApproachCards} />

                  <ServicesFooter text="We are here to address any questions you may have as you implement your plan. Additionally, for clients seeking an ongoing partnership." />
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
