import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaPhone, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="relative mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 md:py-16 lg:py-20 xl:py-[150px] before:absolute before:left-[15px] before:top-0 before:w-[calc(100%-30px)] before:border-t before:border-gray-400">
        <div className="flex flex-wrap gap-8 justify-evenly">
          <div className="mb-6 w-72 sm:mb-0">
            <Link href="/" className="flex flex-col">
              <Image
                src="/logo/logo-black.png"
                alt="Accountings Zone Logo"
                width={250}
                height={250}
              />
            </Link>
            <div className="flex mt-4 gap-1 flex-col">
              <h3 className="font-semibold">
                Building wealth, creating futures.
              </h3>
              <p className="text-sm">
                Trusted financial consulting firm providing expert guidance and
                personalized solutions to help clients unlock their full
                financial potential.
              </p>
            </div>
          </div>

          <div className="mb-6 sm:mb-0">
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-black transition-colors duration-300 hover:text-yellow-500"
                >
                  Financial Statements
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black transition-colors duration-300 hover:text-yellow-500"
                >
                  Bookkeeping Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black transition-colors duration-300 hover:text-yellow-500"
                >
                  Tax Planning
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-6 sm:mb-0">
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-black transition-colors duration-300 hover:text-yellow-500"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black transition-colors duration-300 hover:text-yellow-500"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>© Accountings Zone. 2024</li>
            </ul>
          </div>

          <div className="mb-6 sm:mb-0">
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-8 text-sm">
              <li className="flex gap-2">
                <FaPhone /> +1-760-686-0609
              </li>
              <li>
                <Link
                  href="/get-a-consultation"
                  className="hover:text-black bg-black text-white hover:bg-yellow-500 px-4 py-2 rounded-3xl transition-colors duration-300"
                >
                  Schedule Your Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Language Switcher */}
          {/* <div className="mb-6 lg:mb-0">
            <Link
              href="#"
              className="text-black transition-colors duration-300 hover:text-yellow-500 font-bold"
            >
              Eng
            </Link>
          </div> */}

          <div className="mt-6 lg:mt-0">
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="https://www.facebook.com/people/Accountings-Zone/100093148360065/"
                  target="_blank"
                  className="text-black hover:text-yellow-500 duration-300"
                >
                  <FaFacebookF className="size-5" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://x.com/accountingszone"
                  target="_blank"
                  className="text-black hover:text-yellow-500 duration-300"
                >
                  <FaXTwitter className="size-5" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/accountingszone/"
                  target="_blank"
                  className="text-black hover:text-yellow-500 duration-300"
                >
                  <FaInstagram className="size-5" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/company/accountingszone/?viewAsMember=true"
                  target="_blank"
                  className="text-black hover:text-yellow-500 duration-300"
                >
                  <FaLinkedin className="size-5" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
