import CompanyOverview from "@/Components/Company-Overview";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import HeroSection from "@/Components/Hero-Section";
import ServiceSection from "@/Components/Service-Section";
import TestimonialSection from "@/Components/Testimonial-Section";

export default function Home() {
  return (
<div className="relative w-full min-h-screen overflow-x-hidden ">
  <Header/>
<HeroSection/>
<CompanyOverview/>
<ServiceSection/>
<TestimonialSection/>
<Footer/>
    </div>
    
  );
}
