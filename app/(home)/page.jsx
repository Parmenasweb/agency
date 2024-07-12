import HeroSection from "@/components/homepagecomps/HeroSection";
import Navbar from "./components/Navbar";
import Programs from "@/components/homepagecomps/programs";
import WhyUs from "@/components/homepagecomps/whyUs";
import StudySteps from "@/components/homepagecomps/study-steps";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="max-w-7xl w-[97%] mx-auto sm:py-5 ">
        <Navbar />
        <HeroSection />
        <StudySteps />
        <Programs />
        <WhyUs />
      </div>
    </main>
  );
}
