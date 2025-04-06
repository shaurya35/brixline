"use client";
import Image from "next/image";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    location: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Submission failed");
      
      setFormData({ name: "", contact: "", location: "" });
      alert("Thank you! We'll be in touch soon.");
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full lg:w-full flex items-center justify-center bg-inherit tracking-wider">
      <div className="w-full max-w-sm xl:max-w-md bg-[linear-gradient(0deg,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),linear-gradient(0deg,rgba(255,255,255,0.3),rgba(255,255,255,0.3))] border border-white/20 backdrop-blur-3xl shadow-lg mx-7 md:mx-0 py-5 px-5 2xl:py-7 2xl:px-5 rounded-2xl">
        <h3 className="text-center text-[#A9ADB7] text-xs md:text-sm font-bold">
          FREE CONSULTATION
        </h3>
        <h2 className="text-center text-2xl md:text-3xl font-extralight text-white mt-2">
          Connect with our <br /> Construction Experts
        </h2>
        <form className="mt-7 space-y-4" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              placeholder=""
              aria-label="First Name"
              className="w-full p-3 pl-12 border border-[#DADBE4] rounded-md outline-none focus:ring-2 focus:ring-[#A9ADB7] bg-white text-black"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex gap-2 items-center pointer-events-none">
              <Image
                src="/svg/profile-logo.svg"
                alt="profile-logo"
                width={24}
                height={24}
                className="w-5 h-5"
              />
              <div className={`transition-opacity ${formData.name ? "opacity-0" : ""}`}>
                <span className="ml-1 text-lg font-normal text-gray-500/70">
                  First Name
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <input
              type="tel"
              placeholder=""
              aria-label="Contact Number"
              className="w-full p-3 pl-12 border border-[#DADBE4] rounded-md outline-none focus:ring-2 focus:ring-[#A9ADB7] bg-white text-black"
              value={formData.contact}
              onChange={(e) => setFormData({...formData, contact: e.target.value})}
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex gap-2 items-center pointer-events-none">
              <Image
                src="/svg/phone-logo.svg"
                alt="phone-logo"
                width={24}
                height={24}
                className="w-5 h-5"
              />
              <div className={`transition-opacity ${formData.contact ? "opacity-0" : ""}`}>
                <span className="ml-1 text-lg font-normal text-gray-500/70">
                  Contact Number
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder=""
              aria-label="Location of Plot"
              className="w-full p-3 pl-12 border border-[#DADBE4] rounded-md outline-none focus:ring-2 focus:ring-[#A9ADB7] bg-white text-black"
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex gap-2 items-center pointer-events-none">
              <Image
                src="/svg/search-logo.svg"
                alt="search-logo"
                width={24}
                height={24}
                className="w-5 h-5"
              />
              <div className={`transition-opacity ${formData.location ? "opacity-0" : ""}`}>
                <span className="ml-1 text-lg font-normal text-gray-500/70">
                  Location of Plot
                </span>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-black text-sm text-white py-4 rounded-md font-bold hover:bg-gray-900 transition flex justify-center items-center gap-2.5 mt-7 disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                GET A FREE QUOTE
                <Image
                  src="/svg/right-arrow.svg"
                  alt="right-arrow"
                  width={15}
                  height={17}
                  className="w-3.5 h-3.5"
                />
              </>
            )}
          </button>
        </form>
        <p className="text-center font-thin text-xs text-black md:text-[#A9ADB7] mt-3 px-9">
          By proceeding, you are indicating that you have read and agree to our
          <a href="#" className="font-normal underline">
            {" "}
            terms of use{" "}
          </a>
          &amp;
          <a href="#" className="font-normal underline">
            {" "}
            privacy policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Form;