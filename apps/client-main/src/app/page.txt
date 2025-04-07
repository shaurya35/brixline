import Navbar from "@/components/main/Navbar";
import Hero from "@/components/main/Hero";
import FrontFacing from "@/components/section/FrontFacing";
import BackwardFacing from "@/components/section/BackwardFacing";
import ServiceFront from "@/components/section/ServiceFront";
import ServiceBack from "@/components/section/ServiceBack";
import HomeFront from "@/components/section/HomeFront";
import HomeBack from "@/components/section/HomeBack";
import TestimonialFront from "@/components/section/TestimonialFront";
import TestimonialBack from "@/components/section/TestimonialBack";
import ProcedureFront from "@/components/section/ProcedureFront";
import ProcedureBack from "@/components/section/ProcedureBack";
import FaqFront from "@/components/section/FaqFront";
import FaqBack from "@/components/section/FaqBack";
import Footer from "@/components/footer/Footer"

export default function Home() {
  return (
    <>
      <header className="relative bg-[url('/main-image-mob.png')] md:bg-[url('/main-image.png')] h-[574px] md:h-[817px] w-full bg-cover bg-center tracking-wide">
        <div className="absolute inset-0 bg-black/60 md:bg-black/70"></div>
        <div className="flex justify-center items-center pt-6 px-10">
          <Navbar />
        </div>
        <div className="flex justify-center items-center h-[714px]">
          <Hero />
        </div>
      </header>
      <div className="pt-80 md:pt-0"></div>
      <section>
        <div className="flex flex-col justify-center items-center max-w-screen-xl gap-10 mx-auto w-full py-12 md:py-32">
          <FrontFacing />
          <BackwardFacing />
        </div>
        <div className="bg-[#DADBE44D] w-full">
          <div className="flex flex-col justify-center items-center max-w-screen-xl gap-10 mx-auto w-full py-12 md:py-32">
            <ServiceFront />
            <ServiceBack />
          </div>
        </div>
        <div className="bg-black w-full">
          <div className="flex flex-col justify-center items-center max-w-screen-xl gap-10 mx-auto w-full pt-12 md:py-32">
            <HomeFront />
            <HomeBack />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center max-w-screen-xl gap-10 mx-auto w-full py-12 md:py-32">
          <TestimonialFront />
          <TestimonialBack />
        </div>
        <div className="bg-[#DADBE44D] w-full">
          <div className="flex flex-col justify-center items-center max-w-screen-xl gap-10 mx-auto w-full py-12 md:py-32">
            <ProcedureFront/>
            <ProcedureBack />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center max-w-screen-xl gap-10 mx-auto w-full py-12 md:py-32">
          <FaqFront /> 
          <FaqBack />
        </div>
      </section>
      <footer className="bg-black w-full">
        <div className="max-w-screen-xl mx-auto w-full py-12 md:py-32">
          <Footer />
        </div>
      </footer>
    </>
  );
}
