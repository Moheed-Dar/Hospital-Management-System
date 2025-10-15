"use client";
import React from "react";
import { CalendarDays, PhoneCall } from "lucide-react";

const Details4 = () => {
  return (
    <div className="flex justify-center px-4 py-10  bg-white">
      <div className="bg-gray-200 p-6 sm:p-8 md:p-10 rounded-xl shadow-lg text-center w-full max-w-5xl">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Ready to Get Started?
        </h1>

        <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Book your appointment today and experience healthcare excellence.
        </p>

        {/* Buttons Section */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8">
          {/* Book Appointment Button */}
          <button className="w-full sm:w-auto bg-green-500 text-white cursor-pointer px-6 py-2 md:px-8 md:py-3 rounded-full flex items-center justify-center space-x-2 hover:bg-green-600 transition-all duration-300">
            <CalendarDays className="w-5 h-5" />
            <span className="text-sm sm:text-base md:text-lg font-medium">
              Book Appointment
            </span>
          </button>

          {/* Emergency Contact */}
          <a
            href="TEL:PIMS Islamabad"
            className="w-full sm:w-auto text-black bg-red-300 px-6 py-2 md:px-8 md:py-3 rounded-full flex items-center justify-center space-x-2 hover:bg-red-500 hover:text-white transition-all duration-300"
          >
            <PhoneCall className="w-5 h-5" />
            <span className="text-sm sm:text-base md:text-lg font-medium">
              Emergency: +1 (888) 0300
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Details4;
