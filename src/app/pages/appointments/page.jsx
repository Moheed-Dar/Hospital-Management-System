"use client";
import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Calendar,
  CalendarDays,
  Clock,
  FileText,
  Stethoscope,
  Info,
  ChevronDown,
} from "lucide-react";

export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    doctor: "",
    date: "",
    time: "",
    reason: "",
  });

  const [openTime, setOpenTime] = useState(false);
  const [openDoctor, setOpenDoctor] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Data:", formData);
    alert("✅ Your appointment has been booked successfully!");
  };

  const handleSelectTime = (time) => {
    setFormData({ ...formData, time });
    setOpenTime(false);
  };

  const handleSelectDoctor = (doctor) => {
    setFormData({ ...formData, doctor });
    setOpenDoctor(false);
  };

  const times = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "01:00 PM",
    "03:00 PM",
    "05:00 PM",
  ];

  const doctors = ["Dr. Smith", "Dr. Jane", "Dr. Michael"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-4 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Book Your <span className="text-blue-500">Appointment</span>
        </h1>
        <p className="text-gray-500 mt-2">
          Schedule a consultation with our expert doctors at your convenience.
        </p>
      </div>

      {/* Appointment Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-6 sm:p-10 w-full max-w-2xl mx-auto border border-gray-100"
      >
        {/* Personal Info */}
        <section>
          <h2 className="text-lg font-semibold text-gray-700 mb-5 flex items-center gap-2">
            <User className="text-blue-500" size={20} />
            Personal Information
          </h2>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="flex flex-col">
              <label className="text-gray-600 mb-1 text-sm font-medium">
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full text-black pl-10 border border-gray-300 rounded-md p-2 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-600 mb-1 text-sm font-medium">
                Email *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full pl-10 border text-black border-gray-300 rounded-md p-2 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <label className="text-gray-600 mb-1 text-sm font-medium">
              Phone Number *
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 123 4567"
                required
                className="w-full pl-10 border text-black border-gray-300 rounded-md p-2 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
          </div>
        </section>

        {/* Appointment Details */}
        <section className="mt-10">
          <h2 className="text-lg font-semibold text-gray-700 mb-5 flex items-center gap-2">
            <Stethoscope className="text-blue-500" size={20} />
            Appointment Details
          </h2>

          <div className="grid sm:grid-cols-2 gap-5">
            {/* Doctor Dropdown */}
            <div>
              <label className="text-gray-600 mb-1 text-sm font-medium">
                Select Doctor
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setOpenDoctor(!openDoctor)}
                  className="w-full flex items-center justify-between border border-gray-300 rounded-md p-2 pl-10 text-left text-black bg-white shadow-sm focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-200"
                >
                  <span>
                    {formData.doctor ? formData.doctor : "Choose a doctor"}
                  </span>
                  <ChevronDown
                    className={`text-gray-400 transition-transform duration-300 ${
                      openDoctor ? "rotate-180" : ""
                    }`}
                    size={18}
                  />
                  <Stethoscope
                    className="absolute left-3 top-3 text-gray-400"
                    size={18}
                  />
                </button>

                {openDoctor && (
                  <ul className="absolute z-10 mt-1 w-full bg-white border text-black border-gray-200 rounded-md shadow-lg transition-all duration-300 ease-in-out origin-top">
                    {doctors.map((doc) => (
                      <li
                        key={doc}
                        onClick={() => handleSelectDoctor(doc)}
                        className={`p-2 px-4 cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 ${
                          formData.doctor === doc
                            ? "bg-blue-50 text-blue-600 font-medium"
                            : ""
                        }`}
                      >
                        {doc}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Date */}
            <div>
              <label className="text-gray-600 mb-1 text-sm font-medium">
                Preferred Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full pl-10 border text-black border-gray-300 rounded-md p-2 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
            </div>

            {/* Time Dropdown */}
            <div>
              <label className="text-gray-600 mb-1 text-sm font-medium">
                Preferred Time
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setOpenTime(!openTime)}
                  className="w-full flex items-center justify-between border border-gray-300 rounded-md p-2 pl-10 text-left text-black bg-white shadow-sm focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-200"
                >
                  <span>{formData.time ? formData.time : "Choose a time"}</span>
                  <ChevronDown
                    className={`text-gray-400 transition-transform duration-300 ${
                      openTime ? "rotate-180" : ""
                    }`}
                    size={18}
                  />
                  <Clock className="absolute left-3 top-3 text-gray-400" size={18} />
                </button>

                {openTime && (
                  <ul className="absolute z-10 mt-1 w-full bg-white border text-black border-gray-200 rounded-md shadow-lg transition-all duration-300 ease-in-out origin-top">
                    {times.map((t) => (
                      <li
                        key={t}
                        onClick={() => handleSelectTime(t)}
                        className={`p-2 px-4 cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 ${
                          formData.time === t
                            ? "bg-blue-50 text-blue-600 font-medium"
                            : ""
                        }`}
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="mt-10">
          <h2 className="text-lg font-semibold text-gray-700 mb-3 flex items-center gap-2">
            <FileText className="text-blue-500" size={20} />
            Additional Information
          </h2>
          <h2 className="text-gray-600 mb-2 font-semibold ">
            Reason for Visit (Optional)
          </h2>

          <div className="relative">
            <Info className="absolute left-3 top-3 text-gray-400" size={18} />
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              rows="3"
              placeholder="Please describe your symptoms or reason for the appointment..."
              className="w-full pl-10 border text-black border-gray-300 rounded-xl p-2.5 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
            ></textarea>
          </div>
        </section>

        {/* Submit */}
        <div className="mt-10">
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl shadow-md transition-all duration-200"
          >
            Book Appointment
          </button>
        </div>
      </form>

      {/* ✅ 3 Columns Section (below form) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16 mb-12">
        <div className="bg-blue-50 rounded-2xl p-6 shadow-sm text-center border border-blue-100 hover:shadow-md transition transform hover:-translate-y-1">
          <CalendarDays className="mx-auto text-blue-600 w-10 h-10 mb-4" />
          <h3 className="text-lg font-semibold text-gray-800">Easy Booking</h3>
          <p className="text-gray-500 mt-2">
            Book appointments in just a few clicks
          </p>
        </div>

        <div className="bg-green-50 rounded-2xl p-6 shadow-sm text-center border border-green-100 hover:shadow-md transition transform hover:-translate-y-1">
          <Clock className="mx-auto text-green-600 w-10 h-10 mb-4" />
          <h3 className="text-lg font-semibold text-gray-800">Flexible Timing</h3>
          <p className="text-gray-500 mt-2">
            Choose from multiple time slots
          </p>
        </div>

        <div className="bg-blue-50 rounded-2xl p-6 shadow-sm text-center border border-blue-100 hover:shadow-md transition transform hover:-translate-y-1">
          <User className="mx-auto text-blue-600 w-10 h-10 mb-4" />
          <h3 className="text-lg font-semibold text-gray-800">Expert Care</h3>
          <p className="text-gray-500 mt-2">
            Consult with qualified specialists
          </p>
        </div>
      </div>
    </div>
  );
}
