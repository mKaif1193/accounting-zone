"use client";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <main
      className="bg-cover bg-no-repeat min-h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('/error/bg-404.jpg')" }}
    >
      <article className="flex flex-col items-center text-center px-4 py-16 lg:py-36">
        <h2 className="text-black font-bold text-[65px] lg:text-[150px] leading-none mb-8 lg:mb-12">
          404
        </h2>
        <div className="text-black font-bold text-lg lg:text-2xl leading-6 lg:leading-9 mb-9">
          Oops! Page Not Found
        </div>
        <div className="text-gray-500 text-base sm:text-xl leading-6 mb-10">
          It seems we can&apos;t find what you&apos;re looking for. Perhaps
          searching can help or go back to
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => router.back()}
            className="font-semibold text-base sm:text-xl text-black bg-[#fbc710] hover:bg-[#e2b512] px-5 sm:px-7 py-1.5 sm:py-2.5 rounded-3xl duration-300 transition-colors"
          >
            Go Back
          </button>
          <button
            onClick={() => router.replace("/")}
            className="font-semibold text-base sm:text-xl text-black bg-[#fbc710] hover:bg-[#e2b512] px-5 sm:px-7 py-1.5 sm:py-2.5 rounded-3xl duration-300 transition-colors"
          >
            Homepage
          </button>
        </div>
      </article>
    </main>
  );
}
