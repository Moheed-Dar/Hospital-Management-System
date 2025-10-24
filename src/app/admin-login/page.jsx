"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Mail, Lock, ShieldCheck } from "lucide-react";

export default function AdminLogin() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [focused, setFocused] = useState({ email: false, password: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/admin-dashboard");
  };

  const getLabelClass = (field) => {
    return (
      "absolute left-11 transition-all duration-300 pointer-events-none " +
      ((focused[field] || form[field])
        ? "top-1 text-xs text-teal-400"
        : "top-3.5 text-gray-400")
    );
  };

  useEffect(() => {
    const animate = document.querySelector(".login-card");
    animate?.classList.add("animate-fadeIn");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-teal-900 relative overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-teal-500 rounded-full blur-[150px] opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-600 rounded-full blur-[150px] opacity-30"></div>

      <div className="login-card relative z-10 bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-teal-400/20 w-[95%] sm:w-[400px] transition-all duration-500 hover:shadow-teal-500/40 hover:scale-[1.03]">
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="bg-gradient-to-r from-teal-400 to-blue-500 p-3 rounded-2xl shadow-lg">
            <ShieldCheck className="text-white" size={40} />
          </div>
          <h2 className="text-4xl font-extrabold mt-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 tracking-wide">
            Admin Portal
          </h2>
          <p className="text-gray-300 mt-2 text-sm">Secure access for authorized users</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div className="relative group">
            <Mail
              className="absolute left-4 top-3 text-teal-400 group-hover:text-teal-300 transition-colors duration-300"
              size={22}
            />
            <label className={getLabelClass("email")} htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              onFocus={() => setFocused({ ...focused, email: true })}
              onBlur={() => setFocused({ ...focused, email: false })}
              className="w-full pt-5 pb-2 bg-gray-900/60 border border-gray-700 focus:border-teal-400 pl-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/50 transition-all duration-300 text-white placeholder-gray-400"
              required
              aria-label="Email address"
            />
          </div>

          {/* Password */}
          <div className="relative group">
            <Lock
              className="absolute left-4 top-3 text-teal-400 group-hover:text-teal-300 transition-colors duration-300"
              size={22}
            />
            <label className={getLabelClass("password")} htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              onFocus={() => setFocused({ ...focused, password: true })}
              onBlur={() => setFocused({ ...focused, password: false })}
              className="w-full bg-gray-900/60 border border-gray-700 focus:border-teal-400 pt-5 pb-2 pl-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/50 transition-all duration-300 text-white placeholder-gray-400"
              required
              aria-label="Password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full relative overflow-hidden bg-gradient-to-r from-teal-500 to-blue-600 text-white py-3 rounded-xl font-semibold tracking-wide hover:from-teal-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-teal-500/40 group"
          >
            <span className="relative z-10 cursor-pointer flex items-center justify-center gap-3">
              <Lock size={20} />
              Enter Portal
            </span>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-400 text-xs mt-6">
          © {new Date().getFullYear()} Secure Admin Panel — All Rights Reserved
        </p>
      </div>
    </div>
  );
}
