"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import heroHospital from "@/accets/hero-hospital.jpg";

const HeroSection = () => {
    return (
        <section className="bg-white flex flex-col items-center justify-center px-6 md:pt-24 pt-20 sm:px-10 md:px-16 lg:px-20 py-10  ">
            <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-12">
                {/* Left Content */}
                <div className="flex-1 w-full space-y-8 text-center lg:text-left">
                    {/* Trusted Provider Badge */}
                    <span className="inline-block bg-blue-50 text-blue-600 px-5 py-2 rounded-full text-sm font-medium">
                        Trusted Healthcare Provider
                    </span>

                    {/* Heading */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                        <span>Your Health, </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">
                            Our Priority
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto lg:mx-0">
                        Experience world-class healthcare with our team of expert doctors.
                        Book appointments easily and get the care you deserve.
                    </p>

                    {/* CTA Button */}
                    <div className="flex justify-center lg:justify-start">
                        <button className="relative px-10 py-3 rounded-full font-semibold text-lg text-white bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-500 shadow-md transition-all duration-500 hover:shadow-lg hover:scale-105 hover:from-sky-500 hover:to-emerald-400 focus:outline-none overflow-hidden">
                            <span className="relative z-10 flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 text-white/90"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 8v8m4-4H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                Find Doctors
                            </span>
                            <span className="absolute inset-0 bg-white/10 blur-sm opacity-0 hover:opacity-30 transition-opacity duration-500"></span>
                        </button>
                    </div>

                    {/* Stats Section */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-8 sm:gap-12 pt-6">
                        <div className="text-center">
                            <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">
                                500+
                            </div>
                            <div className="text-sm sm:text-base text-gray-600">
                                Expert Doctors
                            </div>
                        </div>

                        <div className="text-center">
                            <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">
                                50k+
                            </div>
                            <div className="text-sm sm:text-base text-gray-600">
                                Happy Patients
                            </div>
                        </div>

                        <div className="text-center">
                            <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">
                                98%
                            </div>
                            <div className="text-sm sm:text-base text-gray-600">
                                Satisfaction
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Image with Motion */}
                <motion.div
                    className="flex-1 relative w-full h-72 sm:h-96 lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl shadow-gray-500"
                    animate={{ y: [0, -20, 0] }}
                    transition={{
                        duration: 6,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                >
                    <Image
                        src={heroHospital}
                        alt="Hero Image"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
