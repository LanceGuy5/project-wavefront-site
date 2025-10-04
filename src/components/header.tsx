"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);


  // TODO : make heading like spacex
  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-background/60 backdrop-blur-sm transition-transform duration-300 ${isScrolled ? "-translate-y-full" : "translate-y-0"
        }`}
    >
      <div className="mx-12 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 text-lg">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/min-logo.png"
              alt="Project Wavefront Logo"
              width={40}
              height={40}
            />
            <span className="ml-2 text-xl font-bold tracking-wide">PROJECT WAVEFRONT</span>
          </Link>
          <div className="text-xl hidden md:flex space-x-12">
            <Link
              href="/our-team"
              className="hover:text-gray-400 hover:scale-105 transition duration-200 transition-scale tracking-wide"
            >
              OUR TEAM
            </Link>
            <Link
              href="/contact"
              className="hover:text-gray-400 hover:scale-105 transition duration-200 transition-scale tracking-wide"
            >
              CONTACT US
            </Link>
            <Link
              href="/mark-i"
              className="hover:text-gray-400 hover:scale-105 transition duration-200 transition-scale tracking-wide"
            >
              MARK I
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
