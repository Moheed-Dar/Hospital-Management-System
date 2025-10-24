"use client";
import { Shield, UserCog, UserCheck } from "lucide-react";

export default function AuthorizationPage() {
  const roles = [
    { role: "Admin", access: "Full access to all modules" },
    { role: "Doctor", access: "Limited to patients and appointments" },
    { role: "Operator", access: "Basic data entry and reports" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Authorization & Roles</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {roles.map((r, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-6 shadow hover:shadow-lg border border-gray-100"
          >
            <Shield className="w-8 h-8 text-blue-600 mb-2" />
            <h2 className="text-lg font-semibold text-gray-800">{r.role}</h2>
            <p className="text-gray-500 mt-1">{r.access}</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Manage Access
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
