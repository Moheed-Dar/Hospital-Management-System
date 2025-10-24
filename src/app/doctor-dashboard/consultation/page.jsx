"use client";
import { useState } from "react";
import { CheckCircle2, CalendarDays, ClipboardList } from "lucide-react";

export default function ConsultationPage() {
  const [form, setForm] = useState({
    patient: "",
    diagnosis: "",
    prescription: "",
    nextVisit: "",
    notes: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Consultation notes saved successfully!");
    setForm({
      patient: "",
      diagnosis: "",
      prescription: "",
      nextVisit: "",
      notes: "",
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-700 mb-4">Add Consultation Notes 🩺</h1>
      <p className="text-gray-600 mb-6">
        Record details from your recent consultation including diagnosis, prescription, and follow-up date.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-md p-6 space-y-5 max-w-3xl"
      >
        <div>
          <label className="block text-gray-700 font-medium mb-2">Select Patient</label>
          <select
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            value={form.patient}
            onChange={(e) => setForm({ ...form, patient: e.target.value })}
            required
          >
            <option value="">-- Choose Patient --</option>
            <option>John Doe</option>
            <option>Sarah Khan</option>
            <option>Ali Ahmed</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Diagnosis</label>
          <input
            type="text"
            placeholder="e.g., Flu, Fever, Migraine"
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            value={form.diagnosis}
            onChange={(e) => setForm({ ...form, diagnosis: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Prescription</label>
          <textarea
            placeholder="e.g., Paracetamol 500mg, Rest for 3 days"
            rows="3"
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            value={form.prescription}
            onChange={(e) => setForm({ ...form, prescription: e.target.value })}
            required
          ></textarea>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Next Visit Date</label>
          <div className="flex items-center gap-2">
            <CalendarDays className="text-blue-500" />
            <input
              type="date"
              className="border border-gray-300 rounded-lg p-2 flex-1 focus:ring-2 focus:ring-blue-400 outline-none"
              value={form.nextVisit}
              onChange={(e) => setForm({ ...form, nextVisit: e.target.value })}
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Additional Notes</label>
          <textarea
            placeholder="Write any special remarks or observations..."
            rows="4"
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            value={form.notes}
            onChange={(e) => setForm({ ...form, notes: e.target.value })}
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition"
          >
            <CheckCircle2 size={18} />
            Save Consultation
          </button>
        </div>
      </form>
    </div>
  );
}
