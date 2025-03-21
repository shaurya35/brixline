import Navbar from "@/components/main/Navbar";
import Hero from "@/components/main/Hero";
import Policy from "@/components/main/Policy";

export default function Home() {
  return (
    <>
      <header className="relative bg-[url('/main-image-mob.png')] md:bg-[url('/main-image.png')] h-[574px] md:h-[817px] w-full bg-cover bg-center tracking-wide">
        <div className="absolute inset-0 bg-black/60 md:bg-black/70"></div>
        <div className="flex justify-center items-center pt-6 px-10">
          <Navbar/>
        </div>
        <div className="flex justify-center items-center h-[714px]">
          <Hero/>
        </div>
      </header>
      <div className="pt-80 md:pt-0"></div>
      <section >
        <Policy/>
      </section>
    </>
  );
}
