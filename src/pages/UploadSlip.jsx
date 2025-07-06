import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Slip() {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file || !name || !email) {
      alert("Please fill in all fields and select a file.");
      return;
    }

    // Here you'd typically send the form data to a backend API
    // e.g., using fetch or axios. This is a placeholder:
    console.log("Uploading Slip:", { name, email, file });

    setSuccess(true);
    setTimeout(() => navigate("/"), 3000);
  };

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white py-12 px-4">
      {/* Back Button */}
      <div className="mb-6 ml-40">
        <button
          onClick={() => navigate("/")}
          className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition"
        >
          ← Back to Home
        </button>
      </div>

      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-6 text-center text-teal-700">
          Upload Your Fee Slip
        </h1>

        {success ? (
          <div className="text-center text-green-600 font-semibold text-lg">
            Slip uploaded successfully! Redirecting...
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-1 font-semibold">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Upload Slip (PDF/Image)</label>
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={(e) => setFile(e.target.files[0])}
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              />
            </div>

            <button
              type="submit"
              className="bg-teal-600 hover:bg-teal-700 text-white w-full py-3 rounded font-semibold"
            >
              Submit Slip
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
