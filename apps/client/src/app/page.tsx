import React from "react";
import Navbar from "@/components/main/Navbar";
import Form from "@/components/main/Form";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="relative h-[574px] md:h-[817px] w-full bg-[url('/main-image-dark.png')] bg-cover bg-left">
        <div className="absolute inset-0 bg-black/20"></div>
        <Navbar />
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="relative flex justify-center items-center md:justify-between md:items-center flex-wrap h-[714px]">
            <div className="text-white pt-10 md:pt-0 h-[281px] sm:h-[400px]">
              <div className="text-4xl sm:text-5xl xl:text-6xl font-black leading-11 sm:leading-15 lg:leading-20">
                Construct Your <br /> Dream Home Now,{" "}
                <span className="hidden sm:block">& Pay Later</span>
                <span className="block italic sm:hidden">You Pay us Later</span>
              </div>
              <div className="text-md sm:text-lg xl:text-xl font-normal leading-5 sm:leading-6 lg:leading-8 opacity-60 pt-4">
                Your Perfect Home, Designed & Built for You. Hassle-free, On-{" "}
                <br className="hidden sm:block" /> Time, and Within Budget.
              </div>
              <div className="hidden md:flex justify-around items-center text-center pt-6">
                <div>
                  <div className="text-2xl font-semibold leading-7">
                    1.2 Lakh
                  </div>
                  <div className="text-sm font-light leading-5 pt-1 opacity-75">
                    SQ. FT. DELIVERED
                  </div>
                </div>
                <div className="h-10 border-r border-[#D9D9D980] opacity-50"></div>
                <div>
                  <div className="text-2xl font-semibold leading-7">25+</div>
                  <div className="text-sm font-light leading-5 pt-1 opacity-75">
                    ONGOING PROJECTS
                  </div>
                </div>
                <div className="h-10 border-r border-[#D9D9D980] opacity-50"></div>
                <div>
                  <div className="text-2xl font-semibold leading-7">
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
      <section className="max-w-screen-xl mx-auto px-6 pt-[350px] sm:pt-[480px] md:pt-12">
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

        <div className="flex flex-col md:flex-row items-center justify-between pt-10 md:pt-20 pb-20">
          <div className="text-center md:text-left md:w-2/5 p-0 md:p-10">
            <div className="text-sm md:text-md font-bold text-[#7445B2] pt-16">
              OUR PHILOSOPHY
            </div>
            <div className="text-2xl md:text-4xl font-black md:font-thin pt-1 md:pt-4">
              Brixline&apos;s Zero Policy
            </div>
            <div className="text-sm font-thin p-2 md:pt-4 text-black/60">
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
                <div className="text-sm  text-left md:text-center text-black/60 pt-0 md:pt-1">
                  Your Home, Delivered On Time, Or We <br /> Pay You A Penalty, No
                  Excuses.
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
                  Transparent Pricing Ensures You Pay <br /> Only What Was Agreed Upon.
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
                  7-Stage Quality Checks And 400+ <br /> Tests Guarantee Perfection
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
                  Start Building Today With Zero EMI <br /> During The Construction
                  Phase
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
