import Aboutus from '@/components/Aboutus'
import FooterSection from '@/components/Footer'
import FounderSection from '@/components/FounderSection'
import AboutHero from '@/components/HeroAboutus'
import OurPartners from '@/components/OurPartners'
import React from 'react'

const page = () => {
  return (
    <>
<AboutHero/>
<FounderSection/>
<OurPartners/>
<Aboutus/>
<FooterSection/>
    </>
  )
}

export default page