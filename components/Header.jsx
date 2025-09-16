"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src="/room-mate.png"
              width={24}
              height={24}
              alt="Room mate"
            />

            <span className="text-xl font-semibold text-gray-900">
              Co<span className="text-green-600">Living</span>
            </span>
          </div>

          {/* Right side - Desktop with Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Navigation */}
            <nav className="flex items-center space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                About Us
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <button className="md:hidden border-t border-gray-100 py-4">
            <div className="flex flex-col space-y-3">
              <a
                href="#home"
                className="text-gray-700 hover:text-gray-900 transition-colors py-2"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-gray-900 transition-colors py-2"
              >
                About Us
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-gray-900 transition-colors py-2"
              >
                Contact
              </a>
            </div>
          </button>
        )}
      </div>
    </header>
  );
}
