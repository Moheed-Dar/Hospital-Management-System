"use client";
import Link from "next/link";

export default function UnderDevelopment() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white text-center px-4">

      {/* ✅ Text Section */}
      <h1 className="mt-8 text-3xl md:text-4xl font-bold text-gray-800">
        🚧 Page Under Development
      </h1>
      <p className="mt-3 text-gray-600 max-w-lg">
        We’re working hard to bring you something amazing here.  
        This page is still under development. Please check back soon!
      </p>

      {/* ✅ Button Section */}
      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700 transition-all"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}
