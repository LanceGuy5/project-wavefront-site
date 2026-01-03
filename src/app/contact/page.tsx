"use client";

import Beams from "@/components/blocks/Beams";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronDown, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailto = `mailto:contact@projectwavefront.org?subject=${encodeURIComponent(
      form.subject || "Contact from Project Wavefront",
    )}&body=${encodeURIComponent(
      `Name: ${form.firstName} ${form.lastName}
Email: ${form.email}
Organization: ${form.organization}

Message:
${form.message}`,
    )}`;

    window.location.href = mailto;
  };

  return (
    <div className="min-h-screen text-foreground relative overflow-hidden bg-black">
      <Header />

      {/* Hero Section */}
      <section className="relative z-10 pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="absolute inset-x-0 top-0 w-full h-[100vh] bg-black z-[-1]">
          <Beams
            beamWidth={1}
            beamHeight={15}
            beamNumber={15}
            lightColor="#888"
            speed={2}
            noiseIntensity={1.2}
            scale={0.2}
            rotation={30}
          />
        </div>
        <div className="max-w-7xl mx-auto w-full flex flex-col">
          <div className="animate-fade-slide-up">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-center mb-6 text-white">
              CONTACT US
            </h1>
          </div>
          <div className="animate-fade-slide-up">
            <h3 className="text-xl md:text-2xl lg:text-3xl text-gray-400 text-center">
              Project Wavefront was founded with a mission to foster innovation
              in the aerospace engineering community and will always be open to
              assistance and input from other passionate individuals.
            </h3>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-gray-500" />
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen text-foreground relative overflow-hidden py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <Card className="bg-black border border-none shadow-none my-8">
            <div className="grid lg:grid-cols-2 gap-16 p-10 relative">
              {/* Contact Form */}
              <div>
                <CardTitle className="text-4xl font-bold text-gray-100 mb-8">
                  MESSAGE US
                </CardTitle>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        FIRST NAME *
                      </label>
                      <Input
                        required
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        className="bg-gray-900 border border-gray-700 text-gray-200 placeholder-gray-500 focus:ring-1 focus:ring-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        LAST NAME *
                      </label>
                      <Input
                        required
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        className="bg-gray-900 border border-gray-700 text-gray-200 placeholder-gray-500 focus:ring-1 focus:ring-gray-400"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      EMAIL *
                    </label>
                    <Input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="bg-gray-900 border border-gray-700 text-gray-200 placeholder-gray-500 focus:ring-1 focus:ring-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      ORGANIZATION *
                    </label>
                    <Input
                      required
                      name="organization"
                      value={form.organization}
                      onChange={handleChange}
                      placeholder="Your company or university"
                      className="bg-gray-900 border border-gray-700 text-gray-200 placeholder-gray-500 focus:ring-1 focus:ring-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      SUBJECT *
                    </label>
                    <Input
                      required
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Partnership Opportunity"
                      className="bg-gray-900 border border-gray-700 text-gray-200 placeholder-gray-500 focus:ring-1 focus:ring-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      MESSAGE *
                    </label>
                    <Textarea
                      required
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your interest in Project Wavefront..."
                      rows={6}
                      className="bg-gray-900 border border-gray-700 text-gray-200 placeholder-gray-500 focus:ring-1 focus:ring-gray-400 resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gray-800 hover:bg-gray-700 text-white hover:cursor-pointer"
                  >
                    Send Message <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>

              {/* Divider */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-700"></div>

              {/* Contact Info */}
              <div>
                <h2 className="text-4xl font-bold mb-8 text-gray-100">
                  CONTACT INFORMATION
                </h2>
                <div className="space-y-8">
                  <Card className="bg-gray-900 border border-gray-700">
                    <CardHeader>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-6 w-6 text-gray-300" />
                        <CardTitle className="text-gray-300">Email</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-200">
                        contact@projectwavefront.org
                      </p>
                      <p className="text-gray-500 text-sm mt-1">
                        We typically respond within 24 hours
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gray-900 border border-gray-700">
                    <CardHeader>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-6 w-6 text-gray-300" />
                        <CardTitle className="text-gray-300">
                          Location
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-200">Philadelphia, PA 19104</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
