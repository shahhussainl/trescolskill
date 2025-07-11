import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollBtn from "../components/ScrollBtn";
import Footer from "../components/Footer";

const faqsData = [
  {
    question: "What is TRESCOL?",
    answer:
      "TRESCOL is a forward-thinking tech learning hub focused on cybersecurity, AI, and digital systems, offering hands-on training for students and professionals.",
  },
  {
    question: "Who can join TRESCOL programs?",
    answer:
      "Anyone with a passion for technology — students, professionals, and even beginners — can join. We offer beginner to advanced-level content.",
  },
  {
    question: "Are your courses certified?",
    answer:
      "Yes, all our programs include certifications that are recognized and valuable for career growth in the tech industry.",
  },
  {
    question: "Do you offer job placement or internships?",
    answer:
      "We connect our top-performing students with internship and job placement opportunities through our partner networks.",
  },
  {
    question: "How do I register for a course?",
    answer:
      "You can register through our website's course page. Just select your course, click 'Enroll Now', and follow the instructions.",
  },
  {
    question: "Is prior experience required?",
    answer:
      "No, we offer beginner-friendly courses as well as advanced programs. You can choose based on your level.",
  },
];

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <section className="min-h-screen bg-white text-gray-800 px-4 md:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600">
            Got questions? We’ve got answers. Explore common queries below.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {faqsData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 border border-teal-100 transition-all duration-300"
              data-aos="fade-up"
            >
              <button
                className="w-full text-left flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                <span className="text-teal-600 text-xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <p className="mt-4 text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
      <Footer />
      <ScrollBtn />
    </>
  );
}
