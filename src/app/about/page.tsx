import Testimonials from "@/components/Testimonials";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <main className="min-h-screen space-y-16 sm:space-y-24 md:space-y-36 lg:space-y-48">
      <div className="overflow-hidden mx-auto container max-w-[1300px] py-10 md:py-15 lg:py-28 xl:py-40">
        <div className="container mx-auto w-[1300px] flex gap-20">
          <div className="space-y-8">
            <h1 className="text-lg sm:text-xl lg:text-2xl text-[#fbc710] md:text-5xl uppercase">
              ABOUT US
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
              Building Bridges for
              <span className="text-yellow-500"> Sustainable</span> and
              <span className="text-yellow-500"> Inclusive Growth</span>
            </h2>
            <div className="flex flex-col gap-4 text-lg text-gray-700">
              <p>
                At Accountings Zone, we are a renowned global consulting firm
                committed to collaborating with business and societal leaders in
                overcoming their most critical challenges and seizing their
                greatest opportunities.
              </p>
              <p>
                Our achievements are rooted in fostering deep collaboration and
                cultivating a global community of diverse individuals who are
                dedicated to making positive contributions to the world and to
                one another on a daily basis.
              </p>
            </div>
          </div>

          <div className="container mb-10 mx-auto lg:max-w-[700px]">
            <Image
              src="/about/about1.jpg"
              alt="About Hero"
              width={1200}
              height={500}
              className="block w-full h-auto"
            />
          </div>
        </div>

        <section className="container mx-auto w-[1300px] flex items-center gap-20">
          <div className="relative w-[80%] py-10 md:py-15 lg:py-28">
            <div className="mb-12" data-aos="fade">
              <h2 className="text-3xl mb-4 md:text-4xl mx-auto lg:text-5xl text-[#fbc710] font-semibold">
                Our Expertise
              </h2>
              <p className="text-base mb-4 w-[700px] md:text-xl lg:text-3xl text-gray-900">
                Personal connection at global scale
              </p>
            </div>

            <div className="space-y-6" data-aos="fade">
              <p className="text-lg text-gray-700 leading-relaxed">
                Across 45 global markets, Accountings Zone operates with a
                unique level of autonomy, allowing us to swiftly adapt and
                prioritize what best serves our clients. This distinctive
                approach sets us apart from traditional consulting firms, making
                us more personalized and agile. Our unwavering commitment lies
                in assisting you in overcoming your most significant challenges
                and transforming your vision into a tangible reality.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Accountings Zone, our dedication extends far beyond the
                immediate project. We place great emphasis on establishing trust
                and fostering your long-term success. We meet you at your
                current stage, seamlessly integrating our talented professionals
                with your team, and actively sharing our expertise throughout
                the entire journey.
              </p>
            </div>
          </div>

          <div className="container mb-10 mx-auto lg:max-w-[488px]">
            <Image
              src="/about/about2.jpg"
              alt="About Hero"
              width={700}
              height={700}
              className="block w-full h-auto"
            />
          </div>
        </section>

        <section className="container mx-auto">
          <div className="relative py-10 md:py-15 mx-auto lg:py-28">
            <div className="mb-12" data-aos="fade">
              <h2 className="text-3xl md:text-4xl mx-auto lg:text-5xl text-[#fbc710] font-semibold">
                Our Purpose
              </h2>
            </div>

            <div className="space-y-6 mb-6 sm:mb-14">
              <ul className="grid grid-cols-1 *:p-4 gap-4 sm:grid-cols-5 sm:gap-8">
                <li data-aos="fade">
                  <h4 className="font-semibold text-lg mb-2">
                    Insight to light
                  </h4>
                  <p className="text-sm text-gray-700">
                    by challenging traditional thinking and ways of operating
                    and bringing new perspectives to the toughest problems.
                  </p>
                </li>
                <li data-aos="fade">
                  <h4 className="font-semibold text-lg mb-2">
                    Drive inspired impact
                  </h4>
                  <p className="text-sm text-gray-700">
                    by looking beyond the next deadline to the next decade and
                    by collaborating closely with our clients to enable and
                    energize their organizations.
                  </p>
                </li>
                <li data-aos="fade">
                  <h4 className="font-semibold text-lg mb-2">
                    Conquer complexity
                  </h4>
                  <p className="text-sm text-gray-700">
                    by discovering unique sources of competitive advantage and
                    hidden truths in dynamic, complex systems.
                  </p>
                </li>
                <li data-aos="fade">
                  <h4 className="font-semibold text-lg mb-2">
                    Lead with integrity
                  </h4>
                  <p className="text-sm text-gray-700">
                    by confronting the hard issues, staying true to our values,
                    and stating our views candidly and directly.
                  </p>
                </li>
                <li data-aos="fade">
                  <h4 className="font-semibold text-lg mb-2">
                    Grow by growing others
                  </h4>
                  <p className="text-sm text-gray-700">
                    enabling our clients, colleagues, and the broader community
                    to build success and achieve their full potential.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="container mx-auto items-center">
          <div className="relative py-10 md:py-15 mx-auto">
            <div className="mb-12" data-aos="fade">
              <h2 className="text-3xl mb-4 md:text-4xl mx-auto lg:text-5xl text-[#fbc710] font-semibold">
                How We Work
              </h2>
              <p className="text-sm mb-4 w-[700px] md:text-base  lg:text-lg text-gray-700">
                Transforming organizations sustainably. Unlocking performance
                excellence. Nurturing thriving workforces for generations.
                Partner with us for success.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 items-center mx-auto">
            <div className="space-y-6 mb-6 sm:mb-14">
              <ul className="grid grid-cols-1 gap-4 sm:grsid-cols-2 sm:gap-8">
                <li data-aos="fade">
                  <h4 className="font-semibold text-3xl">
                    Innovation & Technology
                  </h4>
                  <p className="text-lg p-2 text-gray-700">
                    In a rapidly changing world, continuous progress is
                    imperative to meet evolving demands.
                  </p>
                </li>

                <li data-aos="fade">
                  <h4 className="font-semibold text-3xl">Save Money</h4>
                  <p className="text-lg p-2 text-gray-700">
                    Choose quality from the start. Save time and money by
                    getting it right with us.
                  </p>
                </li>
              </ul>
            </div>

            <div className="relative mx-auto max-w-sm">
              <Image
                src="/about/how-we-work.svg"
                width="200"
                height="200"
                alt="How we work"
                className="max-w-full h-auto"
                data-aos="fade"
              />
            </div>

            <div className="space-y-6 mb-6 p-4 sm:mb-14">
              <ul className="grid grid-cols-1 gap-4 sm:gap-8">
                <li data-aos="fade">
                  <h4 className="font-semibold text-3xl">
                    Client Capabilities Network
                  </h4>
                  <p className="text-lg p-2 text-gray-700">
                    With our expertise and cutting-edge competencies, we drive
                    impactful and enduring change.
                  </p>
                </li>
                <li data-aos="fade">
                  <h4 className="font-semibold text-3xl">Ongoing Support</h4>
                  <p className="text-lg p-2 text-gray-700">
                    We don&apos;t just plan, we execute. Our talented team
                    supports your implementation, as part of your founding team
                    or on project basis.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <Testimonials />
      </div>
    </main>
  );
}