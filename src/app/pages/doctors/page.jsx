"use client";

import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Star, Search, Calendar } from "lucide-react";

// ✅ Replace these paths with your actual image locations or use public folder images
import doctorImage1 from "@/accets/doctor-male.jpg";
import doctorImage2 from "@/accets/doctor-female.jpg";
import doctorImage3 from "@/accets/doctor-male.jpg";
import doctorImage4 from "@/accets/doctor-female.jpg";

export default function Doctors() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSpecialty, setActiveSpecialty] = useState("All Doctors");

  const doctors = [
    {
      id: "1",
      name: "James Wilson",
      specialty: "Cardiology",
      rating: 4.9,
      experience: 15,
      image: doctorImage1,
      available: true,
    },
    {
      id: "2",
      name: "Sarah Chen",
      specialty: "Pediatrics",
      rating: 4.8,
      experience: 12,
      image: doctorImage2,
      available: true,
    },
    {
      id: "3",
      name: "Michael Brown",
      specialty: "Orthopedics",
      rating: 4.7,
      experience: 18,
      image: doctorImage3,
      available: false,
    },
    {
      id: "4",
      name: "Emily Rodriguez",
      specialty: "Pediatrics",
      rating: 4.9,
      experience: 10,
      image: doctorImage4,
      available: true,
    },
    {
      id: "5",
      name: "David Kim",
      specialty: "Cardiology",
      rating: 4.6,
      experience: 14,
      image: doctorImage1,
      available: false,
    },
    {
      id: "6",
      name: "Lisa Anderson",
      specialty: "Dermatology",
      rating: 4.8,
      experience: 11,
      image: doctorImage2,
      available: true,
    },
  ];

  const specialties = useMemo(() => {
    const uniqueSpecialties = Array.from(new Set(doctors.map((d) => d.specialty)));
    return ["All Doctors", ...uniqueSpecialties.sort()];
  }, [doctors]);

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      const matchesSearch =
        searchQuery.length < 2 ||
        doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesSpecialty =
        activeSpecialty === "All Doctors" || doctor.specialty === activeSpecialty;

      return matchesSearch && matchesSpecialty;
    });
  }, [doctors, searchQuery, activeSpecialty]);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">
            Our Expert <span className="text-blue-600">Doctors</span>
          </h1>
          <p className="text-gray-600">
            Find the right specialist for your healthcare needs
          </p>
        </div>

        {/* Search & Filter */}
        <div className="space-y-4">
          <div className="relative w-full max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            <Input
              type="search"
              placeholder="Search doctors by name or specialty..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-12 pl-12 pr-4 text-base rounded-lg text-black"
            />
          </div>

          <div className="flex gap-2 flex-wrap justify-center">
            {specialties.map((specialty) => {
              const isActive = activeSpecialty === specialty;
              return (
                <Button
                  key={specialty}
                  variant={isActive ? "default" : "secondary"}
                  size="sm"
                  className="rounded-full px-4"
                  onClick={() => setActiveSpecialty(specialty)}
                >
                  {specialty}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Doctor Count */}
        <div className="text-center">
          <p className="text-sm  text-gray-500">
            Showing {filteredDoctors.length}{" "}
            {filteredDoctors.length === 1 ? "doctor" : "doctors"}
          </p>
        </div>

        {/* Doctor Cards */}
        {filteredDoctors.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDoctors.map((doctor) => (
              <Card
                key={doctor.id}
                className="p-6 border-1 border-gray-200 bg-white hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <img
                      src={doctor.image?.src || doctor.image}
                      alt={`Dr. ${doctor.name}`}
                      className="h-30 w-30 rounded-md   object-cover"
                    />
                    {doctor.available ? (
                      <Badge className="absolute -top-1 -right-3 bg-green-500 text-white text-xs px-2 py-0.5 border-0">
                        Available
                      </Badge>
                    ) : (
                      <Badge className="absolute -top-1 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 border-0">
                        Not Available
                      </Badge>
                    )}
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-black">
                      Dr. {doctor.name}
                    </h3>
                    <p className="text-sm text-gray-500 italic">
                      {doctor.specialty}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      <span className="font-medium text-gray-900">
                        {doctor.rating}
                      </span>
                    </div>
                    <div className="h-4 w-px bg-gray-300" />
                    <span className="text-gray-500">
                      {doctor.experience} years experience.
                    </span>
                  </div>

                  <Button
                    className="w-full cursor-pointer bg-blue-500 text-white font-semibold py-2 rounded-lg 
             shadow-md hover:bg-blue-600 transform hover:scale-105 
             transition-all duration-300 ease-in-out"
                    onClick={() => console.log(`View profile for Dr. ${doctor.name}`)}
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                                    <span>Book Appointment</span>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 space-y-3">
            <p className="text-lg text-gray-500">
              No doctors found matching your criteria
            </p>
            <p className="text-sm text-gray-500">
              Try adjusting your search or filter
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
