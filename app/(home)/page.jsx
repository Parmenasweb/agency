import HeroSection from "@/components/homepagecomps/HeroSection";
import Navbar from "./components/Navbar";
import Programs from "@/components/homepagecomps/programs";
import WhyUs from "@/components/homepagecomps/whyUs";
import StudySteps from "@/components/homepagecomps/study-steps";
import Testimonials from "@/components/homepagecomps/testimonials";
import Footer from "@/components/homepagecomps/Footer";
import FAQS from "@/components/homepagecomps/faqs";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="max-w-7xl w-[97%] mx-auto  sm:py-5 ">
        {/* <Navbar /> */}
        <HeroSection />
        <br />
        <StudySteps />
        <br />
        <Programs />
        <br />
        <WhyUs />
        <br />
        <Testimonials />
        <br />
        <FAQS />
        <br />
        <Footer />
      </div>
    </main>
  );
}
