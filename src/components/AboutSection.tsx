"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function AboutSection() {
  const router = useRouter();

  return (
    <section className="my-20 sm:my-28 md:my-40 lg:my-52">
      <div className="container mx-auto px-8">
        <div className="flex flex-wrap flex-col md:flex-row">
          <div className="mb-14 w-full md:w-7/12">
            <h2
              className="mb-3 md:mb-6 text-lg sm:text-xl lg:text-2xl text-[#fbc710] capitalize"
              data-aos="fade"
            >
              ABOUT US
            </h2>
            <div
              className="mb-4 sm:mb-8 text-2xl sm:text-3xl lg:text-4xl"
              data-aos="fade"
            >
              Guided by
              <span className="text-[#fbc710]"> integrity</span> and
              <span className="text-[#fbc710]"> trust</span>
            </div>

            <div className="mb-4 max-w-[650px] sm:mb-8" data-aos="fade">
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
                <li>
                  <h4 className="font-semibold">Integrity</h4>
                  <p className="text-sm">
                    Uphold high ethical standards and act with honesty,
                    transparency, and professionalism in all your interactions.
                  </p>
                </li>
                <li>
                  <h4 className="font-semibold">Trust and Confidentiality</h4>
                  <p className="text-sm">
                    Understand the importance of trust and confidentiality in
                    your client relationships.
                  </p>
                </li>
                <li>
                  <h4 className="font-semibold">Objectivity</h4>
                  <p className="text-sm">
                    Provide unbiased advice that is based on thorough analysis,
                    research, and a comprehensive understanding of your
                    clients&apos; financial situations.
                  </p>
                </li>
                <li>
                  <h4 className="font-semibold">Expertise</h4>
                  <p className="text-sm">
                    Stay up-to-date with industry trends, regulations, and best
                    practices to offer informed advice to your clients.
                  </p>
                </li>
                <li>
                  <h4 className="font-semibold">Long-Term Relationships</h4>
                  <p className="text-sm">
                    Build long-term relationships with your clients based on
                    trust, open communication, and mutual respect.
                  </p>
                </li>
                <li>
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
            >
              Learn more
            </Button>
          </div>
          <div className="w-full mt-8 sm:mt-28 mb-8 md:w-5/12" data-aos="fade">
            <Image
              src="/accounting/accounting1.jpg"
              width="450"
              height="600"
              alt="House"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
