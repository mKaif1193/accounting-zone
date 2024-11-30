"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaPhone, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="relative mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 md:py-16 lg:py-20 xl:py-[150px] before:absolute before:left-[15px] before:top-0 before:w-[calc(100%-30px)] before:border-t before:border-gray-400">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-2 sm:gap-8 justify-evenly">
          <div className="mb-4 w-72 sm:mb-0">
            <Link href="/">
              <Image
                src="/logo/logo-black.png"
                alt="Accountings Zone Logo"
                width={100}
                height={100}
                className="w-[150px] sm:w-56 h-auto"
              />
            </Link>
            <div className="flex mt-1 sm:mt-4 gap-1 flex-col">
              <h3 className="sm:text-base text-sm font-semibold">
                Building wealth, creating futures.
              </h3>
              <p className="text-xs sm:text-sm">
                Trusted financial consulting firm providing expert guidance and
                personalized solutions to help clients unlock their full
                financial potential.
              </p>

              <ul className="flex mt-6 gap-x-4 items-center sm:gap-x-6">
                <li>
                  <Link
                    href="https://www.facebook.com/people/Accountings-Zone/100093148360065/"
                    target="_blank"
                    className="text-black hover:text-[#fbc710] duration-300"
                  >
                    <FaFacebookF className="size-4 sm:size-5" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://x.com/accountingszone"
                    target="_blank"
                    className="text-black hover:text-[#fbc710] duration-300"
                  >
                    <FaXTwitter className="size-4 sm:size-5" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/accountingszone/"
                    target="_blank"
                    className="text-black hover:text-[#fbc710] duration-300"
                  >
                    <FaInstagram className="size-4 sm:size-5" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/company/accountingszone/?viewAsMember=true"
                    target="_blank"
                    className="text-black hover:text-[#fbc710] duration-300"
                  >
                    <FaLinkedin className="size-4 sm:size-5" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-4 sm:mb-0">
            <h3 className="font-semibold sm:text-base text-sm mb-1 sm:mb-3">
              Services
            </h3>
            <ul className="space-y-1 sm:space-y-3 text-xs sm:text-sm">
              <li>
                <Link
                  href="#"
                  className="text-black transition-colors duration-300 hover:text-[#fbc710]"
                >
                  Financial Statements
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black transition-colors duration-300 hover:text-[#fbc710]"
                >
                  Bookkeeping Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black transition-colors duration-300 hover:text-[#fbc710]"
                >
                  Tax Planning
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-4 sm:mb-0">
            <h3 className="font-semibold sm:text-base text-sm mb-1 sm:mb-3">
              Legal
            </h3>
            <ul className="space-y-1 sm:space-y-3 text-xs sm:text-sm">
              <li>
                <Link
                  href="#"
                  className="text-black transition-colors duration-300 hover:text-[#fbc710]"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black transition-colors duration-300 hover:text-[#fbc710]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black transition-colors duration-300 hover:text-[#fbc710]"
                >
                  Sitemap
                </Link>
              </li>
              <li>© Accountings Zone. 2024</li>
            </ul>
          </div>

          <div className="mb-4 sm:mb-0">
            <h3 className="font-semibold sm:text-base text-sm mb-3 sm:mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 sm:space-y-6 text-xs sm:text-sm">
              <li>
                <Link
                  href="tel:+17606860609"
                  className="flex items-center gap-2 text-black transition-colors duration-300 hover:text-[#fbc710]"
                >
                  <FaPhone className="size-4" /> +1-760-686-0609
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:info@accountingszone.com"
                  className="flex items-center gap-2 text-black transition-colors duration-300 hover:text-[#fbc710]"
                >
                  <MdEmail className="size-4 sm:size-5" />
                  info@accountingszone.com
                </Link>
              </li>
              <li>
                <Link
                  href="https://g.co/kgs/82Pdpx9"
                  className="flex items-center gap-2 text-black transition-colors duration-300 hover:text-[#fbc710]"
                >
                  <FaMapMarkerAlt className="size-4 sm:size-5" /> 124 S Gemstone
                  Street, Ridgecrest California 93555
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
