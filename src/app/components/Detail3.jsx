"use client";
import Image from "next/image";
import doctorMale from "@/accets/doctor-male.jpg";
import doctorFemale from "@/accets/doctor-female.jpg";
import { Star, Users, Calendar } from "lucide-react";

export default function Detail3() {
  const doctors = [
    {
      id: 1,
      name: "Dr. James Wilson",
      specialty: "Cardiologist",
      rating: 4.9,
      experience: "15 years exp.",
      image: doctorMale,
      available: true,
    },
    {
      id: 2,
      name: "Dr. Sarah Chen",
      specialty: "Pediatrician",
      rating: 4.8,
      experience: "12 years exp.",
      image: doctorFemale,
      available: true,
    },
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-black mb-4">
            Meet Our Doctors
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experienced healthcare professionals ready to serve you
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Doctor Cards */}
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="overflow-hidden shadow-sm shadow-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  width={600}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                />
                {doctor.available && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                    Available
                  </div>
                )}
              </div>

              <div className="p-5 space-y-3">
                <div>
                  <h3 className="text-xl font-semibold text-black text-card-foreground">
                    {doctor.name}
                  </h3>
                  <p className="text-muted-foreground mt-1">{doctor.specialty}</p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-black text-card-foreground">
                      {doctor.rating}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {doctor.experience}
                  </span>
                </div>

                {/* Book Appointment Button */}
                <button className="mt-3 w-full flex items-center hover:cursor-pointer justify-center gap-2 bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-green-600 transition-all">
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </button>
              </div>
            </div>
          ))}

          {/* “View All Doctors” Card */}
          <div className="bg-gradient-to-br from-blue-700 via-cyan-600 to-teal-500 text-white rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
            <Users className="h-12 w-12 mb-4 opacity-95 drop-shadow-md" />
            <h3 className="text-3xl font-bold mb-2 tracking-wide">500+ More</h3>
            <p className="mb-6 opacity-90 text-lg">Specialists ready to care for you</p>

            <button className="bg-white text-blue-700 hover:cursor-pointer font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-red-500 hover:text-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              View All Doctors
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
