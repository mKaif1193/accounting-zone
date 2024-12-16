import React from "react";

type FAQsProps = {
  title: string;
  faqs: { question: string; answer: string }[];
};

export default function FAQs({ title, faqs }: FAQsProps) {
  return (
    <>
      <h2 className="text-2xl pt-48 sm:pt-80 lg:pt-40 mb-[35px] lg:mb-[66px] font-bold text-black lg:text-3xl">
        {title}
      </h2>
      <div className="pt-6 lg:pt-12">
        <ul className="flex flex-col gap-y-16">
          {faqs.map((faq, index) => (
            <li
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 lg:divide-x-2"
            >
              <h4 className="text-lg lg:text-xl font-semibold">
                <span className="text-[#fbc710]">0{index + 1}.</span>{" "}
                {faq.question}
              </h4>
              <p className="text-sm text-gray-500 lg:text-base lg:px-8">
                {faq.answer}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
