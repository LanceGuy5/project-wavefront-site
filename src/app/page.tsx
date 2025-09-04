"use client";

import Galaxy from "@/components/blocks/Galaxy";
import Header from "@/components/header";
import { ChevronDown } from "lucide-react";

import Footer from "@/components/footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground relative overflow-hidden">
      <Header />

      {/** Hero Section */}
      <section className="relative z-10 pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="absolute inset-x-0 top-0 w-full h-[110vh] bg-black z-[-1]">
          <Image
            src="/home/banner.png"
            alt="Project Wavefront banner"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="max-w-7xl mx-auto text-center w-full">
          <div className="animate-fade-slide-up">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6">
              PROJECT WAVEFRONT
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              The first student-built rotating detonation rocket engine,
              designed and constructed entirely by undergraduates.
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-slate-400" />
        </div>
      </section>

      {/** Mark I Section (Carousel ?) */}
      <section className="relative z-10 pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-end">
        <div className="absolute inset-x-0 top-0 w-full h-[100vh] bg-black z-[-1] min-h-screen">
          <Image
            src="/home/injector.jpg"
            className="opacity-60 blur-sm [mask-image:linear-gradient(to_right,transparent_0%,black_0%,black_100%,transparent_100%),linear-gradient(to_bottom,transparent_0%,black_0%,black_100%,transparent_100%)]"
            alt="Project Wavefront banner"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="max-w-7xl mx-auto text-left w-full">
          <div className="flex flex-col items-start">
            <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold mb-4">
              MARK I
            </h1>
            <p className="text-xl md:text-2xl mb-18 max-w-lg">
              The first RDRE to be fabricated from scratch by an independent
              undergraduate team.
            </p>
          </div>
        </div>
      </section>

      {/** Mission Section */}
      <section className="relative min-h-screen flex items-end">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
          {/* Left Column: Text */}
          <div className="flex flex-col items-start justify-start ml-8 mt-24 pl-2 sm:pl-4 lg:pl-6">
            <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold mb-4">
              OUR MISSION
            </h1>

            <div className="flex flex-col mt-4 space-y-2">
              <div className="flex flex-row items-center">
                <Image
                  src="/home/engineering-icon.png"
                  width={70}
                  height={70}
                  alt={""}
                />
                <h3 className="text-3xl md:text-4xl lg:text-4xl">DESIGN</h3>
              </div>
              <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-xl">
                To innovate and push the boundaries of rocket propulsion through
                cutting-edge research and development by an independent
                undergraduate team.
              </p>
            </div>

            <div className="flex flex-col mt-4 space-y-2">
              <div className="flex flex-row items-center">
                <Image
                  src="/home/treeicon.png"
                  width={70}
                  height={70}
                  alt={""}
                />
                <h3 className="text-3xl md:text-4xl lg:text-4xl">INTENT</h3>
              </div>
              <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-xl">
                To innovate and push the boundaries of rocket propulsion through
                cutting-edge research and development by an independent
                undergraduate team.
              </p>
            </div>
          </div>
          {/* Right Column: Image */}
          <div className="relative h-full min-h-screen">
            <Image
              src="/home/injector.jpg"
              alt="Project Wavefront mission image"
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>
        </div>
      </section>

      {/** Sponsors Section */}
      <section className="relative min-h-screen flex items-end">
        <div className="absolute inset-x-0 top-0 w-full h-[100vh] bg-black z-[-1] min-h-screen">
          <Galaxy
            mouseRepulsion={false}
            mouseInteraction={false}
            density={1.5}
            glowIntensity={0.2}
            saturation={0.4}
            hueShift={240}
            twinkleIntensity={0.3}
            rotationSpeed={0.05}
            repulsionStrength={2}
            autoCenterRepulsion={0.1}
            starSpeed={0.2}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
          {/* Left Column: Text */}
          <div className="flex flex-col items-start justify-start ml-8 mt-24 pl-2 sm:pl-4 lg:pl-6">
            <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold mb-4">
              SPONSORS & PARTNERS
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-xl">
              To innovate and push the boundaries of rocket propulsion through
              cutting-edge research and development by an independent
              undergraduate team.
            </p>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-xl">
              To innovate and push the boundaries of rocket propulsion through
              cutting-edge research and development by an independent
              undergraduate team.
            </p>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-xl">
              To innovate and push the boundaries of rocket propulsion through
              cutting-edge research and development by an independent
              undergraduate team.
            </p>
          </div>
          {/* Right Column: Sponsor Logos */}
          <div className="relative h-full min-h-screen">
            <div className="flex flex-col items-center justify-center h-full w-full p-8 space-y-8">
              <Image
                src="/home/sponsors/converge.png"
                alt="Project Wavefront mission image"
                width={250}
                height={250}
                objectFit="cover"
                className=""
              />
              <Image
                src="/home/sponsors/nasa.png"
                alt="Project Wavefront mission image"
                width={330}
                height={330}
                objectFit="cover"
                className=""
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
