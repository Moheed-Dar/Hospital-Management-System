"use client";
import Link from "next/link";
import { useState } from "react";
import { Activity, Calendar, Users, LogIn, Menu } from "lucide-react";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full bg-white backdrop-blur-sm border-b border-border z-50 shadow-sm">
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
                    <div className="hidden md:flex items-center space-x-6">
                        <Link href="/home" className="text-black hover:text-primary transition-colors font-medium">
                            Home
                        </Link>
                        <Link href="/doctors" className="text-black hover:text-primary transition-colors font-medium">
                            Doctors
                        </Link>
                        <Link href="/appointments" className="text-black hover:text-primary transition-colors font-medium">
                            Appointments
                        </Link>
                        <Link href="/about" className="text-black hover:text-primary transition-colors font-medium">
                            About
                        </Link>
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center text-black space-x-3">
                        {/* <Button variant="ghost" >
                            <Link href="/login">
                                <LogIn className="mr-2 h-4 w-4" />
                                Login
                            </Link>
                        </Button>

                        <Button asChild className="bg-gradient-primary hover:opacity-90 transition-smooth">
                            <Link href="/appointments">
                                <Calendar className="mr-2 h-4 w-4" />
                                Book Now
                            </Link>
                        </Button> */}
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

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 hover:bg-muted rounded-lg text-black transition-colors"
                    >
                        <Menu className="h-6 w-6" />
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden py-4 border-t text-black hover:text-white animate-fade-in">
                        <div className="flex flex-col space-y-3">
                            <Link href="/home" className="py-2 px-4 hover:bg-muted rounded-lg transition-colors">
                                Home
                            </Link>
                            <Link href="/doctors" className="py-2 px-4 hover:bg-muted rounded-lg transition-colors">
                                Doctors
                            </Link>
                            <Link href="/appointments" className="py-2 px-4 hover:bg-muted rounded-lg transition-colors">
                                Appointments
                            </Link>
                            <Link href="/about" className="py-2 px-4 hover:bg-muted rounded-lg transition-colors">
                                About
                            </Link>
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
