"use client";
import { useState } from "react";
import { FileText, Download } from "lucide-react";

export default function ReportsPage() {
  const [reports, setReports] = useState([
    {
      id: 1,
      patient: "John Doe",
      date: "20 Oct 2025",
      diagnosis: "Fever & Flu",
      prescription: "Paracetamol 500mg, Rest 3 days",
      summary: "Patient showed symptoms of viral fever, stable condition.",
    },
    {
      id: 2,
      patient: "Sarah Khan",
      date: "18 Oct 2025",
      diagnosis: "Migraine",
      prescription: "Pain relievers, Hydration therapy",
      summary: "Symptoms improved after prescribed rest and medication.",
    },
    {
      id: 3,
      patient: "Ali Ahmed",
      date: "15 Oct 2025",
      diagnosis: "Chest Infection",
      prescription: "Antibiotics, Steam inhalation",
      summary: "Patient recovering well after 5-day antibiotic course.",
    },
  ]);

  const handleExport = (report) => {
    const reportText = `
      Patient: ${report.patient}
      Date: ${report.date}
      Diagnosis: ${report.diagnosis}
      Prescription: ${report.prescription}
      Summary: ${report.summary}
    `;
    const blob = new Blob([reportText], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${report.patient}-report.txt`;
    link.click();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-700 mb-4">Patient Reports 🧾</h1>
      <p className="text-gray-600 mb-6">
        View and export patient treatment summaries and consultation reports.
      </p>

      <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
        {reports.map((report) => (
          <div
            key={report.id}
            className="border border-gray-200 rounded-xl p-5 hover:shadow-lg transition bg-gray-50"
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold text-blue-600">
                  {report.patient}
                </h2>
                <p className="text-gray-500 text-sm">{report.date}</p>
              </div>
              <button
                onClick={() => handleExport(report)}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                <Download size={18} />
                Export
              </button>
            </div>

            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500 font-medium">Diagnosis:</p>
                <p className="text-gray-800">{report.diagnosis}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Prescription:</p>
                <p className="text-gray-800">{report.prescription}</p>
              </div>
            </div>

            <div className="mt-3">
              <p className="text-sm text-gray-500 font-medium">Summary:</p>
              <p className="text-gray-800">{report.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
