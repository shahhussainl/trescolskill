import React from "react";
import founder1 from "../assets/W1 banner thumbnail.jpg"; // Replace with actual image paths
import founder2 from "../assets/W2 banner thumbnail.jpg";

const people = [
  {
    name: "Ather Ali",
    title: "Chief Executive Officer (CEO)",
    image: founder1,
    quote:
      "TRESCOL is not just a tech institute—it’s a mindset revolution. We’re empowering people today to lead the innovations of tomorrow.",
    bio:
      "Ather Ali is the visionary force behind TRESCOL, bringing decades of expertise in cybersecurity, tech education, and digital transformation. He has led multiple national-level initiatives and built partnerships with global institutions to make tech education accessible, impactful, and future-ready."
  },
  {
    name: "Awais Liaqat",
    title: "Chief Operating Officer (COO)",
    image: founder2,
    quote:
      "The real power of AI isn’t in automation—it’s in how we train minds to think bigger, faster, and farther. That’s the TRESCOL edge.",
    bio:
      "Awais Liaqat ensures seamless operations of all programs, training, and internal systems. Known for strategic thinking and operational excellence, he drives TRESCOL forward with clarity and purpose."
  },
  // Add other management bios similarly...
];

function About() {
  return (
    <section className="bg-white text-gray-800 py-16 px-4 sm:px-8 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-6">About Us</h1>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          Our mission is to empower individuals with cutting-edge knowledge and practical skills in cybersecurity,
          artificial intelligence, and digital systems. We aim to build a future where tech-savvy professionals and
          students are the standard, not the exception.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
        <p className="mb-8">
          To become the most trusted and forward-thinking tech learning hub in the region, where learners, innovators,
          and leaders converge to shape the digital frontier.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Why TRESCOL?</h2>
        <p className="mb-8">
          At TRESCOL, we don't just deliver courses – we create transformation. From hands-on labs to real-world
          simulations, every experience is engineered to move you closer to mastery. Our curriculum is curated by
          industry experts, our trainers are practitioners, and our environment is built for serious learners.
        </p>
        <p className="mb-8">
          Whether you're a beginner stepping into cybersecurity or a professional scaling up in AI, TRESCOL is where
          your journey begins and evolves. We blend global standards with localized relevance to ensure every student is
          market- and mission-ready.
        </p>

        <h2 className="text-3xl font-bold text-center mt-16 mb-10">Founders & Leadership</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {people.map((person, idx) => (
            <div key={idx} className="bg-gray-100 p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold">{person.name}</h3>
                  <p className="text-sm text-teal-600">{person.title}</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-3">"{person.quote}"</p>
              <p className="text-gray-600 text-sm">{person.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
