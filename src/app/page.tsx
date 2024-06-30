import FeatruedCourses from "@/components/FeatruedCourses";
import HeroSection from "@/components/HeroSection";
import TestimonialCards from "@/components/TestimonialCards";
import WhyChooseUS from "@/components/WhyChooseUS";
import UpcomingWeb from "@/components/UpcomingWeb";
import Image from "next/image";
import Teachers from "@/components/Teachers";

export default function Home() {
  return (
    <main className="min-h-screen bg-cyan-50 dark:bg-black/[0.96] antialiased ">
      <HeroSection/>
      <FeatruedCourses/>
      <WhyChooseUS/>
      <TestimonialCards/>
      <UpcomingWeb/>
      <Teachers/>
    </main>

  );
}
