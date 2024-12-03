import React from "react";
import Image from "next/image";
import Slider from "@/components/Slider";

const images = ["/consultation/consultation3.jpg"];

export default function TaxPlanning() {
  return (
    <main className="min-h-screen space-y-16 sm:space-y-24 md:space-y-36 lg:space-y-48">
      <Slider
        title="Tax Planning"
        description="Integrating Tax Planning Strategies Into Your Wealth Plan"
        images={images}
      />

      <div className="overflow-hidden mx-auto container max-w-[1300px] py-10 md:py-15">
        <section
          id="what-is-tax-planning"
          className="container px-8 mx-auto lg:w-[1300px] space-y-4 md:space-y-8"
        >
          <h2
            className="text-2xl sm:text-4xl lg:text-5xl font-semibold"
            data-aos="fade"
          >
            What is
            <span className="text-yellow-500"> Tax Planning?</span>
          </h2>

          <p
            className="flex flex-col gap-4 text-base md:text-lg text-gray-700"
            data-aos="fade"
          >
            Tax planning is the process of analyzing a person&apos;s financial
            situation and applying strategies to pay the lowest amount of taxes
            based on their facts and circumstances. Tax planning considers many
            factors, including tax credits, tax deductions, investments and
            expenditures. At its core, tax planning is about understanding how
            business and life decisions affect the largest expense most people
            have — taxes.
          </p>
          <p
            className="flex flex-col gap-4 text-base md:text-lg text-gray-700"
            data-aos="fade"
          >
            Most of your clients believe you are already tax planning for them
            throughout the year. But for the most part, tax professionals are
            focused on compliance and are not proactively working to save
            clients money on taxes. That all changes with Accountings Zone.
          </p>
        </section>

        <section
          id="tax-planning-strategies"
          className="container mx-auto px-8 sm:w-[1300px] flex flex-col md:items-center lg:flex-row gap-20"
        >
          <div className="relative w-full py-10 md:py-15 lg:py-28">
            <div className="mb-6 md:mb-12" data-aos="fade">
              <h2
                className="text-2xl sm:text-3xl mb-4 md:text-4xl mx-auto lg:text-5xl font-semibold"
                data-aos="fade"
              >
                <span className="text-yellow-500">Tax Planning </span>
                Strategies
              </h2>
            </div>

            <div className="space-y-6" data-aos="fade">
              <p className="text-base sm:text-lg text-gray-700" data-aos="fade">
                We believe tax strategies should be an integral part of your
                overall wealth management strategy. Effective strategies can
                help reduce your tax burden, optimize your income and allow you
                to efficiently transfer wealth to loved ones and charities. We
                view decisions through a tax-efficient lens.
              </p>
              <p className="text-base sm:text-lg text-gray-700" data-aos="fade">
                Our team of tax professionals will work with your outside legal
                counsel and alongside your wealth advisor to help you with your
                tax planning and preparation needs and to keep you updated on
                the latest legislative tax changes. Our clients include
                high-net-worth individuals, families, business owners,
                executives, medical professionals, professional athletes and
                privately held companies.
              </p>
              <p className="text-base sm:text-lg text-gray-700" data-aos="fade">
                From preparing your annual tax returns, to overseeing your
                investments, to creating tax-advantaged estate plan and
                trusts—no matter how complex your taxes might be, we’re here to
                help you with a tax strategy that is flexible enough to change
                as your life and needs change.
              </p>
            </div>
          </div>

          <div
            className="container hidden sm:block mb-10 mx-auto lg:max-w-[480px]"
            data-aos="fade"
          >
            <Image
              src="/accounting/accounting2.jpg"
              alt="About Hero"
              width={1200}
              height={500}
              className="block w-full h-auto"
            />
          </div>
        </section>

        <section id="advanced-tax-planning" className="container px-8 mx-auto">
          <div className="relative py-10 md:py-15 mx-auto lg:py-28">
            <div className="mb-8 md:mb-12" data-aos="fade">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl mx-auto lg:text-5xl font-semibold"
                data-aos="fade"
              >
                Some of Our Advanced
                <span className="text-yellow-500"> Tax Strategies:</span>
              </h2>
            </div>

            <div className="space-y-6 mb-6 sm:mb-14">
              <ul className="grid grid-cols-1 *:p-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
                <li data-aos="fade">
                  <h4 className="font-semibold text-xl mb-2">
                    Tax-Free Retirement Plans
                  </h4>
                  <p className="text-gray-700">
                    As one never knows what the tax rate will be at their time
                    of retirement, it is critical to try to limit taxation on
                    retirement funds. Both Roth IRAs and some insurance plans
                    can limit your taxable retirement income.
                  </p>
                </li>
                <li data-aos="fade">
                  <h4 className="font-semibold text-xl mb-2">
                    Financial Modeling
                  </h4>
                  <p className="text-gray-700">
                    With financial modeling we can test and verify ideas,
                    strategies, or products to see if they are in our your best
                    interest prior to making those financial decisions. With the
                    models we are able to see all our financial products and
                    strategies at once on one page. Understanding the impact of
                    our decisions, we can create measurable strategies to reduce
                    taxes while also building, protecting, and growing our
                    wealth.
                  </p>
                </li>
                <li data-aos="fade">
                  <h4 className="font-semibold text-xl mb-2">
                    Estate Planning
                  </h4>
                  <p className="text-gray-700">
                    Estate planning gives you the opportunity to pass your
                    wealth on as you see fit. Your estate includes everything
                    from your car and home to life insurance and bank accounts,
                    and estates and inheritances unfortunately also mean taxes.
                    Advisors at Chandler & Knowles help you to pass on your
                    estate with as little taxation as possible by avoiding tax
                    traps and properly managing life insurance and other assets.
                  </p>
                </li>
                <li data-aos="fade">
                  <h4 className="font-semibold text-xl mb-2">
                    Irrevocable Trusts
                  </h4>
                  <p className="text-gray-700">
                    Through irrevocable trusts, assets are transferred into the
                    trust for later ownership by the beneficiary, and the
                    grantor’s ownership is completely removed from these assets.
                    Irrevocable trusts can include life insurance policies,
                    cash, investments, businesses and more.
                  </p>
                </li>
                <li data-aos="fade">
                  <h4 className="font-semibold text-xl mb-2">
                    Captive Insurance Companies
                  </h4>
                  <p className="text-gray-700">
                    A captive insurance company – which is an insurance company
                    affiliated with an operating business entity -- is typically
                    formed to provide insurance to the business as a supplement
                    to its commercial coverage.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="tax-planning-involve" className="container px-8 mx-auto">
          <div className="relative py-10 md:py-15 mx-auto lg:py-28">
            <div className="mb-8 md:mb-12" data-aos="fade">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl mx-auto lg:text-5xl font-semibold"
                data-aos="fade"
              >
                <span className="text-yellow-500">Tax planning </span>
                can involve:
              </h2>
              <p className="text-gray-700 mt-4 md:mt-8">
                We use extensive financial modeling to test and forecast the
                impact of any financial decision that affects you. By
                consultation and utilization of these models, we help you make
                the most advantageous business tax planning or family tax
                planning decisions.
              </p>
            </div>

            <div className="space-y-6 mb-6 sm:mb-14">
              <ul className="grid grid-cols-1 *:p-8 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 sm:gap-10">
                <li
                  className="max-w-lg bg-gray-50 flex flex-col p-4 gap-4 border items-center rounded-lg shadow-md overflow-hidden"
                  data-aos="fade"
                >
                  <h4 className="text-xl lg:text-2xl font-semibold text-gray-800">
                    Our Suite of Business Tax Services
                  </h4>
                  <span className="text-sm lg:text-base font-semibold text-gray-800">
                    We offer a wide variety of business year-end tax planning
                    services to help organizations stay compliant and take
                    advantage of the latest money-saving opportunities. We’ve
                    also created a Year-End Tax Planning Resource Center that
                    acts as an on-demand one-stop-shop for corporate tax
                    preparation tips.
                  </span>
                </li>
                <li
                  className="max-w-lg bg-gray-50 flex flex-col p-4 gap-4 border items-center rounded-lg shadow-md overflow-hidden"
                  data-aos="fade"
                >
                  <h4 className="text-xl lg:text-2xl font-semibold text-gray-800">
                    International Tax Compliance Services
                  </h4>
                  <span className="text-sm lg:text-base font-semibold text-gray-800">
                    Businesses that operate internationally faces the unique
                    challenge of having the stay compliant with multiple
                    countries’ tax rules and regulations. Our international tax
                    advisors work with organizations to maintain tax
                    transparency, remediate cross-border tax disputes, minimize
                    the risk of double-taxation and achieve maximum savings
                    through international tax incentives.
                  </span>
                </li>
                <li
                  className="max-w-lg bg-gray-50 flex flex-col p-4 gap-4 border items-center rounded-lg shadow-md overflow-hidden"
                  data-aos="fade"
                >
                  <h4 className="text-xl lg:text-2xl font-semibold text-gray-800">
                    Business Tax Controversy Services
                  </h4>
                  <span className="text-sm lg:text-base font-semibold text-gray-800">
                    For organizations facing corporate tax controversy issues,
                    our tax consultants are well-equipped to handle various
                    issue resolutions, dispute avoidance, and more. We&apos;ll
                    put together a plan that describes the particular
                    controversy, outlines a custom resolution, and establishes
                    measures to prevent the issues from reoccurring.
                  </span>
                </li>
                <li
                  className="max-w-lg bg-gray-50 flex flex-col p-4 gap-4 border items-center rounded-lg shadow-md overflow-hidden"
                  data-aos="fade"
                >
                  <h4 className="text-xl lg:text-2xl font-semibold text-gray-800">
                    Corporate Tax Accounting Services
                  </h4>
                  <span className="text-sm lg:text-base font-semibold text-gray-800">
                    The constantly evolving nature of national and international
                    tax laws – and the increased scrutiny surrounding them – can
                    make corporate income tax accounting complicated. Our tax
                    accounting services cover stock-based compensation, tax
                    validation projects, valuation assessments, statement and
                    balance sheet support, tax position consulting, and more.
                    They also include ASC 740 consulting, preparation,
                    remediation, internal controls assistance, transaction
                    services, provision assistance, and training.
                  </span>
                </li>
                <li
                  className="max-w-lg bg-gray-50 flex flex-col p-4 gap-4 border items-center rounded-lg shadow-md overflow-hidden"
                  data-aos="fade"
                >
                  <h4 className="text-xl lg:text-2xl font-semibold text-gray-800">
                    U.S. Tax Reform Services
                  </h4>
                  <span className="text-sm lg:text-base font-semibold text-gray-800">
                    Depending on the organization, tax reform laws can cause
                    unforeseen complications, or provide promising
                    opportunities. Withum&apos;s business tax advisors help
                    businesses navigate the changing waters of U.S. tax reform.
                    Our business tax services include the creation of corporate
                    tax planning strategies built upon the insights gained from
                    analysis and modeling tools. We work with organizations to
                    predict and analyze tax reform impacts and outline the
                    options that make sense for them. For more information,
                    check out our Tax Reform Resource Center.
                  </span>
                </li>
                <li
                  className="max-w-lg bg-gray-50 flex flex-col p-4 gap-4 border items-center rounded-lg shadow-md overflow-hidden"
                  data-aos="fade"
                >
                  <h4 className="text-xl lg:text-2xl font-semibold text-gray-800">
                    Pass-Through Tax Services
                  </h4>
                  <span className="text-sm lg:text-base font-semibold text-gray-800">
                    With partnerships offering the most flexibility out of any
                    tax structure and S corporations having the most strict
                    rules, knowledge and experience are key to businesses that
                    operate in these structures. Our team of seasoned experts
                    can help your business navigate the pass-through tax waters
                    and put you in a position to succeed.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="" className="bg-yellow-50 px-8">
          <div className="relative container w-[75%] py-10 md:py-15 space-y-12 md:space-y-20 mx-auto lg:mx-0 lg:py-28">
            <div className="mb-8 md:mb-12" data-aos="fade">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl mx-auto lg:text-5xl font-semibold"
                data-aos="fade"
              >
                Clients Deserve It & Will Pay More
              </h2>
              <p className="text-gray-700 mt-4 md:mt-8">
                Whether your client is brand new or has been with you for 10
                years, they deserve one thing: smarter tax decisions.
              </p>
              <p className="text-gray-700 mt-1 md:mt-2">
                They may choose to do something that results in paying higher
                taxes, but with tax planning, you&apos;ll be able to present
                them with options before they take action.
              </p>
            </div>

            <div className="mb-8 md:mb-12" data-aos="fade">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl mx-auto lg:text-5xl font-semibold"
                data-aos="fade"
              >
                It&apos;s Who You Are
              </h2>
              <p className="text-gray-700 mt-4 md:mt-8">
                You&apos;ve dedicated your career to being a tax advisor. Before
                now, understanding how tens of thousands of tax forms,
                strategies and industries work hasn&apos;t been possible.
              </p>
              <p className="text-gray-700 mt-1 md:mt-2">
                By offering tax planning, you can turn tax into a year-round
                business by helping clients save money with Accountings Zone.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
