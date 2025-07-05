import React, { useEffect, useState} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import thumbnail from "../assets/W1 banner thumbnail.jpg";
import founder1 from "../assets/W1 banner thumbnail.jpg";
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
  }
];

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  
    const videoUrl = "https://www.w3schools.com/html/mov_bbb.mp4"; // Replace with your actual MP4 video URL
  
    const handlePlayVideo = () => {
      setIsVideoModalOpen(true);
    };
  
    const handleCloseVideo = () => {
      setIsVideoModalOpen(false);
    };
  
    function VideoModal({ isOpen, onClose, videoUrl }) {
      if (!isOpen) return null;
    }

  return (
    <>
    <section className="bg-white text-gray-800 py-16 px-4 sm:px-8 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1
          className="text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-teal-500 to-teal-800 text-transparent bg-clip-text"
          data-aos="fade-up"
        >
          About Us
        </h1>

        {/* Mission */}
        <div
          className="bg-gradient-to-br from-white via-gray-50 to-white rounded-xl shadow-md p-8 mb-10"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-bold text-teal-700 mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            To empower individuals with cutting-edge knowledge and practical skills in cybersecurity,
            artificial intelligence, and digital systems. We aim to build a future where tech-savvy professionals and
            students are the standard, not the exception.
          </p>
        </div>

        {/* Vision */}
        <div
          className="bg-gradient-to-br from-teal-100/40 to-white backdrop-blur-sm rounded-xl shadow-md p-8 mb-10"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-bold text-teal-700 mb-4">Our Vision</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            To become the most trusted and forward-thinking tech learning hub in the region, where learners,
            innovators, and leaders converge to shape the digital frontier.
          </p>
        </div>

        {/* Why Trescol */}
        <div
          className="bg-gradient-to-r from-teal-200 via-white to-teal-100 rounded-xl shadow-md p-8 mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-bold text-teal-700 mb-4">Why TRESCOL?</h2>
          <p className="mb-4 text-gray-700 text-lg leading-relaxed">
            At TRESCOL, we don't just deliver courses – we create transformation. From hands-on labs to real-world
            simulations, every experience is engineered to move you closer to mastery.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Whether you're a beginner stepping into cybersecurity or a professional scaling up in AI, TRESCOL is where
            your journey begins and evolves. We blend global standards with localized relevance to ensure every student
            is market- and mission-ready.
          </p>
        </div>

        {/* Founders Section */}
        <h2
          className="text-4xl font-bold text-center mb-12 text-teal-700"
          data-aos="zoom-in"
        >
          Founders & Leadership
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {people.map((person, idx) => (
            <div
              key={idx}
              className="bg-white border border-teal-200 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300"
              data-aos="fade-up"
            >
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-teal-500"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {person.name}
                  </h3>
                  <p className="text-sm text-teal-600">{person.title}</p>
                </div>
              </div>
              <blockquote className="italic text-teal-700 text-md mb-3 border-l-4 pl-4 border-teal-500">
                "{person.quote}"
              </blockquote>
              <p className="text-gray-700 text-sm">{person.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="relative h-[570px] bg-teal-800 text-center text-white flex flex-col items-center justify-center overflow-visible" data-aos="fade-up">
            <VideoModal
              isOpen={isVideoModalOpen}
              onClose={handleCloseVideo}
              videoUrl={videoUrl}
            />
    
            <p className="text-2xl uppercase tracking-widest mb-2 mt-96">
              Take a Look
            </p>
            <h2 className="text-6xl font-bold mb-6">Video Tour on Trescol</h2>
    
            <div className="relative z-10 transform translate-y-1/1 mt-6">
              <img
                src={thumbnail}
                alt="Video Tour Thumbnail"
                className="w-[90vw] max-w-[1000px] h-[530px] object-cover rounded-lg shadow-xl"
              />
              <button
                onClick={handlePlayVideo}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-teal-500 text-white rounded-full w-20 h-20 flex items-center justify-center hover:bg-teal-700 transition"
              >
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </section>
    
    </>
  );
}

export default About;
