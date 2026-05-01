import Hero from "@/components/sections/Hero";
import IntroVideo from "@/components/sections/IntroVideo";
import StatsSection from "@/components/sections/StatsSection";
import Services from "@/components/sections/Services";
import VideoTestimonials from "@/components/sections/VideoTestimonials";
import CaseStudies from "@/components/sections/CaseStudies";
import ClientsCarousel from "@/components/sections/ClientsCarousel";
import Reviews from "@/components/sections/Reviews";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroVideo />
      <StatsSection />
      <Services />
      <VideoTestimonials />
      <CaseStudies />
      <ClientsCarousel />
      <Reviews />
      <CTABanner />
    </>
  );
}
