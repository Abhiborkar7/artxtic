import { Navbar } from "@/components/pages/landingpage/Navbar";
import { Hero } from "./Hero";
import { FeatureCards } from "./FeatureCards";


export function LandingPageLayout() {


  return (
    <div className="min-h-screen bg-black text-white relative bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800">
      <div className="absolute inset-0 bg-grid-white/10 bg-grid-8" />
      <Navbar />
      <Hero />
      <FeatureCards />
    </div>
  )
}
