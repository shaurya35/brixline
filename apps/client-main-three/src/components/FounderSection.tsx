import React from 'react';
import Image from 'next/image';
import { Description, MainTitle, Section, Title } from './Tag';
const FounderSection = () => {
  return (
    <Section className="relative h-[100vh] !w-full !py-0">
        {/* Text Section */}
        {/* flex flex-col justify-end m-auto items-center h-fit sm:h-full absolute max-w-[1028px] z-10 bottom-0 w-full top-1/1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pb-8 */}
        <div className="absolute z-10 flex flex-col items-center bottom-1/10 w-full max-w-[1028px] left-1/2 transform -translate-x-1/2">

            {/* Desktop Content */}
                <Title className="leading-[100%] text-center font-normal !text-[28px] sm:!text-[48px]">
                we build trust, comfort, and spaces where families create memories that last a lifetime.
                </Title>

                <svg xmlns="http://www.w3.org/2000/svg" width="162" height="85" viewBox="0 0 162 85" fill="none">
<path opacity="0.2" d="M0 85V39.1739L26.0384 0H65.5397L47.0466 39.1739H71.9013V85H0ZM90.0987 85V39.1739L116.137 0H155.638L137.145 39.1739H162V85H90.0987Z" fill="#F55252"/>
</svg>
<MainTitle className='!text-[28px] sm:!text-[34.57px] '>
PRAVAS  CHANDRAGIRI
</MainTitle>
<Description className='text-[14.75px]'>CEO & FOUNDER</Description>

        </div>

    {/* Background Image */}
    <div className="absolute bottom-0 left-0 w-full h-full">
  <Image
    src="/founder.png"
    alt="house-image-2"
    fill
    className="object-cover object-center sm:object-left"
  />
</div>

</Section>
  )
}

export default FounderSection