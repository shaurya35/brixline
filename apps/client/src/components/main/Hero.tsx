import React from "react";
import Form from "@/components/main/Form";

const Hero = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-6">
      <div className="relative flex justify-between items-center flex-wrap h-[714px]">
        <div className="text-white h-[400px]">
          <div className="text-4xl sm:text-5xl xl:text-6xl font-black leading-11 sm:leading-15 lg:leading-20">
            Get Your Dream <br /> Home Delivered On <br /> Time
          </div>
          <div className="text-md sm:text-lg xl:text-xl font-normal leading-5 sm:leading-6 lg:leading-8 opacity-60 pt-4">
            Your Perfect Home, Designed & Built for You. Hassle-free, On-{" "}
            <br /> Time, and Within Budget.
          </div>
          <div className="hidden md:flex justify-around items-center text-center pt-6">
            <div>
              <div className="text-2xl font-semibold leading-7">1.2 Lakh</div>
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
              <div className="text-2xl font-semibold leading-7">₹100Cr+</div>
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
  );
};

export default Hero;
