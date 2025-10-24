export default function DoctorSettings() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-700 mb-4">Settings</h1>
      <div className="bg-white p-6 rounded-xl shadow w-full md:w-2/3">
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Notification Preference</label>
            <select className="w-full border p-2 rounded-md">
              <option>Email</option>
              <option>SMS</option>
              <option>Push Notification</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Change Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full border p-2 rounded-md"
            />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
