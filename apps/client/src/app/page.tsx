import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="relative h-[817px] w-full bg-[url('/main-image.png')] bg-cover bg-left px-4 sm:px-10 lg:px-30 2xl:px-72 ">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 sm:pt-10 flex items-center justify-between text-white h-[103px]">
          <div className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight tracking-wide cursor-pointer">
            Brix
          </div>
          <button className="flex justify-center items-center border rounded-xl border-white py-3 px-4 lg:py-4 sm:px-6 gap-2.5 cursor-pointer">
            <div className="text-lg">BUILD WITH US</div>
            <Image
              src="/right-arrow.svg"
              alt="right-arrow"
              width={15}
              height={17}
              className="w-4 h-4"
            />
          </button>
        </div>
        <div className="relative flex justify-between items-start sm:items-center flex-wrap h-[714px]">
          <div className="text-white h-[400px]">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-black leading-11 sm:leading-15 lg:leading-20">Get Your Dream <br /> Home Delivered On <br /> Time</div>
            <div className="text-md sm:text-lg lg:text-xl font-normal leading-5 sm:leading-6 lg:leading-8 opacity-50 pt-4">
              Your Perfect Home, Designed & Built for You. Hassle-free, On- <br /> Time,
              and Within Budget.
            </div>
            <div className="hidden sm:flex justify-around items-center text-center pt-6">
              <div>
                <div className="text-2xl font-semibold leading-7 ">1.2 Lakh</div>
                <div className="text-sm font-light leading-5 pt-1 opacity-75">SQ. FT. DELIVERED</div>
              </div>
              <div className="h-10 border-r border-[#D9D9D980] opacity-50"></div>
              <div>
                <div className="text-2xl font-semibold leading-7">25+</div>
                <div className="text-sm font-light leading-5 pt-1 opacity-75">ONGOING PROJECTS</div>
              </div>
              <div className="h-10 border-r border-[#D9D9D980] opacity-50"></div>
              <div>
                <div className="text-2xl font-semibold leading-7">₹100Cr+</div>
                <div className="text-sm font-light leading-5 pt-1 opacity-75">PROJECT VALUE</div>
              </div>
            </div>
          </div>
          <div className="text-xl font-normal leading-8 text-white">right side</div>
        </div>
      </header>
      <main>contents</main>
      <footer>footer</footer>
    </>
  );
}
