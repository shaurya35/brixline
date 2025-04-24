import Aboutus from '@/components/Aboutus'
import AboutUsSlider from '@/components/AboutUsSlider'
import FooterSection from '@/components/Footer'
import FounderSection from '@/components/FounderSection'
import AboutHero from '@/components/HeroAboutus'
import OurPartners from '@/components/OurPartners'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const page = () => {
  return (
    <>
<AboutHero/>
<FounderSection/>
<OurPartners/>
<AboutUsSlider/>
<Aboutus/>
<FooterSection/>
    </>
  )
}

export default page