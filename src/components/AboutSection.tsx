"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

import AOS from "aos";
import "aos/dist/aos.css";
import "@/app/css/aos.css";

AOS.init({
  duration: 1000,
});

export default function AboutSection() {
  const router = useRouter();

  return (
    <section className="flex flex-wrap px-8 container mx-auto flex-col items-center md:flex-row">
      <div className="mb-14 w-full ml-auto md:w-1/2">
        <h2
          className="mb-4 md:mb-8 text-lg sm:text-xl lg:text-2xl text-[#fbc710] uppercase"
          data-aos="fade"
        >
          ABOUT US
        </h2>
        <div
          className="mb-6 sm:mb-14 text-2xl font-semibold sm:text-3xl lg:text-4xl"
          data-aos="fade"
        >
          Guided by
          <span className="text-[#fbc710]"> integrity</span> and
          <span className="text-[#fbc710]"> trust</span>
        </div>

        <div className="mb-6 max-w-[650px] sm:mb-14" data-aos="fade">
          <ul className="grid grid-cols-1 list-disc gap-4 sm:grid-cols-2 sm:gap-8">
            <li data-aos="fade">
              <h4 className="font-semibold">Integrity</h4>
              <p className="text-sm">
                Uphold high ethical standards and act with honesty,
                transparency, and professionalism in all your interactions.
              </p>
            </li>
            <li data-aos="fade">
              <h4 className="font-semibold">Trust and Confidentiality</h4>
              <p className="text-sm">
                Understand the importance of trust and confidentiality in your
                client relationships.
              </p>
            </li>
            <li data-aos="fade">
              <h4 className="font-semibold">Objectivity</h4>
              <p className="text-sm">
                Provide unbiased advice that is based on thorough analysis,
                research, and a comprehensive understanding of your
                clients&apos; financial situations.
              </p>
            </li>
            <li data-aos="fade">
              <h4 className="font-semibold">Expertise</h4>
              <p className="text-sm">
                Stay up-to-date with industry trends, regulations, and best
                practices to offer informed advice to your clients.
              </p>
            </li>
            <li data-aos="fade">
              <h4 className="font-semibold">Long-Term Relationships</h4>
              <p className="text-sm">
                Build long-term relationships with your clients based on trust,
                open communication, and mutual respect.
              </p>
            </li>
            <li data-aos="fade">
              <h4 className="font-semibold">Accountability</h4>
              <p className="text-sm">
                Monitor progress, review strategies, and make adjustments as
                needed to help clients stay on track towards their financial
                goals.
              </p>
            </li>
          </ul>
        </div>

        <Button
          onClick={() => router.push("about")}
          data-aos="fade"
          variant="acc"
          size="lg"
          className="duration-300 text-lg rounded-3xl font-normal"
        >
          Learn more
        </Button>
      </div>

      <div className="w-full mx-auto md:w-1/2 lg:w-5/12">
        <div className="relative mx-auto max-w-lg">
          <Image
            src="/why-us/why-us2.jpg"
            width="400"
            height="400"
            alt="House"
            className="max-w-full h-auto"
            data-aos="fade"
          />
        </div>
      </div>
    </section>
  );
}
