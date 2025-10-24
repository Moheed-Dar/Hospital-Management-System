"use client";
import { BarChart3 } from "lucide-react";

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Billing & Reports</h1>
      <div className="bg-white p-6 rounded-xl shadow-md">
        <BarChart3 className="w-10 h-10 text-blue-600 mb-4" />
        <p className="text-gray-600">
          Generate and download reports of income, billing, and monthly statistics.
        </p>
        <button className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
          Generate Report
        </button>
      </div>
    </div>
  );
}
