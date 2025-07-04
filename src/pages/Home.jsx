import React, { useRef, useEffect, useState } from "react";
import { useCourseContext } from "../context/CourseContext";
import { useNewsContext } from "../context/NewsContext";
import { useTeacherContext } from "../context/TeacherContext";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import "animate.css";
import { courses, teachers, newsList } from "../data";
import sliderImg from "../assets/sliderimage.jpg";
import course1 from "../assets/course1.png";


import { useNavigate } from "react-router-dom";


// Particles Component
function Particles() {
  const particlesRef = useRef();
  const particleCount = 100;

  useEffect(() => {
    const particles = particlesRef.current;
    particles.children.forEach((particle) => {
      particle.velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02
      );
    });
  }, []);

  useFrame(() => {
    particlesRef.current.children.forEach((particle) => {
      particle.position.add(particle.velocity);
      if (particle.position.distanceTo(new THREE.Vector3(0, 0, 0)) > 15) {
        particle.position.set(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20
        );
      }
    });
    particlesRef.current.rotation.y += 0.002;
  });

  return (
    <group ref={particlesRef}>
      {Array.from({ length: particleCount }).map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20,
          ]}
        >
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  );
}

// Hero Section
function Home() {
  const [currentStartIndex, setCurrentStartIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(getCardsPerPage());

  function getCardsPerPage() {
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  }

  useEffect(() => {
    const handleResize = () => {
      setCardsPerPage(getCardsPerPage());
      setCurrentStartIndex(0); // reset to start when resizing
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, courses.length - cardsPerPage);
  const visibleCourses = courses.slice(
    currentStartIndex,
    currentStartIndex + cardsPerPage
  );

  const [currentTeacherStartIndex, setCurrentTeacherStartIndex] = useState(0);
  const [teachersPerPage, setTeachersPerPage] = useState(getCardsPerPage());

  const maxTeacherIndex = Math.max(0, teachers.length - teachersPerPage);

  useEffect(() => {
    const handleResize = () => {
      const perPage = getCardsPerPage();
      setCardsPerPage(perPage);
      setTeachersPerPage(perPage);
      setCurrentStartIndex(0);
      setCurrentTeacherStartIndex(0);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Arrows of Teacher section
  const handleTeacherPrev = () => {
    setCurrentTeacherStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleTeacherNext = () => {
    setCurrentTeacherStartIndex((prev) => Math.min(prev + 1, maxTeacherIndex));
  };

  const handleArrowClick = (direction) => {
    if (direction === "left") {
      setCurrentStartIndex((prev) => Math.max(prev - 1, 0));
    } else {
      setCurrentStartIndex((prev) => Math.min(prev + 1, maxIndex));
    }
  };

  const { setAllTeachers } = useTeacherContext();
  const { setSelectedNews } = useNewsContext();
  const { setCourses } = useCourseContext();
  const navigate = useNavigate();

  const handleCourseClick = () => {
    setCourses(courses); // store the course data in context
    navigate("/courses");
  };

  const handleReadMore = (item) => {
    setSelectedNews(item);
    navigate("/news");
  };

  const handleKnowMore = () => {
    setAllTeachers(teachers); // send all teacher data to context
    navigate("/teachers");
  };

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

    return (
      <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg overflow-hidden relative w-[90%] max-w-4xl shadow-lg">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl z-10"
          >
            &times;
          </button>
          <video controls autoPlay className="w-full h-auto">
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero section */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
        <img
          src={sliderImg}
          alt="Trescol Background"
          className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
        />
        <div className="absolute inset-0 z-0 opacity-30">
          <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
            <Particles />
          </Canvas>
        </div>
        <div className="absolute top-10 left-10 w-40 h-40 bg-purple-300 opacity-60 blur-3xl rounded-full z-0 animate__animated animate__zoomIn animate__infinite animate__slow"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-pink-300 opacity-50 blur-3xl rounded-full z-0 animate__animated animate__zoomIn animate__infinite animate__slower"></div>
        <div className="relative z-10 text-center px-4 animate__animated animate__fadeInUp animate__slower">
          <h2 className="text-sm md:text-base font-semibold uppercase tracking-widest text-gray-700 mb-2">
            Admission'2025
          </h2>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-3">
            Leadership & Professional
          </h1>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-3">
            Development Center
          </h1>
          <h3 className="text-lg md:text-2xl font-semibold text-gray-800 mb-4">
            Future with Trescol
          </h3>
          <p className="text-md md:text-xl text-gray-700 mb-6">
            Find Your Preferred Courses & Improve Your Skills
          </p>
          <button className="px-6 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition animate__animated animate__pulse animate__infinite animate__slower">
            Explore Courses
          </button>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Courses
          </h2>

          {/* Carousel Wrapper */}
          <div className="relative flex items-center">
            {/* Left Arrow */}
            <button
              onClick={() => handleArrowClick("left")}
              className="absolute left-0 z-10 bg-teal-500 text-white p-3 rounded-full hover:bg-teal-600 transition"
              style={{ transform: "translateX(-50%)" }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Cards Grid */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-12">
              {visibleCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-xl"
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {course.title}
                    </h3>
                    <div className="flex items-center gap-3 mb-2">
                      <img
                        src={course.trainer.avatar}
                        alt={course.trainer.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="text-sm text-gray-600">
                        by {course.trainer.name}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 mb-4">
                      {course.description}
                    </p>
                    <ul className="text-sm text-gray-500 mb-4 space-y-1">
                      <li>
                        <strong>Posted on:</strong> {course.postedOn}
                      </li>
                      <li>
                        <strong>Apply before:</strong> {course.applyBefore}
                      </li>
                      <li>
                        <strong>Duration:</strong> {course.duration}
                      </li>
                      <li>
                        <strong>Fees:</strong> {course.fees}
                      </li>
                    </ul>
                    <button className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600 transition">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => handleArrowClick("right")}
              className="absolute right-0 z-10 bg-teal-500 text-white p-3 rounded-full hover:bg-teal-600 transition"
              style={{ transform: "translateX(50%)" }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* View All Courses Button */}
          <div className="mt-10 text-center">
            <button
              onClick={handleCourseClick}
              className="px-6 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition"
            >
              View All Courses
            </button>
          </div>
        </div>
      </section>

      {/* New Section */}
      <section className="py-16 bg-gradient-to-br from-teal-200/60 to-teal-100/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            News & Updates
          </h2>

          <div className="relative flex items-center mt-20">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-12">
              {newsList.map((item) => (
                <div
                  key={item.id}
                  className="relative flex w-full flex-col rounded-xl bg-white/70 backdrop-blur-md text-gray-700 shadow-md"
                >
                  <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 shadow-lg shadow-teal-500/40">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-gray-500 mb-1">📅 {item.date}</p>
                    <p className="text-xs text-gray-600 mb-2">
                      🖋️ Posted by:{" "}
                      <span className="font-semibold">{item.postedBy}</span>
                    </p>
                    <h5 className="mb-2 text-xl font-semibold text-blue-gray-900">
                      {item.title}
                    </h5>
                    <p className="text-sm text-gray-700">
                      {item.description.length > 80
                        ? item.description.slice(0, 80) + "..."
                        : item.description}
                    </p>
                  </div>
                  <div className="p-6 pt-0">
                    <button
                      type="button"
                      onClick={() => handleReadMore(item)}
                      className="rounded-lg bg-teal-400 py-3 px-6 text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg hover:bg-teal-600 focus:outline-none"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-[570px] bg-teal-800 text-center text-white flex flex-col items-center justify-center overflow-visible">
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
            src={course1}
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

      {/* Teacher Section */}
      <section className="py-16 bg-teal-600 rounded-3xl mx-4 mt-96 shadow-xl">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">
            Meet Our Experts
          </h2>

          {/* Carousel Wrapper */}
          <div className="relative flex items-center">
            <button
              onClick={handleTeacherPrev}
              className="absolute left-0 z-10 bg-teal-500 text-white p-3 rounded-full hover:bg-teal-700 transition"
              style={{ transform: "translateX(-50%)" }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-12">
              {teachers
                .slice(
                  currentTeacherStartIndex,
                  currentTeacherStartIndex + teachersPerPage
                )
                .map((teacher) => (
                  <div
                    key={teacher.id}
                    className="bg-white rounded-xl shadow-md p-6"
                  >
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold">{teacher.name}</h3>
                    <p className="text-sm text-gray-600">
                      {teacher.designation}
                    </p>
                    <p className="text-sm mt-2">{teacher.bio}</p>
                    <div className="flex gap-4 mt-3 text-teal-500">
                      {teacher.social.linkedin && (
                        <a
                          href={teacher.social.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-teal-800 transition"
                        >
                          <i className="fab fa-linkedin text-xl"></i>
                        </a>
                      )}
                      {teacher.social.twitter && (
                        <a
                          href={teacher.social.twitter}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-teal-800 transition"
                        >
                          <i className="fab fa-twitter text-xl"></i>
                        </a>
                      )}
                      {teacher.social.facebook && (
                        <a
                          href={teacher.social.facebook}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-teal-800 transition"
                        >
                          <i className="fab fa-facebook text-xl"></i>
                        </a>
                      )}
                      {teacher.social.github && (
                        <a
                          href={teacher.social.github}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-teal-800 transition"
                        >
                          <i className="fab fa-github text-xl"></i>
                        </a>
                      )}
                    </div>

                    <div className="mt-4">
                      <button
                        onClick={handleKnowMore}
                        className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition"
                      >
                        Know More
                      </button>
                    </div>
                  </div>
                ))}
            </div>

            <button
              onClick={handleTeacherNext}
              className="absolute right-0 z-10 bg-teal-500 text-white p-3 rounded-full hover:bg-teal-700 transition"
              style={{ transform: "translateX(50%)" }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={handleKnowMore}
              className="px-6 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-700 transition"
            >
              View All Teachers
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
