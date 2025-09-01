"use client";

import Header from "@/components/header";
import { ChevronDown } from "lucide-react";

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground relative overflow-hidden">
      <Header />
      <div className="absolute inset-x-0 top-0 w-full h-[100vh] bg-black z-[-1]">
        <Image
          src="/banner.png"
          alt="Project Wavefront banner"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <section className="relative z-10 pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto text-center w-full">
          <div className="animate-fade-slide-up">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6">
              Project Wavefront
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
    </div>
  );
}
