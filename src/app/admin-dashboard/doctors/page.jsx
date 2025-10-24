"use client";
import { Plus, Edit, Trash2, RefreshCcw } from "lucide-react";

export default function DoctorsPage() {
  const doctors = [
    { id: 1, name: "Dr. Sarah Khan", dept: "Cardiology", status: "Active" },
    { id: 2, name: "Dr. Imran Ali", dept: "Neurology", status: "On Leave" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8 text-black">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Doctor Management</h1>
      <div className="flex justify-end mb-4">
        <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus className="w-5 h-5 mr-2" /> Add Doctor
        </button>
      </div>

      <table className="w-full border border-gray-200 rounded-lg overflow-hidden shadow-md bg-white">
        <thead className="bg-blue-100 text-left">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Department</th>
            <th className="p-3">Status</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doc) => (
            <tr key={doc.id} className="border-t hover:bg-gray-50">
              <td className="p-3">{doc.name}</td>
              <td className="p-3">{doc.dept}</td>
              <td className="p-3">{doc.status}</td>
              <td className="p-3 flex gap-2">
                <button className="text-green-600 hover:text-green-800">
                  <Edit className="w-5 h-5" />
                </button>
                <button className="text-red-600 hover:text-red-800">
                  <Trash2 className="w-5 h-5" />
                </button>
                <button className="text-blue-600 hover:text-blue-800">
                  <RefreshCcw className="w-5 h-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
