import Beams from "@/components/blocks/Beams";
import { ENGINEERS, OPERATIONS } from "@/components/data/team";
import Footer from "@/components/footer";
import Header from "@/components/header";

import ProfileCard from "@/components/ProfileCard";
import { ChevronDown } from "lucide-react";

export default function OurTeam() {
  return (
    <div className="min-h-screen text-foreground relative overflow-hidden">
      <Header />

      {/** Hero Section */}
      <section className="relative z-10 pt-24 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="absolute inset-x-0 top-0 w-full h-[100vh] bg-black z-[-1]">
          <Beams
            beamWidth={1}
            beamHeight={15}
            beamNumber={15}
            lightColor="#bfbfbf"
            speed={3}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={30}
          />
        </div>
        <div className="max-w-7xl mx-auto w-full flex flex-col">
          <div className="animate-fade-slide-up">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-center mb-6">
              TEAM WAVEFRONT
            </h1>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-slate-400" />
        </div>
      </section>

      <div className="relative bg-black z-0">
        {/** ENGINEERS */}
        <section className="pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-left mb-12">
            ENGINEERING
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-14 md:gap-16 lg:gap-20 xl:gap-24 justify-center max-w-[90vw]">
            {ENGINEERS.map((member) => (
              <ProfileCard key={member.name} {...member} />
            ))}
          </div>
        </section>

        {/** OPERATIONS */}
        <section className="pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-left mb-12">
            OPERATIONS
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-14 md:gap-16 lg:gap-20 xl:gap-24 justify-center max-w-[90vw]">
            {OPERATIONS.map((member) => (
              <ProfileCard key={member.name} {...member} />
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
