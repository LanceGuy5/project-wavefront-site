import Footer from "@/components/footer";
import Header from "@/components/header";
import Squares from "@/components/blocks/Squares";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import ProfileCard from "@/components/ProfileCard";

export default function OurTeam() {
  return (
    <div className="min-h-screen text-foreground relative overflow-hidden">
      <Header />

      {/** Hero Section */}
      <section className="relative z-10 pt-24 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="absolute inset-x-0 top-0 w-full h-[100vh] bg-black z-[-1]">
          <Image
            src="/home/banner.png"
            alt="Project Wavefront banner"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="max-w-7xl mx-auto w-full">
          <div className="animate-fade-slide-up">
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl leading-relaxed">
              Meet Project Wavefront
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">
              OUR TEAM
            </h1>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-slate-400" />
        </div>
      </section>

      {/** Unified Squares background for all team sections */}
      <div className="relative bg-black z-0">
        <div className="absolute inset-0 z-[-1]">
          <Squares
            speed={0.0}
            squareSize={60}
            direction="diagonal"
            borderColor="#5c5c5c"
            hoverFillColor="#222"
          />
        </div>

        {/** ENGINEERS */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-12">
            ENGINEERING
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-14 md:gap-16 lg:gap-20 xl:gap-24 justify-center max-w-[90vw]">
            <ProfileCard
              image="/team/sam-hoffman.jpg"
              name="Sam Hoffman"
              title="Co-Founder & Propulsion Engineer"
              major="MEAM"
              sentence="Passionate about propulsion systems and space exploration."
            />
            <ProfileCard
              image="/team/josh-dalal.jpg"
              name="Josh Dalal"
              title="Co-Founder & Propulsion Engineer"
              major="MEAM"
              sentence="Dedicated to advancing rocket technology and innovation."
            />
            <ProfileCard
              image="/team/fernando-deory.jpg"
              name="Fernando de Ory"
              title="Control Systems Lead"
              major="ESE"
              sentence="Focused on developing robust control systems for aerospace applications."
            />
            

            <ProfileCard
              image="/team/annie-gao.jpg"
              name="Annie Gao"
              title="Propulsion Engineer"
              major="MEAM"
              sentence="Enthusiastic about fluid dynamics and propulsion efficiency."
            />
            <ProfileCard
              image="/team/jason-degentile.jpg"
              name="Jason de Gentile"
              title="Propulsion Engineer"
              major="Physics"
              sentence="Committed to pushing the boundaries of rocket propulsion."
            />
            <ProfileCard
              image="/team/ari-weiner.jpg"
              name="Ari Weiner"
              title="Mechanical Engineer III"
              major="MEAM"
              sentence="Specializes in structural analysis and mechanical design."
            />

            <ProfileCard
              image="/team/ethan-gonzalez.jpg"
              name="Ethan Gonzalez"
              title="Mechanical Engineer II"
              major="MEAM"
              sentence="Focused on thermal systems and materials engineering."
            />
            <ProfileCard
              image="/team/julie-sidana.jpg"
              name="Julie Sidana"
              title="Mechanical Engineer II"
              major="MEAM"
              sentence="Expert in CAD modeling and simulation."
            />
            <ProfileCard
              image="/team/kylie-autullo.jpg"
              name="Kylie Autullo"
              title="Mechanical Engineer I"
              major="MEAM"
              sentence="Adept at 3D printing and prototyping."
            />

            <ProfileCard
              image="/team/chris-stuit.jpg"
              name="Christian Stuit"
              title="Mechanical Engineer I"
              major="MEAM"
              sentence="Interested in dynamics and control of mechanical systems."
            />
            <ProfileCard
              image="/team/alex-mallet.jpg"
              name="Alexander Mallet"
              title="Electrical Engineer"
              major="ESE"
              sentence="Passionate about circuit design and embedded systems."
            />
            <ProfileCard
              image="/team/andrew-rebello.jpg"
              name="Andrew Rebello"
              title="Electrical Engineer"
              major="MEAM"
              sentence="Focused on optimizing mechanical systems for performance and efficiency."
            />

            {/* <ProfileCard
              image="/team/devan-malik.jpg"
              name="Devan Malik"
              title="Electrical Engineer"
            /> */}
          </div>
        </section>

        {/** MARKETING */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-12">
            MARKETING
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-14 md:gap-16 lg:gap-20 xl:gap-24 justify-center max-w-[90vw]">
            <ProfileCard
              image="/team/reid-glaros.jpg"
              name="Reid Glaros"
              title="Chief Marketing Officer"
              major="PPE"
              sentence="Expert in digital marketing strategies and brand management."
            />
            <ProfileCard
              image="/team/elliot-dewire.jpg"
              name="Elliot DeWire"
              title="Marketing & Communications"
              major="PPE"
              sentence="Skilled in crafting compelling narratives and outreach."
            />
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
