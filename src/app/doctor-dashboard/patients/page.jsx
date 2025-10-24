export default function PatientsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-700 mb-4">Patients List</h1>
      <p className="text-gray-600 mb-4">Manage your registered patients here.</p>

      <ul className="space-y-3">
        {["John Doe", "Sarah Khan", "Ali Ahmed"].map((name, i) => (
          <li
            key={i}
            className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
          >
            <span className="font-medium">{name}</span>
            <button className="text-blue-600 hover:underline">View Profile</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
