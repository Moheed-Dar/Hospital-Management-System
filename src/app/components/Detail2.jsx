"use client";
import { Users, Stethoscope, Calendar, HeartPulse } from "lucide-react";

export default function Detail2() {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      number: "50,000+",
      title: "Patients Served",
      sub: "+12% this month",
      color: "text-green-600",
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-green-600" />,
      number: "500+",
      title: "Expert Doctors",
      sub: "Across 40+ specialties",
      color: "text-green-600",
    },
    {
      icon: <Calendar className="w-8 h-8 text-teal-600" />,
      number: "100k+",
      title: "Appointments",
      sub: "+23% this year",
      color: "text-green-600",
    },
    {
      icon: <HeartPulse className="w-8 h-8 text-blue-500" />,
      number: "98%",
      title: "Satisfaction Rate",
      sub: "Based on reviews",
      color: "text-green-600",
    },
  ];

  return (
    <section className="py-16 bg-white px-4 sm:px-6 lg:px-20">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="relative bg-white shadow-sm shadow-gray-300 rounded-2xl  hover:shadow-lg transition-all duration-500 p-6 text-center flex flex-col items-start overflow-hidden group transform hover:scale-105"
          >
            {/* Circle background effect */}
            <div className="absolute top-[-20] right-0  w-16 h-20 bg-gradient-to-br from-blue-50 to-green-100 rounded-l-full transform scale-100 transition-transform duration-700 group-hover:scale-150 opacity-60" />

            {/* Icon */}
            <div className="relative z-10 p-1 bg-blue-50 rounded-xl mb-4 shadow-sm group-hover:shadow-md transition-shadow duration-500">
              {stat.icon}
            </div>

            {/* Text */}
            <h3 className="relative z-10 text-2xl font-bold text-gray-800 mb-1">
              {stat.number}
            </h3>
            <p className="relative z-10 text-gray-600 text-sm mb-1">
              {stat.title}
            </p>
            <span className={`relative z-10 text-xs font-medium ${stat.color}`}>
              {stat.sub}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
