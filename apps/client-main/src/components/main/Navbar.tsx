import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="relative h-[71px] max-w-screen-xl w-80 sm:w-96 lg:w-full flex justify-between items-center lg:px-20 xl:px-20">
      <div className="flex justify-start items-start">
        <Image
          src="/svg/brixline-logo.svg"
          alt="brixline-logo"
          width={24}
          height={24}
          className="w-28 h-28"
        />
      </div>
      <button className="bg-white max-w-28 w-full h-10 rounded-lg text-sm md:text-xs font-black md:font-semibold leading-3.5 cursor-pointer uppercase shadow-sm hover:shadow-md transition-shadow text-center">
        Contact Us
      </button>
    </nav>
  );
}
