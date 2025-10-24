export default function PatientHistoryPage() {
  const historyData = [
    {
      name: "John Doe",
      visitDate: "20 Oct 2025",
      diagnosis: "Flu and Fever",
      prescription: "Paracetamol 500mg, Rest for 3 days",
      followUp: "27 Oct 2025",
    },
    {
      name: "Sarah Khan",
      visitDate: "18 Oct 2025",
      diagnosis: "Migraine",
      prescription: "Pain relief tablets, Proper hydration",
      followUp: "25 Oct 2025",
    },
    {
      name: "Ali Ahmed",
      visitDate: "15 Oct 2025",
      diagnosis: "Chest Infection",
      prescription: "Antibiotics (7 days course)",
      followUp: "22 Oct 2025",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-700 mb-4">Patient History</h1>
      <p className="text-gray-600 mb-6">
        Review your patients’ previous diagnoses, prescriptions, and follow-up schedules.
      </p>

      <div className="overflow-x-auto bg-white text-black rounded-xl shadow">
        <table className="min-w-full text-left">
          <thead className="bg-blue-100 text-gray-700">
            <tr>
              <th className="p-3">Patient</th>
              <th className="p-3">Visit Date</th>
              <th className="p-3">Diagnosis</th>
              <th className="p-3">Prescription</th>
              <th className="p-3">Follow Up</th>
            </tr>
          </thead>
          <tbody>
            {historyData.map((record, index) => (
              <tr
                key={index}
                className="border-t hover:bg-blue-50 transition"
              >
                <td className="p-3 font-medium">{record.name}</td>
                <td className="p-3">{record.visitDate}</td>
                <td className="p-3">{record.diagnosis}</td>
                <td className="p-3">{record.prescription}</td>
                <td className="p-3 text-blue-600">{record.followUp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
