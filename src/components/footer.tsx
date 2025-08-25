import { Github, Linkedin, Mail, Rocket, Twitter } from "lucide-react";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-slate-900/50 backdrop-blur-sm border-t border-slate-700/50 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image src="/min-logo.png" alt="Project Wavefront Logo" width={30} height={30} />
              <span className="text-xl font-bold text-white">
                Project Wavefront
              </span>
            </Link>
            <p className="text-slate-300 mb-6 max-w-md">
              Pioneering the development of the first student-built rotating
              detonation rocket engine. Empowering students to push the
              boundaries of propulsion technology.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/LanceGuy5/project-wavefront-site"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/company/projectwavefront"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/projectwavefront"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="mailto:admin@projectwavefront.org"
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/technology"
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  href="/performance"
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                >
                  Performance
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-slate-300">
              <p>University of Pennsylvania</p>
              <p>Philadelphia, PA 19104</p>
              <p>admin@projectwavefront.org</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700/50 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            © 2025 Project Wavefront. All rights reserved. Built by students,
            for the future.
          </p>
        </div>
      </div>
    </footer>
  );
}
