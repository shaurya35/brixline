"use client";
import React, { useState } from "react";
import Navbar from "@/components/main/Navbar";
import Form from "@/components/main/Form";
import Image from "next/image";
import TestimonialCard from "@/components/section/TestimonialCard";

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
      <header className="relative h-[574px] md:h-[817px] w-full bg-[url('/main-image-dark.png')] bg-cover bg-left tracking-wide">
        <div className="absolute inset-0 bg-black/20"></div>
        <Navbar />
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="relative flex justify-center items-center md:justify-between md:items-center flex-wrap h-[714px]">
            <div className="text-white pt-10 md:pt-0 h-[281px] sm:h-[400px]">
              <div className="text-4xl sm:text-5xl xl:text-6xl font-black leading-11 sm:leading-15 lg:leading-16 xl:leading-20 text-center md:text-left">
                Construct Your <br /> Dream Home Now,{" "}
                <span className="hidden sm:block">& Pay Later</span>
                <span className="block italic sm:hidden">You Pay us Later</span>
              </div>
              <div className="text-md sm:text-lg md:text-md xl:text-xl font-normal leading-5 sm:leading-6 lg:leading-7 opacity-60 pt-4 px-2 xs:px-10 sm:px-28 md:px-0 text-center md:text-left">
                Your Perfect Home, Designed & Built for You. Hassle-free, On-{" "}
                <br className="hidden md:block" /> Time, and Within Budget.
              </div>
              <div className="hidden md:flex justify-around items-center text-center pt-6">
                <div>
                  <div className="md:text-lg xl:text-2xl font-semibold leading-7">
                    1.2 Lakh
                  </div>
                  <div className="sm:text-xs xl:text-sm font-light leading-5 pt-1 opacity-75">
                    SQ. FT. DELIVERED
                  </div>
                </div>
                <div className="h-10 border-r border-[#D9D9D980] opacity-50"></div>
                <div>
                  <div className="md:text-lg xl:text-2xl font-semibold leading-7">
                    25+
                  </div>
                  <div className="sm:text-xs xl:text-sm font-light leading-5 pt-1 opacity-75">
                    ONGOING PROJECTS
                  </div>
                </div>
                <div className="h-10 border-r border-[#D9D9D980] opacity-50"></div>
                <div>
                  <div className="md:text-lg xl:text-2xl font-semibold leading-7">
                    ₹100Cr+
                  </div>
                  <div className="text-sm font-light leading-5 pt-1 opacity-75">
                    PROJECT VALUE
                  </div>
                </div>
              </div>
            </div>
            <div className="text-xl font-normal leading-8 text-white">
              <Form />
            </div>
          </div>
        </div>
      </header>
      <section className="max-w-screen-xl mx-auto px-6 pt-[350px] sm:pt-[480px] md:pt-12 tracking-wide">
        <div>
          <div className="text-sm md:text-md font-bold text-[#7445B2] text-center">
            OUR FEATURES
          </div>
          <div className="text-2xl md:text-4xl font-semibold md:font-thin text-center pt-1 md:pt-3">
            Unmatched Quality, <br className="block md:hidden" /> Unwavering{" "}
            <br className="hidden md:block" />
            Commitment
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-1 justify-items-center pt-5 md:pt-10">
            <div className="flex flex-col justify-center items-center flex-wrap p-3 md:p-6 text-sm md:text-base">
              <Image
                src="/svg/board-logo.svg"
                alt="board-logo"
                width={60}
                height={60}
                className="w-8 h-8 md:w-14 md:h-14"
              />
              <div className="pt-2 md:pt-5">10-Month</div>
              <div>Express Delivery</div>
            </div>
            <div className="flex flex-col justify-center items-center flex-wrap p-3 md:p-6 text-sm md:text-base">
              <Image
                src="/svg/shield-logo.svg"
                alt="shield-logo"
                width={60}
                height={60}
                className="w-8 h-8 md:w-14 md:h-14"
              />
              <div className="pt-2 md:pt-5">Flat 10-Year</div>
              <div>Warranty</div>
            </div>
            <div className="flex flex-col justify-center items-center flex-wrap p-3 md:p-6 text-sm md:text-base">
              <Image
                src="/svg/calendar-logo.svg"
                alt="calendar-logo"
                width={60}
                height={60}
                className="w-8 h-8 md:w-14 md:h-14"
              />
              <div className="pt-2 md:pt-5">Build Now,</div>
              <div>Pay Later</div>
            </div>
            <div className="flex flex-col justify-center items-center flex-wrap p-3 md:p-6 text-sm md:text-base">
              <Image
                src="/svg/medal-logo.svg"
                alt="medal-logo"
                width={60}
                height={60}
                className="w-8 h-8 md:w-14 md:h-14"
              />
              <div className="pt-2 md:pt-5">Assured</div>
              <div>Quality Control</div>
            </div>
            <div className="flex flex-col justify-center items-center flex-wrap p-3 md:p-6 text-sm md:text-base">
              <Image
                src="/svg/key-logo.svg"
                alt="key-logo"
                width={60}
                height={60}
                className="w-8 h-8 md:w-14 md:h-14"
              />
              <div className="pt-2 md:pt-5">TurnKey</div>
              <div>Construction</div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-sm md:text-md font-bold text-[#7445B2] text-center pt-16">
            OUR SERVICES
          </div>
          <div className="text-2xl md:text-4xl font-semibold md:font-thin text-center pt-1 md:pt-3">
            Flawless construction powered <br />
            by deep expertise.
          </div>
          <div className="pt-8 md:pt-10 overflow-x-auto snap-x snap-mandatory">
            <div className="flex flex-nowrap z-50">
              <div className="flex-shrink-0 px-2 snap-center">
                <Image
                  src="/residential-construction.png"
                  alt="Residential Construction"
                  width={384}
                  height={250}
                  className="w-[250px] h-[150px] md:w-[384px] md:h-[250px]"
                />
              </div>
              <div className="flex-shrink-0 px-2 snap-center">
                <Image
                  src="/commercial-construction.png"
                  alt="Commercial Construction"
                  width={384}
                  height={250}
                  className="w-[250px] h-[150px] md:w-[384px] md:h-[250px]"
                />
              </div>
              <div className="flex-shrink-0 px-2 snap-center">
                <Image
                  src="/renovation-remodeling.png"
                  alt="Renovation Remodeling"
                  width={384}
                  height={250}
                  className="w-[250px] h-[150px] md:w-[384px] md:h-[250px]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-10 md:pt-20">
          <div className="text-center md:text-left md:w-2/5 p-0 md:p-10">
            <div className="text-sm md:text-md font-bold text-[#7445B2] pt-16">
              OUR PHILOSOPHY
            </div>
            <div className="text-2xl md:text-4xl font-black md:font-thin pt-1 md:pt-4">
              Brixline&apos;s Zero Policy
            </div>
            <div className="text-sm font-thin pt-3 md:pt-4 text-black/60">
              We Believe your dream home deserves{" "}
              <br className="hidden md:block" /> nothing less than perfection.
              That&apos;s why <br className="hidden md:block" /> we&apos;ve
              introduced the Zero Policy.
            </div>
          </div>
          <div className="pt-7 md:pt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:w-3/5">
            <div className="flex flex-row md:flex-col items-center gap-3 p-2 md:p-6">
              <Image
                src="/svg/tools-logo.svg"
                alt="tools-logo"
                width={48}
                height={48}
                className="w-9 h-9 md:w-12 md:h-12"
              />
              <div>
                <div className="text-thin font-black md:text-bold md:text-base text-left md:text-center">
                  Zero Delay Tolerancy
                </div>
                <div className="text-sm text-left md:text-center text-black/60 pt-0 md:pt-1">
                  Your Home, Delivered On Time, Or We <br /> Pay You A Penalty,
                  No Excuses.
                </div>
              </div>
            </div>
            <div className="flex flex-row md:flex-col items-center gap-3 p-2 md:p-6">
              <Image
                src="/svg/briefcase-logo.svg"
                alt="briefcase-logo"
                width={48}
                height={48}
                className="w-9 h-9 md:w-12 md:h-12"
              />
              <div>
                <div className="text-thin font-black md:text-bold md:text-base text-left md:text-center">
                  Zero Cost Overruns
                </div>
                <div className="text-sm text-left md:text-center text-black/60 pt-0 md:pt-1">
                  Transparent Pricing Ensures You Pay <br /> Only What Was
                  Agreed Upon.
                </div>
              </div>
            </div>
            <div className="flex flex-row md:flex-col items-center gap-3 p-2 md:p-6">
              <Image
                src="/svg/worker-logo.svg"
                alt="worker-logo"
                width={48}
                height={48}
                className="w-9 h-9 md:w-12 md:h-12"
              />
              <div>
                <div className="text-thin font-black md:text-bold md:text-base text-left md:text-center">
                  Zero Quality Issues
                </div>
                <div className="text-sm  text-left md:text-center text-black/60 pt-0 md:pt-1">
                  7-Stage Quality Checks And 400+ <br /> Tests Guarantee
                  Perfection
                </div>
              </div>
            </div>
            <div className="flex flex-row md:flex-col items-center gap-3 p-2 md:p-6">
              <Image
                src="/svg/contact-logo.svg"
                alt="contact-logo"
                width={48}
                height={48}
                className="w-9 h-9 md:w-12 md:h-12"
              />
              <div>
                <div className="text-thin font-black md:text-bold md:text-base text-left md:text-center">
                  Zero Cost EMI
                </div>
                <div className="text-sm text-left md:text-center text-black/60 pt-0 md:pt-1">
                  Start Building Today With Zero EMI <br /> During The
                  Construction Phase
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-start items-center flex-row flex-wrap md:flex-nowrap gap-5 lg:gap-7 pt-20">
          <div className="flex justify-start items-center flex-col gap-5 bg-[#F9F9F9] h-453px w-[333px] md:h-[600px] md:w-[558px] px-5 py-9 md:px-5 md:py-10 text-black rounded-2xl">
            <div className="text-[#17161680] text-xs md:text-sm md:text-md font-bold text-center">
              TECHNOLOGY
            </div>
            <div className="text-center text-xl md:text-3xl font-normal leading-tight">
              We construct your dream home. <br /> You track progress on app.
            </div>
            <div className="text-black/60 text-center text-xs md:text-lg font-normal leading-snug">
              Track house construction project progress, raise queries, <br />{" "}
              view inspection reports and more.
            </div>
            <button className="flex justify-center items-center gap-2 border border-[#D7D8E0] px-3.5 py-2 rounded-md cursor-pointer">
              GET STARTED
              <Image
                src="/svg/vector-logo.svg"
                alt="vector-logo"
                width={12}
                height={12}
                className="w-2.5 h-2.5 md:w-3 md:h-3"
              />
            </button>
            <div>
              <Image
                src="/mobiles-images.avif"
                alt="mobiles-image"
                width={500}
                height={500}
                className="w-[414px] h-[207px] md:w-[414px] md:h-[227px] xl:w-[474px] xl:h-[287px]"
              />
            </div>
          </div>
          <div className="bg-black flex justify-start items-center flex-col gap-5 h-453px w-[333px] md:h-[600px] md:w-[558px] px-5 py-9 md:px-5 md:py-10 text-white rounded-2xl">
            <div className="text-[#DADBE4] text-xs md:text-sm md:text-md font-bold text-center">
              FINANCE
            </div>
            <div className="text-white text-center text-xl md:text-3xl font-normal leading-tight">
              Build now pay later - start <br /> today, Pay when you&apos;re
              ready!
            </div>
            <div className="text-white/60 text-center text-xs md:text-lg font-normal leading-snug">
              Take a step towards your dream home with our, Build <br /> Now Pay
              Later Program
            </div>
            <button className="flex justify-center items-center gap-2 border border-white/50 px-3.5 py-2 rounded-md cursor-pointer">
              GET STARTED
              <Image
                src="/svg/vector-logo.svg"
                alt="vector-logo"
                width={12}
                height={12}
                className="w-2.5 h-2.5 md:w-3 md:h-3 text-white"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </button>
            <div>
              <Image
                src="/cards.avif"
                alt="cards"
                width={500}
                height={500}
                className="w-[414px] h-[227px] md:w-[414px] md:h-[227px] xl:w-[474px] xl:h-[287px]"
              />
            </div>
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
        <div className="pt-20">
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
                        src="/svg/minus-logo.svg"
                        alt="minus-logo"
                        width={32}
                        height={32}
                        className="w-6 h-6 md:w-7 md:h-7"
                      />
                    ) : (
                      <Image
                        src="/svg/plus-logo.svg"
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
        <div className="pt-20">
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
      <footer className="flex flex-col items-center pt-10 md:pt-20 tracking-wide">
        <div className="w-full max-w-5xl border-b border-black/10 pb-12">
          <p className="text-lg text-center">Or Call Our Experts Directly @</p>
          <div className="flex justify-center items-center gap-2 pt-2">
            <Image
              src="/svg/telephone-logo.svg"
              alt="telephone-logo"
              width={32}
              height={32}
              className="w-7 h-7"
            />
            <p className="text-[#7445B2] text-2xl font-black">1800-008-2000</p>
          </div>
        </div>
        <div className="pt-10 w-full max-w-5xl border-b border-black/10 pb-12">
          <p className="text-center">Follow Our Journey On:</p>
          <div className="flex justify-center items-center gap-6 md:gap-5 pt-5">
            <Image
              src="/svg/facebook-logo.svg"
              alt="facebook-logo"
              width={30}
              height={30}
              className="w-7 h-7 opacity-40"
            />
            <Image
              src="/svg/instagram-logo.svg"
              alt="instagram-logo"
              width={30}
              height={30}
              className="w-7 h-7 opacity-40"
            />
            <Image
              src="/svg/twitter-logo.svg"
              alt="twitter-logo"
              width={30}
              height={30}
              className="w-7 h-7 opacity-40"
            />
            <Image
              src="/svg/linkedin-logo.svg"
              alt="linkedin-logo"
              width={30}
              height={30}
              className="w-7 h-7 opacity-40"
            />
            <Image
              src="/svg/youtube-logo.svg"
              alt="youtube-logo"
              width={30}
              height={30}
              className="w-7 h-7 opacity-40"
            />
          </div>
        </div>
        <div className="pt-10">
          <p className="text-center">
            WITH LOVE 🩷, FROM BEAUTIFUL <span>INDIA</span>
          </p>
          <div className="text-center text-7xl md:text-[160px] text-black/10 font-black pt-3">
            BRIXLINE
          </div>
        </div>
      </footer>
    </>
  );
}
