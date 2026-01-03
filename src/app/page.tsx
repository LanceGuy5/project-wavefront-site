"use client";

import Galaxy from "@/components/blocks/Galaxy";
import Header from "@/components/header";
import { ChevronDown } from "lucide-react";

import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

// hello world!

export default function Home() {
  return (
    <div className="min-h-screen text-foreground relative overflow-hidden">
      <Header />

      {/** Hero Section */}
      <section className="relative z-10 pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black z-[-1] overflow-hidden flex items-center justify-center">
          <div className="relative w-[150%] h-[150%] opacity-70">
            <Image
              src="/home/glimmer_temp.gif"
              alt="Project Wavefront banner"
              fill
              style={{ objectFit: "cover" }}
              unoptimized
              className="scale-70"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto text-center w-full">
          <div className="animate-fade-slide-up">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 tracking-wide">
              PROJECT WAVEFRONT
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              A Collaborative Undergraduate Team Advancing the Future of
              Rotating Detonation Propulsion Technology
            </p>

            {/* Support Button */}
            <Link
              href="https://gofund.me/dd2b2e6a3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-black-600 hover:bg-emerald-800 text-white font-bold text-lg rounded-lg transition-all duration-250 transform hover:scale-110 hover:shadow-xl"
            >
              Support Us
            </Link>
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
            <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold mb-4 tracking-wide">
              MARK I
            </h1>
            <p className="text-xl md:text-2xl mb-18 max-w-lg text-white">
              Mark I will be the first long-duration rotating detonation rocket
              engine, designed, fabricated, and constructed by an entirely
              student team.
            </p>
          </div>
        </div>
      </section>

      {/** Mission Section */}
      <section className="relative min-h-screen flex items-end">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
          {/* Left Column: Text */}
          <div className="flex flex-col items-start justify-start ml-8 mt-18 pl-2 sm:pl-4 lg:pl-6">
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-wide">
              OUR MISSION
            </h1>

            <div className="flex flex-col mt-4 space-y-2">
              <div className="flex flex-row items-center">
                <h3 className="text-2xl md:text-4xl lg:text-4xl tracking-wide">
                  DESIGN
                </h3>
              </div>
              <p className="text-md md:text-lg lg:text-lg text-slate-300 mb-12 leading-relaxed max-w-xl">
                Mark I is our proof of concept. Every component is designed and
                fabricated from the ground up by an entirely undergraduate team.
                Guided through collaborations with experts across the industry,
                including NASA, Project Wavefront is planning to close to the
                loop from ideation to delivery in less than a year. With a test
                campaign slated for Q2 2026, Project Wavefront is ready to
                redefine the future of Aerospace.
              </p>
            </div>

            <div className="flex flex-col mt-4 space-y-2">
              <div className="flex flex-row items-center">
                <h3 className="text-2xl md:text-4xl lg:text-4xl tracking-wide">
                  INTENT
                </h3>
              </div>
              <p className="text-md md:text-lg lg:text-lg text-slate-300 mb-12 leading-relaxed max-w-xl">
                Project Wavefront aims to cultivate an engineering environment
                that emphasizes technical rigor, project ownership, and a
                culture of relentless innovation. As a 501c3 non-profit
                educational research group, our primary goal is to accelerate
                rotating detonation rocket engine (RDRE) research. While
                significant research exists surrounding RDREs, it remains highly
                confined to major aerospace companies and well-funded
                laboratories. By thoroughly documenting our process and
                publishing the principles behind our system, we aim to bridge
                this gap and create a future where RDRE research and innovation
                is more accessible.
              </p>
            </div>
          </div>
          {/* Right Column: Image */}
          <div className="relative h-full min-h-screen">
            <Image
              src="/home/team.jpeg"
              alt="Project Wavefront mission image"
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>
        </div>
      </section>

      {/** Sponsors Section */}
      <section className="relative flex items-end my-16">
        <div className="absolute inset-x-0 top-0 w-full h-[100vh] bg-black z-[-1]">
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
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-wide">
              SPONSORS & PARTNERS
            </h1>
            <p className="text-xl md:text-2xl lg:text-xl text-slate-300 mb-12 leading-relaxed max-w-xl">
              At Project Wavefront we aim to redefine what the future of
              propulsion looks like through student innovation. With the support
              of partners and sponsors who are share about our vision, we can
              take our work even farther.
            </p>
            <p className="text-xl md:text-2xl lg:text-xl text-slate-300 mb-12 leading-relaxed max-w-xl">
              We are continuously looking for additional sponsors to help
              advance our mission. Please reach out through our{" "}
              {/* TODO hover bold on top of underline */}
              <Link
                href="/contact"
                className="font-bold hover:text-strong transition-all duration-200 underline"
              >
                Contact Us
              </Link>{" "}
              page.
            </p>
          </div>
          {/* Right Column: Sponsor Logos */}
          <div className="relative h-full">
            <div className="flex flex-col items-center justify-center h-full w-full p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
                {/* Converge */}
                <div className="flex items-center justify-center w-48 h-48 md:w-56 md:h-56">
                  <Image
                    src="/home/sponsors/converge.png"
                    alt="Converge sponsor logo"
                    width={192}
                    height={192}
                    className="object-contain max-w-full max-h-full"
                  />
                </div>

                {/* NASA — scaled up slightly with scale utility */}
                <div className="flex items-center justify-center w-48 h-48 md:w-56 md:h-56">
                  <div className="scale-120">
                    <Image
                      src="/home/sponsors/nasa.png"
                      alt="NASA sponsor logo"
                      width={250}
                      height={250}
                      className="object-contain max-w-full max-h-full"
                    />
                  </div>
                </div>

                {/* Ansys */}
                <div className="flex items-center justify-center w-48 h-48 md:w-56 md:h-56">
                  <div className="scale-140">
                    <Image
                      src="/home/sponsors/ansys.png"
                      alt="Ansys sponsor logo"
                      width={192}
                      height={192}
                      className="object-contain max-w-full max-h-full"
                    />
                  </div>
                </div>

                {/* optional placeholder for alignment */}
                <div className="hidden md:block" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
