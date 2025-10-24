"use client";
import { User, FileText, Heart } from "lucide-react";

export default function PatientsPage() {
  const patients = [
    { id: 1, name: "Ali Raza", age: 32, condition: "Heart Disease" },
    { id: 2, name: "Hina Fatima", age: 27, condition: "Diabetes" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Patient Records</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {patients.map((p) => (
          <div key={p.id} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <User className="w-8 h-8 text-blue-600 mb-2" />
            <h2 className="text-lg font-semibold text-gray-800">{p.name}</h2>
            <p className="text-gray-500">Age: {p.age}</p>
            <div className="flex items-center gap-2 mt-2 text-red-600">
              <Heart className="w-4 h-4" /> {p.condition}
            </div>
            <button className="mt-4 flex items-center gap-1 text-blue-600 hover:underline">
              <FileText className="w-4 h-4" /> View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
