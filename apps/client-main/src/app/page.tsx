import Navbar from "@/components/main/Navbar";
import Hero from "@/components/main/Hero";

export default function Home() {
  return (
    <>
      <header className="relative bg-[url('/main-image-mob.png')] md:bg-[url('/main-image.png')] h-[574px] md:h-[817px] w-full bg-cover bg-center tracking-wide">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="flex justify-center items-center pt-6 px-10">
          <Navbar/>
        </div>
        <div className="flex justify-center items-center h-[714px]">
          <Hero/>
        </div>
      </header>
    </>
  );
}
