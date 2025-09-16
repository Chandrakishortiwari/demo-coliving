

import { Linkedin, Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative w-8 h-8">
                <Image
  src="/room-mate.png"
  alt="Room-mate"
  fill
  className="object-contain"
  sizes="32px"
  loading="lazy"  
/>
              </div>
              <span className="text-xl font-semibold">
                Co<span className="text-green-600">Living</span>
              </span>
            </div>

            <div className="text-gray-400 text-sm mb-6 leading-relaxed">
              <p>Unit no. 1227, 1228,</p>
              <p>Tower C in Alphathum,</p>
              <p>Sector 90, Noida -</p>
              <p>201305</p>
            </div>

            <div className="mb-6">
              <a
                href="mailto:feedback@coliving.in"
                className="text-green-600 hover:text-green-500 transition-colors text-sm"
              >
                feedback@flatmate.in
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/flatmate-in/"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.facebook.com/flatmate.in"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/flatmate_in/"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.youtube.com/@flatmatesinindia"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold text-lg mb-6">About</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a
                  href="https://www.flatmate.in/aboutus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Company
                </a>
              </li>
              <li>
                <a
                  href="https://www.flatmate.in/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="https://www.flatmate.in/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://www.flatmate.in/refunds"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Refund & Cancel
                </a>
              </li>
              <li>
                <a
                  href="https://www.flatmate.in/careers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="https://blog.flatmate.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          {/* Flatmates */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Coliving</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a
                  href="https://www.flatmate.in/coliving-spaces-in-delhi"
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Coliving in Delhi
                </a>
              </li>
              <li>
                <a
                  href="https://www.flatmate.in/coliving-spaces-in-noida"
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Coliving in Noida
                </a>
              </li>
              <li>
                <a
                  href="https://www.flatmate.in/coliving-spaces-in-gurgaon"
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Coliving in Gurgaon
                </a>
              </li>
              <li>
                <a
                  href="https://www.flatmate.in/coliving-spaces-in-bangalore"
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Coliving in Bangalore
                </a>
              </li>
              <li>
                <a
                  href="https://www.flatmate.in/coliving-spaces-in-pune"
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Coliving in Pune
                </a>
              </li>
              <li>
                <a
                  href="https://www.flatmate.in/coliving-spaces-in-hyderabad"
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Coliving in Hyderabad
                </a>
              </li>
              <li>
                <a
                  href="https://www.flatmate.in/coliving-spaces-in-mumbai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Coliving in Mumbai
                </a>
              </li>
            </ul>
          </div>

          {/* PGs */}
          <div>
            <h3 className="font-semibold text-lg mb-6">PGs</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a
                  href="https://www.flatmate.in/pg-in-delhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  PG in Delhi
                </a>
              </li>
              <li>
                <a
                  href="https://www.flatmate.in/pg-in-noida"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  PG in Noida
                </a>
              </li>
              <li>
                <a
                  href="https://www.flatmate.in/pg-in-gurgaon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  PG in Gurgaon
                </a>
              </li>
              <li>
                <a
                  href="https://www.flatmate.in/pg-in-bangalore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  PG in Bangalore
                </a>
              </li>
              <li>
                <a
                  href="https://www.flatmate.in/pg-in-pune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  PG in Pune
                </a>
              </li>
              <li>
                <a
                  href="https://www.flatmate.in/pg-in-hyderabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  PG in Hyderabad
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a
                  href="https://www.flatmate.in/rent-agreement"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Rental Agreement
                </a>
              </li>
              <li>
                <a
                  href="https://www.flatmate.in/tenant-verification"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Tenant Verification
                </a>
              </li>
              <li>
                <a
                  href="https://www.flatmate.in/buy-furniture"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Buy Furniture
                </a>
              </li>
              <li>
                <a
                  href="https://www.flatmate.in/rent-receipt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Rent Receipt
                </a>
              </li>
              <li>
                <a
                  href="https://www.flatmate.in/manage-my-property"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Manage Your Flat
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            Copyright ©{year} CoLiving India. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
