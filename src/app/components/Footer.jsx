"use client";

import Link from "next/link";
import {
  Activity,
  Mail,
  MapPin,
  Phone,
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50  border-gray-200 text-gray-700 ">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* 🌟 Logo & About */}
        <div>
          <Link href="/" className="flex items-center space-x-2 mb-4 group">
            <div className="p-2 bg-blue-600 rounded-lg group-hover:shadow-lg transition-all">
              <Activity className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              MediCare
            </span>
          </Link>

          <p className="text-sm leading-relaxed text-gray-600 mb-4">
            Providing quality healthcare services with compassion and excellence.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="p-2 bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="p-2 bg-gray-100 rounded-full hover:bg-blue-700 hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="p-2 bg-gray-100 rounded-full hover:bg-pink-600 hover:text-white transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              className="p-2 bg-gray-100 rounded-full hover:bg-sky-500 hover:text-white transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* ⚡ Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/doctors" className="hover:text-blue-600 transition-colors">
                Doctors
              </Link>
            </li>
            <li>
              <Link href="/appointments" className="hover:text-blue-600 transition-colors">
                Appointments
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-600 transition-colors">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* 💉 Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Our Services</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="hover:text-blue-600 transition-colors cursor-pointer">
              Emergency Care
            </li>
            <li className="hover:text-blue-600 transition-colors cursor-pointer">
              General Medicine
            </li>
            <li className="hover:text-blue-600 transition-colors cursor-pointer">
              Cardiology
            </li>
            <li className="hover:text-blue-600 transition-colors cursor-pointer">
              Pediatrics
            </li>
          </ul>
        </div>

        {/* 📍 Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0" />
              <span>123 Medical Street, Healthcare City, Islamabad-Pakistan</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-blue-600" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-blue-600" />
              <span>contact@medicare.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* 🔹 Copyright */}
      <div className="border-t border-gray-200 text-center py-5 text-sm text-gray-500">
        © {new Date().getFullYear()} <span className="text-blue-600 font-semibold">MediCare</span>. All rights reserved.
      </div>
    </footer>
  );
}
