"use client";
import { useRouter } from "next/navigation";
import { CalendarDays, FileText, Stethoscope, Clock, Users, Inbox, LogOut, ClipboardList } from "lucide-react";

export default function DoctorDashboard() {
  const router = useRouter();

  const handleLogout = () => router.push("/doctor-login");

  const sections = [
    {
      title: "Profile Management",
      desc: "Manage your profile details, specialization, and available timings.",
      icon: <Stethoscope size={26} />,
      color: "bg-blue-100 text-blue-700 border-blue-200",
      path: "/doctor-dashboard/profile",
    },
    {
      title: "View Appointments",
      desc: "Check today's, upcoming, and pending appointments.",
      icon: <CalendarDays size={26} />,
      color: "bg-green-100 text-green-700 border-green-200",
      path: "/doctor-dashboard/appointments",
    },
    {
      title: "Patient History",
      desc: "Access patients' visit history, prescriptions, and diagnoses.",
      icon: <Users size={26} />,
      color: "bg-purple-100 text-purple-700 border-purple-200",
      path: "/doctor-dashboard/patient-history",
    },
    {
      title: "Consultation Notes",
      desc: "Add notes, update patient treatment details, and visit status.",
      icon: <ClipboardList size={26} />,
      color: "bg-yellow-100 text-yellow-700 border-yellow-200",
      path: "/doctor-dashboard/consultation",
    },
    {
      title: "Generate Reports",
      desc: "Create and export treatment summaries or daily reports.",
      icon: <FileText size={26} />,
      color: "bg-indigo-100 text-indigo-700 border-indigo-200",
      path: "/doctor-dashboard/reports",
    },
    {
      title: "Inbox & Notifications",
      desc: "View messages from admin, students, or other doctors.",
      icon: <Inbox size={26} />,
      color: "bg-pink-100 text-pink-700 border-pink-200",
      path: "/doctor-dashboard/inbox",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 py-10 px-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
              Doctor Dashboard <span className="text-2xl">🩺</span>
            </h1>
            <p className="text-gray-500">
              Manage your appointments, patients, reports, and communications.
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition shadow-md"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>

        {/* Quick Info */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <InfoCard
            title="Today’s Appointments"
            value="8"
            icon={<CalendarDays size={24} />}
            color="bg-green-100 text-green-700"
          />
          <InfoCard
            title="Pending Consultations"
            value="3"
            icon={<Clock size={24} />}
            color="bg-yellow-100 text-yellow-700"
          />
          <InfoCard
            title="Unread Messages"
            value="5"
            icon={<Inbox size={24} />}
            color="bg-pink-100 text-pink-700"
          />
        </div>

        {/* Main Functional Sections */}
        <div className="grid md:grid-cols-3 gap-6">
          {sections.map((item, index) => (
            <div
              key={index}
              onClick={() => router.push(item.path)}
              className={`cursor-pointer p-6 rounded-xl shadow-sm border ${item.color} hover:shadow-md transition transform hover:-translate-y-1`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-white rounded-lg shadow">{item.icon}</div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ----- Small Info Card Component ----- */
function InfoCard({ title, value, icon, color }) {
  return (
    <div
      className={`flex items-center justify-between p-5 rounded-xl border shadow-sm ${color}`}
    >
      <div>
        <p className="text-sm text-gray-700">{title}</p>
        <h3 className="text-2xl font-bold">{value}</h3>
      </div>
      <div className="p-3 bg-white rounded-full shadow">{icon}</div>
    </div>
  );
}
