import Image from "next/image";

const TestimonialCard = () => (
  <div className="h-[246px] w-[382px] md:w-[511px] md:h-[348px] px-7 py-10 bg-white border border-[#eff0f6] rounded-2xl shadow-[0_5px_14px_#080f340a] transform transition duration-300 hover:scale-105 hover:shadow-[0_8px_20px_#080f340a]">
    <p className="text-gray-700 text-sm md:text-lg font-extralight ">
      When Puneet set out to buy his first home, he envisioned a joyful and
      exciting process. He had the perfect one in mind and looked forward to the
      thrill of scouting. The reality was far from his imagination - house
      hunting quickly turned into a physical, emotional, and financial burden.
      He found himself entangled in
    </p>
    <Image
      src="/svg/line-logo.svg"
      alt="line-logo"
      width={42}
      height={2}
      className="w-10 mt-2 md:mt-7 hidden md:block opacity-20"
    />
    <div className="text-sm md:text-base mt-2 md:mt-7 text-black font-semibold">
      Rahul Garg
    </div>
  </div>
);

export default TestimonialCard;
