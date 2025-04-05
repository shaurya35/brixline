"use client"
import Image from "next/image";
import { useRef, useState } from "react";

export default function ProcedureBack() {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [showArrows, setShowArrows] = useState({ left: false, right: true });

  const handleScroll = () => {
    if (scrollContainer.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current;
      setShowArrows({
        left: scrollLeft > 0,
        right: scrollLeft < scrollWidth - clientWidth - 1,
      });
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainer.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollContainer.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full relative tracking-wide px-4">
      <div
        ref={scrollContainer}
        onScroll={handleScroll}
        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory lg:snap-none gap-4 pb-4"
      >
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="flex flex-col flex-shrink-0 snap-start w-[284px]"
          >
            <Image
              src={`/png/${
                ["worker", "construction-worker", "planning", "cameras", "home"][i]
              }-image.png`}
              alt="step-image"
              width={284}
              height={231}
              className="w-full h-[231px] object-cover rounded-t-3xl"
            />
            <div className="bg-black rounded-b-3xl p-3 h-[140px]">
              <h2 className="text-white font-extralight text-2xl mb-2">
                {[
                  "Raise a Request",
                  "Meet Our Experts",
                  "Design & Planning",
                  "Track the Construction",
                  "Settle In",
                ][i]}
              </h2>
              <p className="text-white/50 text-sm">
                {[
                  "Connect with us for a free consultation",
                  "Discuss your vision and get expert advice",
                  "Tailored designs that fit your style and budget",
                  "Monitor progress via our mobile app",
                  "Move into your dream home delivered on time",
                ][i]}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden lg:block">
        <button
          onClick={() => scroll("left")}
          className={`absolute left-6 top-1/2 -translate-y-1/2 bg-white px-5 py-2 rounded-full shadow-lg hover:bg-gray-100 transition ${
            !showArrows.left && "opacity-0 cursor-not-allowed"
          }`}
          disabled={!showArrows.left}
        >
           <Image
              src="/svg/scroll-left.svg"
              alt="scroll-left"
              width={16}
              height={26}
              className="w-4 h-6"
            />
        </button>
        <button
          onClick={() => scroll("right")}
          className={`absolute right-6 top-1/2 -translate-y-1/2 bg-white px-5 py-2 rounded-full shadow-lg hover:bg-gray-100 transition ${
            !showArrows.right && "opacity-0 cursor-not-allowed"
          }`}
          disabled={!showArrows.right}
        >
          <Image
              src="/svg/scroll-right.svg"
              alt="scroll-right"
              width={16}
              height={26}
              className="w-4 h-6"
            />
        </button>
      </div>
    </div>
  );
}