"use client";
import { useState } from "react";
import { Mail, Send, User, MessageCircle } from "lucide-react";

export default function InboxPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Admin",
      subject: "Weekly Report Reminder",
      message:
        "Please submit your weekly report by the end of the day. Thank you!",
      time: "10:30 AM",
    },
    {
      id: 2,
      sender: "Dr. Sarah Khan",
      subject: "Case Discussion",
      message:
        "Can we review the MRI report together during the lunch break?",
      time: "9:15 AM",
    },
    {
      id: 3,
      sender: "Student Ali",
      subject: "Learning Query",
      message:
        "Sir, can you please share your notes from the last cardiology session?",
      time: "Yesterday",
    },
  ]);

  const [newMessage, setNewMessage] = useState({
    receiver: "",
    subject: "",
    message: "",
  });

  const handleSend = (e) => {
    e.preventDefault();
    if (!newMessage.receiver || !newMessage.subject || !newMessage.message) {
      alert("Please fill all fields!");
      return;
    }

    setMessages([
      {
        id: messages.length + 1,
        sender: "You",
        subject: newMessage.subject,
        message: newMessage.message,
        time: "Just now",
      },
      ...messages,
    ]);

    setNewMessage({ receiver: "", subject: "", message: "" });
    alert("Message sent successfully!");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-700 mb-4">Inbox 📬</h1>
      <p className="text-gray-600 mb-6">
        View messages from admins, other doctors, and students. You can also send new messages below.
      </p>

      {/* New Message Form */}
      <form
        onSubmit={handleSend}
        className="bg-white p-6 rounded-2xl shadow-md mb-8 space-y-4"
      >
        <h2 className="text-xl font-semibold text-blue-600 flex items-center gap-2">
          <Send size={20} /> Send a Message
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Receiver
            </label>
            <select
              value={newMessage.receiver}
              onChange={(e) =>
                setNewMessage({ ...newMessage, receiver: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
              required
            >
              <option value="">-- Select Receiver --</option>
              <option>Admin</option>
              <option>Doctor</option>
              <option>Student</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Subject
            </label>
            <input
              type="text"
              placeholder="Enter message subject"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
              value={newMessage.subject}
              onChange={(e) =>
                setNewMessage({ ...newMessage, subject: e.target.value })
              }
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Message
          </label>
          <textarea
            placeholder="Write your message..."
            rows="4"
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            value={newMessage.message}
            onChange={(e) =>
              setNewMessage({ ...newMessage, message: e.target.value })
            }
            required
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition"
          >
            <Send size={18} />
            Send
          </button>
        </div>
      </form>

      {/* Message List */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-blue-600 flex items-center gap-2 mb-4">
          <Mail size={20} /> Recent Messages
        </h2>

        {messages.length === 0 ? (
          <p className="text-gray-500 text-center py-4">
            No messages yet 📭
          </p>
        ) : (
          <div className="space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className="border border-gray-200 rounded-xl p-4 hover:bg-blue-50 transition"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {msg.subject}
                    </h3>
                    <p className="text-sm text-gray-500">
                      From: {msg.sender}
                    </p>
                  </div>
                  <p className="text-sm text-gray-400">{msg.time}</p>
                </div>
                <p className="mt-2 text-gray-700">{msg.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
