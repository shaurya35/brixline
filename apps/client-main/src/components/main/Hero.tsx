import Form from "@/components/main/Form";
import Image from "next/image";

export default function Hero() {
  return (
    <main className="relative flex justify-around items-center text-center max-w-screen-xl w-full mx-auto flex-wrap text-white mt-12 md:mt-0 gap-7">
      <div className="absolute block md:hidden top-16 right-12 sm:right-56 ">
        <Image
          src="/svg/ten-years.svg"
          alt="ten-years"
          width={80}
          height={80}
          className="w-20 h-20"
        />
      </div>
      <div className="h-[220px] md:h-[338px] flex flex-col justify-evenly items-start">
        <h1 className="text-white text-5xl md:text-6xl font-black leading-13 md:leading-18 text-left">
          You <br className="block md:hidden" /> Dream, <br /> We Build.
        </h1>
        <p className="text-md sm:text-lg opacity-60 text-left">
          Your Perfect Home, Designed & Built for You.{" "}
          <br className="block xl:hidden" /> Hassle-free, On-Time,
          <br className="hidden xl:block" /> and Within Budget.
        </p>
        <div className="hidden md:flex gap-3 xl:gap-5 2xl:gap-10">
          <div className="gap-1 flex flex-col">
            <div className="text-xl xl:text-2xl font-semibold leading-7">
              1.2 Lakh
            </div>
            <p className="uppercase text-xs xl:text-sm font-extralight leading-5 opacity-60">
              sq. ft. delivered
            </p>
          </div>
          <div className="h-10 border-r border-[#D9D9D980] opacity-50"></div>
          <div className="gap-1 flex flex-col">
            <div className="text-xl xl:text-2xl font-semibold leading-7">
              25+
            </div>
            <p className="uppercase text-xs xl:text-sm font-extralight leading-5 opacity-60">
              ongoing projects
            </p>
          </div>
          <div className="h-10 border-r border-[#D9D9D980] opacity-50"></div>
          <div className="gap-1 flex flex-col">
            <div className="text-xl xl:text-2xl font-semibold leading-7">
              ₹100 Cr+
            </div>
            <p className="uppercase text-xs xl:text-sm font-extralight leading-5 opacity-60">
              project value
            </p>
          </div>
        </div>
      </div>
      <div className="text-white ">
        <Form />
      </div>
    </main>
  );
}
