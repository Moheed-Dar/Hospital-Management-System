export default function AppointmentsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-700 mb-4">Appointments</h1>
      <p className="text-gray-600 mb-4">Here are your upcoming appointments:</p>

      <table className="w-full text-black bg-white rounded-lg shadow overflow-hidden">
        <thead className="bg-blue-100 text-left">
          <tr>
            <th className="p-3">Patient</th>
            <th className="p-3">Date</th>
            <th className="p-3">Time</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="p-3">John Doe</td>
            <td className="p-3">23 Oct 2025</td>
            <td className="p-3">10:30 AM</td>
            <td className="p-3 text-green-600">Confirmed</td>
          </tr>
          <tr className="border-t">
            <td className="p-3">Sarah Khan</td>
            <td className="p-3">24 Oct 2025</td>
            <td className="p-3">1:00 PM</td>
            <td className="p-3 text-yellow-600">Pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
