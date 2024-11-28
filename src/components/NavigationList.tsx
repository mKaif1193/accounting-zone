"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoMdArrowDropdown } from "react-icons/io";

export default function NavigationList() {
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [taxDropdownOpen, setTaxDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  return (
    <ul className="list-none flex flex-wrap">
      <li
        className="relative group mr-10"
        onMouseEnter={() => setServicesDropdownOpen(true)}
        onMouseLeave={() => setServicesDropdownOpen(false)}
      >
        <Link
          href="/services"
          className="flex justify-center items-center gap-1 font-semibold text-black hover:text-yellow-400 transition-colors"
        >
          <span>Services</span>
          <IoMdArrowDropdown
            className={`${
              servicesDropdownOpen ? "rotate-180" : ""
            } duration-300`}
          />
        </Link>
        <div
          className={`absolute z-10 left-0 top-full mt-3 w-56 p-4 bg-white shadow-lg duration-500 transition-transform transform ${
            servicesDropdownOpen
              ? "opacity-100 -translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-28 pointer-events-none"
          }`}
        >
          <div className="flex space-x-4">
            <ul className="list-none space-y-4 divide-y-2">
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-yellow-400 transition-colors"
                >
                  Outsourced Controller
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-yellow-400 transition-colors"
                >
                  Tax Resolution
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-yellow-400 transition-colors"
                >
                  PFP Loan Forgiveness Assistance
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-yellow-400 transition-colors"
                >
                  Bookkeeping
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-yellow-400 transition-colors"
                >
                  Advisory Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-yellow-400 transition-colors"
                >
                  Business Consulting Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-yellow-400 transition-colors"
                >
                  Consulting For QuickBooks
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </li>
      <li
        className="relative group mr-10"
        onMouseEnter={() => setTaxDropdownOpen(true)}
        onMouseLeave={() => setTaxDropdownOpen(false)}
      >
        <Link
          href="/tax-planning"
          className="flex justify-center items-center gap-1 font-semibold text-black hover:text-yellow-400 transition-colors"
        >
          <span>Tax Planning</span>
          <IoMdArrowDropdown
            className={`${taxDropdownOpen ? "rotate-180" : ""} duration-300`}
          />
        </Link>
        <div
          className={`absolute z-10 left-0 top-full mt-3 w-56 p-4 bg-white shadow-lg duration-500 transition-transform transform ${
            taxDropdownOpen
              ? "opacity-100 -translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-28 pointer-events-none"
          }`}
        >
          <div className="flex space-x-4">
            <ul className="list-none space-y-4 divide-y-2">
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-yellow-400 transition-colors"
                >
                  What is Tax Planning
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-yellow-400 transition-colors"
                >
                  Tax Planning Strategies
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-yellow-400 transition-colors"
                >
                  Hiring Children Tax Strategy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-yellow-400 transition-colors"
                >
                  Bookkeeping
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </li>
      <li
        className="relative group mr-10"
        onMouseEnter={() => setProductsDropdownOpen(true)}
        onMouseLeave={() => setProductsDropdownOpen(false)}
      >
        <Link
          href="/products"
          className="flex justify-center items-center gap-1 font-semibold text-black hover:text-yellow-400 transition-colors"
        >
          <span>Products</span>
          <IoMdArrowDropdown
            className={`${
              productsDropdownOpen ? "rotate-180" : ""
            } duration-300`}
          />
        </Link>
        <div
          className={`absolute z-10 left-0 top-full mt-3 w-56 p-4 bg-white shadow-lg duration-500 transition-transform transform ${
            productsDropdownOpen
              ? "opacity-100 -translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-28 pointer-events-none"
          }`}
        >
          <div className="flex space-x-4">
            <ul className="list-none space-y-4 divide-y-2">
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-yellow-400 transition-colors"
                >
                  Tax Planning
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-yellow-400 transition-colors"
                >
                  Client Collaboration
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-yellow-400 transition-colors"
                >
                  Federal Tax Planning
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-yellow-400 transition-colors"
                >
                  State & Local Planning
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-yellow-400 transition-colors"
                >
                  Multi-Entity Tax Planning
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-yellow-400 transition-colors"
                >
                  Tax Plans
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-yellow-400 transition-colors"
                >
                  Smart Questionnaires
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-yellow-400 transition-colors"
                >
                  Client Requests
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </li>
      <li
        className="relative group mr-10"
        onMouseEnter={() => setAboutDropdownOpen(true)}
        onMouseLeave={() => setAboutDropdownOpen(false)}
      >
        <Link
          href="/about"
          className="flex justify-center items-center gap-1 font-semibold text-black hover:text-yellow-400 transition-colors"
        >
          <span>About</span>
          <IoMdArrowDropdown
            className={`${aboutDropdownOpen ? "rotate-180" : ""} duration-300`}
          />
        </Link>
        <div
          className={`absolute z-10 left-0 top-full mt-3 w-36 p-4 bg-white shadow-lg duration-500 transition-transform transform ${
            aboutDropdownOpen
              ? "opacity-100 -translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-28 pointer-events-none"
          }`}
        >
          <div className="flex space-x-4">
            <ul className="list-none space-y-4 divide-y-2">
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-yellow-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-yellow-400 transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-yellow-400 transition-colors"
                >
                  Awards
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-yellow-400 transition-colors"
                >
                  Referrals
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-yellow-400 transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </li>
      <li
        className="relative group mr-10"
        onMouseEnter={() => setResourcesDropdownOpen(true)}
        onMouseLeave={() => setResourcesDropdownOpen(false)}
      >
        <Link
          href="/resources"
          className="flex justify-center items-center gap-1 font-semibold text-black hover:text-yellow-400 transition-colors"
        >
          <span>Resources</span>
          <IoMdArrowDropdown
            className={`${
              resourcesDropdownOpen ? "rotate-180" : ""
            } duration-300`}
          />
        </Link>
        <div
          className={`absolute z-10 left-0 top-full mt-3 w-44 p-4 bg-white shadow-lg duration-500 transition-transform transform ${
            resourcesDropdownOpen
              ? "opacity-100 -translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-28 pointer-events-none"
          }`}
        >
          <div className="flex space-x-4">
            <ul className="list-none space-y-4 divide-y-2">
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-yellow-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-yellow-400 transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-yellow-400 transition-colors"
                >
                  State Tax Deadlines
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-yellow-400 transition-colors"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </li>
      <li className="mr-10">
        <Link
          href="/contact"
          className="flex justify-center items-center gap-1 font-semibold text-black hover:text-yellow-400 transition-colors"
        >
          Contact Us
        </Link>
      </li>
    </ul>
  );
}
