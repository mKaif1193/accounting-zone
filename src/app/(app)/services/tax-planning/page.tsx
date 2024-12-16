import React from "react";
import Image from "next/image";
import FAQs from "@/components/services/FAQs";
import FSCard from "@/components/services/FSCard";
import ServicesFooter from "@/components/services/ServicesFooter";
import ServicesGrid from "@/components/services/ServicesGrid";

const taxPlanningCards = [
  {
    title: "Our Suite of Business Tax Services",
    description:
      "We offer a wide variety of business year-end tax planning services to help organizations stay compliant and take advantage of the latest money-saving opportunities. We’ve also created a Year-End Tax Planning Resource Center that acts as an on-demand one-stop-shop for corporate tax preparation tips.",
  },
  {
    title: "International Tax Compliance Services",
    description:
      "Businesses that operate internationally faces the unique challenge of having the stay compliant with multiple countries’ tax rules and regulations. Our international tax advisors work with organizations to maintain tax transparency, remediate cross-border tax disputes, minimize the risk of double-taxation and achieve maximum savings through international tax incentives.",
  },
  {
    title: "Business Tax Controversy Services",
    description:
      "For organizations facing corporate tax controversy issues, our tax consultants are well-equipped to handle various issue resolutions, dispute avoidance, and more. We’ll put together a plan that describes the particular controversy, outlines a custom resolution, and establishes measures to prevent the issues from reoccurring.",
  },
  {
    title: "Corporate Tax Accounting Services",
    description:
      "The constantly evolving nature of national and international tax laws – and the increased scrutiny surrounding them – can make corporate income tax accounting complicated. Our tax accounting services cover stock-based compensation, tax validation projects, valuation assessments, statement and balance sheet support, tax position consulting, and more. They also include ASC 740 consulting, preparation, remediation, internal controls assistance, transaction services, provision assistance, and training.",
  },
  {
    title: "U.S. Tax Reform Services",
    description:
      "Depending on the organization, tax reform laws can cause unforeseen complications, or provide promising opportunities. Withum’s business tax advisors help businesses navigate the changing waters of U.S. tax reform. Our business tax services include the creation of corporate tax planning strategies built upon the insights gained from analysis and modeling tools. We work with organizations to predict and analyze tax reform impacts and outline the options that make sense for them. For more information, check out our Tax Reform Resource Center.",
  },
  {
    title: "Pass-Through Tax Services",
    description:
      "With partnerships offering the most flexibility out of any tax structure and S corporations having the most strict rules, knowledge and experience are key to businesses that operate in these structures. Our team of seasoned experts can help your business navigate the pass-through tax waters and put you in a position to succeed.",
  },
];

const gridCards = [
  {
    title: "Tax-Free Retirement Plans",
    description:
      "As one never knows what the tax rate will be at their time of retirement, it is critical to try to limit taxation on retirement funds. Both Roth IRAs and some insurance plans can limit your taxable retirement income.",
  },
  {
    title: "Financial Modeling",
    description:
      "With financial modeling we can test and verify ideas, strategies, or products to see if they are in our your best interest prior to making those financial decisions. With the models we are able to see all our financial products and strategies at once on one page. Understanding the impact of our decisions, we can create measurable strategies to reduce taxes while also building, protecting, and growing our wealth.",
  },
  {
    title: "Estate Planning",
    description:
      "Estate planning gives you the opportunity to pass your wealth on as you see fit. Your estate includes everything from your car and home to life insurance and bank accounts, and estates and inheritances unfortunately also mean taxes. Advisors at Chandler & Knowles help you to pass on your estate with as little taxation as possible by avoiding tax traps and properly managing life insurance and other assets.",
  },
  {
    title: "Irrevocable Trusts",
    description:
      "Through irrevocable trusts, assets are transferred into the trust for later ownership by the beneficiary, and the grantor's ownership is completely removed from these assets. Irrevocable trusts can include life insurance policies, cash, investments, businesses and more.",
  },
  {
    title: "Captive Insurance Companies",
    description:
      "A captive insurance company – which is an insurance company affiliated with an operating business entity -- is typically formed to provide insurance to the business as a supplement to its commercial coverage.",
  },
];

