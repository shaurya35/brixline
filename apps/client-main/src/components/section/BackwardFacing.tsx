import Image from "next/image";

export default function BackwardFacing() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5 lg:gap-15 tracking-wide">
      <div className="flex flex-col justify-center items-center md:items-start gap-2 p-2 md:p-2 lg:p-6">
        <Image
          src="/svg/stopboard-logo.svg"
          alt="stopboard-logo"
          width={48}
          height={48}
          className="w-8 h-8 md:w-12 md:h-12"
        />
        <h3 className="text-sm md:text-lg font-black md:font-medium">On-Time Delivery</h3>
        <p className="text-sm md:text-md font-extralight text-center md:text-left text-black/60">
          Your home, delivered on <br /> time, or we pay you a <br /> penalty.
          No excuses.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center md:items-start gap-2 p-2 md:p-2 lg:p-6">
        <Image
          src="/svg/dollar-logo.svg"
          alt="dollar-logo"
          width={48}
          height={48}
          className="w-8 h-8 md:w-12 md:h-12"
        />
        <h3 className="text-sm md:text-lg font-black md:font-medium">Fixed Pricing</h3>
        <p className="text-sm md:text-md font-extralight text-center md:text-left text-black/60">
          Transparent pricing <br /> ensures you pay only <br /> what was agreed upon.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center md:items-start gap-2 p-2 md:p-2 lg:p-6">
        <Image
          src="/svg/badge-logo.svg"
          alt="badge-logo"
          width={48}
          height={48}
          className="w-8 h-8 md:w-12 md:h-12"
        />
        <h3 className="text-sm md:text-lg font-black md:font-medium">Unmatched Quality</h3>
        <p className="text-sm md:text-md font-extralight text-center md:text-left text-black/60">
          7-stage quality checks <br />
          and 400+ tests guarantee <br />
          perfection.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center md:items-start gap-2 p-2 md:p-2 lg:p-6">
        <Image
          src="/svg/calendar-logo.svg"
          alt="calendar-logo"
          width={48}
          height={48}
          className="w-8 h-8 md:w-12 md:h-12"
        />
        <h3 className="text-sm md:text-lg font-black md:font-medium">Zero EMI Cost</h3>
        <p className="text-sm md:text-md font-extralight text-center md:text-left text-black/60">
          Start building today with <br />
          zero EMI during the <br />
          construction phase.
        </p>
      </div>
    </div>
  );
}
