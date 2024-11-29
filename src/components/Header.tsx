import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="relative w-full z-20 bg-white">
      <div className="flex fixed top-0 left-0 bg-transparent items-center justify-evenly w-full mx-auto py-4 px-1 sm:p-4 md:py-6 lg:py-10">
        <div className="sm:mr-5">
          <Link href="/">
            <Image
              src="/logo/logo.png"
              alt="Accountings Zone Logo"
              width={100}
              height={100}
              className="w-[150px] sm:w-56 h-auto"
            />
          </Link>
        </div>
        <Navbar />
      </div>
    </header>
  );
}
