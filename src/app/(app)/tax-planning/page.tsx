import Slider from "@/components/Slider";
import Image from "next/image";
import React from "react";

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

        <section id="" className="container px-8 mx-auto">
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
      </div>
    </main>
  );
}
