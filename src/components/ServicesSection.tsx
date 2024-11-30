import React from "react";
import ServicesCard from "./ServicesCard";
import { BsFillBarChartFill } from "react-icons/bs";
import { FaChartLine } from "react-icons/fa6";
import {
  FaFileAlt,
  FaFileInvoiceDollar,
  FaHandshake,
  FaMoneyCheckAlt,
} from "react-icons/fa";
import Image from "next/image";

const servicesCards = [
  {
    title: "Financial Statements",
    description:
      "We prepare comprehensive financial, income, cash flow statements and balance sheets.",
    icon: BsFillBarChartFill,
    iconClassName: "size-[56px]",
  },
  //   {
  //     title: "Ledger Maintenance",
  //     description:
  //       "Our team ensures that your general ledger is accurate and up-to-date.",
  //     icon: BsBookFill,
  //     iconClassName: "size-11",
  //   },
  {
    title: "Payroll Accounting",
    description:
      "Accurate payroll accounting is crucial for compliance and employee satisfaction.",
    icon: FaMoneyCheckAlt,
    iconClassName: "size-11",
  },
  {
    title: "Financial Record Keeping",
    description:
      "Ensure your financial transactions are meticulously recorded and organized.",
    icon: FaChartLine,
    iconClassName: "size-[56px]",
  },
  //   {
  //     title: "Reconciliation and Reporting",
  //     description: "Keep your accounts balanced and up-to-date.",
  //     icon: MdPieChart,
  //     iconClassName: "size-11",
  //   },
  {
    title: "Custom Bookkeeping Solutions",
    description:
      "Tailored to fit your business needs, our customizable bookkeeping services.",
    icon: FaFileInvoiceDollar,
    iconClassName: "size-[42px]",
  },
  {
    title: "Strategic Tax Optimization",
    description:
      "Maximize your savings with our strategic tax planning services.",
    icon: FaFileAlt,
    iconClassName: "size-[38px]",
  },
  //   {
  //     title: "Comprehensive Tax Compliance",
  //     description:
  //       "Our expert team ensures your tax filings are accurate and timely, helping you avoid penalties and optimize your tax liabilities.",
  //     icon: RxAvatar,
  //     iconClassName: "size-24",
  //   },
  {
    title: "Proactive Tax Advisory",
    description:
      "We provide ongoing advice and updates on tax law changes, ensuring your business remains compliant and financially efficient.",
    icon: FaHandshake,
    iconClassName: "size-[110px]",
  },
];

export default function ServicesSection() {
  return (
    <section className="flex flex-wrap mx-auto items-center container">
      <div className="w-full md:w-1/2 lg:w-[58%] md:order-1 mx-auto ml-auto mb-8 md:mb-0">
        <h2
          className="mb-4 md:mb-8 text-lg sm:text-xl lg:text-2xl text-[#fbc710] uppercase"
          data-aos="fade"
        >
          SERVICES
        </h2>
        <div
          className="mb-6 sm:mb-14 flex flex-col gap-3 font-semibold"
          data-aos="fade"
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl">
            To meet your needs
          </h3>
          <span className="text-[#fbc710] text-base">
            Accounting, Bookkeeping, Financial Reporting, Payroll And Tax
            Services
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {servicesCards.map((card, index) => (
            <ServicesCard
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
              iconClassName={card.iconClassName}
            />
          ))}
        </div>
      </div>

      <div className="w-full md:w-1/2 lg:w-5/12">
        <div className="relative mx-auto max-w-lg">
          <Image
            src="/accounting/accounting1.jpg"
            width="450"
            height="600"
            alt="accounting2"
            className="max-w-full h-auto"
            data-aos="fade"
          />
        </div>
      </div>
    </section>
  );
}
