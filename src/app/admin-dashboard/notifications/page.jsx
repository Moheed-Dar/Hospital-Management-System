"use client";
import { Bell, Mail, AlertCircle } from "lucide-react";

export default function NotificationsPage() {
  const notifications = [
    { id: 1, msg: "Dr. Sarah updated her availability.", type: "Info" },
    { id: 2, msg: "Patient Ahmed booked a new appointment.", type: "Alert" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Notifications Center</h1>

      <div className="space-y-4">
        {notifications.map((n) => (
          <div
            key={n.id}
            className={`p-4 rounded-xl shadow-sm bg-white border-l-4 ${
              n.type === "Alert" ? "border-red-500" : "border-blue-500"
            }`}
          >
            <div className="flex items-center gap-3">
              {n.type === "Alert" ? (
                <AlertCircle className="text-red-600 w-5 h-5" />
              ) : (
                <Mail className="text-blue-600 w-5 h-5" />
              )}
              <p className="text-gray-700">{n.msg}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
