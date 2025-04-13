"use client";
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/main/Navbar";
import Hero from "@/components/main/Hero";
import FrontFacing from "@/components/section/FrontFacing";
import BackwardFacing from "@/components/section/BackwardFacing";
import ServiceFront from "@/components/section/ServiceFront";
import ServiceBack from "@/components/section/ServiceBack";
import HomeFront from "@/components/section/HomeFront";
import HomeBack from "@/components/section/HomeBack";
// import TestimonialFront from "@/components/section/TestimonialFront";
// import TestimonialBack from "@/components/section/TestimonialBack";
import TestimonialCard from "@/components/section/TestimonialCard";
// import ProcedureFront from "@/components/section/ProcedureFront";
// import ProcedureBack from "@/components/section/ProcedureBack";
// import FaqFront from "@/components/section/FaqFront";
// import FaqBack from "@/components/section/FaqBack";
import Footer from "@/components/footer/Footer";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question:
        "What is the estimated time it will take to build a full house?",
      answer:
        "It takes 6 to 14 months to complete a house construction project. Generally, a 5-month period to build the first floor and 1.5 months for each one after that is the standard. However, this depends on the space, built-up area, locations, design, construction type (foundation or core), etc. You can track your project, including updates, inspection reports, payment schedules, etc., on the customer app.",
    },
    {
      question: "Do I have to pay the full amount before the project starts?",
      answer:
        "Payments are structured in stages based on a personalised schedule that aligns with your project's construction phases and overall cost. The process begins with an 8% booking amount, which covers the entire design phase, including soil testing, digital surveys, 2D floor plans, structural drawings, MEP drawings, and 3D elevation. <br /><br /> After the design phase is complete, the finalised plan is handed over to the project management team, and mobilisation at the site is initiated. Subsequent payments are made in stages, corresponding to specific milestones in the construction process",
    },
    {
      question:
        "Why Choose Brix Homes over local home construction contractors ?",
      answer:
        "Below are some key advantages of choosing Brix Homes as your home building contractor over a local contractor: <br /><br /> With Brix Homes You Have: <br /> Verified/ certified trust <br />Written and detailed understanding <br />Price and timeline is fixed exactly before the construction starts <br />Focus is more on structure/ electrical/ plumbing compared to Interiors <br />Large team of specialists, not dependent upon one individual <br />In-house team for design, construction, approvals etc.<br /><br />With Local Contractor You Have: <br />Trust Issues <br />Partly written, partly verbal understanding <br />Price and timeline changes as construction progresses and decisions are made <br />Focus is more on interiors compared to structure/ electrical/ plumbing <br />Owner driven builder with a small team",
    },
    {
      question: "Why is Brix Homes one of the top home builders in Delhi NCR?",
      answer:
        "We are the largest builders of custom villas, simplex-duplex and independent floors in Delhi, Gurugram, Noida, Faridabad and Ghaziabad. We have over 100+ home projects under our umbrella. We are continuing to grow at an exponential rate.",
    },
    {
      question:
        "What to consider when analysing the quotation by a home builder or construction contractor?",
      answer:
        "Don’t compare the cost just on the sqft rate. Check detailed Specifications. Like for Car shopping, You don't just ask the price, right? You check the engine, build, maintenance, etc. Local home Builders give you the Handoff Numbers while being silent on the specification used. We at Brix Homes give us an extensive 70+ specification document . Check out our Construction Cost Calculator to get exact cost with detailed specification.",
    },
  ];

  return (
    <>
      <header className="relative bg-[url('/main-image-mob.png')] md:bg-[url('/main-image.png')] h-[874px] md:h-[817px] w-full bg-cover bg-center tracking-wide">
        <div className="absolute inset-0 bg-black/60 md:bg-black/70"></div>
        <div className="flex justify-center items-center pt-6 px-6 md:px-10">
          <Navbar />
        </div>
        <div className="flex justify-center items-center h-[714px]">
          <Hero />
        </div>
      </header>
      <div className=""></div>
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
        <div className="pt-20 h-inherit lg:h-[1000px] overflow-hidden">
          <div className="text-sm md:text-md font-bold text-[#7445B2] text-center">
            TESTIMONIALS
          </div>
          <div className="text-2xl md:text-4xl font-semibold md:font-thin text-center pt-1 md:pt-3">
            We&apos;ll let our clients do <br />
            the talking
          </div>

          <div className="mt-2 md:mt-12 overflow-hidden relative">
            <div className="hidden lg:block pointer-events-none absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent z-10"></div>
            <div className="hidden lg:block pointer-events-none absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
            <div className="flex flex-row animate-infinite-scroll gap-3 md:gap-10 lg:hidden w-max">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <TestimonialCard key={i} />
              ))}
            </div>

            <div className="hidden lg:flex justify-center items-center gap-10">
              <div className="flex flex-col animate-vertical-scroll gap-3 md:gap-96">
                {[1, 2, 3].map((i) => (
                  <TestimonialCard key={i} />
                ))}
                {[1, 2, 3].map((i) => (
                  <TestimonialCard key={`clone-${i}`} />
                ))}
              </div>
              <div className="flex flex-col animate-vertical-scroll-offset gap-3 md:gap-96">
                {[1, 2, 3].map((i) => (
                  <TestimonialCard key={i} />
                ))}
                {[1, 2, 3].map((i) => (
                  <TestimonialCard key={`clone-${i}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="pt-20 px-4 xl:px-0">
          <div className="text-sm md:text-md font-bold text-[#7445B2] text-center">
            FAQ&apos;S
          </div>
          <div className="text-2xl md:text-4xl font-semibold md:font-thin text-center pt-1 md:pt-3 ">
            Got Questions? We&apos;ve got <br /> Answers
          </div>

          <div className="max-w-4xl mx-auto mt-8 px-2 md:px-32">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-100 last:border-0 py-4"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-md md:text-lg font-bold md:font-medium">
                    {item.question}
                  </h3>
                  <button className="text-2xl text-[#7445B2]">
                    {activeIndex === index ? (
                      <Image
                        src="/svg/close-icon.svg"
                        alt="minus-logo"
                        width={32}
                        height={32}
                        className="w-6 h-6 md:w-7 md:h-7"
                      />
                    ) : (
                      <Image
                        src="/svg/open-icon.svg"
                        alt="plus-logo"
                        width={32}
                        height={32}
                        className="w-6 h-6 md:w-7 md:h-7"
                      />
                    )}
                  </button>
                </div>
                {activeIndex === index && (
                  <div className="mt-4 text-sm md:text-md text-gray-600 transition-all duration-300 tracking-wide">
                    {item.answer.split("<br />").map((text, i) => (
                      <React.Fragment key={i}>
                        {i > 0 && <br />}
                        {text}
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="pt-20 max-w-screen-xl mx-auto w-full">
          <div className="text-sm md:text-md font-bold text-[#7445B2] text-center">
            OUR PARTNERS
          </div>
          <div className="text-2xl md:text-4xl font-semibold md:font-thin text-center pt-1 md:pt-3 ">
            Winning collaborations that <br /> produce winning homes.
          </div>
          <div className="md:hidden mt-8 overflow-x-hidden">
            <div className="flex animate-infinite-scroll-1 gap-2.5 w-max">
              <div className="w-[160px] h-[72px] px-2.5 py-1 border rounded-lg border-black/5 flex justify-center items-center">
                <Image
                  src="/brands/asian-paints.png"
                  alt="asian-paints"
                  width={110}
                  height={62}
                  className="w-28 h-16"
                />
              </div>
              <div className="w-[160px] h-[72px] px-2.5 py-1 border rounded-lg border-black/5 flex justify-center items-center">
                <Image
                  src="/brands/acc.png"
                  alt="acc"
                  width={96}
                  height={33}
                  className="w-24 h-8"
                />
              </div>
              <div className="w-[160px] h-[72px] px-2.5 py-1 border rounded-lg border-black/5 flex justify-center items-center">
                <Image
                  src="/brands/nerolac.png"
                  alt="nerolac"
                  width={118}
                  height={44}
                  className="w-28 h-11"
                />
              </div>
              <div className="w-[160px] h-[72px] px-2.5 py-1 border rounded-lg border-black/5 flex justify-center items-center">
                <Image
                  src="/brands/jaquar.png"
                  alt="jaquar"
                  width={138}
                  height={86}
                  className="w-32 h-20"
                />
              </div>
              <div className="w-[160px] h-[72px] px-2.5 py-1 border rounded-lg border-black/5 flex justify-center items-center">
                <Image
                  src="/brands/somany.png"
                  alt="somany"
                  width={138}
                  height={36}
                  className="w-32 h-9"
                />
              </div>
              <div className="w-[160px] h-[72px] px-2.5 py-1 border rounded-lg border-black/5 flex justify-center items-center">
                <Image
                  src="/brands/birla-opus.png"
                  alt="birla-opus"
                  width={138}
                  height={75}
                  className="w-32 h-20"
                />
              </div>
              <div className="w-[160px] h-[72px] px-2.5 py-1 border rounded-lg border-black/5 flex justify-center items-center">
                <Image
                  src="/brands/kohler.png"
                  alt="kohler"
                  width={110}
                  height={62}
                  className="w-28 h-16"
                />
              </div>
              <div className="w-[160px] h-[72px] px-2.5 py-1 border rounded-lg border-black/5 flex justify-center items-center">
                <Image
                  src="/brands/tata-tiscon.png"
                  alt="tata-tiscon"
                  width={122}
                  height={51}
                  className="w-32 h-12"
                />
              </div>
              <div className="w-[160px] h-[72px] px-2.5 py-1 border rounded-lg border-black/5 flex justify-center items-center">
                <Image
                  src="/brands/jaquar.png"
                  alt="jaquar"
                  width={138}
                  height={86}
                  className="w-32 h-20"
                />
              </div>
              <div className="w-[160px] h-[72px] px-2.5 py-1 border rounded-lg border-black/5 flex justify-center items-center">
                <Image
                  src="/brands/birla-opus.png"
                  alt="birla-opus"
                  width={138}
                  height={75}
                  className="w-32 h-20"
                />
              </div>
              <div className="w-[160px] h-[72px] px-2.5 py-1 border rounded-lg border-black/5 flex justify-center items-center">
                <Image
                  src="/brands/tata-tiscon.png"
                  alt="tata-tiscon"
                  width={122}
                  height={51}
                  className="w-32 h-12"
                />
              </div>
            </div>
            <div className="flex animate-infinite-scroll-2 gap-2.5 w-max pt-3">
              <div className="w-[160px] h-[72px] px-2.5 py-1 border rounded-lg border-black/5 flex justify-center items-center">
                <Image
                  src="/brands/asian-paints.png"
                  alt="asian-paints"
                  width={110}
                  height={62}
                  className="w-28 h-16"
                />
              </div>
              <div className="w-[160px] h-[72px] px-2.5 py-1 border rounded-lg border-black/5 flex justify-center items-center">
                <Image
                  src="/brands/acc.png"
                  alt="acc"
                  width={96}
                  height={33}
                  className="w-24 h-8"
                />
              </div>
              <div className="w-[160px] h-[72px] px-2.5 py-1 border rounded-lg border-black/5 flex justify-center items-center">
                <Image
                  src="/brands/nerolac.png"
                  alt="nerolac"
                  width={118}
                  height={44}
                  className="w-28 h-11"
                />
              </div>
              <div className="w-[160px] h-[72px] px-2.5 py-1 border rounded-lg border-black/5 flex justify-center items-center">
                <Image
                  src="/brands/jaquar.png"
                  alt="jaquar"
                  width={138}
                  height={86}
                  className="w-32 h-20"
                />
              </div>
              <div className="w-[160px] h-[72px] px-2.5 py-1 border rounded-lg border-black/5 flex justify-center items-center">
                <Image
                  src="/brands/somany.png"
                  alt="somany"
                  width={138}
                  height={36}
                  className="w-32 h-9"
                />
              </div>
              <div className="w-[160px] h-[72px] px-2.5 py-1 border rounded-lg border-black/5 flex justify-center items-center">
                <Image
                  src="/brands/birla-opus.png"
                  alt="birla-opus"
                  width={138}
                  height={75}
                  className="w-32 h-20"
                />
              </div>
              <div className="w-[160px] h-[72px] px-2.5 py-1 border rounded-lg border-black/5 flex justify-center items-center">
                <Image
                  src="/brands/kohler.png"
                  alt="kohler"
                  width={110}
                  height={62}
                  className="w-28 h-16"
                />
              </div>
              <div className="w-[160px] h-[72px] px-2.5 py-1 border rounded-lg border-black/5 flex justify-center items-center">
                <Image
                  src="/brands/tata-tiscon.png"
                  alt="tata-tiscon"
                  width={122}
                  height={51}
                  className="w-32 h-12"
                />
              </div>
              <div className="w-[160px] h-[72px] px-2.5 py-1 border rounded-lg border-black/5 flex justify-center items-center">
                <Image
                  src="/brands/jaquar.png"
                  alt="jaquar"
                  width={138}
                  height={86}
                  className="w-32 h-20"
                />
              </div>
              <div className="w-[160px] h-[72px] px-2.5 py-1 border rounded-lg border-black/5 flex justify-center items-center">
                <Image
                  src="/brands/birla-opus.png"
                  alt="birla-opus"
                  width={138}
                  height={75}
                  className="w-32 h-20"
                />
              </div>
              <div className="w-[160px] h-[72px] px-2.5 py-1 border rounded-lg border-black/5 flex justify-center items-center">
                <Image
                  src="/brands/tata-tiscon.png"
                  alt="tata-tiscon"
                  width={122}
                  height={51}
                  className="w-32 h-12"
                />
              </div>
            </div>
          </div>

          <div className="hidden md:flex justify-center items-center flex-wrap gap-2.5 px-0 md:px-10 pt-10">
            <div className="w-[160px] h-[72px] px-2.5 py-1 border rounded-lg border-black/5 flex justify-center items-center">
              <Image
                src="/brands/asian-paints.png"
                alt="asian-paints"
                width={110}
                height={62}
                className="w-28 h-16"
              />
            </div>
            <div className="w-[160px] h-[72px] px-2.5 py-1 border rounded-lg border-black/5 flex justify-center items-center">
              <Image
                src="/brands/acc.png"
                alt="acc"
                width={96}
                height={33}
                className="w-24 h-8"
              />
            </div>
            <div className="w-[160px] h-[72px] px-2.5 py-1 border rounded-lg border-black/5 flex justify-center items-center">
              <Image
                src="/brands/nerolac.png"
                alt="nerolac"
                width={118}
                height={44}
                className="w-28 h-11"
              />
            </div>
            <div className="w-[160px] h-[72px] px-2.5 py-1 border rounded-lg border-black/5 flex justify-center items-center">
              <Image
                src="/brands/jaquar.png"
                alt="jaquar"
                width={138}
                height={86}
                className="w-32 h-20"
              />
            </div>
            <div className="w-[160px] h-[72px] px-2.5 py-1 border rounded-lg border-black/5 flex justify-center items-center">
              <Image
                src="/brands/somany.png"
                alt="somany"
                width={138}
                height={36}
                className="w-32 h-9"
              />
            </div>
            <div className="w-[160px] h-[72px] px-2.5 py-1 border rounded-lg border-black/5 flex justify-center items-center">
              <Image
                src="/brands/birla-opus.png"
                alt="birla-opus"
                width={138}
                height={75}
                className="w-32 h-20"
              />
            </div>
            <div className="w-[160px] h-[72px] px-2.5 py-1 border rounded-lg border-black/5 flex justify-center items-center">
              <Image
                src="/brands/kohler.png"
                alt="kohler"
                width={110}
                height={62}
                className="w-28 h-16"
              />
            </div>
            <div className="w-[160px] h-[72px] px-2.5 py-1 border rounded-lg border-black/5 flex justify-center items-center">
              <Image
                src="/brands/tata-tiscon.png"
                alt="tata-tiscon"
                width={122}
                height={51}
                className="w-32 h-12"
              />
            </div>
            <div className="w-[160px] h-[72px] px-2.5 py-1 border rounded-lg border-black/5 flex justify-center items-center">
              <Image
                src="/brands/jaquar.png"
                alt="jaquar"
                width={138}
                height={86}
                className="w-32 h-20"
              />
            </div>
            <div className="w-[160px] h-[72px] px-2.5 py-1 border rounded-lg border-black/5 flex justify-center items-center">
              <Image
                src="/brands/birla-opus.png"
                alt="birla-opus"
                width={138}
                height={75}
                className="w-32 h-20"
              />
            </div>
            <div className="w-[160px] h-[72px] px-2.5 py-1 border rounded-lg border-black/5 flex justify-center items-center">
              <Image
                src="/brands/tata-tiscon.png"
                alt="tata-tiscon"
                width={122}
                height={51}
                className="w-32 h-12"
              />
            </div>
          </div>
        </div>
        <div className="pt-12 md:pt-20">
          <div className="py-20 bg-[#F9F9F9]">
            <div className="text-sm md:text-md font-bold text-[#7445B2] text-center">
              OUR COMMITMENT
            </div>
            <div className="text-2xl md:text-4xl font-semibold md:font-thin text-center pt-1 md:pt-3 ">
              Only Pay Us, If We Deliver On <br /> time.{" "}
              <span className="font-black"> Else Don&apos;t</span>
            </div>
            <div className="flex items-center justify-center pt-10 md:pt-12">
              <div className="inline-grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-row justify-center gap-2 items-center text-lg font-normal">
                  <Image
                    src="/svg/tick-logo.svg"
                    alt="tick-logo"
                    width={20}
                    height={14}
                    className="w-5 h-3.5"
                  />
                  100% On-Time Delivery Guarantee
                </div>
                <div className="flex flex-row justify-center gap-1 items-center text-lg font-normal">
                  <Image
                    src="/svg/tick-logo.svg"
                    alt="tick-logo"
                    width={20}
                    height={14}
                    className="w-5 h-3.5"
                  />
                  10 Year Structural Damage Warranty
                </div>
                <div className="flex flex-row justify-center gap-1 items-center text-lg font-normal">
                  <Image
                    src="/svg/tick-logo.svg"
                    alt="tick-logo"
                    width={20}
                    height={14}
                    className="w-5 h-3.5"
                  />
                  1 Year On-Site Damage Warranty
                </div>
                <div className="flex flex-row justify-center gap-1 items-center text-lg font-normal">
                  <Image
                    src="/svg/tick-logo.svg"
                    alt="tick-logo"
                    width={20}
                    height={14}
                    className="w-5 h-3.5"
                  />
                  Build Now - Pay Later Facility
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center pt-10">
              <button className="bg-black flex justify-center items-center border rounded-2xl border-white py-3 px-4 lg:py-3 sm:px-3 gap-2 cursor-pointer">
                <div className="text-sm md:text-md text-white">
                  BOOK CONSULTATION
                </div>
                <Image
                  src="/svg/right-arrow.svg"
                  alt="right-arrow"
                  width={10}
                  height={10}
                  className="w-4 h-4"
                />
              </button>
            </div>
          </div>
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
