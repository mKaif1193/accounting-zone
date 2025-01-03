import React from "react";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesFooter from "@/components/services/ServicesFooter";
import OurApproach from "@/components/services/OurApproach";
import Slider from "@/components/Slider";

const KeyBenefitsCards = [
  {
    title: "Financial Control",
    description:
      "Establishes clear financial targets to help businesses reduce the risk of overspending and maintain fiscal responsibility.",
  },
  {
    title: "Resource Allocation",
    description:
      "Ensures that financial resources are allocated to the most important operational areas, driving efficiency.",
  },
  {
    title: "Predictive Insights",
    description:
      "Provides insights into future cash flows, allowing businesses to prepare for potential financial challenges.",
  },
  {
    title: "Strategic Decision-Making",
    description:
      "Supports informed decision-making by offering a roadmap of expected income and expenses.",
  },
  {
    title: "Business Growth",
    description:
      "Enables businesses to plan for future expansion by forecasting potential revenue growth and financial needs.",
  },
  {
    title: "Risk Mitigation",
    description:
      "Identifies potential financial risks early, allowing businesses to make adjustments to avoid costly mistakes or disruptions.",
  },
];

const CoreComponentsCards = [
  {
    title: "Revenue Projections",
    description:
      "Estimating income from various streams like sales and investments, ensuring businesses can anticipate future earnings accurately.",
  },
  {
    title: "Expenditure Planning",
    description:
      "Estimating costs related to operations and categorizing fixed, variable, and semi-variable costs for efficient budget mgt.",
  },
  {
    title: "Cash Flow Forecasting",
    description:
      "Monitoring cash inflows and outflows, ensuring liquidity and helping businesses avoid cash shortages by planning ahead.",
  },
  {
    title: "Scenario Analysis",
    description:
      "Creating financial models for best-case and worst-case scenarios to prepare businesses for market shifts or unforeseen events.",
  },
  {
    title: "Financial Monitoring",
    description:
      "Regularly comparing actual financial results to forecasted numbers, identifying deviations, making necessary adjustments.",
  },
  {
    title: "Budget Adjustments and Reforecasting",
    description:
      "Continuously updating the budget based on actual performance and changing business needs to maintain alignment with goals.",
  },
];

const BudgetPlanningForecastingCards = [
  {
    title: "Proactive Financial Management",
    description:
      "Anticipating future financial needs allows for better cash management and financial preparedness.",
  },
  {
    title: "Cost Efficiency",
    description:
      "Identifying areas of overspending or potential savings helps strategically optimize profitability.",
  },
  {
    title: "Investor Confidence",
    description:
      "A well-prepared budget and forecast demonstrate strong financial governance, increasing investor trust.",
  },
];

const OurApproachCards = [
  {
    heading: "Collaborative Consultation",
    description:
      "We work closely with your team to understand your unique business needs, industry trends, and growth objectives.",
  },
  {
    heading: "Data-Driven Insights",
    description:
      "Using historical data, market analysis, and financial models, we craft precise budgets and forecasts that align with your vision.",
  },
  {
    heading: "Ongoing Support",
    description:
      "We provide continuous monitoring and updates to ensure your forecasts remain accurate, helping navigate changes.",
  },
];

export default function BudgetPlanningAndForecasting() {
  return (
    <main>
      <Slider
        images={["/consultation/consultation1.jpg"]}
        title="Financial Clarity"
        description="Simplifying Your Finances, Amplifying Your Growth."
      />

      <article className="overflow-hidden mb-[80px] md:mb-[120px] lg:mb-[160px] xl:mb-[210px] mx-8 sm:mx-20 lg:mx-auto p-[40px_0_60px] md:p-[60px_0_80px] lg:p-[100px_0_120px] xl:p-[150px_0_200px]">
        <div className="flex flex-col mst-7 dsm:mts-[150px] mx-auto overflow-hidden lg:flex-row lg:justify-between">
          <section className="w-full">
            <div className="lg:max-w-[1100px] mx-auto container">
              <div className="flex flex-col lg:flex-row">
                <div className="w-full order-1 mx-auto lg:order-none">
                  <h2 className="text-2xl lg:text-3xl lg:mst-12 mb-[35px] lg:mb-[66px] font-bold text-black">
                    Budget Planning and Forecasting
                  </h2>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <p className="mt-[15px] lg:mt-[26px]">
                      Budget Planning and Forecasting are essential processes
                      for businesses to ensure financial stability and strategic
                      growth. Budget planning involves outlining expected
                      revenues and expenditures, while forecasting projects
                      future financial performance based on current and
                      historical data. This service helps businesses align their
                      financial goals with their operational strategies,
                      optimizing resource allocation and decision-making.
                    </p>
                  </div>

                  <ServicesGrid
                    title="Key Benefits"
                    gridCards={KeyBenefitsCards}
                  />

                  <ServicesGrid
                    title="Our Core Components"
                    gridCards={CoreComponentsCards}
                  />

                  <ServicesGrid
                    title="Why You Need Budget Planning and Forecasting"
                    gridCards={BudgetPlanningForecastingCards}
                  />

                  <OurApproach
                    title="Our Approach"
                    ourApproach={OurApproachCards}
                  />

                  <ServicesFooter
                    href="/services/bookkeeping"
                    service="Bookkeeping Services"
                    text="We are here to address any questions you may have as you implement your plan. Additionally, for clients seeking an ongoing partnership, we provide comprehensive"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
