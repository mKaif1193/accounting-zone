import React from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import Image from "next/image";

export default function Header() {
  return (
    <header className="relative w-full z-40">
      <div className="flex fixed top-0 left-0 bg-white items-center justify-between w-full mx-auto py-4 px-1 sm:p-4 md:py-6 sm:px-10">
        <Link
          href="/"
          className="relative pl-[16px] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[50px] before:h-full before:border-[2px] before:border-solid before:border-[#fbc710] before:border-r-0 overflow-hidden max-w-[150px]"
        >
          <Image
            src="/logo/Accounting Zone (4).png"
            alt="Accounting Zone Logo"
            width={100}
            height={100}
            className="w-full h-auto"
          />
        </Link>

        <Navbar />

        <Link
          href="/login"
          className="justify-self-end 2xl:text-base text-sm mr-4 lg:mr-10 font-bold border rounded-3xl lg:px-6 px-4 py-1.5 md:py-2 bg-[#fbc710] hover:bg-[#e2b512] transition-colors cursor-pointer uppercase"
        >
          LOGIN
        </Link>

        {/* <Link
          href="tel:17606860609"
          className="hidden xl:block font-bold justify-self-end hover:text-[#fbc710] transition-colors"
        >
          +1 (760) 686 06-09
        </Link>  */}
      </div>
    </header>
  );
}
