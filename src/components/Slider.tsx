"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import { useRouter } from "next/navigation";

type SliderProps = {
  images: string[];
  title: string;
  description: string;
};

export default function Slider({ images, title, description }: SliderProps) {
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
        <motion.p className="font-bold text-2xl md:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          {title} <br />
          <span className="text-base sm:text-xl font-semibold">
            {description}
          </span>
        </motion.p>
        <button
          onClick={() => router.push("get-a-consultation")}
          className="px-4 py-2 backdrop-blur-sm border hover:scale-110 bg-[#fbc710]/10 border-[#fbc710]/20 text-white mx-auto text-center text-base sm:text-xl font-semibold rounded-full relative duration-300 mt-4"
        >
          <span>Schedule Your Consultation</span>
          <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-[#fbc710] to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
