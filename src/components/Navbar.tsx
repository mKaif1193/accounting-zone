"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoMdArrowDropdown } from "react-icons/io";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "./ui/button";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [taxDropdownOpen, setTaxDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  const handleDropdownClick = (dropdownName: string) => {
    switch (dropdownName) {
      case "services":
        setServicesDropdownOpen(!servicesDropdownOpen);
        setTaxDropdownOpen(false);
        setProductsDropdownOpen(false);
        setResourcesDropdownOpen(false);
        break;
      case "tax":
        setTaxDropdownOpen(!taxDropdownOpen);
        setServicesDropdownOpen(false);
        setProductsDropdownOpen(false);
        setResourcesDropdownOpen(false);
        break;
      case "products":
        setProductsDropdownOpen(!productsDropdownOpen);
        setServicesDropdownOpen(false);
        setTaxDropdownOpen(false);
        setResourcesDropdownOpen(false);
        break;
      case "resources":
        setResourcesDropdownOpen(!resourcesDropdownOpen);
        setServicesDropdownOpen(false);
        setTaxDropdownOpen(false);
        setProductsDropdownOpen(false);
        break;
    }
  };

  return (
    <nav className="bg-white p-4">
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

      <ul className="list-none hidden lg:flex">
        <li
          className="relative group mr-4 lg:mr-10"
          onMouseEnter={() => setServicesDropdownOpen(true)}
          onMouseLeave={() => setServicesDropdownOpen(false)}
        >
          <div className="flex justify-center items-center gap-1 font-semibold text-black hover:text-[#fbc710] transition-colors cursor-pointer">
            <span
              className={`${pathname.includes("services") && "text-[#fbc710]"}`}
            >
              Services
            </span>
            <IoMdArrowDropdown
              className={`${
                servicesDropdownOpen ? "rotate-180" : ""
              } duration-300`}
            />
          </div>
          <div
            className={`absolute z-10 left-0 top-full w-56 p-4 rounded-sm bg-white shadow-lg duration-500 transition-transform transform ${
              servicesDropdownOpen
                ? "opacity-100 -translate-y-0 pointer-events-auto"
                : "opacity-0 translate-y-28 pointer-events-none"
            }`}
          >
            <div className="flex space-x-4">
              <ul className="list-none flex flex-col justify-center gap-y-4">
                <li>
                  <Link
                    href="/services/tax-resolution"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Tax Resolution
                  </Link>
                </li>
                <hr />
                <li>
                  <Link
                    href="/services/pfp-loan-forgiveness-assistance"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    PFP Loan Forgiveness Assistance
                  </Link>
                </li>
                <hr />
                <li>
                  <Link
                    href="/bookkeeping"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Bookkeeping
                  </Link>
                </li>
                <hr />
                <li>
                  <Link
                    href="/services/advisory-services"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Advisory Services
                  </Link>
                </li>
                <hr />
                <li>
                  <Link
                    href="/services/business-consulting-solutions"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Business Consulting Solutions
                  </Link>
                </li>
                <hr />
                <li>
                  <Link
                    href="/services/consulting-for-quickbooks"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Consulting For QuickBooks
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li
          className="relative group mr-4 lg:mr-10"
          onMouseEnter={() => setTaxDropdownOpen(true)}
          onMouseLeave={() => setTaxDropdownOpen(false)}
        >
          <Link
            href="/tax-planning"
            className="flex justify-center items-center gap-1 font-semibold text-black hover:text-[#fbc710] transition-colors"
          >
            <span
              className={`${pathname === "/tax-planning" && "text-[#fbc710]"}`}
            >
              Tax Planning
            </span>
            <IoMdArrowDropdown
              className={`${taxDropdownOpen && "rotate-180"} duration-300`}
            />
          </Link>
          <div
            className={`absolute z-10 left-0 top-full w-56 p-4 rounded-sm bg-white shadow-lg duration-500 transition-transform transform ${
              taxDropdownOpen
                ? "opacity-100 -translate-y-0 pointer-events-auto"
                : "opacity-0 translate-y-28 pointer-events-none"
            }`}
          >
            <div className="flex space-x-4">
              <ul className="list-none flex flex-col justify-center gap-y-4">
                <li>
                  <Link
                    href="/tax-planning"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    What is Tax Planning
                  </Link>
                </li>
                <hr />
                <li>
                  <Link
                    href="/tax-planning"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Tax Planning Strategies
                  </Link>
                </li>
                <hr />
                <li>
                  <Link
                    href="/bookkeeping"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Bookkeeping
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        {/* <li
          className="relative group mr-4 lg:mr-10"
          onMouseEnter={() => setProductsDropdownOpen(true)}
          onMouseLeave={() => setProductsDropdownOpen(false)}
        >
          <Link
            href="/products"
            className="flex justify-center items-center gap-1 font-semibold text-black hover:text-[#fbc710] transition-colors"
          >
            <span className={`${pathname === "/products" && "text-[#fbc710]"}`}>
              Products
            </span>
            <IoMdArrowDropdown
              className={`${productsDropdownOpen && "rotate-180"} duration-300`}
            />
          </Link>
          <div
            className={`absolute z-10 left-0 top-full w-56 p-4 rounded-sm bg-white shadow-lg duration-500 transition-transform transform ${
              productsDropdownOpen
                ? "opacity-100 -translate-y-0 pointer-events-auto"
                : "opacity-0 translate-y-28 pointer-events-none"
            }`}
          >
            <div className="flex space-x-4">
              <ul className="list-none flex flex-col justify-center gap-y-4">
                <li>
                  <Link
                    href="#"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Client Collaboration
                  </Link>
                </li>
                <hr />
                <li>
                  <Link
                    href="#"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Federal Tax Planning
                  </Link>
                </li>
                <hr />
                <li>
                  <Link
                    href="#"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    State & Local Planning
                  </Link>
                </li>
                <hr />
                <li>
                  <Link
                    href="#"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Multi-Entity Tax Planning
                  </Link>
                </li>
                <hr />
                <li>
                  <Link
                    href="#"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Tax Plans
                  </Link>
                </li>
                <hr />
                <li>
                  <Link
                    href="#"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Smart Questionnaires
                  </Link>
                </li>
                <hr />
                <li>
                  <Link
                    href="#"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Client Requests
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li> */}
        <li
          className="relative group mr-4 lg:mr-10"
          onMouseEnter={() => setResourcesDropdownOpen(true)}
          onMouseLeave={() => setResourcesDropdownOpen(false)}
        >
          <Link
            href="/resources"
            className="flex justify-center items-center gap-1 font-semibold text-black hover:text-[#fbc710] transition-colors"
          >
            <span
              className={`${pathname === "/resources" && "text-[#fbc710]"}`}
            >
              Resources
            </span>
            <IoMdArrowDropdown
              className={`${
                resourcesDropdownOpen && "rotate-180"
              } duration-300`}
            />
          </Link>
          <div
            className={`absolute z-10 left-0 top-full w-44 p-4 rounded-sm bg-white shadow-lg duration-500 transition-transform transform ${
              resourcesDropdownOpen
                ? "opacity-100 -translate-y-0 pointer-events-auto"
                : "opacity-0 translate-y-28 pointer-events-none"
            }`}
          >
            <div className="flex space-x-4">
              <ul className="list-none flex flex-col justify-center gap-y-4">
                <li>
                  <Link
                    href="#"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <hr />
                <li>
                  <Link
                    href="#"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Case Studies
                  </Link>
                </li>
                <hr />
                <li>
                  <Link
                    href="#"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    State Tax Deadlines
                  </Link>
                </li>
                <hr />
                <li>
                  <Link
                    href="#"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="mr-4 lg:mr-10">
          <Link
            href="/about"
            className={`flex justify-center items-center gap-1 font-semibold text-black hover:text-[#fbc710] transition-colors ${
              pathname === "/about" && "text-[#fbc710]"
            }`}
          >
            About Us
          </Link>
        </li>
        <li className="mr-4 lg:mr-10">
          <Button onClick={() => router.push("contact")} variant="acc">
            Contact Us
          </Button>
        </li>
      </ul>

      <ul
        className={`list-none absolute top-full right-0 z-10 block lg:hidden space-y-2 mt-3 w-full p-4 bg-white shadow-lg duration-500 transition-transform transform ${
          isOpen
            ? "flex flex-col pointer-events-auto"
            : "pointer-events-none hidden"
        }`}
      >
        <li className="group" onClick={() => handleDropdownClick("services")}>
          <div className="flex justify-between px-4 items-center gap-1 hover:text-[#fbc710] transition-colors font-semibold text-black">
            <span>Services</span>
            <IoMdArrowDropdown
              className={`${servicesDropdownOpen && "rotate-180"} duration-300`}
            />
          </div>
          <div
            className={`mt-1 w-full px-4 ${
              servicesDropdownOpen
                ? "block pointer-events-auto"
                : "hidden pointer-events-none"
            }`}
          >
            <div className="flex w-full px-6">
              <ul className="list-none space-y-2 grid grid-cols-1 gap-x-2 md:grid-cols-3 sm:grid-cols-2 w-full text-sm">
                <li>
                  <Link
                    href="/services/tax-resolution"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Tax Resolution
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/pfp-loan-forgiveness-assistance"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    PFP Loan Forgiveness Assistance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/bookkeeping"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Bookkeeping
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/advisory-services"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Advisory Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/business-consulting-solutions"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Business Consulting Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/consulting-for-quickbooks"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Consulting For QuickBooks
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="group" onClick={() => handleDropdownClick("tax")}>
          <div className="flex justify-between px-4 items-center gap-1 font-semibold text-black hover:text-[#fbc710] transition-colors">
            <Link href="/tax-planning">Tax Planning</Link>
            <IoMdArrowDropdown
              className={`${taxDropdownOpen && "rotate-180"} duration-300`}
            />
          </div>

          <div
            className={`mt-1 w-full px-4 ${
              taxDropdownOpen
                ? "block pointer-events-auto"
                : "hidden pointer-events-none"
            }`}
          >
            <div className="flex w-full px-6">
              <ul className="list-none space-y-2 grid grid-cols-1 gap-x-2 md:grid-cols-3 sm:grid-cols-2 w-full text-sm">
                <li>
                  <Link
                    href="/tax-planning"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    What is Tax Planning
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tax-planning"
                    className="text-black hover:text-[/tax-planningfbc710] transition-colors"
                  >
                    Tax Planning Strategies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/bookkeeping"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Bookkeeping
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        {/* <li className="group" onClick={() => handleDropdownClick("products")}>
          <div className="flex justify-between px-4 items-center gap-1 font-semibold text-black hover:text-[#fbc710] transition-colors">
            <Link href="/products">Products</Link>
            <IoMdArrowDropdown
              className={`${productsDropdownOpen && "rotate-180"} duration-300`}
            />
          </div>
          <div
            className={`mt-1 w-full px-4 ${
              productsDropdownOpen
                ? "block pointer-events-auto"
                : "hidden pointer-events-none"
            }`}
          >
            <div className="flex w-full px-6">
              <ul className="list-none space-y-2 grid grid-cols-1 gap-x-2 md:grid-cols-3 sm:grid-cols-2 w-full text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Tax Planning
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Client Collaboration
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Federal Tax Planning
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    State & Local Planning
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Multi-Entity Tax Planning
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Tax Plans
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Smart Questionnaires
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Client Requests
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li> */}
        <li className="group" onClick={() => handleDropdownClick("resources")}>
          <div className="flex justify-between px-4 items-center gap-1 font-semibold text-black hover:text-[#fbc710] transition-colors">
            <Link href="/resources">Resources</Link>
            <IoMdArrowDropdown
              className={`${
                resourcesDropdownOpen && "rotate-180"
              } duration-300`}
            />
          </div>
          <div
            className={`mt-1 w-full px-4 ${
              resourcesDropdownOpen
                ? "block pointer-events-auto"
                : "hidden pointer-events-none"
            }`}
          >
            <div className="flex w-full px-6">
              <ul className="list-none space-y-2 grid grid-cols-1 gap-x-2 md:grid-cols-3 sm:grid-cols-2 w-full text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    State Tax Deadlines
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-black hover:text-[#fbc710] transition-colors"
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
            href="/about"
            className="flex justify-between px-4 items-center gap-1 font-semibold text-black hover:text-[#fbc710] transition-colors"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="flex justify-between px-4 items-center gap-1 font-semibold text-black hover:text-[#fbc710] transition-colors"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
