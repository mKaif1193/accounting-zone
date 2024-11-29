"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import { useRouter } from "next/navigation";

const images = [
  "/consultation/consultation1.jpg",
  "/consultation/consultation2.jpg",
  "/consultation/consultation3.jpg",
  "/consultation/consultation4.jpg",
  "/consultation/consultation5.jpg",
];

export default function Slider() {
  const router = useRouter();

  return (
    <ImagesSlider className="h-[40rem] sm:mt-36" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-4xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Unlock your financial potential with expert guidance <br />
          <span className="text-sm sm:text-lg font-semibold">
            Comprehensive financial consulting services tailored to your needs
          </span>
        </motion.p>
        <button
          onClick={() => router.push("get-a-consultation")}
          className="px-4 py-2 backdrop-blur-sm border hover:scale-110 bg-[#fbc710]/10 border-[#fbc710]/20 text-white mx-auto text-center text-sm sm:text-lg font-semibold rounded-full relative duration-300 mt-4"
        >
          <span>Schedule Your Consultation</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-[#fbc710] to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
