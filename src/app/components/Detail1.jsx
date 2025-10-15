"use client";
import { ShieldCheck, Clock, Users } from "lucide-react";

export default function Detail1() {
    const cards = [
        {
            icon: <Users className="w-8 h-8 text-blue-600" />,
            title: "Expert Doctors",
            desc: "Our team consists of highly qualified and experienced medical professionals.",
        },
        {
            icon: <Clock className="w-8 h-8 text-green-600" />,
            title: "24/7 Service",
            desc: "Round-the-clock emergency services and support for your health needs.",
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-blue-400" />,
            title: "Safe & Secure",
            desc: "Your health data is protected with the highest security standards.",
        },
    ];

    return (
        <section className="py-16 bg-blue-50 text-center px-4 sm:px-6 lg:px-20">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-3">
                Why Choose MediCare?
            </h2>
            <p className="text-gray-500 mb-12 text-sm sm:text-base">
                We provide comprehensive healthcare services with the highest standards of care
            </p>

            <div className="grid gap-6 md:grid-cols-3 ">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="relative bg-white  shadow-sm shadow-gray-400 rounded-2xl  transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg py-10 px-5  flex flex-col items-start text-start group"
                    >

                        {/* Card Content */}
                        <div className="relative z-10 p-1 bg-blue-50 rounded-xl mb-4">{card.icon}</div>
                        <h3 className="relative z-10 text-lg font-semibold text-gray-800 mb-2">{card.title}</h3>
                        <p className="relative z-10 text-gray-500 text-sm">{card.desc}</p>
                    </div>
                ))}

            </div>
        </section>
    );
}
