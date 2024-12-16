import React from "react";
import Link from "next/link";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="relative w-full z-40">
      <div className="flex fixed top-0 left-0 bg-white items-center justify-between w-full mx-auto py-4 px-1 sm:p-4 md:py-6 sm:px-10   ">
        <Link
          href="/"
          className="flex flex-col px-4 py-1.5 justify-center relative pl-[16px] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[40px] before:h-full before:border-[2px] before:border-solid before:border-[#fbc710] before:border-r-0"
        >
          <span className="text-xl sm:text-3xl font-bold">Accountings</span>
          <span className="text-[10px] sm:text-sm text-gray-700">Zone</span>
        </Link>

        <Navbar />

        <Link
          href="tel:17606860609"
          className="hidden xl:block font-bold justify-self-end hover:text-[#fbc710] transition-colors"
        >
          +1 (760) 686 06-09
        </Link>
      </div>
    </header>
  );
}
