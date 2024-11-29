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
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="mb-14 w-full md:w-7/12">
            <h2
              className="mb-3 md:mb-5 text-lg sm:text-xl lg:text-2xl text-[#fbc710] capitalize"
              data-aos="fade"
            >
              ABOUT US
            </h2>
            <div
              className="max-w-72 mb-3 sm:mb-6 text-2xl sm:text-3xl lg:text-4xl"
              data-aos="fade"
            >
              Guided by
              <span className="text-[#fbc710]"> integrity</span> and{" "}
              <span className="text-[#fbc710]"> trust</span>
            </div>
            <div className="max-w-[490px] mb-3 sm:mb-6" data-aos="fade">
              <ul>
                <li>
                  <h4>Integrity</h4>
                  <p>
                    Uphold high ethical standards and act with honesty,
                    transparency, and professionalism in all your interactions.
                  </p>
                </li>
                <li>
                  <h4>Trust and Confidentiality</h4>
                  <p>
                    Understand the importance of trust and confidentiality in
                    your client relationships.
                  </p>
                </li>
                <li>
                  <h4>Objectivity</h4>
                  <p>
                    Provide unbiased advice that is based on thorough analysis,
                    research, and a comprehensive understanding of your
                    clients&apos; financial situations.
                  </p>
                </li>
                <li>
                  <h4>Expertise</h4>
                  <p>
                    Stay up-to-date with industry trends, regulations, and best
                    practices to offer informed advice to your clients.
                  </p>
                </li>
                <li>
                  <h4>Long-Term Relationships</h4>
                  <p>
                    Build long-term relationships with your clients based on
                    trust, open communication, and mutual respect.
                  </p>
                </li>
                <li>
                  <h4>Accountability</h4>
                  <p>
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
          <div className="w-full md:w-5/12" data-aos="fade">
            <div className="about-section__image">
              <Image
                src="/accounting/accounting1.jpg"
                width="426"
                height="573"
                alt="House"
              />
            </div>
            <div className="about-section__cite-wrapper mt-6">
              <blockquote className="about-section__blockquote text-xl italic text-gray-600">
                “If you will be copying someone, you will never be the best”
              </blockquote>
              <cite className="about-section__cite text-sm text-gray-500 mt-2">
                Paul. <br />
                Designer
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
