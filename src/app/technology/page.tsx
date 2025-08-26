"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  ChevronLeft,
  Cog,
  Flame,
  Globe,
  Rocket,
  Target,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function TechnologyPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen text-foreground relative overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/min-logo.png"
                alt="Project Wavefront Logo"
                width={30}
                height={30}
              />
              <span className="text-xl font-bold">Project Wavefront</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/technology" className="text-primary font-semibold">
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

      {/* Hero Section */}
      <section className="relative z-10 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-slate-400 hover:text-primary transition-colors"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Home
            </Link>
          </div>

          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 animate-pulse">
              Revolutionary RDRE Technology
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Rotating Detonation
              <br />
              Rocket Engine
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl leading-relaxed">
              Harnessing supersonic detonation waves to achieve unprecedented
              efficiency in rocket propulsion. Built entirely by undergraduate
              students using innovative design principles.
            </p>
          </div>
        </div>
      </section>

      {/* Core Technology Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              How RDRE Technology Works
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Unlike traditional rocket engines that use deflagration, our RDRE
              uses continuous rotating detonation waves to achieve superior
              performance and efficiency.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-400">
                Detonation Wave Physics
              </h3>
              <div className="space-y-4 text-slate-300">
                <p className="text-lg leading-relaxed">
                  Traditional rocket engines burn fuel in a subsonic
                  deflagration process. Our RDRE creates supersonic detonation
                  waves that travel at over 2,000 m/s around the combustion
                  chamber.
                </p>
                <p className="text-lg leading-relaxed">
                  This continuous rotating detonation provides higher pressure
                  ratios and more complete combustion, resulting in 30% better
                  specific impulse compared to conventional engines.
                </p>
                <p className="text-lg leading-relaxed">
                  The self-sustaining nature of the detonation wave eliminates
                  the need for complex ignition systems and reduces mechanical
                  complexity.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl border border-blue-500/30 flex items-center justify-center">
                <div className="text-center">
                  <Flame className="h-24 w-24 text-orange-400 mx-auto mb-4 animate-pulse" />
                  <p className="text-slate-300 text-lg">
                    Detonation Wave Visualization
                  </p>
                  <p className="text-slate-400 text-sm mt-2">
                    Continuous rotating combustion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Technical Specifications
            </h2>
            <p className="text-lg text-slate-300">
              Engineered for performance, built for reliability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Zap className="h-6 w-6 text-blue-400" />
                  <CardTitle className="text-blue-400">
                    Performance Metrics
                  </CardTitle>
                </div>
                <CardDescription>Core engine specifications</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between">
                    <span className="text-slate-400">Specific Impulse:</span>
                    <span className="text-slate-200 font-semibold">
                      380-420 sec
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-slate-400">Thrust Range:</span>
                    <span className="text-slate-200 font-semibold">
                      1K-20K lbs
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-slate-400">Chamber Pressure:</span>
                    <span className="text-slate-200 font-semibold">
                      300-500 psi
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-slate-400">Efficiency Gain:</span>
                    <span className="text-green-400 font-semibold">+30%</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Cog className="h-6 w-6 text-purple-400" />
                  <CardTitle className="text-purple-400">
                    Design Features
                  </CardTitle>
                </div>
                <CardDescription>
                  Innovative engineering solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between">
                    <span className="text-slate-400">Moving Parts:</span>
                    <span className="text-slate-200 font-semibold">Zero</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-slate-400">Throttleable:</span>
                    <span className="text-green-400 font-semibold">Yes</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-slate-400">Reusable:</span>
                    <span className="text-green-400 font-semibold">
                      100+ cycles
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-slate-400">Manufacturing:</span>
                    <span className="text-slate-200 font-semibold">
                      3D Printable
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Target className="h-6 w-6 text-cyan-400" />
                  <CardTitle className="text-cyan-400">
                    Materials & Cost
                  </CardTitle>
                </div>
                <CardDescription>Accessible and affordable</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between">
                    <span className="text-slate-400">Primary Material:</span>
                    <span className="text-slate-200 font-semibold">
                      Inconel 718
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-slate-400">Unit Cost:</span>
                    <span className="text-slate-200 font-semibold">
                      {"<$5,000"}
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-slate-400">Lead Time:</span>
                    <span className="text-slate-200 font-semibold">
                      2-4 weeks
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-slate-400">Availability:</span>
                    <span className="text-green-400 font-semibold">
                      Commercial
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Real-World Applications
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              From student satellites to commercial launches, our RDRE
              technology scales across mission requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20">
              <Globe className="h-12 w-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-blue-400">
                Educational & Research
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li>• Student satellite launches (CubeSats, SmallSats)</li>
                <li>• University research programs</li>
                <li>• Hypersonic flight testing</li>
                <li>• Propulsion technology demonstrations</li>
                <li>• STEM education initiatives</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-purple-500/20">
              <Rocket className="h-12 w-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-purple-400">
                Commercial & Defense
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li>• Small payload orbital insertion</li>
                <li>• Defense simulation systems</li>
                <li>• Rapid response launch capabilities</li>
                <li>• Cost-effective propulsion solutions</li>
                <li>• Scalable manufacturing for volume production</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ready to See It in Action?
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Explore our performance data and test results, or learn more about
              the team behind this breakthrough technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/performance">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg"
                >
                  View Performance Data <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/team">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 bg-transparent px-8 py-4 text-lg"
                >
                  Meet the Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
