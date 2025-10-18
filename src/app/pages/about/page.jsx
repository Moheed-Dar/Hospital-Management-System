"use client";
import { Heart, Award, Users, Clock } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-16 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Our Core Values
      </h1>

      {/* Core Values Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
        <div className="bg-blue-50 rounded-2xl p-6 text-center shadow-sm border border-blue-100 hover:shadow-md transition">
          <Heart className="mx-auto text-blue-600   w-10 h-10 mb-4" />
          <h3 className="text-lg font-semibold">Compassion</h3>
          <p className="text-gray-500 mt-2">
            We treat every patient with empathy and respect
          </p>
        </div>

        <div className="bg-green-50 rounded-2xl p-6 text-center shadow-sm border border-green-100 hover:shadow-md transition">
          <Award className="mx-auto text-green-600 w-10 h-10 mb-4" />
          <h3 className="text-lg font-semibold">Excellence</h3>
          <p className="text-gray-500 mt-2">
            Committed to the highest standards of medical care
          </p>
        </div>

        <div className="bg-blue-50 rounded-2xl p-6 text-center shadow-sm border border-blue-100 hover:shadow-md transition">
          <Users className="mx-auto text-blue-600 w-10 h-10 mb-4" />
          <h3 className="text-lg font-semibold">Teamwork</h3>
          <p className="text-gray-500 mt-2">
            Collaboration for better patient outcomes
          </p>
        </div>

        <div className="bg-green-50 rounded-2xl p-6 text-center shadow-sm border border-green-100 hover:shadow-md transition">
          <Clock className="mx-auto text-green-600 w-10 h-10 mb-4" />
          <h3 className="text-lg font-semibold">Reliability</h3>
          <p className="text-gray-500 mt-2">
            Always here when you need us most
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl p-8 text-center shadow-md border border-gray-100">
          <h3 className="text-3xl font-bold text-blue-600">25+</h3>
          <p className="text-gray-600 mt-2">Years of Service</p>
        </div>
        <div className="bg-white rounded-2xl p-8 text-center shadow-md border border-gray-100">
          <h3 className="text-3xl font-bold text-green-600">500+</h3>
          <p className="text-gray-600 mt-2">Medical Professionals</p>
        </div>
        <div className="bg-white rounded-2xl p-8 text-center shadow-md border border-gray-100">
          <h3 className="text-3xl font-bold text-blue-600">50k+</h3>
          <p className="text-gray-600 mt-2">Satisfied Patients</p>
        </div>
      </div>
    </div>
  );
}
