import { Navbar } from "@/components/pages/landingpage/Navbar";
import { Hero } from "./Hero";
import Footer from "./Footer";
import Faq from "./Faq";

export function LandingPageLayout() {

  return (
    <div className="min-h-screen bg-black text-white relative bg-gradient-to-br from-violet-950 via-gray-950 to-black">
      <Navbar />
      <Hero />
      <Faq />
      <Footer />
    </div>


  )
}