const faqs = [
  {
    question: "Business Owners and Executives",
    answer:
      "A business owner's full attention should be on running their business. Being elbow-deep in company details can sometimes mean that personal tax planning and finance fall behind as a priority. With some of the most complicated and intricate tax and finance situations, owners and other business executives can turn to Withum for world-class wealth management tax services. Our reputation as a top national tax, consulting, and accounting firm extends beyond our tax services for businesses, so you can expect that our individual tax services will meet the same quality standards. Whether you want to develop a trust and estate plan, build your retirement savings, or create educational funds, our personal tax consulting team can help.",
  },
  {
    question: "Technology Founders",
    answer:
      "Founders of technology focused businesses often face unique challenges, as growth, mergers and acquisitions can happen quickly. For these high-income earners, our individual tax planning services include guidance on qualified small business stock (QSBS), mergers and acquisitions, secondary sales, equity-based compensation, and more.",
  },
  {
    question: "Professional Athletes",
    answer:
      "Tax planning for professional athletes requires both industry knowledge and a mastery of accounting and tax services for unpredictable incomes. Our personal financial advisors are experts on tax planning for high net worth individuals and have worked across a variety of niches within the sports and entertainment industry.",
  },
  {
    question: "Actors, Producers, and Entertainers",
    answer:
      "Working across various niches in the theatre and entertainment industry helps us maintain an elite client base of theatrical entertainers and other media and broadcasting clients. Our individual tax services can be tailored for those looking for guidance regarding theatrical productions (domestic and abroad), and film and TV productions.",
  },
  {
    question: "Individuals Dealing with Multiple State and Local Tax Codes",
    answer:
      "Every state and municipality has its own tax codes, making it impossible for any one individual to understand all of them. When moving from one state to establish domicile in another, great care must be taken to abide by both the former and new home state rules. As a national tax consulting firm, Withum's individual tax planners specialize in varying State and Local Tax Laws, so you can rest assured that no rule will be missed.",
  },
];

export default function TaxPlanning() {
  return (
    <main>
      <article className="overflow-hidden my-[80px] md:my-[120px] lg:mb-[160px] xl:mb-[210px] mx-8 sm:mx-20 lg:mx-auto p-[40px_0_60px] md:p-[60px_0_80px] lg:p-[100px_0_120px] xl:p-[150px_0_200px]">
        <header className="container mx-auto w-[90%] lg:w-[65%] my-[60px]">
          <div className="container">
            <h1 className="text-3xl font-bold sm:text-5xl xl:text-6xl">
              Tax Planning
            </h1>
          </div>
        </header>

        <div className="flex flex-col mt-7 sm:mt-[150px] mx-auto overflow-hidden lg:flex-row lg:justify-between">
          <section className="w-full">
            <div className="lg:max-w-[1100px] mx-auto container">
              <div className="flex flex-col lg:flex-row">
                <div className="w-full order-1 mx-auto lg:order-none">
                  <h2 className="text-2xl lg:text-3xl lg:mt-12 mb-[35px] lg:mb-[66px] font-bold text-black">
                    Tax Planning Strategies
                  </h2>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <h3 className="text-base lg:text-lg">
                      Integrating Tax Planning Strategies Into Your Wealth Plan
                    </h3>
                    <p className="mt-[15px] lg:mt-[26px]">
                      We believe tax strategies should be an integral part of
                      your overall wealth management strategy. Effective
                      strategies can help reduce your tax burden, optimize your
                      income and allow you to efficiently transfer wealth to
                      loved ones and charities. We view decisions through a
                      tax-efficient lens.
                    </p>
                    <p className="mt-[15px] lg:mt-[26px]">
                      Our team of tax professionals will work with your outside
                      legal counsel and alongside your wealth advisor to help
                      you with your tax planning and preparation needs and to
                      keep you updated on the latest legislative tax changes.
                      Our clients include high-net-worth individuals, families,
                      business owners, executives, medical professionals,
                      professional athletes and privately held companies.
                    </p>
                    <p className="mt-[15px] lg:mt-[26px]">
                      From preparing your annual tax returns, to overseeing your
                      investments, to creating tax-advantaged estate plan and
                      trusts—no matter how complex your taxes might be,
                      we&apos;re here to help you with a tax strategy that is
                      flexible enough to change as your life and needs change.
                    </p>
                  </div>

                  <div className="m-[35px_0_28px] lg:m-[80px_0_77px]">
                    <Image
                      src="/accounting/accounting3.jpg"
                      width={780}
                      height={428}
                      alt="Tax Planning Strategies"
                      className="w-full object-cover"
                    />
                  </div>

                  <ServicesGrid
                    title="Some of Our Advanced Tax Strategies:"
                    gridCards={gridCards}
                  />

                  <h3 className="text-2xl font-bold text-black pt-48 sm:pt-80 lg:pt-40 mb-[18px] lg:mb-[43px]">
                    Tax planning can involve:
                  </h3>

                  <div className="space-y-8 lg:space-y-16">
                    <div className="space-y-[15px] lg:space-y-[26px]">
                      <h4 className="text-lg font-semibold text-black">
                        We use extensive financial modeling to test and forecast
                        the impact of any financial decision that affects you.
                        By consultation and utilization of these models, we help
                        you make the most advantageous business tax planning or
                        family tax planning decisions.
                      </h4>
                    </div>

                    <div className="pt-6 lg:pt-12">
                      <ul className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {taxPlanningCards.map((item, index) => (
                          <li key={index}>
                            <FSCard
                              title={item.title}
                              description={item.description}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <FAQs
                    title="Who Are Our Personal Tax Services For?"
                    faqs={faqs}
                  />

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
