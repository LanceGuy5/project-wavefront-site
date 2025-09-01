import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 text-lg">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/min-logo.png"
              alt="Project Wavefront Logo"
              width={40}
              height={40}
            />
            <span className="ml-2 text-xl font-bold">PROJECT WAVEFRONT</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link
              href="/our-team"
              className="hover:text-gray-400 hover:scale-105 transition duration-200 transition-colors"
            >
              Our Team
            </Link>
            <Link
              href="/contact"
              className="hover:text-gray-400 hover:scale-105 transition duration-200 transition-colors"
            >
              Contact Us
            </Link>
            <Link href="/mark-i" className="hover:text-gray-400 hover:scale-105 transition duration-200 transition-colors">
              Mark I
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
