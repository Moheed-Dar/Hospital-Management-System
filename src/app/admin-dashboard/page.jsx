"use client";
import { useRouter } from "next/navigation";
import {
  Stethoscope,
  CalendarCheck2,
  FileText,
  Users,
  Bell,
  Settings,
  ClipboardCheck,
  LogOut,
  UserCog,
  BarChart,
} from "lucide-react";

export default function AdminDashboard() {
  const router = useRouter();

  const sections = [
    {
      title: "Doctor Management",
      desc: "Add, edit, delete, and update doctors. Manage working hours and assignments.",
      icon: <Stethoscope className="w-8 h-8 text-blue-600" />,
      color: "from-blue-100 to-blue-50",
      link: "/admin-dashboard/doctors",
    },
    {
      title: "Appointment Overview",
      desc: "Track all appointments — pending, completed, or cancelled.",
      icon: <CalendarCheck2 className="w-8 h-8 text-purple-600" />,
      color: "from-purple-100 to-purple-50",
      link: "/admin-dashboard/appointments",
    },
    {
      title: "Patient Management",
      desc: "Manage patient profiles, test reports, treatments, and visit history.",
      icon: <Users className="w-8 h-8 text-green-600" />,
      color: "from-green-100 to-green-50",
      link: "/admin-dashboard/patients",
    },
    {
      title: "Billing & Reports",
      desc: "Generate billing reports, income summaries, and monthly statistics.",
      icon: <BarChart className="w-8 h-8 text-amber-600" />,
      color: "from-amber-100 to-amber-50",
      link: "/admin-dashboard/reports",
    },
    {
      title: "Notifications",
      desc: "Send and view notifications to doctors and patients about tasks or updates.",
      icon: <Bell className="w-8 h-8 text-pink-600" />,
      color: "from-pink-100 to-pink-50",
      link: "/admin-dashboard/notifications",
    },
    {
      title: "Authorization",
      desc: "Manage system roles, operators, and access permissions for users.",
      icon: <Settings className="w-8 h-8 text-gray-700" />,
      color: "from-gray-100 to-gray-50",
      link: "/admin-dashboard/authorization",
    },
  ];

  const handleLogout = () => {
    router.push("/admin-login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-lg p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">Admin Dashboard</h1>
            <p className="text-gray-500 mt-1">
              Manage all hospital operations efficiently.
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition"
          >
            <LogOut className="w-5 h-5" /> Logout
          </button>
        </div>

        {/* Summary Section */}
        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-blue-100 rounded-2xl p-5 text-center shadow-md">
            <UserCog className="w-8 h-8 text-blue-600 mx-auto" />
            <h3 className="text-gray-800 font-semibold mt-2">Doctors</h3>
            <p className="text-gray-500">1+ Active</p>
          </div>
          <div className="bg-green-100 rounded-2xl p-5 text-center shadow-md">
            <ClipboardCheck className="w-8 h-8 text-green-600 mx-auto" />
            <h3 className="text-gray-800 font-semibold mt-2">Patients</h3>
            <p className="text-gray-500">10+ Registered</p>
          </div>
          <div className="bg-purple-100 rounded-2xl p-5 text-center shadow-md">
            <FileText className="w-8 h-8 text-purple-600 mx-auto" />
            <h3 className="text-gray-800 font-semibold mt-2">Appointments</h3>
            <p className="text-gray-500">5 Pending</p>
          </div>
        </div>

        {/* Core Sections */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((item, index) => (
            <div
              key={index}
              onClick={() => router.push(item.link)}
              className={`p-6 rounded-2xl bg-gradient-to-br ${item.color} cursor-pointer shadow-md hover:shadow-xl transition-transform hover:-translate-y-1 border border-gray-200`}
            >
              <div className="flex flex-col items-start gap-3">
                {item.icon}
                <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
                <p className="text-gray-600">{item.desc}</p>
                <button className="mt-3 text-blue-600 hover:underline font-medium text-sm">
                  Open Section →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Hospital Management System — Admin Panel
        </div>
      </div>
    </div>
  );
}
