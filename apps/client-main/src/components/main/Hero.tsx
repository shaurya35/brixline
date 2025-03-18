import Form from "@/components/main/Form";

export default function Hero() {
  return (
    <main className="relative flex justify-around items-center text-center max-w-screen-xl w-full mx-auto flex-wrap text-white">
      <div className="h-[240px] md:h-[338px] flex flex-col justify-evenly items-start">
        <h1 className="text-white text-5xl md:text-6xl font-black leading-11 md:leading-18 text-left">
          You <br className="block md:hidden" /> Dream, <br /> We Build.
        </h1>
        <p className="text-md sm:text-lg leading-5 md:leading-7 opacity-60 text-left">
          Your Perfect Home, Designed & Built for You.{" "}
          <br className="block md:hidden" /> Hassle-free, On-Time,
          <br className="hidden md:block" /> and Within Budget.
        </p>
        <div className="hidden md:flex gap-10">
          <div className="gap-1 flex flex-col">
            <div className="text-2xl font-semibold leading-7">1.2 Lakh</div>
            <p className="uppercase text-sm font-extralight leading-5 opacity-60">
              sq. ft. delivered
            </p>
          </div>
          <div className="h-10 border-r border-[#D9D9D980] opacity-50"></div>
          <div className="gap-1 flex flex-col">
            <div className="text-2xl font-semibold leading-7">25+</div>
            <p className="uppercase text-sm font-extralight leading-5 opacity-60">
              ongoing projects
            </p>
          </div>
          <div className="h-10 border-r border-[#D9D9D980] opacity-50"></div>
          <div className="gap-1 flex flex-col">
            <div className="text-2xl font-semibold leading-7">₹100 Cr+</div>
            <p className="uppercase text-sm font-extralight leading-5 opacity-60">
              project value
            </p>
          </div>
        </div>
      </div>
      <div className="text-white"><Form/></div>
    </main>
  );
}
