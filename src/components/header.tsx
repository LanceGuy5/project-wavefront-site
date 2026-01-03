"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const threshold = 50;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= threshold) {
        setIsScrolled(false);
      } else if (currentScrollY > lastScrollY) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-background/60 backdrop-blur-sm transition-transform duration-300 select-none ${
        isScrolled ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 text-lg">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/min-logo.png"
              alt="Project Wavefront Logo"
              width={40}
              height={40}
            />
            <span className="ml-2 text-xl font-bold tracking-wide">
              PROJECT WAVEFRONT
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-12 text-xl">
            <Link
              href="/mark-i"
              className="hover:text-gray-400 hover:scale-105 transition duration-200"
            >
              MARK I
            </Link>
            <Link
              href="/our-team"
              className="hover:text-gray-400 hover:scale-105 transition duration-200"
            >
              OUR TEAM
            </Link>
            <Link
              href="/contact"
              className="hover:text-gray-400 hover:scale-105 transition duration-200"
            >
              CONTACT US
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-sm text-center py-4 space-y-4 text-lg border-t border-gray-700">
          <Link
            href="/mark-i"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-gray-400"
          >
            MARK I
          </Link>
          <Link
            href="/our-team"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-gray-400"
          >
            OUR TEAM
          </Link>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-gray-400"
          >
            CONTACT US
          </Link>
        </div>
      )}
    </nav>
  );
}
