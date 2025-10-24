"use client";
import { useRouter } from "next/navigation";

export default function PatientDashboard() {
  const router = useRouter();

  const handleLogout = () => router.push("/patient-login");

  return (
    <div className="min-h-screen bg-green-50 p-8">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold mb-4">Patient Dashboard 👤</h1>
        <p className="text-gray-600 mb-6">
          View your appointments, prescriptions, and medical records.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <DashboardCard title="Appointments" desc="View or cancel appointments" color="blue" />
          <DashboardCard title="Prescriptions" desc="Your latest prescriptions" color="purple" />
          <DashboardCard title="Medical History" desc="View past records" color="green" />
        </div>

        <div className="mt-8 flex justify-end">
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

function DashboardCard({ title, desc, color }) {
  const colors = {
    blue: "bg-blue-100 text-blue-700",
    purple: "bg-purple-100 text-purple-700",
    green: "bg-green-100 text-green-700",
  };
  return (
    <div className={`p-6 rounded-xl shadow-sm border hover:shadow-md transition ${colors[color]}`}>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p>{desc}</p>
    </div>
  );
}
