"use client";
import Link from "next/link";
import { useState } from "react";
import { Activity, Calendar, Users, LogIn, Menu, X } from "lucide-react";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full bg-white backdrop-blur-sm z-50 shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="p-2 bg-primary rounded-lg group-hover:shadow-glow transition-smooth">
                            <Activity className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            MediCare
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-6">
                        <Link href="/pages/home" className="text-gray-600 hover:text-primary transition-colors font-medium">
                            Home
                        </Link>
                        <Link href="/pages/doctors" className="text-gray-600 hover:text-primary transition-colors font-medium">
                            Doctors
                        </Link>
                        <Link href="/pages/appointments" className="text-gray-600 hover:text-primary transition-colors font-medium">
                            Appointments
                        </Link>
                        <Link href="/pages/about" className="text-gray-600 hover:text-primary transition-colors font-medium">
                            About
                        </Link>
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden lg:flex items-center text-black space-x-3">
                        <button className="flex items-center px-4 py-2 rounded-md hover:bg-[#3B82F6]  hover:text-white hover:opacity-90 transition-smooth text-gray-500">
                            <div className="mr-2">
                                <LogIn className="h-4 w-4 mr-2" />
                            </div>
                            <span>Login</span>
                        </button>
                        <Link
                            href="/pages/appointments"
                            className="flex items-center px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-all"
                        >
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>Book Now</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 hover:bg-muted rounded-lg text-black transition-colors"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div
                        className="lg:hidden fixed top-16 left-1/2 -translate-x-1/2 w-full  h-[80vh] 
               bg-white  shadow-lg rounded-xl text-black hover:text-white animate-slide-down overflow-y-auto"
                    >
                        <div className="flex flex-col space-y-3">
                            <a href='/pages/home' className="py-2 px-4 text-gray-700 hover:bg-slate-400 hover:text-white rounded-lg transition-colors">
                                Home
                            </a>
                            <a href="/pages/doctors" className="py-2 px-4 text-gray-700 hover:bg-slate-400 hover:text-white rounded-lg transition-colors">
                                Doctors
                            </a>
                            <a href="/pages/appointments" className="py-2 px-4 text-gray-700 hover:bg-slate-400 hover:text-white rounded-lg transition-colors">
                                Appointments
                            </a>
                            <a href="/pages/about" className="py-2 px-4 text-gray-700 hover:bg-slate-400 hover:text-white rounded-lg transition-colors">
                                About
                            </a>

                            <div className="flex flex-col space-y-2 pt-2">
                                <button className="flex items-center px-4 py-2 rounded-md hover:bg-[#3B82F6]  hover:text-white hover:opacity-90 transition-smooth text-gray-500">
                                    <div className="mr-2">
                                        <LogIn className="h-4 w-4 mr-2" />
                                    </div>
                                    <span>Login</span>
                                </button>
                                <button className="flex items-center px-4 py-2 rounded-md hover:bg-[#3B82F6]  hover:text-white hover:opacity-90 transition-smooth text-gray-500">
                                    <div className="mr-2">
                                        <Calendar className="h-4 w-4 mr-2" />
                                    </div>
                                    <span>Book Now</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
