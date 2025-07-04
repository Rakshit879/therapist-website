import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Faqs from "@/components/Faqs";
import Contact from "@/components/Contact";
import StatSection from "@/components/StatSection";
import RatesSection from "@/components/RatesSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Your Site Title",
  icons: {
    icon: "/favicon.ico",
  },
};


export default function Home() {
  return (
    <div className="text-3xl  font-bold">
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <RatesSection/>
      <StatSection/>
      <Faqs/>
      <Contact/>
      <Footer/>
    </div>
  );
}
