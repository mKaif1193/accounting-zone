"use client";
import React from "react";

export default function GlobalLoading() {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-blue-900">
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold mb-4 text-black">Loading...</span>
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 w-full h-full bg-[#fbc710] opacity-60 rounded-full animate-bounce animation-delay-1000">
            L
          </div>
        </div>
      </div>
    </div>
  );
}
