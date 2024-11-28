"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import MenuToggle from "./MenuToggle";
import NavigationList from "./NavigationList";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log("Button clicked");
  };

  return (
    <header className="relative w-full z-20 bg-white">
      <div className="flex fixed top-0 left-0 bg-transparent items-center justify-evenly w-full mx-auto px-4 py-4 md:py-6 lg:py-10">
        <div className="flex-shrink-0 mr-5">
          <Link href="/">
            <Image
              src="/logo/logo.png"
              alt="Accountings Zone Logo"
              width={250}
              height={250}
            />
          </Link>
        </div>

        <nav className="relative bg-white p-4">
          <MenuToggle isOpen={isOpen} onClick={handleClick} />
          <NavigationList />
        </nav>

        <button
          className="lg:hidden flex flex-col space-y-1.5 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>
      </div>
    </header>
  );
}
