import Image from "next/image";

export default function HomeBack() {
  return (
    <>
      <div className="w-full overflow-hidden tracking-wide flex flex-col">
        <div className="order-2 md:order-1 relative w-[616px] h-[218px] md:w-full mt-10 md:mt-0 flex justify-center items-center">
          <Image
            src="/house-image.png"
            alt="house-image"
            fill
            className="sm:hidden object-cover object-left"
            sizes="(max-width: 768px) 100vw, 616px"
          />
          <Image
            src="/house-image.png"
            alt="house-image"
            width={616}
            height={218}
            className="hidden sm:block w-[616px] h-[218px]"
          />
        </div>
        <div className="order-1 md:order-2 flex flex-row flex-nowrap items-center gap-8 mt-0 md:mt-10 overflow-x-auto snap-x snap-mandatory w-full pl-4 xl:pl-0">
          <div className="flex flex-col justify-center items-start gap-2 flex-shrink-0 px-2 snap-start ml-10 pl-7 xl:pl-0">
            <Image
              src="/svg/board-dark.svg"
              alt="board-dark"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <h4 className="text-white text-md md:text-lg font-medium">
              10-Month <br /> Express Delivery
            </h4>
            <p className="text-white/30 text-sm md:text-md">
              Dream home delivered in just <br /> 10 months.
            </p>
          </div>
          <div className="border-r rounded-2xl h-44 text-white/10 flex-shrink-0"></div>
          <div className="flex flex-col justify-center items-start gap-2 flex-shrink-0 px-2 snap-start">
            <Image
              src="/svg/shield-logo.svg"
              alt="board-dark"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <h4 className="text-white text-md md:text-lg font-medium">
              10-Year <br /> Structural Warranty
            </h4>
            <p className="text-white/30 text-sm md:text-md">
              Its a long-lasting quality you <br /> can trust.
            </p>
          </div>
          <div className="border-r rounded-2xl h-44 text-white/10 flex-shrink-0"></div>
          <div className="flex flex-col justify-center items-start gap-2 flex-shrink-0 px-2 snap-start">
            <Image
              src="/svg/calendar-dark.svg"
              alt="calendar-dark"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <h4 className="text-white text-md md:text-lg font-medium">
              Build Now, <br /> Pay Later
            </h4>
            <p className="text-white/30 text-sm md:text-md">
              Easy EMI and construction <br /> finance options.
            </p>
          </div>
          <div className="border-r rounded-2xl h-44 text-white/10 flex-shrink-0"></div>
          <div className="flex flex-col justify-center items-start gap-2 flex-shrink-0 px-2 snap-start">
            <Image
              src="/svg/dollar-sign.svg"
              alt="dollar-sign"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <h4 className="text-white text-md md:text-lg font-medium">
              Zero Cost <br /> overruns
            </h4>
            <p className="text-white/30 text-sm md:text-md">
              Transparent pricing with no <br /> hidden fees.
            </p>
          </div>
          <div className="border-r rounded-2xl h-44 text-white/10 flex-shrink-0"></div>
          <div className="flex flex-col justify-center items-start gap-2 flex-shrink-0 px-2 snap-start pr-4">
            <Image
              src="/svg/medal-image.svg"
              alt="medal-image"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <h4 className="text-white text-md md:text-lg font-medium">
              400+ Quality <br /> Checks
            </h4>
            <p className="text-white/30 text-sm md:text-md">
              Advanced construction <br /> standards ensuring perfection.
            </p>
          </div>
        </div>
      </div>
      <div className="hidden md:block"></div>
      <div className="hidden md:block relative">
        <div className="absolute -bottom-[-160] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 flex flex-row justify-around items-center border border-white/20 h-[200px] lg:h-[224px] w-[768px] lg:w-[1000px] xl:w-[1200px] tracking-wide bg-black">
          <div className="w-1/2 h-full">
            <div className="flex flex-row justify-start items-center border-b border-white/20 gap-12 lg:gap-20 h-1/2">
              <div className="border-r border-white/20 px-5 lg:px-11 xl:px-16 h-full flex flex-col justify-center items-start">
                <h3 className="text-white text-2xl xl:text-4xl">1.2 Lakh</h3>
                <p className="text-[#A9ADB780] text-sm xl:text-sm">
                  SQ. FT. DELIVERED
                </p>
              </div>
              <div className="h-full flex flex-col justify-center items-start">
                <h3 className="text-white text-2xl xl:text-4xl">15</h3>
                <p className="text-[#A9ADB780] text-sm xl:text-sm">
                  ONGOING PROJECTS
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-start items-center gap-10 lg:gap-20 h-1/2">
              <div className="border-r border-white/20 px-8 lg:px-15 xl:px-20 h-full flex flex-col justify-center items-start">
                <h3 className="text-white text-2xl xl:text-4xl">10 Months</h3>
                <p className="text-[#A9ADB780] text-sm xl:text-sm">
                  EXPRESS DELIVERY
                </p>
              </div>
              <div className="h-full flex flex-col justify-center items-start">
                <h3 className="text-white text-2xl xl:text-4xl">470+</h3>
                <p className="text-[#A9ADB780] text-sm xl:text-sm">
                  QUALITY CHECKS
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <Image
              src="/house-image-2.png"
              alt="house-image-2"
              width={509}
              height={152}
              className="w-[509px] h-[152px] object-cover object-left"
            />
          </div>
        </div>
      </div>
      <div className="block md:hidden flex-col justify-center items-center">
        <div className="flex flex-row justify-center items-center border-b text-white/10 gap-12">
          <div className="flex flex-col justify-center items-start">
            <h3 className="text-white text-3xl">1.2 Lakh</h3>
            <p className="text-[#A9ADB780] text-xs">SQ. FT. DELIVERED</p>
          </div>
          <div className="border-r rounded-2xl h-20 text-white/10 flex-shrink-0"></div>
          <div className="flex flex-col justify-center items-start">
            <h3 className="text-white text-3xl">15</h3>
            <p className="text-[#A9ADB780] text-xs">ONGOING PROJECT</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start py-5 ml-4 border-b border-white/10">
          <h3 className="text-white text-3xl">10 Months</h3>
          <p className="text-[#A9ADB780] text-xs">EXPRESS DELIVERY</p>
        </div>
        <div className="flex flex-row justify-center items-center mt-5">
          <div>
            <Image
              src="/house-image-2.png"
              alt="house-image-2"
              width={226}
              height={105}
              className="w-[256px] h-[105px] [transform:scaleX(-1)]"
            />
          </div>
          <div className="flex flex-col justify-center items-start">
            <h3 className="text-white text-3xl">470+</h3>
            <p className="text-[#A9ADB780] text-xs">QUALITY CHECKS</p>
          </div>
        </div>
      </div>
    </>
  );
}
