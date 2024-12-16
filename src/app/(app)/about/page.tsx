import React from "react";
import Image from "next/image";
import FSCard from "@/components/services/FSCard";

const taxPlanningCards = [
  {
    title: "Insight to light",
    description:
      "by challenging traditional thinking and ways of operating and bringing new perspectives to the toughest problems.",
  },
  {
    title: "Drive inspired impact",
    description:
      "by looking beyond the next deadline to the next decade and by collaborating closely with our clients to enable and energize their organizations.",
  },
  {
    title: "Conquer complexity",
    description:
      "by discovering unique sources of competitive advantage and hidden truths in dynamic, complex systems.",
  },
  {
    title: "Lead with integrity",
    description:
      "by confronting the hard issues, staying true to our values, and stating our views candidly and directly.",
  },
  {
    title: "Grow by growing others",
    description:
      "enabling our clients, colleagues, and the broader community to build success and achieve their full potential.",
  },
];

export default function About() {
  return (
    <main>
      <article className="overflow-hidden w-full my-[80px] md:my-[120px] lg:mb-[160px] xl:mb-[210px] pt-[40px] pb-0 px-[60px] sm:pt-[60px] sm:pb-0 sm:px-[80px] lg:pt-[100px] lg:pb-0 lg:px-[120px] xl:pt-[150px] xl:pb-0 xl:px-[200px]">
        <header className="my-[50px]">
          <div className="container mx-auto">
            <h1 className="m-0 text-3xl font-bold sm:text-5xl xl:text-6xl">
              Building Bridges for
              <br />
              <span className="text-[#fbc710]">Sustainable</span> and
              <span className="text-[#fbc710]"> Inclusive Growth</span>
            </h1>

            <p className="text-lg sm:text-xl mt-20">
              At Accountings Zone, we are a renowned global consulting firm
              committed to collaborating with business and societal leaders in
              overcoming their most critical challenges and seizing their
              greatest opportunities.
            </p>
            <p className="text-lg sm:text-xl mt-8">
              Our achievements are rooted in fostering deep collaboration and
              cultivating a global community of diverse individuals who are
              dedicated to making positive contributions to the world and to one
              another on a daily basis.
            </p>
          </div>
        </header>
        <div className="mb-[40px] sm:mb-[60px] md:mb-[100px] lg:mb-[160px] xl:mb-[210px] xl:mt-[100px] xl:max-w-[1830px] 2xl:max-w-[calc(100vw-120px)]">
          <Image
            src="/about/about1.jpg"
            width="1800"
            height="768"
            alt="About Us Image"
            className="w-full h-auto"
          />
        </div>

        <section className="mb-[80px] container mx-auto md:mb-[120px] lg:mb-[160px] xl:mb-[210px]">
          <h2 className="md:text-lg mb-8 text-base font-semibold sm:text-xl xl:text-2xl">
            Our expertise
          </h2>
          <div className="relative pt-[90px] gap-x-4 2xl:pt-0 before:content-['01.'] before:absolute before:top-0 before:left-[15px] before:font-gilroy before:text-[72px] before:leading-none before:text-[#f2f2f2] before:font-bold xl:pt-0 xl:before:text-[300px] xl:before:top-[50px] xl:before:left-[-23.95vw] container mx-auto flex">
            <header
              className="mb-[50px] lg:mb-[100px] xl:max-w-[220px] xl:mr-[64px] xl:mb-0 xl:flex-shrink-0"
              data-aos="fade"
            >
              <h2 className="relative m-0 md:text-2xl before:absolute before:left-[-90px] before:top-[14px] before:w-[45px] before:border-t-2 before:border-[#fbc710] before:transform-translate-x-full sm:before:w-[70px] xl:before:left-[-100px] text-xl font-bold sm:text-3xl xl:text-4xl">
                Personal connection at global scale
              </h2>
            </header>
            <div>
              <div
                className="mb-[40px] text-gray-500 text-[18px] leading-[1.6] sm:mb-[80px] sm:text-[25px]"
                data-aos="fade"
              >
                <p className="m-0">
                  Across 45 global markets, Accountings Zone operates with a
                  unique level of autonomy, allowing us to swiftly adapt and
                  prioritize what best serves our clients. This distinctive
                  approach sets us apart from traditional consulting firms,
                  making us more personalized and agile. Our unwavering
                  commitment lies in assisting you in overcoming your most
                  significant challenges and transforming your vision into a
                  tangible reality.
                </p>
                <p className="mt-[1.5em]">
                  At Accountings Zone, our dedication extends far beyond the
                  immediate project. We place great emphasis on establishing
                  trust and fostering your long-term success. We meet you at
                  your current stage, seamlessly integrating our talented
                  professionals with your team, and actively sharing our
                  expertise throughout the entire journey.
                </p>
              </div>

              {/* <blockquote
                className="relative text-gray-500 m-0 pl-[64px] lg:pl-0 before:absolute before:top-1/4 before:-left-20 before:w-[42px] before:h-[32px] before:transform-translate-y-1/2 before:bg-no-repeat before:bg-auto before:bg-[url('/quote.svg')]"
                data-aos="fade"
              >
                I knew everything…been there, done that. She was in the moment,
                <br />I was in the past. She was mindful. I was mindless.
              </blockquote> */}
            </div>
          </div>
        </section>

        <section className="mb-[80px] container mx-auto md:mb-[120px] lg:mb-[160px] xl:mb-[210px]">
          <h2 className="md:text-lg mb-8 text-base font-semibold sm:text-xl xl:text-2xl">
            What we believe
          </h2>

          <div className="relative pt-[90px] gap-x-4 2xl:pt-0 before:content-['02.'] before:absolute before:top-0 before:left-[15px] before:font-gilroy before:text-[72px] before:leading-none before:text-[#f2f2f2] before:font-bold xl:pt-0 xl:before:text-[300px] xl:before:top-[50px] xl:before:left-[-23.95vw] container mx-auto flex">
            <header
              className="mb-[50px] lg:mb-[100px] xl:max-w-[220px] xl:mr-[64px] xl:mb-0 xl:flex-shrink-0"
              data-aos="fade"
            >
              <h3 className="relative m-0 md:text-2xl before:absolute before:left-[-90px] before:top-[14px] before:w-[45px] before:border-t-2 before:border-[#fbc710] before:transform-translate-x-full sm:before:w-[70px] xl:before:left-[-100px] text-xl font-bold sm:text-3xl xl:text-4xl">
                Do what is right, always
              </h3>
            </header>
            <div>
              <div
                className="mb-[40px] text-gray-500 text-[18px] leading-[1.6] sm:mb-[80px] sm:text-[25px]"
                data-aos="fade"
              >
                <p className="m-0">
                  We embarked on our journey with a distinct approach. Instead
                  of adhering to a demanding, all-or-nothing career path, we
                  prioritized balance and well-being. We provided an opportunity
                  to find fulfillment in both your professional and personal
                  life, placing importance on family and engaging in impactful
                  projects alongside companies within your community.
                </p>
                <p className="mt-[1.5em]">
                  Our core principle was to invest in people, communities, and
                  the success of our clients. Consistently recognized as a top
                  workplace, Accountings Zone has garnered a reputation for
                  creating an environment where individuals thrive. We proudly
                  serve more than half of the Fortune 100 companies and a third
                  of the Fortune 500, while also collaborating with startups,
                  not-for-profit organizations, and a myriad of innovative
                  entities.
                </p>
              </div>

              {/* <blockquote
                className="relative text-gray-500 m-0 pl-[64px] lg:pl-0 before:absolute before:top-1/4 before:-left-20 before:w-[42px] before:h-[32px] before:transform-translate-y-1/2 before:bg-no-repeat before:bg-auto before:bg-[url('/quote.svg')]"
                data-aos="fade"
              >
                I knew everything…been there, done that. She was in the moment,
                <br />I was in the past. She was mindful. I was mindless.
              </blockquote> */}
            </div>
          </div>
        </section>

        <section className="mb-[80px] container mx-auto md:mb-[120px] lg:mb-[160px] xl:mb-[210px]">
          <div className="relative pt-[90px] 2xl:pt-0 before:content-['03.'] before:absolute before:top-0 before:left-[15px] before:font-gilroy before:text-[72px] before:leading-none before:text-[#f2f2f2] before:font-bold xl:pt-0 xl:before:text-[300px] xl:before:top-[50px] xl:before:left-[-23.95vw] container">
            <header
              className="mb-[50px] lg:mb-[100px] xl:max-w-[220px] xl:mr-[64px] xl:mb-0 xl:flex-shrink-0"
              data-aos="fade"
            >
              <h3 className="relative m-0 md:text-2xl before:absolute before:left-[-90px] before:top-[14px] before:w-[45px] before:border-t-2 before:border-[#fbc710] before:transform-translate-x-full sm:before:w-[70px] xl:before:left-[-100px] text-xl font-bold sm:text-3xl xl:text-4xl">
                Our purpose
              </h3>
            </header>
            <div className="container mx-auto">
              <ul className="mt-[30px] mb-0 xl:pt-[50px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 gap-8">
                {taxPlanningCards.map((item, index) => (
                  <li key={index}>
                    <FSCard title={item.title} description={item.description} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-[80px] container mx-auto md:mb-[120px] lg:mb-[160px] xl:mb-[210px]">
          <div className="relative pt-[90px] 2xl:pt-0 before:content-['04.'] before:absolute before:top-0 before:left-[15px] before:font-gilroy before:text-[72px] before:leading-none before:text-[#f2f2f2] before:font-bold xl:pt-0 xl:before:text-[300px] xl:before:top-[50px] xl:before:left-[-23.95vw] container">
            <header
              className="mb-[50px] lg:mb-[100px] xl:max-w-[220px] xl:mr-[64px] xl:mb-0 xl:flex-shrink-0"
              data-aos="fade"
            >
              <h2 className="relative m-0 md:text-2xl before:absolute before:left-[-90px] before:top-[14px] before:w-[45px] before:border-t-2 before:border-[#fbc710] before:transform-translate-x-full sm:before:w-[70px] xl:before:left-[-100px] text-xl font-bold sm:text-3xl xl:text-4xl">
                How we work
              </h2>
            </header>
            <div className="container mx-auto">
              <p className="text-base sm:text-xl mt-20 mb-8">
                Transforming organizations sustainably. Unlocking performance
                excellence. Nurturing thriving workforces for generations.
                Partner with us for success.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-y-8">
                {[
                  {
                    title: "Innovation & Technology",
                    description:
                      "In a rapidly changing world, continuous progress is imperative to meet evolving demands.",
                  },
                  {
                    title: "Client Capabilities Network",
                    description:
                      "With our expertise and cutting-edge competencies, we drive impactful and enduring change.",
                  },
                  {
                    title: "Save Money",
                    description:
                      "Choose quality from the start. Save time and money by getting it right with us.",
                  },
                  {
                    title: "Ongoing Support",
                    description:
                      "We don't just plan, we execute. Our talented team supports your implementation, as part of your founding team or on project basis.",
                  },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="my-12 last:mb-0 sm:mb-0"
                    data-aos="fade"
                    data-aos-delay={index * 200}
                  >
                    <h3 className="mt-[30px] text-2xl mb-5 font-semibold">
                      {service.title}
                    </h3>
                    <div className="sm:max-w-[272px] text-base sm:text-lg text-gray-500">
                      {service.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
