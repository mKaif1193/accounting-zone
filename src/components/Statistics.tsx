import React from "react";

export default function Statistics() {
  return (
    <div className="py-16 w-full grid grid-cols-1 justify-center md:grid-cols-3">
      <div className="flex flex-wrap">
        <div
          className="w-full sm:flex sm:items-center sm:text-left text-center mb-8 sm:mb-0"
          data-aos="fade"
        >
          <div className="mb-1 sm:mb-0 sm:mr-6 text-6xl font-bold text-[#fbc710]">
            <span className="" data-end-value="10">
              10
            </span>
          </div>
          <div className="text-base font-semibold uppercase">
            YEARS OF EXPERIENCE
          </div>
        </div>

        <div
          className="w-full sm:flex sm:items-center sm:text-left text-center mb-8 sm:mb-0"
          data-aos="fade"
        >
          <div className="mb-1 sm:mb-0 sm:mr-6 text-6xl font-bold text-[#fbc710]">
            <span className="" data-end-value="43k+">
              43k+
            </span>
          </div>
          <div className="text-base font-semibold uppercase">CUSTOMERS</div>
        </div>

        <div
          className="w-full lg:flex lg:items-center lg:text-left text-center"
          data-aos="fade"
        >
          <div className="mb-1 lg:mb-0 lg:mr-6 text-6xl font-bold text-[#fbc710]">
            <span className="" data-end-value="20+">
              20+
            </span>
          </div>
          <div className="text-base font-semibold uppercase">SPECIALISTS</div>
        </div>
      </div>
    </div>
  );
}
