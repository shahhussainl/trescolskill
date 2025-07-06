import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollBtn from "../components/ScrollBtn";
import Footer from "../components/Footer";

export default function Contact() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <section className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
        {/* Header Section */}
        <div className="py-12 px-4 md:px-8" data-aos="fade-down">
          <div className="mb-4 ml-32">
            <button
              onClick={() => navigate("/")}
              className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition"
            >
              ← Back to Home
            </button>
          </div>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              Let’s Connect
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We’re here to answer your questions and guide you toward a secure
              future.
            </p>
          </div>
        </div>

        <div
          className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10"
          data-aos="fade-up"
        >
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Contact Information
              </h2>
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:03300111172" className="text-teal-500">
                  03300111172
                </a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@trescol.net" className="text-teal-500">
                  info@trescol.net
                </a>
              </p>
              <p>
                <strong>Admissions Support:</strong>{" "}
                <a href="mailto:info@trescol.net" className="text-teal-500">
                  info@trescol.net
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Office Address</h2>
              <p>TRESCOL Labs</p>
              <p>24D, 2nd Floor, Rashid Plaza</p>
              <p>Main Jinnah Avenue, G-6/3 Blue Area Islamabad</p>
              <p>Pakistan</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Working Hours</h2>
              <p>Monday – Friday: 9:00 AM – 5:00 PM</p>
              <p>Saturday – Sunday: Closed</p>
            </div>
          </div>

          {/* Map */}
          <div className="w-full h-80 md:h-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="TRESCOL Location"
              src="https://www.google.com/maps?q=24D,+Rashid+Plaza,+Jinnah+Avenue,+Islamabad,+Pakistan&output=embed"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="w-full h-full border-0"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto py-10 px-4" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Send Us a Message
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-4 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            />
            <input
              type="text"
              placeholder="Subject"
              className="md:col-span-2 p-4 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="md:col-span-2 p-4 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            ></textarea>
            <button
              type="submit"
              className="md:col-span-2 bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded shadow text-lg transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/923300111172"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 animate-bounce"
          aria-label="Chat on WhatsApp"
          data-aos="zoom-in"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.52 3.48A11.77 11.77 0 0012.06 0a11.76 11.76 0 00-10 18.06L0 24l6.11-2.01A11.76 11.76 0 0012 24c6.61 0 12-5.39 12-12a11.78 11.78 0 00-3.48-8.52zM12 22.11a10.07 10.07 0 01-5.19-1.45l-.37-.22-3.63 1.19 1.19-3.63-.22-.37A10.07 10.07 0 1122.11 12 10.11 10.11 0 0112 22.11zM17 16.2c-.29.81-1.7 1.51-2.38 1.58s-1.36.23-4-1.25a11.41 11.41 0 01-2.88-2.88c-1.48-2.64-1.44-3.45-1.25-4s.77-2.09 1.58-2.38.9-.16 1.22 0 .79 1 .88 1.28a1.14 1.14 0 01-.06 1.08c-.1.15-.15.26-.29.41s-.3.31-.46.48c-.15.17-.31.35-.12.69s1.1 1.82 2.36 2.47c.46.23.81.37 1.09.48a2.11 2.11 0 00.9.11 1.36 1.36 0 00.85-.57c.15-.2.33-.51.51-.81s.34-.51.54-.54.42 0 .6.08 1.56.73 1.83.86.45.21.52.33.07.84-.21 1.65z" />
          </svg>
        </a>
      </section>
      <Footer />
      <ScrollBtn />
    </>
  );
}
