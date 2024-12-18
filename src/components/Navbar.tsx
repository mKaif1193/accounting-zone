"use client";
import React, { useState } from "react";
import Link from "next/link";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false);
  const [insightsDropdownOpen, setInsightsDropdownOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);
  const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  const handleDropdownClick = (dropdownName: string) => {
    switch (dropdownName) {
      case "services":
        setServicesDropdownOpen(!servicesDropdownOpen);
        setFeaturesDropdownOpen(false);
        setIndustriesDropdownOpen(false);
        setInsightsDropdownOpen(false);
        setContactDropdownOpen(false);
        setAboutDropdownOpen(false);
        setResourcesDropdownOpen(false);
        break;
      case "features":
        setFeaturesDropdownOpen(!featuresDropdownOpen);
        setServicesDropdownOpen(false);
        setIndustriesDropdownOpen(false);
        setInsightsDropdownOpen(false);
        setContactDropdownOpen(false);
        setAboutDropdownOpen(false);
        setResourcesDropdownOpen(false);
        break;
      case "insights":
        setInsightsDropdownOpen(!insightsDropdownOpen);
        setFeaturesDropdownOpen(false);
        setIndustriesDropdownOpen(false);
        setServicesDropdownOpen(false);
        setContactDropdownOpen(false);
        setAboutDropdownOpen(false);
        setResourcesDropdownOpen(false);
        break;
      case "industries":
        setIndustriesDropdownOpen(!industriesDropdownOpen);
        setFeaturesDropdownOpen(false);
        setInsightsDropdownOpen(false);
        setServicesDropdownOpen(false);
        setContactDropdownOpen(false);
        setAboutDropdownOpen(false);
        setResourcesDropdownOpen(false);
        break;
      case "contact":
        setContactDropdownOpen(!contactDropdownOpen);
        setFeaturesDropdownOpen(false);
        setIndustriesDropdownOpen(false);
        setInsightsDropdownOpen(false);
        setServicesDropdownOpen(false);
        setAboutDropdownOpen(false);
        setResourcesDropdownOpen(false);
        break;
      case "about":
        setAboutDropdownOpen(!aboutDropdownOpen);
        setFeaturesDropdownOpen(false);
        setIndustriesDropdownOpen(false);
        setInsightsDropdownOpen(false);
        setServicesDropdownOpen(false);
        setContactDropdownOpen(false);
        setResourcesDropdownOpen(false);
        break;
      case "resources":
        setResourcesDropdownOpen(!resourcesDropdownOpen);
        setFeaturesDropdownOpen(false);
        setIndustriesDropdownOpen(false);
        setInsightsDropdownOpen(false);
        setServicesDropdownOpen(false);
        setContactDropdownOpen(false);
        setAboutDropdownOpen(false);
        break;
    }
  };

  return (
    <nav className="bg-white justify-self-end p-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden block w-6 h-3 bg-transparent appearance-none cursor-pointer"
      >
        {isOpen ? (
          <RxCross2 className="size-5" />
        ) : (
          <RxHamburgerMenu className="size-5" />
        )}
      </button>

      <ul className="hidden xl:flex items-end">
        <li className="mr-4 lg:mr-10">
          <Link
            href="/"
            className={`font-semibold 2xl:text-base text-sm hover:text-[#fbc710] transition-colors uppercase ${
              pathname === "/" ? "text-[#fbc710]" : "text-black"
            }`}
          >
            HOME
          </Link>
        </li>
        <li
          className="relative group mr-4 lg:mr-10"
          onMouseEnter={() => setServicesDropdownOpen(true)}
          onMouseLeave={() => setServicesDropdownOpen(false)}
        >
          <div
            className={`font-semibold 2xl:text-base text-sm hover:text-[#fbc710] transition-colors cursor-pointer uppercase ${
              pathname.includes("services") ? "text-[#fbc710]" : "text-black"
            }`}
          >
            SERVICES
          </div>
          <div
            className={`absolute z-10 -left-[100px] top-full w-[1000px] p-20 bg-white shadow-lg duration-300 transition-opacity ${
              servicesDropdownOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="flex space-x-4">
              <ul className="grid grid-cols-3 gap-x-8 text-sm divide-x-2 justify-center w-full">
                <div className="space-y-4">
                  <li className="font-bold text-xs">
                    {/* <Link
                    href="/services/financial-statements"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  > */}
                    FINANCIAL - Accounting
                    {/* </Link> */}
                  </li>
                  <li>
                    <Link
                      href="/services/financial-statements"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Financial Statements
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/financial-statements"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Ledger Maintenance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/financial-statements"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Payroll Accounting
                    </Link>
                  </li>
                </div>
                {/* <li>
                  <Link
                    href="/services/advisory"
                    className={`hover:text-[#fbc710] transition-colors ${
                      pathname === "/services/advisory"
                        ? "text-[#fbc710]"
                        : "text-black"
                    }`}
                  >
                    Advisory
                  </Link>
                </li> */}
                <div className="space-y-4 px-14">
                  <li className="font-bold text-xs">
                    {/* <Link
                    href="/services/bookkeeping"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  > */}
                    RECORDS - Bookkeeping
                    {/* </Link> */}
                  </li>
                  <li>
                    <Link
                      href="/services/bookkeeping"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Financial Record Keeping
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/bookkeeping"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Reconciliation and Reporting
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/bookkeeping"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Custom Bookkeeping Solutions
                    </Link>
                  </li>
                </div>
                <div className="space-y-4 px-14">
                  <li className="font-bold text-xs">
                    {/* <Link
                    href="/services/tax-planning"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  > */}
                    TAX - Tax planning
                    {/* </Link> */}
                  </li>
                  <li>
                    <Link
                      href="/services/tax-planning"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Strategic Tax Optimization
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/tax-planning"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Comprehensive Tax Compliance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/tax-planning"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Proactive Tax Advisory
                    </Link>
                  </li>
                </div>
                {/* <li>
                  <Link
                    href="/services/tax-planning"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Tax Calculation
                  </Link>
                </li> */}
                {/* <li>
                  <Link
                    href="/services/tax-planning"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Entity & Compensation Optimization
                  </Link>
                </li> */}
                {/* <li>
                  <Link
                    href="/services/multi-entity-tax-planning"
                    className={`hover:text-[#fbc710] transition-colors ${
                      pathname === "/services/multi-entity-tax-planning"
                        ? "text-[#fbc710]"
                        : "text-black"
                    }`}
                  >
                    Multi Entity Tax Planning
                  </Link>
                </li> */}
                {/* <li>
                  <Link
                    href="/services/tax-plans-proposals"
                    className={`hover:text-[#fbc710] transition-colors ${
                      pathname === "/services/tax-plans-proposals"
                        ? "text-[#fbc710]"
                        : "text-black"
                    }`}
                  >
                    Tax Plans & Proposals
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </li>
        <li
          className="relative group mr-4 lg:mr-10"
          onMouseEnter={() => setIndustriesDropdownOpen(true)}
          onMouseLeave={() => setIndustriesDropdownOpen(false)}
        >
          <Link
            href="/industries"
            className={`font-semibold 2xl:text-base text-sm hover:text-[#fbc710] transition-colors cursor-pointer uppercase ${
              pathname.includes("industries") ? "text-[#fbc710]" : "text-black"
            }`}
          >
            INDUSTRIES
          </Link>
          <div
            className={`absolute z-10 -left-[50px] top-full w-[500px] p-20 bg-white shadow-lg duration-300 transition-opacity ${
              industriesDropdownOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="flex space-x-4">
              <ul className="flex flex-col text-sm justify-center gap-y-4 w-full">
                <li>
                  <Link
                    href="/industries"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Small Businesses
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Corporations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Non-Profits
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Startups
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li
          className="relative group mr-4 lg:mr-10"
          onMouseEnter={() => setFeaturesDropdownOpen(true)}
          onMouseLeave={() => setFeaturesDropdownOpen(false)}
        >
          <Link
            href="/features"
            className={`font-semibold 2xl:text-base text-sm hover:text-[#fbc710] transition-colors cursor-pointer uppercase ${
              pathname.includes("features") ? "text-[#fbc710]" : "text-black"
            }`}
          >
            FEATURES
          </Link>
          <div
            className={`absolute z-10 -left-[50px] top-full w-[500px] p-20 bg-white shadow-lg duration-300 transition-opacity ${
              featuresDropdownOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="flex space-x-4">
              <ul className="flex flex-col text-sm justify-center gap-y-4 w-full">
                {/* <li>
                  <Link
                    href="/features/smart-questionnaires"
                    className={`hover:text-[#fbc710] transition-colors ${
                      pathname === "/features/smart-questionnaires"
                        ? "text-[#fbc710]"
                        : "text-black"
                    }`}
                  >
                    Smart Questionnaires
                  </Link>
                </li> */}
                <li>
                  <Link
                    href="/features"
                    className={`hover:text-[#fbc710] transition-colors ${
                      pathname === "/features/smart-questionnaires"
                        ? "text-[#fbc710]"
                        : "text-black"
                    }`}
                  >
                    Calculate Taxes Owed
                  </Link>
                </li>
                <li>
                  <Link
                    href="/features"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Analyze Any Tax Scenario
                  </Link>
                </li>
                <li>
                  <Link
                    href="/features"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Apply Tax Planning Strategies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/features"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Create a Tax Plan
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li
          className="relative group mr-4 lg:mr-10"
          onMouseEnter={() => setInsightsDropdownOpen(true)}
          onMouseLeave={() => setInsightsDropdownOpen(false)}
        >
          <Link
            href="/insights"
            className={`font-semibold 2xl:text-base text-sm hover:text-[#fbc710] transition-colors uppercase ${
              pathname.includes("/insights") ? "text-[#fbc710]" : "text-black"
            }`}
          >
            INSIGHTS
          </Link>
          <div
            className={`absolute z-10 -left-[50px] top-full w-[500px] p-20 bg-white shadow-lg duration-300 transition-opacity ${
              insightsDropdownOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="flex space-x-4">
              <ul className="text-sm flex flex-col justify-center gap-y-4 w-full">
                <li>
                  <Link
                    href="/insights/case-studies"
                    className={`hover:text-[#fbc710] transition-colors ${
                      pathname === "/insights/case-studies"
                        ? "text-[#fbc710]"
                        : "text-black"
                    }`}
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/insights"
                    className={`hover:text-[#fbc710] transition-colors ${
                      pathname === "/insights" ? "text-[#fbc710]" : "text-black"
                    }`}
                  >
                    Media Mentions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li
          className="relative group mr-4 lg:mr-10"
          onMouseEnter={() => setResourcesDropdownOpen(true)}
          onMouseLeave={() => setResourcesDropdownOpen(false)}
        >
          <div
            className={`2xl:text-base text-sm font-semibold hover:text-[#fbc710] transition-colors cursor-pointer uppercase ${
              pathname.includes("/resources") ? "text-[#fbc710]" : "text-black"
            }`}
          >
            RESOURCES
          </div>
          <div
            className={`absolute z-10 -left-[50px] top-full w-[500px] p-20 bg-white shadow-lg duration-300 transition-opacity ${
              resourcesDropdownOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="flex space-x-4">
              <ul className="grid grid-cols-2 gap-x-8 text-sm divide-x-2 justify-center w-full">
                {/* <li>
                  <Link
                    href="/resources/blog"
                    className={`hover:text-[#fbc710] transition-colors ${
                      pathname === "/resources/blog"
                        ? "text-[#fbc710]"
                        : "text-black"
                    }`}
                  >
                    Blog
                  </Link>
                </li> */}
                <div className="space-y-4">
                  <li>
                    <Link
                      href="/resources"
                      className={`hover:text-[#fbc710] transition-colors ${
                        pathname === "/resources/blog"
                          ? "text-[#fbc710]"
                          : "text-black"
                      }`}
                    >
                      Glossary
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/resources"
                      className={`hover:text-[#fbc710] transition-colors ${
                        pathname === "/resources/faq"
                          ? "text-[#fbc710]"
                          : "text-black"
                      }`}
                    >
                      State Tax Deadlines
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/resources"
                      className={`hover:text-[#fbc710] transition-colors ${
                        pathname === "/resources"
                          ? "text-[#fbc710]"
                          : "text-black"
                      }`}
                    >
                      Federal Tax Deadlines
                    </Link>
                  </li>
                </div>
                <div className="px-16 space-y-4">
                  <li>
                    <Link
                      href="/contact/support"
                      className={`hover:text-[#fbc710] transition-colors ${
                        pathname === "/resources/tax-guide"
                          ? "text-[#fbc710]"
                          : "text-black"
                      }`}
                    >
                      Support
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/resources/faq"
                      className={`hover:text-[#fbc710] transition-colors ${
                        pathname === "/resources/faq"
                          ? "text-[#fbc710]"
                          : "text-black"
                      }`}
                    >
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/resources"
                      className={`hover:text-[#fbc710] transition-colors ${
                        pathname === "/resources/faq"
                          ? "text-[#fbc710]"
                          : "text-black"
                      }`}
                    >
                      Security
                    </Link>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </li>
        <li className="mr-4 lg:mr-10">
          <Link
            href="/partner-application-form"
            className={`2xl:text-base text-sm font-semibold hover:text-[#fbc710] transition-colors cursor-pointer uppercase ${
              pathname === "/partner-application-form"
                ? "text-[#fbc710]"
                : "text-black"
            }`}
          >
            <span className="2xl:block hidden">Partner Application Form</span>
            <span className="block 2xl:hidden">PA Form</span>
          </Link>
        </li>
        <li
          className="relative group mr-4 lg:mr-10"
          onMouseEnter={() => setAboutDropdownOpen(true)}
          onMouseLeave={() => setAboutDropdownOpen(false)}
        >
          <Link
            href="/about"
            className={`2xl:text-base text-sm font-semibold hover:text-[#fbc710] transition-colors cursor-pointer uppercase ${
              pathname === "/about" ? "text-[#fbc710]" : "text-black"
            }`}
          >
            ABOUT
          </Link>
          {/* <div
            className={`absolute z-10 -left-[50px] top-full w-[500px] p-20 bg-white shadow-lg duration-300 transition-opacity ${
              aboutDropdownOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="flex space-x-4">
              <ul className="text-sm flex flex-col justify-center gap-y-4">
                <li>
                  <Link
                    href="/about"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Certifications
                  </Link>
                </li>
              </ul>
            </div>
          </div> */}
        </li>
        <li
          className="relative group mr-4 lg:mr-10"
          onMouseEnter={() => setContactDropdownOpen(true)}
          onMouseLeave={() => setContactDropdownOpen(false)}
        >
          <Link
            href="/contact"
            className={`2xl:text-base text-sm font-semibold hover:text-[#fbc710] transition-colors cursor-pointer uppercase ${
              pathname.includes("/contact") ? "text-[#fbc710]" : "text-black"
            }`}
          >
            CONTACT
          </Link>
          <div
            className={`absolute z-10 -left-[50px] top-full w-[500px] p-20 bg-white shadow-lg duration-300 transition-opacity ${
              contactDropdownOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="flex space-x-4">
              <ul className="text-sm flex flex-col justify-center gap-y-4">
                <li>
                  <Link
                    href="/contact/get-a-consultation"
                    className={`hover:text-[#fbc710] transition-colors ${
                      pathname === "/contact/get-a-consultation"
                        ? "text-[#fbc710]"
                        : "text-black"
                    }`}
                  >
                    Get a Consultation
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>

      <ul
        className={`absolute text-2xl font-bold top-full right-0 z-40 block h-screen overflow-y-auto xl:hidden space-y-2 p-4 bg-white duration-700 transition-all transform ${
          isOpen
            ? "flex flex-col w-full sm:w-1/2 gap-y-2 pointer-events-auto"
            : "pointer-events-none w-0"
        }`}
      >
        <li>
          <Link
            href="/"
            className={`px-4 transition-colors ${
              pathname === "/" ? "text-[#fbc710]" : "text-black"
            }`}
          >
            Home
          </Link>
        </li>
        <li className="group" onClick={() => handleDropdownClick("services")}>
          <div className="px-4 hover:text-[#fbc710] transition-colors">
            Services
          </div>
          <div
            className={`mt-2 w-full px-5 ${
              servicesDropdownOpen
                ? "block pointer-events-auto"
                : "hidden pointer-events-none"
            }`}
          >
            <div className="flex w-full">
              <ul className="flex flex-col font-semibold gap-y-4 w-full text-lg">
                <li>
                  <Link
                    href="/services/financial-statements"
                    className="text-black transition-colors"
                  >
                    Accounting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/financial-statements"
                    className="text-black transition-colors"
                  >
                    Financial Statements
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/financial-statements"
                    className="text-black transition-colors"
                  >
                    Ledger Maintenance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/financial-statements"
                    className="text-black transition-colors"
                  >
                    Payroll Accounting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/advisory"
                    className={`transition-colors ${
                      pathname === "/services/advisory"
                        ? "text-[#fbc710]"
                        : "text-black"
                    }`}
                  >
                    Advisory
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/bookkeeping"
                    className="text-black transition-colors"
                  >
                    Bookkeeping
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/bookkeeping"
                    className="text-black transition-colors"
                  >
                    Financial Record Keeping
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/bookkeeping"
                    className="text-black transition-colors"
                  >
                    Reconciliation and Reporting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/bookkeeping"
                    className="text-black transition-colors"
                  >
                    Custom Bookkeeping Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/tax-planning"
                    className="text-black transition-colors"
                  >
                    Tax Planning & Strategies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/tax-planning"
                    className="text-black transition-colors"
                  >
                    Strategic Tax Optimization
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/tax-planning"
                    className="text-black transition-colors"
                  >
                    Comprehensive Tax Compliance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/tax-planning"
                    className="text-black transition-colors"
                  >
                    Proactive Tax Advisory
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/tax-planning"
                    className="text-black transition-colors"
                  >
                    Tax Calculation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/multi-entity-tax-planning"
                    className={`transition-colors ${
                      pathname === "/services/multi-entity-tax-planning"
                        ? "text-[#fbc710]"
                        : "text-black"
                    }`}
                  >
                    Multi Entity Tax Planning
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/tax-plans-proposals"
                    className={`transition-colors ${
                      pathname === "/services/tax-plans-proposals"
                        ? "text-[#fbc710]"
                        : "text-black"
                    }`}
                  >
                    Tax Plans & Proposals
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="group" onClick={() => handleDropdownClick("industries")}>
          <div className="px-4 hover:text-[#fbc710] transition-colors">
            Industries
          </div>
          <div
            className={`mt-2 w-full px-5 ${
              industriesDropdownOpen
                ? "block pointer-events-auto"
                : "hidden pointer-events-none"
            }`}
          >
            <div className="flex w-full">
              <ul className="flex flex-col font-semibold gap-y-4 w-full text-lg">
                <li>
                  <Link
                    href="/industries"
                    className="text-black transition-colors"
                  >
                    Small Businesses
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries"
                    className="text-black transition-colors"
                  >
                    Corporations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries"
                    className="text-black transition-colors"
                  >
                    Non-Profits
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries"
                    className="text-black transition-colors"
                  >
                    Startups
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="group" onClick={() => handleDropdownClick("features")}>
          <div className="px-4 hover:text-[#fbc710] transition-colors">
            Features
          </div>
          <div
            className={`mt-2 w-full px-5 ${
              featuresDropdownOpen
                ? "block pointer-events-auto"
                : "hidden pointer-events-none"
            }`}
          >
            <div className="flex w-full">
              <ul className="flex flex-col font-semibold gap-y-4 w-full text-lg">
                <li>
                  <Link
                    href="/features/smart-questionnaires"
                    className={`transition-colors ${
                      pathname === "/features/smart-questionnaires"
                        ? "text-[#fbc710]"
                        : "text-black"
                    }`}
                  >
                    Smart Questionnaires
                  </Link>
                </li>
                <li>
                  <Link
                    href="/features"
                    className="text-black transition-colors"
                  >
                    Tax Compliance Tools
                  </Link>
                </li>
                <li>
                  <Link
                    href="/features"
                    className="text-black transition-colors"
                  >
                    Multi-Year Tax Scenarios
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="group" onClick={() => handleDropdownClick("insights")}>
          <div className="px-4 hover:text-[#fbc710] transition-colors">
            Insights
          </div>
          <div
            className={`mt-2 w-full px-5 ${
              insightsDropdownOpen
                ? "block pointer-events-auto"
                : "hidden pointer-events-none"
            }`}
          >
            <div className="flex w-full">
              <ul className="flex flex-col font-semibold gap-y-4 w-full text-lg">
                <li>
                  <Link
                    href="/insights/case-studies"
                    className={`transition-colors ${
                      pathname === "/insights/case-studies"
                        ? "text-[#fbc710]"
                        : "text-black"
                    }`}
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/insights"
                    className={`transition-colors ${
                      pathname === "/insights" ? "text-[#fbc710]" : "text-black"
                    }`}
                  >
                    Media Mentions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="group" onClick={() => handleDropdownClick("resources")}>
          <div className="px-4 hover:text-[#fbc710] transition-colors">
            Resources
          </div>
          <div
            className={`mt-2 w-full px-5 ${
              resourcesDropdownOpen
                ? "block pointer-events-auto"
                : "hidden pointer-events-none"
            }`}
          >
            <div className="flex w-full">
              <ul className="flex flex-col font-semibold gap-y-4 w-full text-lg">
                <li>
                  <Link
                    href="/resources/blog"
                    className={`transition-colors ${
                      pathname === "/resources/blog"
                        ? "text-[#fbc710]"
                        : "text-black"
                    }`}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/tax-guide"
                    className={`transition-colors ${
                      pathname === "/resources/tax-guide"
                        ? "text-[#fbc710]"
                        : "text-black"
                    }`}
                  >
                    Tax Guides
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/faq"
                    className={`transition-colors ${
                      pathname === "/resources/faq"
                        ? "text-[#fbc710]"
                        : "text-black"
                    }`}
                  >
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <Link
            href="/partner-application-form"
            className={`px-4 transition-colors ${
              pathname === "/partner-application-form"
                ? "text-[#fbc710]"
                : "text-black"
            }`}
          >
            Partner Application Form
          </Link>
        </li>
        <li className="group" onClick={() => handleDropdownClick("about")}>
          <div className="px-4 hover:text-[#fbc710] transition-colors">
            About
          </div>
          <div
            className={`mt-2 w-full px-5 ${
              aboutDropdownOpen
                ? "block pointer-events-auto"
                : "hidden pointer-events-none"
            }`}
          >
            <div className="flex w-full">
              <ul className="flex flex-col font-semibold gap-y-4 w-full text-lg">
                <li>
                  <Link href="/about" className="text-black transition-colors">
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-black transition-colors">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-black transition-colors">
                    Certifications
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="group" onClick={() => handleDropdownClick("contact")}>
          <div className="px-4 hover:text-[#fbc710] transition-colors">
            Contact
          </div>
          <div
            className={`mt-2 w-full px-5 ${
              contactDropdownOpen
                ? "block pointer-events-auto"
                : "hidden pointer-events-none"
            }`}
          >
            <div className="flex w-full">
              <ul className="flex flex-col font-semibold gap-y-4 w-full text-lg">
                <li>
                  <Link
                    href="/contact/get-a-consultation"
                    className={`transition-colors ${
                      pathname === "/contact/get-a-consultation"
                        ? "text-[#fbc710]"
                        : "text-black"
                    }`}
                  >
                    Get a Consultation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact/support"
                    className={`transition-colors ${
                      pathname === "/contact/support"
                        ? "text-[#fbc710]"
                        : "text-black"
                    }`}
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-black transition-colors"
                  >
                    Office Locations
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}
