import Image from "next/image";

const Form = () => {
  return (
    <div className="w-full md:w-96 lg:w-full flex items-center justify-center bg-inherit tracking-wider">
      <div className="w-full max-w-md bg-white/20 border border-white/20 backdrop-blur-lg shadow-2xl py-6 px-4 rounded-2xl">
        <h3 className="text-center text-[#A9ADB7] text-sm font-bold">
          FREE CONSULTATION
        </h3>
        <h2 className="text-center text-3xl font-extralight text-white mt-2">
          Connect with our <br /> Construction Experts
        </h2>
        <form className="mt-4 space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder=""
              aria-label="First Name"
              className="w-full p-3 pl-28 border border-[#DADBE4] rounded-md outline-none focus:ring-2 focus:ring-black bg-white"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex gap-2 items-center pointer-events-none">
              <Image
                src="/svg/profile-logo.svg"
                alt="profile-logo"
                width={24}
                height={24}
                className="w-5 h-5"
              />
              <span className="ml-1 text-lg font-normal text-gray-500/70">
                First Name
              </span>
            </div>
          </div>
          <div className="relative">
            <input
              type="tel"
              placeholder=""
              aria-label="Contact Number"
              className="w-full p-3 pl-28 border border-[#DADBE4] rounded-md outline-none focus:ring-2 focus:ring-black bg-white"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex gap-2 items-center pointer-events-none">
              <Image
                src="/svg/phone-logo.svg"
                alt="phone-logo"
                width={24}
                height={24}
                className="w-5 h-5"
              />
              <span className="ml-1 text-lg font-normal text-gray-500/70">
                Contact Number
              </span>
            </div>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder=""
              aria-label="Location of Plot"
              className="w-full p-3 pl-28 border border-[#DADBE4] rounded-md outline-none focus:ring-2 focus:ring-black bg-white"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex gap-2 items-center pointer-events-none">
              <Image
                src="/svg/search-logo.svg"
                alt="search-logo"
                width={24}
                height={24}
                className="w-5 h-5"
              />
              <span className="ml-1 text-lg font-normal text-gray-500/70">
                Location of Plot
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-sm text-white py-4 rounded-md font-bold hover:bg-gray-900 transition flex justify-center items-center gap-2.5"
          >
            GET A FREE QUOTE
            <Image
              src="/svg/right-arrow.svg"
              alt="right-arrow"
              width={15}
              height={17}
              className="w-3.5 h-3.5"
            />
          </button>
        </form>
        <p className="text-center font-thin text-xs text-gray-500/80 mt-3 px-9">
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
