import React from "react";
import Marquee from "./ui/marquee";
import ReviewCard from "./ui/review-card";

const reviews = [
  {
    name: "Jasmin Samano",
    body: "I look forward in working with Accounting Zone for any future business or tax services.",
  },
  {
    name: "Terri Maya",
    body: "Absolutely love all the staff with Accounting Zone. They are so patient with me, and are always very detailed and specific with everything.",
  },
  {
    name: "Daniel Gonzalez",
    body: "Rosie was amazing, I would recommend her services to EVERYBODY!",
  },
  {
    name: "Eddie bedolla",
    body: "The customer service has always been exceptional from Joel and the team at Accounting Zone.",
  },
];

export default function Testimonials() {
  return (
    <section className="flex flex-wrap my-16 sm:my-24 md:my-36 lg:my-48 sm:flex-col mx-auto container">
      <h2
        className="w-full md:w-1/2 flex lg:w-[90%] mx-auto mb-4 md:mb-8 text-lg sm:text-xl lg:text-2xl text-[#fbc710] uppercase"
        data-aos="fade"
      >
        TESTIMONIALS
      </h2>
      <div className="w-full md:w-1/2 flex flex-col gap-3 lg:w-[90%] mx-auto">
        <h3 className="text-2xl sm:text-3xl font-semibold lg:text-4xl">
          Our
          <span className="text-[#fbc710]"> Clients</span> Say It Best
        </h3>
        <p className="text-base sm:text-lg lg:text-xl text-gray-700">
          Join 10,000+ customers who are already saving money in taxes.
        </p>
      </div>

      <div className="relative flex h-[450px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
        <Marquee pauseOnHover className="[--duration:20s]">
          {reviews.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[10%] bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[10%] bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </section>
  );
}
