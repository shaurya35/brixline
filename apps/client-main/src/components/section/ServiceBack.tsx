"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function ServiceBack() {
  const [isLeftOpen, setIsLeftOpen] = useState(false);
  const [isMidOpen, setIsMidOpen] = useState(false);
  const [isRightOpen, setIsRightOpen] = useState(false);

  return (
    <div className="pt-8 md:pt-10 overflow-x-auto snap-x snap-mandatory tracking-wide">
      <div className="flex flex-nowrap z-50">
        {/* Left */}
        <div className="flex-shrink-0 px-2 snap-center relative overflow-hidden">
          <Image
            src="/png/planning.png"
            alt="planning"
            width={384}
            height={406}
            className="hidden md:block md:w-[384px] md:h-[406px]"
          />
          <Image
            src="/png/planning-mobile.png"
            alt="planning"
            width={230}
            height={320}
            className="block md:hidden w-[230px] h-[320px]"
          />
          <div className="absolute md:hidden inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          {!isLeftOpen && (
            <div
              className="absolute bottom-5 left-30 md:left-30 w-full -translate-x-1/2 text-sm md:text-lg font-bold text-white flex justify-center items-center cursor-pointer"
              onClick={() => setIsLeftOpen(true)}
            >
              Turn Key Constuction
              <Image
                src="/svg/plus-icon.svg"
                alt="plus-icon"
                width={14}
                height={14}
                className="w-2.5 h-2.5 ml-2"
              />
            </div>
          )}
          <div
            className={`absolute bottom-2 md:bottom-5 left-1/2 -translate-x-1/2 w-[90%] md:w-[85%] h-[55%] md:h-[45%] bg-white p-6 md:p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 overflow-hidden ${
              isLeftOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8 pointer-events-none"
            }`}
          >
            <h3 className="text-sm md:text-lg font-bold text-gray-800 mb-2">
              Turn Key Constuction
            </h3>
            <p className="text-xs md:text-sm text-gray-600 mb-4">
              Building dream homes with precision, quality and modern design
              tailored to your lifestyle.
            </p>
            <button
              className="bg-white text-black border border-black/20 text-xs md:text-sm font-black px-2 py-1.5 md:px-3.5 md:py-2.5 rounded-lg hover:bg-gray-100 transition-colors flex justify-center items-center cursor-pointer"
              onClick={() => setIsLeftOpen(false)}
            >
              GET QUOTE
              <Image
                src="/svg/topright-arrow.svg"
                alt="topright"
                width={9}
                height={9}
                className="w-2.5 h-2.5 ml-3"
              />
            </button>
          </div>
        </div>
        {/* Middle */}
        <div className="flex-shrink-0 px-2 snap-center relative overflow-hidden">
          <Image
            src="/png/construction.png"
            alt="Construction"
            width={384}
            height={406}
            className="hidden md:block md:w-[384px] md:h-[406px]"
          />

          <Image
            src="/png/construction-mobile.png"
            alt="construction"
            width={230}
            height={320}
            className="block md:hidden w-[230px] h-[320px]"
          />
          <div className="absolute md:hidden inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          {!isMidOpen && (
            <div
              className="absolute bottom-5 left-30 md:left-36 w-full -translate-x-1/2 text-sm md:text-lg font-bold text-white flex justify-center items-center cursor-pointer"
              onClick={() => setIsMidOpen(true)}
            >
              Commercial Constructions
              <Image
                src="/svg/plus-icon.svg"
                alt="plus-icon"
                width={14}
                height={14}
                className="w-2.5 h-2.5 ml-2"
              />
            </div>
          )}
          <div
            className={`absolute bottom-3 md:bottom-5 left-1/2 -translate-x-1/2 w-[90%] md:w-[85%] h-[55%] md:h-[50%] bg-white p-6 md:p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 overflow-hidden ${
              isMidOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8 pointer-events-none"
            }`}
          >
            <h3 className="text-sm md:text-lg font-bold text-gray-800 mb-2">
              Commercial Constructions
            </h3>
            <p className="text-xs md:text-sm text-gray-600 mb-4">
              Crafting efficient, asthetically pleasing spaces for offices,
              retail outlets, and business hubs.
            </p>
            <button
              className="bg-white text-black border border-black/20 text-xs md:text-sm font-black px-2 py-1.5 md:px-3.5 md:py-2.5 rounded-lg hover:bg-gray-100 transition-colors flex justify-center items-center cursor-pointer"
              onClick={() => setIsMidOpen(false)}
            >
              GET QUOTE
              <Image
                src="/svg/topright-arrow.svg"
                alt="topright"
                width={9}
                height={9}
                className="w-2.5 h-2.5 ml-3"
              />
            </button>
          </div>
        </div>
        {/* Right */}
        <div className="flex-shrink-0 px-2 snap-center relative overflow-hidden">
          <Image
            src="/png/houses.png"
            alt="houses"
            width={384}
            height={406}
            className="hidden md:block md:w-[384px] md:h-[406px]"
          />
          <Image
            src="/png/houses-mobile.png"
            alt="houses"
            width={230}
            height={320}
            className="block md:hidden w-[230px] h-[320px]"
          />
          <div className="absolute md:hidden inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          {!isRightOpen && (
            <div
              className="absolute bottom-5 left-30 md:left-36 w-full -translate-x-1/2 text-sm md:text-lg font-bold text-white flex justify-center items-center cursor-pointer"
              onClick={() => setIsRightOpen(true)}
            >
              Renovation & Remodeling
              <Image
                src="/svg/plus-icon.svg"
                alt="plus-icon"
                width={14}
                height={14}
                className="w-2.5 h-2.5 ml-2"
              />
            </div>
          )}
          <div
            className={`absolute bottom-3 md:bottom-5 left-1/2 -translate-x-1/2 w-[90%] md:w-[85%] h-[55%] md:h-[50%] bg-white p-6 md:p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 overflow-hidden ${
              isRightOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8 pointer-events-none"
            }`}
          >
            <h3 className="text-sm md:text-lg font-bold text-gray-800 mb-2">
              Renovation & Remodeling
            </h3>
            <p className="text-xs md:text-sm text-gray-600 mb-4">
              Transforming existing spaces into beautiful, functional
              environments with innovative solutions.
            </p>
            <button
              className="bg-white text-black border border-black/20 text-xs md:text-sm font-black px-2 py-1.5 md:px-3.5 md:py-2.5 rounded-lg hover:bg-gray-100 transition-colors flex justify-center items-center cursor-pointer"
              onClick={() => setIsRightOpen(false)}
            >
              GET QUOTE
              <Image
                src="/svg/topright-arrow.svg"
                alt="topright"
                width={9}
                height={9}
                className="w-2.5 h-2.5 ml-3"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
