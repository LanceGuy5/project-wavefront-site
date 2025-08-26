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
import { ArrowRight, ChevronLeft, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function TeamPage() {
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
              <Link href="/team" className="text-primary font-semibold">
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
              25 Undergraduate Students
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Meet the Team
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl leading-relaxed">
              The brilliant minds behind Project Wavefront - 25 undergraduate
              students from top engineering programs, united by a passion for
              revolutionary propulsion technology.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Leadership Team
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              The core leadership driving Project Wavefront&apos;s innovation
              and success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">AS</span>
                </div>
                <CardTitle className="text-blue-400">Alex Sterling</CardTitle>
                <CardDescription>Project Lead & Chief Engineer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-300 mb-4">
                  Senior Aerospace Engineering student at MIT. Leading the
                  overall project vision and technical architecture.
                </p>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 bg-transparent"
                  >
                    <Linkedin className="h-4 w-4 mr-1" />
                    LinkedIn
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 bg-transparent"
                  >
                    <Mail className="h-4 w-4 mr-1" />
                    Email
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">MC</span>
                </div>
                <CardTitle className="text-purple-400">Maya Chen</CardTitle>
                <CardDescription>Propulsion Systems Lead</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-300 mb-4">
                  Junior Mechanical Engineering student at Stanford. Expert in
                  combustion dynamics and detonation wave physics.
                </p>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 bg-transparent"
                  >
                    <Linkedin className="h-4 w-4 mr-1" />
                    LinkedIn
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 bg-transparent"
                  >
                    <Mail className="h-4 w-4 mr-1" />
                    Email
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">JR</span>
                </div>
                <CardTitle className="text-cyan-400">
                  Jordan Rodriguez
                </CardTitle>
                <CardDescription>Manufacturing & Testing Lead</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-300 mb-4">
                  Senior Materials Engineering student at Caltech. Specializes
                  in additive manufacturing and test operations.
                </p>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 bg-transparent"
                  >
                    <Linkedin className="h-4 w-4 mr-1" />
                    LinkedIn
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 bg-transparent"
                  >
                    <Mail className="h-4 w-4 mr-1" />
                    Email
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Statistics */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Team by the Numbers
            </h2>
            <p className="text-lg text-slate-300">
              Diverse expertise from top engineering programs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20">
              <div className="text-4xl md:text-6xl font-bold text-blue-400 mb-2">
                25
              </div>
              <div className="text-slate-300 font-semibold">Total Students</div>
              <div className="text-slate-400 text-sm mt-1">Undergraduate</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-purple-500/20">
              <div className="text-4xl md:text-6xl font-bold text-purple-400 mb-2">
                8
              </div>
              <div className="text-slate-300 font-semibold">Universities</div>
              <div className="text-slate-400 text-sm mt-1">Top Programs</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/20">
              <div className="text-4xl md:text-6xl font-bold text-cyan-400 mb-2">
                6
              </div>
              <div className="text-slate-300 font-semibold">Disciplines</div>
              <div className="text-slate-400 text-sm mt-1">
                Engineering Fields
              </div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-green-500/20">
              <div className="text-4xl md:text-6xl font-bold text-green-400 mb-2">
                2
              </div>
              <div className="text-slate-300 font-semibold">Years</div>
              <div className="text-slate-400 text-sm mt-1">
                Development Time
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Join Our Mission
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Interested in joining our team or collaborating on revolutionary
              propulsion technology? We&apos;re always looking for passionate
              students and partners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg"
                >
                  Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/technology">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 bg-transparent px-8 py-4 text-lg"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
