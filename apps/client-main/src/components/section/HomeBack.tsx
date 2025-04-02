import Image from "next/image";

export default function HomeBack() {
  return (
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
      <div className="order-1 md:order-2 flex flex-row flex-nowrap items-center gap-8 mt-0 md:mt-20 overflow-x-auto snap-x snap-mandatory w-full pl-4 xl:pl-0">
        <div className="flex flex-col justify-center items-start gap-2 flex-shrink-0 px-2 snap-start ml-10">
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
        <div className="flex flex-col justify-center items-start gap-2 flex-shrink-0 px-2 snap-start" >
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
  );
}
