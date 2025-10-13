import Footer from "@/components/footer";
import Header from "@/components/header";

import ProfileCard from "@/components/ProfileCard";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

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
        {/** ENGINEERS */}
        <h1 className="text-4xl md:text-6xl font-bold text-left ml-24">
          ENGINEERING
        </h1>
        <section className="pt-12 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-14 md:gap-16 lg:gap-20 xl:gap-24 justify-center max-w-[90vw]">
            <ProfileCard
              image="/team/sam-hoffman.jpg"
              name="Sam Hoffman"
              title="Co-Founder & Propulsion Engineer"
              school="University of Pennsylvania"
              major="Mechanical Engineering & Applied Mechanics"
              sentence="“I'm excited to learn the technical design processes behind rocket engines alongside a team that shares my passion for propulsion.”"
            />
            <ProfileCard
              image="/team/josh-dalal.jpg"
              name="Josh Dalal"
              title="Co-Founder & Propulsion Engineer"
              school="University of Pennsylvania"
              major="Mechanical Engineering & Applied Mechanics"
              sentence="“I'm excited to be part of an undergrad-led team creating a uniquely hands-on environment, with the potential to drive truly original research.”"
            />
            <ProfileCard
              image="/team/fernando-deory.jpg"
              name="Fernando de Ory"
              title="Control Systems Lead"
              school="University of Pennsylvania"
              major="Electrical & Systems Engineering"
              sentence='""'
            />

            <ProfileCard
              image="/team/annie-gao.jpg"
              name="Annie Gao"
              title="Propulsion Engineer"
              school="University of Pennsylvania"
              major="Mechanical Engineering & Applied Mechanics"
              sentence="“I'm excited to learn more about propulsion and the rocket engine design process.”"
            />
            <ProfileCard
              image="/team/jason-degentile.jpg"
              name="Jason de Gentile"
              title="Propulsion Engineer"
              school="University of Pennsylvania"
              major="Physics"
              sentence="“I can't wait to take on the challenge of this project and contribute to such an incredible team.“"
            />
            <ProfileCard
              image="/team/ari-weiner.jpg"
              name="Ari Weiner"
              title="Mechanical Engineer III"
              school="University of Pennsylvania"
              major="Mechanical Engineering & Applied Mechanics"
              sentence="“I can't wait to learn through experience and action, and apply my skills to this team and this project.”"
            />

            <ProfileCard
              image="/team/ethan-gonzalez.jpg"
              name="Ethan Gonzalez"
              title="Mechanical Engineer II"
              school="University of Pennsylvania"
              major="Mechanical Engineering & Applied Mechanics"
              sentence="“I'm looking forward to growing as an engineer through technical challenges, team collaboration, and meaningful contributions to propulsion technology.”"
            />
            <ProfileCard
              image="/team/julie-sidana.jpg"
              name="Julie Sidana"
              title="Mechanical Engineer II"
              school="University of Pennsylvania"
              major="Mechanical Engineering & Applied Mechanics"
              sentence="“I'm looking forward to applying my passion for technical design in a hands-on environment alongside such an inspiring team.”"
            />
            <ProfileCard
              image="/team/kylie-autullo.jpg"
              name="Kylie Autullo"
              title="Mechanical Engineer I"
              school="University of Pennsylvania"
              major="Mechanical Engineering & Applied Mechanics"
              sentence="&quot;I'm super excited to apply what I've learned in school to real-world engineering problems, all while working with a great group of people!&quot;"
            />

            <ProfileCard
              image="/team/chris-stuit.jpg"
              name="Christian Stuit"
              title="Mechanical Engineer I"
              school="University of Pennsylvania"
              major="Mechanical Engineering & Applied Mechanics"
              sentence='"I joined Project Wavefront to develop my technical skills and face problems which do not have an immediately available answer."'
            />
            <ProfileCard
              image="/team/alex-mallet.jpg"
              name="Alexander Mallet"
              title="Electrical Engineer"
              school="University of Pennsylvania"
              major="Electrical & Systems Engineering"
              sentence='""'
            />
            <ProfileCard
              image="/team/andrew-rebello.jpg"
              name="Andrew Rebello"
              title="Electrical Engineer"
              school="University of Pennsylvania"
              major="Mechanical Engineering & Applied Mechanics"
              sentence='""'
            />

            {/* <ProfileCard
              image="/team/devan-malik.jpg"
              name="Devan Malik"
              title="Electrical Engineer"
            /> */}
          </div>
        </section>

        {/** MARKETING */}
        <h1 className="text-4xl md:text-6xl font-bold text-left ml-24">
          MARKETING
        </h1>
        <section className="pt-12 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-14 md:gap-16 lg:gap-20 xl:gap-24 justify-center max-w-[90vw]">
            <ProfileCard
              image="/team/reid-glaros.jpg"
              name="Reid Glaros"
              title="Chief Marketing Officer"
              school="University of Pennsylvania"
              major="Marketing & Business Economics"
              sentence="“I'm looking forward to helping bring attention to our team's work and fostering support for such a promising initiative.”"
            />
            <ProfileCard
              image="/team/elliot-dewire.jpg"
              name="Elliot DeWire"
              title="Marketing & Communications"
              school="University of Pennsylvania"
              major="Philosophy, Politics, & Economics"
              sentence="“I'm looking forward to sharing stories of innovation, and building support for bold, student-led technology.”"
            />
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
