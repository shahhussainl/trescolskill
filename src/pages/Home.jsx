import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import "animate.css";
import image from "../assets/logo.png";
import abbas from "../assets/abbas.png";

// Dummy course data
const courses = [
  {
    id: 1,
    title: "Secure Your Digital Life with A Hands-On Workshop!",
    image: abbas,
    trainer: {
      name: "Rizwan Saeed",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    description:
      "Are you truly safe online? Your personal data, devices, and family's security are at risk if you're not taking the right steps...",
    postedOn: "2025-03-01",
    applyBefore: "2025-07-07",
    duration: "1 day",
    fees: "20000PKR",
  },
  {
    id: 2,
    title: "Making Best Use of Artificial Intelligence",
    image: abbas,
    trainer: {
      name: "Dr Sanaullah",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    description:
      "Preliminary working knowledge of computers assumed. Designed for everyone interested in AI and social media applications...",
    postedOn: "2025-02-25",
    applyBefore: "2025-04-28",
    duration: "7 days",
    fees: "11000PKR",
  },
  {
    id: 3,
    title: "Secure Websites/Email Configuration, Hosting on Linux",
    image: abbas,
    trainer: {
      name: "Rao Nazra",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    description:
      "Covers the essentials of configuring, hosting, and testing secure websites and applications and email services on Linux...",
    postedOn: "2025-04-20",
    applyBefore: "2025-03-31",
    duration: "2 days",
    fees: "9000PKR",
  },
  {
    id: 4,
    title: "Introduction to Cyber Security",
    image: abbas,
    trainer: {
      name: "Ali Khan",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    description: "Basics of cybersecurity for everyone...",
    postedOn: "2025-05-01",
    applyBefore: "2025-07-01",
    duration: "3 days",
    fees: "7500PKR",
  },
  {
    id: 5,
    title: "Data Science with Python",
    image: abbas,
    trainer: {
      name: "Ayesha Nazeer",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    description: "Learn Python for data analysis and visualization...",
    postedOn: "2025-04-10",
    applyBefore: "2025-06-15",
    duration: "5 days",
    fees: "15000PKR",
  },
  {
    id: 6,
    title: "Data Science with Python",
    image: abbas,
    trainer: {
      name: "Ayesha Nazeer",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    description: "Learn Python for data analysis and visualization...",
    postedOn: "2025-04-10",
    applyBefore: "2025-06-15",
    duration: "5 days",
    fees: "15000PKR",
  },
];

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

function scrollCarousel(direction) {
  const carousel = document.getElementById("carousel");
  const scrollAmount = 200; // slightly more than card width + margin

  if (direction === "left") {
    carousel.scrollLeft -= scrollAmount;
  } else {
    carousel.scrollLeft += scrollAmount;
  }
}

// Hero Section
function Hero() {
  return (
    <>
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img
          src={image}
          alt="Trescol Background"
          className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
        />

        {/* 3D Particles */}
        <div className="absolute inset-0 z-0 opacity-30">
          <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
            <Particles />
          </Canvas>
        </div>

        {/* Glows */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-purple-300 opacity-60 blur-3xl rounded-full z-0 animate__animated animate__zoomIn animate__infinite animate__slow"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-pink-300 opacity-50 blur-3xl rounded-full z-0 animate__animated animate__zoomIn animate__infinite animate__slower"></div>

        {/* Text */}
        <div className="relative z-10 text-center px-4 animate__animated animate__fadeInUp animate__slower">
          <h2 className="text-sm md:text-base font-semibold uppercase tracking-widest text-gray-700 mb-2">
            Admission'2025
          </h2>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-3">
            Leadership & Professional
          </h1>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-3">
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
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            Featured Courses
          </h2>

          {/* Carousel Wrapper */}
          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={() => scrollCarousel("left")}
               className="absolute -left-20 top-1/2 -translate-y-1/2 z-10 bg-teal-500 text-white p-3 rounded-full hover:bg-teal-600 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => scrollCarousel("right")}
              className="absolute -right-20 top-1/2 -translate-y-1/2 z-10 bg-teal-500 text-white p-3 rounded-full hover:bg-teal-600 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Scrollable Carousel */}
            <div
              id="carousel"
              className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
              style={{ scrollBehavior: "smooth" }}
            >
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="min-w-[300px] max-w-[300px] bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-xl flex-shrink-0"
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
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
