"use client";
import React from "react";

type MenuToggleProps = {
  isOpen: boolean;
  onClick: () => void;
};

export default function MenuToggle({ isOpen, onClick }: MenuToggleProps) {
  return (
    <button
      onClick={onClick}
      className={`relative sm:hidden block w-6 h-3 bg-transparent border-none appearance-none cursor-pointer transition-transform ${
        isOpen ? "rotate-180" : ""
      }`}
    >
      <span
        className={`absolute top-0 left-0 w-full border-t-2 transition-transform ${
          isOpen ? "translate-y-0.5 border-yellow-400" : "border-black"
        }`}
      />
      <span
        className={`absolute bottom-0 left-0 w-full border-t-2 transition-transform ${
          isOpen ? "-translate-y-0.5 border-yellow-400" : "border-black"
        }`}
      />
    </button>
  );
}
