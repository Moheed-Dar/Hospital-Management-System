"use client";
import { CheckCircle, Clock, XCircle } from "lucide-react";

export default function AppointmentsPage() {
  const appointments = [
    { id: 1, patient: "Ahmed Raza", doctor: "Dr. Sarah", status: "Pending" },
    { id: 2, patient: "Ali Khan", doctor: "Dr. Imran", status: "Completed" },
    { id: 3, patient: "Hina Qureshi", doctor: "Dr. Ayesha", status: "Cancelled" },
  ];

  const getStatusColor = (status) => {
    if (status === "Pending") return "text-yellow-600";
    if (status === "Completed") return "text-green-600";
    if (status === "Cancelled") return "text-red-600";
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 text-black">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Appointments Overview</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <SummaryCard title="Pending" count="4" icon={<Clock />} color="yellow" />
        <SummaryCard title="Completed" count="8" icon={<CheckCircle />} color="green" />
        <SummaryCard title="Cancelled" count="2" icon={<XCircle />} color="red" />
      </div>

      <div className="mt-10 bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">All Appointments</h2>
        <table className="w-full">
          <thead>
            <tr className="text-left bg-blue-50">
              <th className="p-3">Patient</th>
              <th className="p-3">Doctor</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a) => (
              <tr key={a.id} className="border-t hover:bg-gray-50">
                <td className="p-3">{a.patient}</td>
                <td className="p-3">{a.doctor}</td>
                <td className={`p-3 font-medium ${getStatusColor(a.status)}`}>
                  {a.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SummaryCard({ title, count, icon, color }) {
  const colors = {
    yellow: "bg-yellow-100 text-yellow-700",
    green: "bg-green-100 text-green-700",
    red: "bg-red-100 text-red-700",
  };
  return (
    <div className={`p-5 rounded-xl ${colors[color]} flex items-center gap-3`}>
      {icon}
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm">{count} appointments</p>
      </div>
    </div>
  );
}
