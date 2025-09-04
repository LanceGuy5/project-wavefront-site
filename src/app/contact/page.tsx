import Beams from "@/components/blocks/Beams";
import Dither from "@/components/blocks/Dither";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronDown, Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen text-foreground relative overflow-hidden">
      <Header />

      {/** Hero Section */}
      <section className="relative z-10 pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="absolute inset-x-0 top-0 w-full h-[100vh] bg-black z-[-1]">
          <Beams
            beamWidth={1}
            beamHeight={15}
            beamNumber={15}
            lightColor="#bfbfbf"
            speed={3}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={30}
          />
        </div>
        <div className="max-w-7xl mx-auto w-full flex flex-col">
          <div className="animate-fade-slide-up">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-center mb-6">
              CONTACT US
            </h1>
          </div>
          <div className="animate-fade-slide-up">
            <h3 className="text-xl md:text-2xl lg:text-3xl text-gray-400 text-center">
              At Project Wavefront, we&apos;re passionate about pushing the
              boundaries of aerospace innovation and welcome collaboration with
              researchers, partners, and talent eager to shape the future.
              Whether you&apos;re interested in joining our team, exploring
              partnerships, or sharing ideas, we&apos;d love to hear from you.
              Fill out the form below or reach out directly to connect with us!
            </h3>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-slate-400" />
        </div>
      </section>

      <section className="min-h-screen text-foreground relative overflow-hidden py-8 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-x-0 top-0 w-full h-[100vh] bg-black z-[-1]">
          <Dither
            waveColor={[0.2, 0.2, 0.2]}
            disableAnimation={false}
            enableMouseInteraction={false}
            mouseRadius={0.3}
            colorNum={4}
            waveAmplitude={0.5}
            waveFrequency={10}
            waveSpeed={0.01}
          />
        </div>
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 my-8">
            {/* Contact Form */}
            <div>
              <Card className="bg-black border border-none shadow-none">
                <CardTitle className="text-4xl font-bold text-gray-200 px-10">
                  MESSAGE US
                </CardTitle>
                <CardContent className="px-10">
                  <form className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          FIRST NAME *
                        </label>
                        <Input
                          required
                          placeholder="John"
                          className="focus-visible:ring-gray-400 focus-visible:ring-1 bg-slate-800/60 border border-none text-slate-200 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          LAST NAME *
                        </label>
                        <Input
                          required
                          placeholder="Doe"
                          className="focus-visible:ring-gray-400 focus-visible:ring-1 bg-slate-800/60 border border-none text-slate-200 placeholder-slate-400"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="focus-visible:ring-gray-400 focus-visible:ring-1 block text-sm font-medium text-slate-300 mb-2">
                        EMAIL *
                      </label>
                      <Input
                        required
                        type="email"
                        placeholder="john@example.com"
                        className="focus-visible:ring-gray-400 focus-visible:ring-1 bg-slate-800/60 border border-none text-slate-200 placeholder-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        ORGANIZATION *
                      </label>
                      <Input
                        required
                        placeholder="Your company or university"
                        className="focus-visible:ring-gray-400 focus-visible:ring-1 bg-slate-800/60 border border-none text-slate-200 placeholder-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        SUBJECT *
                      </label>
                      <Input
                        required
                        placeholder="Partnership Opportunity"
                        className="focus-visible:ring-gray-400 focus-visible:ring-1 bg-slate-800/60 border border-none text-slate-200 placeholder-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        MESSAGE *
                      </label>
                      <Textarea
                        required
                        placeholder="Tell us about your interest in Project Wavefront..."
                        rows={6}
                        className="focus-visible:ring-gray-400 focus-visible:ring-1 bg-slate-800/60 border border-none text-slate-200 placeholder-slate-400 resize-none"
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
              <h2 className="text-4xl font-bold mb-8 text-gray-300">
                CONTACT INFORMATION
              </h2>
              <div className="space-y-8">
                {" "}
                {/* Increased spacing between cards */}
                <Card className="bg-gradient-to-br from-purple-900/40 to-cyan-900/40 border border-purple-500/40">
                  {" "}
                  {/* Increased opacity */}
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
                <Card className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border border-cyan-500/40">
                  {" "}
                  {/* Increased opacity */}
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
                <Card className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/40">
                  {" "}
                  {/* Increased opacity */}
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
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
