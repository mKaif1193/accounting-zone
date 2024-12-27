"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";

type SliderProps = {
  images: string[];
  title?: string;
  description?: string;
  btnText?: string;
  btnHref?: string;
};

export default function Slider({
  images,
  title,
  description,
  btnText,
  btnHref,
}: SliderProps) {
  const router = useRouter();
  // const [isImageSliderHover, setIsImageSliderHover] = useState(false);

  return (
    <div
      className="relative max-w-[1800px] mx-auto h-[calc(100vh-93px)] lg:h-[calc(100vh-110px)] 2xl:max-w-[calc(100vw-120px)]"
      // onMouseEnter={() => setIsImageSliderHover(true)}
      // onMouseLeave={() => setIsImageSliderHover(false)}
    >
      <ImagesSlider className="sm:mt-[175px]" images={images}>
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
            duration: 1,
          }}
          className="z-50 flex flex-col py-8 px-12 relative pl-20 before:content-[''] before:absolute before:top-0 before:left-10 before:w-[150px] before:h-full before:border-[4px] before:border-solid before:border-[#fbc710] before:border-r-0"
        >
          <motion.p className="font-bold text-4xl md:text-7xl flex flex-col gap-2 text-white py-4 mb-20">
            <span className="text-lg sm:text-xl text-[#fbc710] font-normal uppercase">
              {title}
            </span>
            {description}
          </motion.p>

          {btnText && (
            <button
              onClick={() => router.push(`${btnHref}`)}
              className="text-white flex gap-2 w-36 sm:w-40 text-lg sm:text-xl text-start cursor-pointer"
            >
              {btnText}{" "}
              <ChevronRight className="lg:hover:animate-arrow-hover" />
            </button>
          )}
        </motion.div>
      </ImagesSlider>

      {/* <div
        className={`bg-white absolute bottom-0 right-0 grid grid-cols-3 gap-x-32 p-12 transition-opacity duration-500 ${
          isImageSliderHover ? "opacity-95" : "opacity-0"
        }`}
      >
        <div className="flex items-center gap-8">
          <span className="font-semibold text-6xl">01</span>
          <div className="flex flex-col">
            <span className="font-semibold text-xl">Home In </span>
            <span className="font-semibold text-xl">Forest</span>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <span className="font-semibold text-6xl">02</span>
          <div className="flex flex-col">
            <span className="font-semibold text-xl">Villa In </span>
            <span className="font-semibold text-xl">London</span>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <span className="font-semibold text-6xl">03</span>
          <div className="flex flex-col">
            <span className="font-semibold text-xl">Rennovate</span>
            <span className="font-semibold text-xl">Exterior With</span>
            <span className="font-semibold text-xl">Garden</span>
          </div>
        </div>
      </div> */}
    </div>
  );
}
