import React from "react";
import Image from "next/image";
import Link from "next/link";

type ServicesFooterProps = {
  href?: string;
  service?: string;
  text: string;
};

export default function ServicesFooter({
  href,
  service,
  text,
}: ServicesFooterProps) {
  return (
    <div className="flex lg:flex-row flex-col justify-between pt-48 sm:pt-80 lg:pt-40 gap-y-20">
      <p className="lg:w-1/2 font-semibold text-lg lg:text-2xl">
        {text}{" "}
        {href && (
          <Link
            href={href}
            className="hover:text-[#fbc710] underline transition-colors"
          >
            {" "}
            {service}.
          </Link>
        )}
      </p>
      <div className="max-w-[160px]">
        <Image
          src="/curly-lines.svg"
          alt=""
          width={160}
          height={160}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}