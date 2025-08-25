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
  Award,
  BarChart3,
  ChevronLeft,
  Rocket,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function PerformancePage() {
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
              <Link href="/performance" className="text-primary font-semibold">
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
              Breakthrough Performance Data
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Proven Results
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl leading-relaxed">
              Real data from 5 successful hot-fire tests, validated by aerospace
              experts and verified through rigorous testing protocols.
            </p>
          </div>
        </div>
      </section>

      {/* Key Performance Metrics */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Key Performance Metrics
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Measured results that demonstrate the revolutionary efficiency of
              our RDRE technology
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20">
              <div className="text-4xl md:text-6xl font-bold text-blue-400 mb-2">
                30%
              </div>
              <div className="text-slate-300 font-semibold">More Efficient</div>
              <div className="text-slate-400 text-sm mt-1">
                vs Traditional Engines
              </div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-purple-500/20">
              <div className="text-4xl md:text-6xl font-bold text-purple-400 mb-2">
                420
              </div>
              <div className="text-slate-300 font-semibold">
                Specific Impulse
              </div>
              <div className="text-slate-400 text-sm mt-1">seconds (peak)</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/20">
              <div className="text-4xl md:text-6xl font-bold text-cyan-400 mb-2">
                5
              </div>
              <div className="text-slate-300 font-semibold">
                Successful Tests
              </div>
              <div className="text-slate-400 text-sm mt-1">
                100% success rate
              </div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-green-500/20">
              <div className="text-4xl md:text-6xl font-bold text-green-400 mb-2">
                $5K
              </div>
              <div className="text-slate-300 font-semibold">Cost Per Unit</div>
              <div className="text-slate-400 text-sm mt-1">
                manufacturing cost
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Test Results Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Hot-Fire Test Results
            </h2>
            <p className="text-lg text-slate-300">
              Comprehensive testing validates our revolutionary design
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-400">
                Test Campaign Overview
              </h3>
              <div className="space-y-6">
                <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-blue-400">
                        Test #1-3: Proof of Concept
                      </CardTitle>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                        Success
                      </Badge>
                    </div>
                    <CardDescription>
                      Initial detonation wave establishment
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li>• Stable detonation wave achieved</li>
                      <li>• 15-second burn duration</li>
                      <li>• Chamber pressure: 300 psi</li>
                      <li>• Specific impulse: 380 sec</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-purple-500/20">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-purple-400">
                        Test #4-5: Performance Optimization
                      </CardTitle>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                        Success
                      </Badge>
                    </div>
                    <CardDescription>
                      Maximum performance validation
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li>• Peak specific impulse: 420 sec</li>
                      <li>• 30-second burn duration</li>
                      <li>• Chamber pressure: 500 psi</li>
                      <li>• Throttling capability demonstrated</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-purple-400">
                Performance Comparison
              </h3>
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-slate-300 font-semibold">
                      Specific Impulse (sec)
                    </span>
                    <BarChart3 className="h-5 w-5 text-slate-400" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Traditional Engine</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 h-2 bg-slate-700 rounded-full">
                          <div className="w-16 h-2 bg-slate-500 rounded-full"></div>
                        </div>
                        <span className="text-slate-300 text-sm">320</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-400 font-semibold">
                        Project Wavefront
                      </span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 h-2 bg-slate-700 rounded-full">
                          <div className="w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        </div>
                        <span className="text-blue-400 text-sm font-semibold">
                          420
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-slate-300 font-semibold">
                      Manufacturing Cost
                    </span>
                    <Target className="h-5 w-5 text-slate-400" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Traditional Engine</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 h-2 bg-slate-700 rounded-full">
                          <div className="w-20 h-2 bg-slate-500 rounded-full"></div>
                        </div>
                        <span className="text-slate-300 text-sm">$25K</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-green-400 font-semibold">
                        Project Wavefront
                      </span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 h-2 bg-slate-700 rounded-full">
                          <div className="w-5 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
                        </div>
                        <span className="text-green-400 text-sm font-semibold">
                          $5K
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Validation & Recognition */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Expert Validation & Recognition
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Our results have been verified by leading aerospace experts and
              recognized by industry professionals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Award className="h-6 w-6 text-blue-400" />
                  <CardTitle className="text-blue-400">
                    NASA Validation
                  </CardTitle>
                </div>
                <CardDescription>
                  Independent verification of test results
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-300">
                  NASA propulsion experts have reviewed and validated our test
                  data, confirming the 30% efficiency improvement and stable
                  detonation wave operation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <TrendingUp className="h-6 w-6 text-purple-400" />
                  <CardTitle className="text-purple-400">
                    Industry Interest
                  </CardTitle>
                </div>
                <CardDescription>
                  Commercial partnerships in development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-300">
                  Multiple aerospace companies have expressed interest in
                  licensing our technology for commercial applications and small
                  satellite launches.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Zap className="h-6 w-6 text-cyan-400" />
                  <CardTitle className="text-cyan-400">
                    Academic Recognition
                  </CardTitle>
                </div>
                <CardDescription>
                  Published research and conference presentations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-300">
                  Our work has been presented at major aerospace conferences and
                  is being prepared for publication in peer-reviewed journals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Testing Plans */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              What&apos;s Next
            </h2>
            <p className="text-lg text-slate-300">
              Upcoming milestones and testing phases
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">
                2024 Goals
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Extended burn duration testing (60+ seconds)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Higher thrust configurations (15K+ lbs)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Reusability testing (100+ cycles)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Flight-ready prototype development</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-purple-500/20">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">
                2025-2026 Vision
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>First orbital test flight</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Commercial licensing partnerships</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Scaled manufacturing capabilities</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Next-generation RDRE designs</span>
                </li>
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
              Want to Learn More?
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Dive deeper into our technology or meet the incredible team of
              students making this breakthrough possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/technology">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg"
                >
                  Explore Technology <ArrowRight className="ml-2 h-5 w-5" />
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
