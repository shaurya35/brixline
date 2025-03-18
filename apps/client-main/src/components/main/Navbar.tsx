import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="h-[71px] max-w-sm w-full rounded-xl bg-white/20 border border-white/20 backdrop-blur-lg shadow-2xl flex justify-around items-center">
      <div className="w-28 sm:w-44">
        <Image
          src="svg/brix-logo.svg"
          alt="right-arrow"
          width={24}
          height={24}
          className="max-w-12 w-full h-12"
        />
      </div>
      <button className="bg-white max-w-28 w-full h-10 rounded-lg text-sm md:text-xs font-black md:font-semibold leading-3.5 cursor-pointer uppercase shadow-sm hover:shadow-md transition-shadow text-center">Contact Us</button>
    </nav>
  );
}
