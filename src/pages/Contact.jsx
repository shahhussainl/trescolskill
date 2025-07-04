import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-16 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <button
            onClick={() => navigate("/")}
            className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition"
          >
            ← Back to Home
          </button>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Contact Us
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Get in touch with us for any inquiries or support. Email us at
          support@trescol.com or call us at +123-456-7890.
        </p>
      </div>
    </div>
  );
}

export default Contact;