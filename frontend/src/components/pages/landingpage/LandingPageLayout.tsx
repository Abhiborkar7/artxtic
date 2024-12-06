import { Navbar } from "@/components/pages/landingpage/Navbar";
import { Hero } from "./Hero";

export function LandingPageLayout() {

  return (
    <div className="min-h-screen bg-black text-white relative bg-gradient-to-br from-blue-950 via-gray-900 to-black">
      {/* <div className="absolute inset-0 bg-grid-white/10 bg-grid-8" /> */}
      <Navbar />
      <Hero />
    </div>

  )
}
