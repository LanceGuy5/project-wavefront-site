"use client";

import Galaxy from "@/components/blocks/Backgrounds/Galaxy/Galaxy";
import Squares from "@/components/blocks/Backgrounds/Squares/Squares";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ChevronDown,
  Globe,
  Target,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  // TODO figure out where sponsors are going
  const sponsors = [
    '/sponsors/nasa.png',
    '/sponsors/converge.png',
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen text-foreground relative overflow-hidden">
      {/* Galaxy background with jet black, limited to first viewport */}
      <div className="absolute inset-x-0 top-0 w-full h-[100vh] bg-black z-[-1]">
        <Galaxy
          mouseRepulsion={false}
          mouseInteraction={false}
          density={0.4}
          glowIntensity={0.2}
          saturation={0.4}
          hueShift={140}
          rotationSpeed={0.05}
          starSpeed={0.3}
        />
      </div>

      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/min-logo.png" alt="Project Wavefront Logo" width={30} height={30} />
              <span className="text-xl font-bold">Project Wavefront</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link
                href="/technology"
                className="hover:text-primary transition-colors"
              >
                Technology
              </Link>
              <Link
                href="/performance"
                className="hover:text-primary transition-colors"
              >
                Performance
              </Link>
              <Link
                href="/team"
                className="hover:text-primary transition-colors"
              >
                Team
              </Link>
              <Link
                href="/contact"
                className="hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative z-10 pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto text-center w-full">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Project Wavefront
            </h1>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-8 text-slate-200">
              Revolutionizing Rocket Propulsion
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              The first student-built rotating detonation rocket engine,
              designed and constructed entirely by undergraduates. 30% more
              efficient, scalable, and ready to transform aerospace.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link href="/technology">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg hover:cursor-pointer"
                >
                  Explore Technology <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/performance">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 bg-transparent px-8 py-4 text-lg hover:cursor-pointer"
                >
                  View Performance
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-slate-400" />
        </div>
      </section>

      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 min-h-screen bg-[#0a0a0f]">
        <div className="absolute inset-0 z-[-1]">
          <Squares
            speed={0.5}
            squareSize={40}
            direction="diagonal"
            borderColor="#3e255c"
            hoverFillColor="#222"
          />
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Why Wavefront Changes Everything
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Built by students, for the future of space exploration
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/40 hover:border-blue-400/60 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mb-6 group-hover:scale-110 transition-transform">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">
                Revolutionary Efficiency
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                30% more efficient than traditional rocket engines through
                supersonic detonation wave technology
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-purple-900/40 to-cyan-900/40 border border-purple-500/40 hover:border-purple-400/60 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full mb-6 group-hover:scale-110 transition-transform">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">
                Student Innovation
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Entirely designed and built by 25 undergraduate students from
                top engineering programs
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border border-cyan-500/40 hover:border-cyan-400/46 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full mb-6 group-hover:scale-110 transition-transform">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                Scalable Design
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Thrust range from 1,000 to 20,000 lbs with cost-effective
                manufacturing under $5,000 per unit
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 backdrop-blur-sm">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Join the Revolution
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Be part of the next generation of aerospace innovation. Whether
              you&apos;re a student, researcher, or industry professional,
              there&apos;s a place for you in Project Wavefront.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/team">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg"
                >
                  Join Our Team <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 bg-transparent px-8 py-4 text-lg"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}