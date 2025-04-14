import Image from "next/image";

export default function BackwardFacing() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5 lg:gap-15 w-80 md:w-full md:px-10 tracking-wide">
      <div className="flex flex-col justify-center items-start md:items-start gap-4 p-2 md:p-2 lg:p-6">
        <Image
          src="/svg/stopboard-logo.svg"
          alt="stopboard-logo"
          width={48}
          height={48}
          className="w-8 h-8 md:w-12 md:h-12"
        />
        <h3 className="text-md md:text-lg font-black text-left md:font-black">On-Time Delivery</h3>
        <p className="text-sm md:text-md font-medium text-left md:text-left text-black/60">
          Your home, delivered on <br className="hidden md:block"/> time, or we pay you a <br className="hidden md:block"/> penalty.
          No excuses.
        </p>
      </div>
      <div className="flex flex-col justify-center items-start md:items-start gap-4 p-2 md:p-2 lg:p-6">
        <Image
          src="/svg/dollar-logo.svg"
          alt="dollar-logo"
          width={48}
          height={48}
          className="w-8 h-8 md:w-12 md:h-12"
        />
        <h3 className="text-md md:text-lg font-black text-left md:font-black">Fixed Pricing</h3>
        <p className="text-sm md:text-md font-medium text-left md:text-left text-black/60">
          Transparent pricing <br className="hidden md:block"/> ensures you pay only <br className="hidden md:block"/> what was agreed upon.
        </p>
      </div>
      <div className="flex flex-col justify-center items-start md:items-start gap-4 p-2 md:p-2 lg:p-6">
        <Image
          src="/svg/badge-logo.svg"
          alt="badge-logo"
          width={48}
          height={48}
          className="w-8 h-8 md:w-12 md:h-12"
        />
        <h3 className="text-md md:text-lg font-black text-left md:font-black">Unmatched Quality</h3>
        <p className="text-sm md:text-md font-medium text-left md:text-left text-black/60">
          7-stage quality checks <br className="hidden md:block"/>
          and 400+ tests guarantee <br className="hidden md:block"/>
          perfection.
        </p>
      </div>
      <div className="flex flex-col justify-center items-start md:items-start gap-4 p-2 md:p-2 lg:p-6">
        <Image
          src="/svg/calendar-logo.svg"
          alt="calendar-logo"
          width={48}
          height={48}
          className="w-8 h-8 md:w-12 md:h-12"
        />
        <h3 className="text-md md:text-lg font-black text-left md:font-black">Zero EMI Cost</h3>
        <p className="text-sm md:text-md font-medium text-start md:text-left text-black/60">
          Start building today with <br className="hidden md:block"/>
          zero EMI during the <br className="hidden md:block"/>
          construction phase.
        </p>
      </div>
    </div>
  );
}
