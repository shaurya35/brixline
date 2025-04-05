"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function FaqBack() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const faqData = [
    {
      question:
        "What is the estimated time it will take to build a full house",
      answer:
        "It takes 6 to 14 months to complete a house construction project. Generally, a 5-month period to build the first floor and 1.5 months for each one after that is the standard. However, this depends on the space, built-up area, locations, design, construction type (foundation or core), etc. You can track your project, including updates, inspection reports, payment schedules, etc., on the customer app.",
    },
    {
      question: "Do I have to pay the full amount before the project starts",
      answer:
        "Payments are structured in stages based on a personalised schedule that aligns with your project's construction phases and overall cost. The process begins with an 8% booking amount, which covers the entire design phase, including soil testing, digital surveys, 2D floor plans, structural drawings, MEP drawings, and 3D elevation. <br /><br /> After the design phase is complete, the finalised plan is handed over to the project management team, and mobilisation at the site is initiated. Subsequent payments are made in stages, corresponding to specific milestones in the construction process",
    },
    {
      question:
        "Why Choose Brix Homes over local home construction contractors",
      answer:
        "Below are some key advantages of choosing Brix Homes as your home building contractor over a local contractor: <br /><br /> With Brix Homes You Have: <br /> Verified/ certified trust <br />Written and detailed understanding <br />Price and timeline is fixed exactly before the construction starts <br />Focus is more on structure/ electrical/ plumbing compared to Interiors <br />Large team of specialists, not dependent upon one individual <br />In-house team for design, construction, approvals etc.<br /><br />With Local Contractor You Have: <br />Trust Issues <br />Partly written, partly verbal understanding <br />Price and timeline changes as construction progresses and decisions are made <br />Focus is more on interiors compared to structure/ electrical/ plumbing <br />Owner driven builder with a small team",
    },
    {
      question: "Why is Brix Homes one of the top home builders in Delhi NCR",
      answer:
        "We are the largest builders of custom villas, simplex-duplex and independent floors in Delhi, Gurugram, Noida, Faridabad and Ghaziabad. We have over 100+ home projects under our umbrella. We are continuing to grow at an exponential rate.",
    },
    {
      question:
        "What to consider when analysing the quotation by a home builder or construction contractor",
      answer:
        "Don’t compare the cost just on the sqft rate. Check detailed Specifications. Like for Car shopping, You don't just ask the price, right? You check the engine, build, maintenance, etc. Local home Builders give you the Handoff Numbers while being silent on the specification used. We at Brix Homes give us an extensive 70+ specification document . Check out our Construction Cost Calculator to get exact cost with detailed specification.",
    },
  ];
  return (
    <div className="max-w-4xl mx-auto mt-8 px-2 md:px-32 tracking-wide">
      {faqData.map((item, index) => (
        <div
          key={index}
          className="border-b border-gray-100 last:border-0 py-4"
        >
          <div
            className="flex justify-between items-center cursor-pointer px-4 md:px-0 gap-5"
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
            <div className="mt-4 text-sm md:text-md text-gray-600 transition-all duration-300 px-4 md:px-0">
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
  );
}
