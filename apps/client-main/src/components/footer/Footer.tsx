import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const socials = [
    {
      platform: "facebook",
      url: "https://www.facebook.com/yourpage",
    },
    {
      platform: "instagram",
      url: "https://www.instagram.com/yourprofile",
    },
    {
      platform: "twitter",
      url: "https://twitter.com/yourhandle",
    },
    {
      platform: "linkedin",
      url: "https://www.linkedin.com/company/yourcompany",
    },
  ];

  return (
    <>
      <div className="flex flex-col flex-wrap md:flex-row justify-between items-center tracking-wide px-8 2xl:px-0 gap-8 md:gap-0 pb-7">
        <div className="flex flex-col gap-2 text-center md:text-left w-full md:w-auto">
          <div className="mx-auto md:mx-0">
            <Image
              src="/svg/brixline-logo.svg"
              alt="brixline-logo"
              width={177}
              height={66}
              className="w-32 md:w-44 h-16"
            />
          </div>
          <h2 className="text-[#A9ADB780] xl:text-xl mx-auto md:mx-0">
            Hire the best house <br /> construction service
          </h2>
          <p className="text-white text-sm capitalize">
            WITH LOVE ❤️FROM BEAUTIFUL DELHI
          </p>
        </div>
        <div className="block md:hidden border-b rounded-2xl w-full text-white/10 flex-shrink-0"></div>
        <div className="flex flex-row md:flex-col items-center md:items-start underline gap-4 text-white text-sm">
          <Link href="/" className="hover:text-gray-300 transition-colors">
            Home
          </Link>
          <Link href="/" className="hover:text-gray-300 transition-colors">
            About Us
          </Link>
          <Link href="/" className="hover:text-gray-300 transition-colors">
            Packages
          </Link>
          <Link href="/" className="hover:text-gray-300 transition-colors">
            Contact Us
          </Link>
        </div>
        <div className="block md:hidden border-b rounded-2xl w-full text-white/10 flex-shrink-0"></div>
        <div className="flex flex-col gap-4 text-center md:text-left w-full md:w-auto">
          <p className="text-white text-md">
            Contact info: support@brix.com | <br /> +91-96504 36677
          </p>
          <div className="flex justify-center md:justify-start gap-5">
            {socials.map(({ platform, url }) => (
              <Link
                href={url}
                key={platform}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-100 transition-opacity"
              >
                <Image
                  src={`/media/${platform}.svg`}
                  alt={platform}
                  width={32}
                  height={32}
                  className="w-7 h-7 opacity-40 hover:opacity-100 transition-opacity"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="block md:hidden border-b rounded-2xl w-[80%] mx-auto text-[#DADBE44D]/70 flex-shrink-0"></div>

      <div className="text-white text-center mt-7">
        Copyright © 2025 Brix. All rights reserved.
      </div>
    </>
  );
}
