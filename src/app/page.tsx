import { Navbar } from "@/app/components/Navbar";
import HeroSection from "@/app/components/home/HeroSection";
import StatsSection from "@/app/components/home/StatsSection";
import DivisionsSection from "@/app/components/home/DivisionsSection";
import LeadershipSection from "@/app/components/home/LeadershipSection";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Navbar />
      <HeroSection />
      {/* Divisions Section */}
      <DivisionsSection />
      {/* Stats Section */}
      <StatsSection />
      {/* Leadership Section */}
      <LeadershipSection />
      
    </div>
  );
}
