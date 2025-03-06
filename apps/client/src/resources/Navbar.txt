import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="h-[71px] max-w-sm w-full rounded-xl bg-white/20 border border-white/20 backdrop-blur-lg shadow-2xl flex justify-center items-center gap-4">
      <div className="cursor-pointer">
        <Image
          src="svg/hamburger.svg"
          alt="right-arrow"
          width={24}
          height={24}
          className="max-w-6 w-full h-6"
        />
      </div>
      <div className="w-28 sm:w-44">
        <Image
          src="svg/brix-logo.svg"
          alt="right-arrow"
          width={24}
          height={24}
          className="max-w-12 w-full h-12"
        />
      </div>
      <button className="bg-white max-w-28 w-full h-10 rounded-lg text-xs sm:text-xs font-semibold leading-3.5 cursor-pointer uppercase tracking-wide shadow-sm hover:shadow-md transition-shadow text-center">Contact Us</button>
    </nav>
  );
}
