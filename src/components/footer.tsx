import { Github, Linkedin, Mail, Twitter } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-slate-900/50 backdrop-blur-sm border-t border-slate-700/50 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid md:grid-cols-4 gap-6 mb-2">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-3">
              <Image
                src="/min-logo.png"
                alt="Project Wavefront Logo"
                width={24}
                height={24}
              />
              <span className="text-lg font-bold text-white tracking-wide">
                PROJECT WAVEFRONT
              </span>
            </Link>
            <p className="text-slate-300 mb-4 max-w-md text-sm">
              Pioneering the development of the first student-built rotating
              detonation rocket engine. Empowering students to push the
              boundaries of propulsion technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-1 text-base tracking-wide">
              QUICK LINKS
            </h3>
            <div className="flex flex-col space-y-1 text-slate-300 text-sm">
              <Link
                href="/our-team"
                className="hover:text-blue-400 transition duration-200 transition-scale tracking-wide"
              >
                OUR TEAM
              </Link>
              <Link
                href="/contact"
                className="hover:text-blue-400 transition duration-200 transition-scale"
              >
                CONTACT US
              </Link>
              <Link
                href="/mark-i"
                className="hover:text-blue-400 transition duration-200 transition-scale"
              >
                MARK I
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-base">CONTACT</h3>
            <div className="space-y-1 text-slate-300 text-sm">
              <p>University of Pennsylvania</p>
              <p>Philadelphia, PA 19104</p>
              <p>admin@projectwavefront.org</p>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-4 border-t border-slate-700/50 pt-6 items-center justify-center">
          <p className="text-slate-400 text-center text-sm">
            © 2025 Project Wavefront. All rights reserved. Built by students,
            for the future.
          </p>
          <span className="text-slate-400 text-xl">•</span>
          <div className="flex space-x-3">
            <a
              href="https://github.com/LanceGuy5/project-wavefront-site"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors hover:scale-105 transition duration-200 transition-scale"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/project-wavefront/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors hover:scale-105 transition duration-200 transition-scale"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/TeamWavefront"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors hover:scale-105 transition duration-200 transition-scale"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="mailto:admin@projectwavefront.org"
              className="text-slate-400 hover:text-blue-400 transition-colors hover:scale-105 transition duration-200 transition-scale"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
