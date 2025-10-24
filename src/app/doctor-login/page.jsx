"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Stethoscope } from "lucide-react";

export default function DoctorLogin() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/doctor-dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-blue-300 to-blue-100">
      <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-8 w-[380px] border border-blue-200">
        {/* Header */}
        <div className="flex flex-col items-center mb-6">
          <div className="bg-blue-600 text-white p-3 rounded-full shadow-md">
            <Stethoscope size={28} />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mt-3">
            Doctor Login
          </h2>
          <p className="text-sm text-gray-500 mt-1 text-center">
            Sign in to access your dashboard and manage appointments
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="doctor@example.com"
              className="w-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2 rounded-md outline-none transition"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2 rounded-md outline-none transition"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2.5 rounded-md font-medium shadow-md hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <div className="text-center mt-5 text-sm text-gray-500">
          <p>
            Not a doctor?{" "}
            <a
              href="/admin-login"
              className="text-blue-600 hover:underline font-medium"
            >
              Go to Admin Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
