"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight,
  ChevronLeft,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Send,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ContactPage() {
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
              <Link href="/contact" className="text-primary font-semibold">
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
              Let&apos;s Connect
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl leading-relaxed">
              Ready to collaborate, invest, or learn more about Project
              Wavefront? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-400">
                Send us a Message
              </h2>
              <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          First Name
                        </label>
                        <Input
                          placeholder="John"
                          className="bg-slate-800/50 border-slate-600 text-slate-200 placeholder-slate-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          Last Name
                        </label>
                        <Input
                          placeholder="Doe"
                          className="bg-slate-800/50 border-slate-600 text-slate-200 placeholder-slate-400"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        className="bg-slate-800/50 border-slate-600 text-slate-200 placeholder-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Organization
                      </label>
                      <Input
                        placeholder="Your company or university"
                        className="bg-slate-800/50 border-slate-600 text-slate-200 placeholder-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Subject
                      </label>
                      <Input
                        placeholder="Partnership Opportunity"
                        className="bg-slate-800/50 border-slate-600 text-slate-200 placeholder-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Message
                      </label>
                      <Textarea
                        placeholder="Tell us about your interest in Project Wavefront..."
                        rows={6}
                        className="bg-slate-800/50 border-slate-600 text-slate-200 placeholder-slate-400"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    >
                      Send Message <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-purple-400">
                Contact Information
              </h2>
              <div className="space-y-6">
                <Card className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-purple-500/20">
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-6 w-6 text-purple-400" />
                      <CardTitle className="text-purple-400">Email</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300">
                      contact@projectwavefront.org
                    </p>
                    <p className="text-slate-400 text-sm mt-1">
                      We typically respond within 24 hours
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/20">
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-6 w-6 text-cyan-400" />
                      <CardTitle className="text-cyan-400">Location</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300">MIT Aerospace Lab</p>
                    <p className="text-slate-300">77 Massachusetts Avenue</p>
                    <p className="text-slate-300">Cambridge, MA 02139</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20">
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-6 w-6 text-blue-400" />
                      <CardTitle className="text-blue-400">Phone</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300">+1 (617) 555-0123</p>
                    <p className="text-slate-400 text-sm mt-1">
                      Available Monday-Friday, 9 AM - 5 PM EST
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50">
                <h3 className="text-xl font-bold mb-4 text-slate-200">
                  Partnership Opportunities
                </h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Research collaborations with universities</li>
                  <li>• Commercial licensing agreements</li>
                  <li>• Investment and funding opportunities</li>
                  <li>• Student internship programs</li>
                  <li>• Technology demonstration partnerships</li>
                </ul>
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
              Ready to Join the Revolution?
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Whether you&apos;re a student, researcher, investor, or industry
              professional, there&apos;s a place for you in Project
              Wavefront&apos;s future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/team">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg"
                >
                  Meet Our Team <ArrowRight className="ml-2 h-5 w-5" />
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
