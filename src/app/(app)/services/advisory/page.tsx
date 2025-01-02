import React from "react";
import Image from "next/image";
import FSCard from "@/components/services/FSCard";
import ServicesFooter from "@/components/services/ServicesFooter";
import Slider from "@/components/Slider";

const advisoryCards = [
  {
    title: "Cash Flow Improvement",
    description:
      "This is the most common issue with businesses and there are many ways to tackle this issue. We start by reviewing your invoicing, payroll, purchasing, and payment processes and suggest ideas for speeding up cash collections and slowing payments. We can prepare cash flow forecasts and projections to evaluate your short-term needs. We can also review your liabilities and prepare a bank loan package or create a payment schedule to get you out of debt.",
  },
  {
    title: "Financial Review and Performance Analysis",
    description:
      "On a regular basis, we can hold a review session with you to discuss your financial results and point out opportunities for increased profits or revenue. We can also provide graphical dashboard analysis including forecasting, goal-setting, KPI selection (key performance indicators, kind of like a report card for your business), what-if simulations, benchmarking and more.",
  },
  {
    title: "Strategic Planning and Budgeting",
    description:
      "Many businesses are flying blind without a roadmap to help them know where they are going. We can help you build a strategic plan for your business as well as a budget (we prefer to call them profit plans) so you can get clear on your business's future.",
  },
  {
    title: "Capital Expenditure and Project Analysis",
    description:
      "If you suspect that an employee may be stealing from you, we can perform fraud detection services to help you discover and document the theft. If you're concerned that you may not have the controls in place to prevent fraud, we can help you identify and put into place stronger internal controls to reduce the risk of future fraud.",
  },
  {
    title: "Fraud Detection and Internal Control Review",
    description:
      "If you suspect that an employee may be stealing from you, we can perform fraud detection services to help you discover and document the theft. If you’re concerned that you may not have the controls in place to prevent fraud, we can help you identify and put into place stronger internal controls to reduce the risk of future fraud.",
  },
  {
    title: "Business Valuation",
    description:
      "Are you thinking about selling your business? If so, you first need to find out what it’s worth. We can help you determine the value of your business with our business valuation services.",
  },
  {
    title: "Speciality Accounting Services",
    description:
      "These services, which include items like job costing and inventory analysis, can help you find ways to improve your business profitability. We take a deep look at your operations, reviewing items such as profit margins, pricing, revenue growth, and costs to identify issues to fix and successes to repeat.",
  },
];

export default function Advisory() {
  return (
    <main>
      <Slider
        images={["/consultation/consultation1.jpg"]}
        title="Tailored Business Support"
        description="Custom Financial Solutions for Every Business Need."
      />

      <article className="overflow-hidden my-[80px] md:my-[120px] lg:mb-[160px] xl:mb-[210px] mx-8 sm:mx-20 lg:mx-auto p-[40px_0_60px] md:p-[60px_0_80px] lg:p-[100px_0_120px] xl:p-[150px_0_200px]">
        <header className="container mx-auto w-[90%] lg:w-[65%] my-[60px]">
          <div className="container">
            <h1 className="text-3xl font-bold sm:text-5xl xl:text-6xl">
              Advisory
            </h1>
          </div>
        </header>

        <div className="flex flex-col mt-7 sm:mt-[150px] mx-auto overflow-hidden lg:flex-row lg:justify-between">
          <section className="w-full">
            <div className="lg:max-w-[1100px] mx-auto container">
              <div className="flex flex-col lg:flex-row">
                <div className="w-full order-1 mx-auto lg:order-none">
                  <div className="text-sm text-gray-500 lg:text-base">
                    <h3 className="text-lg font-semibold text-black lg:text-xl">
                      Advisory Services
                    </h3>
                    <p className="mt-[15px] lg:mt-[26px]">
                      You might find yourself having a question or needing help
                      that goes outside the simple filing of a tax return or the
                      completion of a bank reconciliation. Beyond the compliance
                      work of bookkeeping, tax filings, and audits, accounting
                      professionals can help businesses improve their
                      profitability, pay fewer taxes, increase their cash flow,
                      and become more efficient with technology. This work,
                      which we call advisory work, is where you can get a real
                      return on investment in your services with us.
                    </p>
                    <p className="mt-[15px] lg:mt-[26px]">
                      Advisory services are designed to help you reach your
                      business&apos;s financial goals faster. Here are some of
                      the ways we can help you.
                    </p>
                  </div>

                  <div className="m-[35px_0_28px] justify-self-center max-w-[400px] lg:m-[80px_0_77px]">
                    <Image
                      src="/accounting/accounting3.jpg"
                      width={400}
                      height={400}
                      alt="Tax Planning Strategies"
                      className="w-full object-cover"
                    />
                  </div>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <h3 className="text-lg font-semibold text-black lg:text-xl">
                      Tax Planning
                    </h3>
                    <p className="mt-[15px] lg:mt-[26px]">
                      We can help you be proactive about your tax bill by
                      thinking ahead and planning activities and transactions
                      designed to reduce your taxes. This service includes a
                      review of your situation and goals and includes one or
                      more planning sessions to present options available to you
                      to legally pay fewer taxes. We can advise you on:
                    </p>
                    <div className="mt-[15px] lg:mt-[26px]">
                      <ul className="list-disc flex flex-col gap-y-1 md:gap-y-2">
                        <li>Individual tax planning</li>
                        <li>Providing tax projections throughout the year</li>
                        <li>
                          Assisting with the tax requirements of certain
                          situations that may come up in your life, such as
                          marriage, divorce, settlements, windfalls, investment
                          transactions, international work, illness, or death of
                          a family member.
                        </li>
                        <li>
                          Transferring wealth to children and estate planning
                        </li>
                        <li>
                          Choosing the most advantageous type of entity for your
                          business
                        </li>
                        <li>Corporate tax planning</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-black pt-48 sm:pt-80 lg:pt-40 mb-[18px] lg:mb-[43px]">
                    Business Consulting
                  </h3>

                  <div className="space-y-8 lg:space-y-16">
                    <div className="space-y-[15px] lg:space-y-[26px]">
                      <p className="text-lg font-semibold text-black">
                        Business consulting services span many areas. We will
                        discuss with you your business goals and current
                        challenges and guide you toward solutions to achieve
                        your goals and solve your issues. Here are some areas
                        where we have experience providing solutions:
                      </p>
                    </div>

                    <div className="pt-6 lg:pt-12">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {advisoryCards.map((item, index) => (
                          <li key={index}>
                            <FSCard
                              title={item.title}
                              description={item.description}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>

                    <ServicesFooter
                      text="No matter what your tax, accounting, business, or
                      financial issue is, feel free to give us a call so we can
                      get started helping you today with our accounting advisory
                      services for businesses and individuals."
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
