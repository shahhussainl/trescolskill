import React, { useRef, useEffect, useState, } from "react";
import { useCourseContext } from "../context/CourseContext";
import { useNewsContext } from "../context/NewsContext";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import "animate.css";
import image from "../assets/logo.png";
import abbas from "../assets/abbas.png";
import violate from "../assets/vilate.png"
import kid from "../assets/kid.png"
import car1 from "../assets/car1.png"
import car2 from "../assets/car2.png"
import car3 from "../assets/car3.png"
import ahmad from "../assets/ahmad.png"
import newsImg from "../assets/abbas.png"; 
import { useNavigate } from "react-router-dom";

const newsList = [
  {
    id: 1,
    image: newsImg,
    date: "2024-08-19 09:25:32",
    postedBy: "Admin",
    title: "Open Source Intelligence (OSINT)",
    description: `"What is OSINT? A Beginner's Guide..."`,
    fullDescription: `"What is OSINT? A Beginner's Guide to Open Source Intelligence"
    Introduction to OSINT
    Explanation of common terms and concepts
    Use cases for OSINT in cybersecurity, law enforcement, and business
    "Top 10 Free OSINT Tools Every Investigator Should Know"
    A rundown of free tools available for OSINT
    Links to resources for each tool
    How and when to use each tool
    ...
    (copy the full content from your screenshot text)
    `,
  },

  {
    id: 2,
    image: newsImg,
    date: "2024-08-19 09:25:32",
    postedBy: "Admin",
    title: "Open Source Intelligence (OSINT)",
    description: `"What is OSINT? A Beginner's Guide..."`,
    fullDescription: `"What is OSINT? A Beginner's Guide to Open Source Intelligence"
    Introduction to OSINT
    Explanation of common terms and concepts
    Use cases for OSINT in cybersecurity, law enforcement, and business
    "Top 10 Free OSINT Tools Every Investigator Should Know"
    A rundown of free tools available for OSINT
    Links to resources for each tool
    How and when to use each tool
    ...
    (copy the full content from your screenshot text)
    `,
  },

  {
    id: 3,
    image: newsImg,
    date: "2024-08-19 09:25:32",
    postedBy: "Admin",
    title: "Open Source Intelligence (OSINT)",
    description: `"What is OSINT? A Beginner's Guide..."`,
    fullDescription: `"What is OSINT? A Beginner's Guide to Open Source Intelligence"
    Introduction to OSINT
    Explanation of common terms and concepts
    Use cases for OSINT in cybersecurity, law enforcement, and business
    "Top 10 Free OSINT Tools Every Investigator Should Know"
    A rundown of free tools available for OSINT
    Links to resources for each tool
    How and when to use each tool
    ...
    (copy the full content from your screenshot text)
    `,
  },
];

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
    image: violate,
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
    image: kid,
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
    title: "Introduction to Cyber Security and database and Data mining",
    image: car1,
    trainer: {
      name: "Ali Khan",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    description: "Basics of cybersecurity for everyone Basics of cybersecurity for everyone Basics of cybersecurity for everyone...",
    postedOn: "2025-05-01",
    applyBefore: "2025-07-01",
    duration: "3 days",
    fees: "7500PKR",
  },
  {
    id: 5,
    title: "Data Science with Python, Artifical intellgence",
    image: car2,
    trainer: {
      name: "Ayesha Nazeer",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    description: "Learn Python for data analysis and visualization Learn Python for data analysis and visualization Learn Python...",
    postedOn: "2025-04-10",
    applyBefore: "2025-06-15",
    duration: "5 days",
    fees: "15000PKR",
  },
  {
    id: 6,
    title: "Data Science with Python, Artifical intellgence",
    image: car3,
    trainer: {
      name: "Ayesha Nazeer",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    description: "Learn Python for data analysis and visualization Learn Python for data analysis and visualization Learn Python for data...",
    postedOn: "2025-04-10",
    applyBefore: "2025-06-15",
    duration: "5 days",
    fees: "15000PKR",
  },
  {
    id: 7,
    title: "Data Science with Python, Artifical intellgence",
    image: ahmad,
    trainer: {
      name: "Ayesha Nazeer",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    description: "Learn Python for data analysis and visualization Learn Python for data analysis and visualization Learn Python for data...",
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

  const handleArrowClick = (direction) => {
  if (direction === "left") {
    setCurrentStartIndex((prev) => Math.max(prev - 1, 0));
  } else {
    setCurrentStartIndex((prev) => Math.min(prev + 1, maxIndex));
  }
};


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


  return (
    <>
      {/* Hero section */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
        <img
          src={image}
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
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
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
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    {/* View All Courses Button */}
    <div className="mt-10 text-center">
      <button onClick={handleCourseClick} className="px-6 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition">
        View All Courses
      </button>
    </div>
  </div>
</section>

<section className="py-16 bg-gradient-to-br from-teal-200/60 to-teal-100/40 backdrop-blur-sm">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
      News & Updates
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center ml-14 mt-24">
      {newsList.map((item) => (
        <div
          key={item.id}
          className="relative flex w-80 flex-col rounded-xl bg-white/70 backdrop-blur-md text-gray-700 shadow-md"
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
              🖋️ Posted by: <span className="font-semibold">{item.postedBy}</span>
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
</section>



    </>
  );
}

export default Home;
