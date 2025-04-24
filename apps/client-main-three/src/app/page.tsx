import FAQ from "@/components/FAQ/Faq";
import FooterSection from "@/components/Footer";
import Hero from "@/components/Hero";
import HomeCalculation from "@/components/Home Calculation/HomeCalculation";
import HomePackagesSection from "@/components/HomePackagesSection";
import OurServicesSection from "@/components/OurServicesSection";
import QualityCommitmentSection from "@/components/QualityCommitmentSection";
import Testimonial from "@/components/Testimonial/Testimonial";
import WhyChooseUs from "@/components/WhyChooseUs";
import Work from "@/components/Work/Work";

export default function Home() {
  return (
   <>
        <Hero/>
   <WhyChooseUs/>
   <HomeCalculation/>
   <HomePackagesSection/>
   <OurServicesSection/>
   <QualityCommitmentSection/>
   <Work/>
   <Testimonial/>
   <FAQ/>
   <FooterSection/>
   </>
  );
}
