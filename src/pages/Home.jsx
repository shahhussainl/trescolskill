import thumbnail from "../assets/W1_banner_thumbnail.jpg";
import { useEffect, useState } from "react";
import { useCourseContext } from "../context/CourseContext";
import { useNewsContext } from "../context/NewsContext";
import { useTeacherContext } from "../context/TeacherContext";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { teachers, newsList, statsData } from "../data";
import ScrollBtn from "../components/ScrollBtn";
import Footer from "../components/Footer";
import Background from "../assets/background.png";
import Hero from "../components/Hero";
import { useNavigate } from "react-router-dom";

function Home() {
  // Format for ScheduleCourse and ApplybeforeDate
  function formatDateTime(dateString) {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "Asia/Karachi", // local time
    };
    return new Date(dateString).toLocaleString("en-US", options);
  }

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

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
      setCurrentStartIndex(0);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { courses } = useCourseContext();

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
    navigate("/courses");
  };

  const handleReadMore = (item) => {
    setSelectedNews(item);
    navigate("/news");
  };

  const handleKnowMore = () => {
    setAllTeachers(teachers);
    navigate("/teachers");
  };

  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoUrl = "https://www.w3schools.com/html/mov_bbb.mp4";

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
      <Hero />
      <section
        className="py-16 bg-cover bg-no-repeat bg-center px-4 sm:px-6 lg:px-8"
        style={{ backgroundImage: `url(${Background})` }}
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Explore Our Featured Courses
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            Each course is crafted by seasoned professionals to deliver both
            foundational understanding and hands-on application. Browse our
            featured offerings below.
          </p>

          <div className="relative flex items-center">
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

            <div
              className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-12"
              data-aos="fade-up"
            >
              {visibleCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-xl"
                >
                  <div className="overflow-hidden">
                    <img
                      src={`http://localhost:5000/${course.image}`}
                      alt={course.title}
                      className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {course.title}
                    </h3>
                    <div className="flex items-center gap-3 mb-2">
                      <img
                        src={`http://localhost:5000/${course.trainer_avatar}`}
                        alt={course.trainer_name}
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="text-sm text-gray-600">
                        by {course.trainer_name}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 mb-4">
                      {course.description}
                    </p>
                    <ul className="text-sm text-gray-500 mb-4 space-y-1">
                      <li>
                        <strong>Schedule Course:</strong>{" "}
                        {formatDateTime(course.scheduleCourse)}
                      </li>
                      <li>
                        <strong>Apply Before Date:</strong>{" "}
                        {formatDateTime(course.applyBeforeDate)}
                      </li>
                      <li>
                        <strong>Duration:</strong> {course.duration}
                      </li>
                      <li>
                        <strong>Fees:</strong> {course.fees}
                      </li>
                      <li>
                        <strong>Venue:</strong> {course.venue}
                      </li>
                    </ul>
                    <button
                      onClick={handleCourseClick}
                      className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600 transition"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>

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
      {/* News & Updates Section */}
      <section
        className="py-16 bg-gradient-to-br from-teal-200/60 to-teal-100/40 backdrop-blur-sm"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            News & Updates
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            Stay informed with the latest happenings at TRESCOL. From tech
            workshops and course announcements to industry insights and student
            success stories, our news section brings you the pulse of our
            thriving learning community.
          </p>

          <div className="relative flex items-center mt-20" data-aos="fade-up">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-12">
              {newsList.map((item) => (
                <div
                  key={item.id}
                  className="group relative flex w-full flex-col rounded-xl bg-white/70 backdrop-blur-md text-gray-700 shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-lg"
                >
                  <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 shadow-lg shadow-teal-500/40">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center transition-transform duration-300"
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

                  {/* Optional background blob */}
                  <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-10 bg-teal-300 pointer-events-none transition-opacity duration-300 rounded-xl blur-xl scale-125"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}

      <section
        className="relative h-[570px] bg-teal-800 text-center text-white flex flex-col items-center justify-center overflow-visible"
        data-aos="fade-up"
      >
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

      {/* Teacher Section */}
      <section
        className="py-16 bg-teal-600 rounded-3xl mx-4 mt-96 shadow-xl"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">
            Meet the Mentors Shaping the Cyber Future
          </h2>
          <p className="text-center text-white max-w-3xl mx-auto mb-10 leading-relaxed">
            Our instructors are industry veterans and passionate educators
            dedicated to shaping the next generation of tech leaders. With
            real-world experience and a focus on practical learning, they guide
            students every step of the way.
          </p>

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

            <div
              className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-12"
              data-aos="fade-up"
            >
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
                      className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 ease-in-out hover:scale-105"
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

      {/* Upcoming & Completed Section */}
      <section className="py-20 bg-gray-50" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-2xl font-semibold text-teal-600 uppercase tracking-widest mb-2 mt-10">
            Join With Us
          </p>
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
            Upcoming & Completed
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
            Explore our track record of success and future opportunities. From
            completed workshops that empowered learners to upcoming events
            designed to inspire, we are committed to continuous learning and
            impactful experiences.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {statsData.map((item, index) => (
              <div
                key={index}
                className="group bg-teal-600 rounded-2xl shadow-md p-6 hover:shadow-lg hover:shadow-teal-300 transition duration-300 transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden"
              >
                <div className="flex items-center justify-center w-14 h-14 mx-auto bg-white text-teal-600 rounded-full text-2xl mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <h3 className="text-4xl font-bold text-white mb-2">
                  {item.count}
                </h3>
                <p className="text-lg font-semibold text-white">{item.label}</p>
                <p className="text-sm text-white mt-1">{item.sub}</p>

                {/* Background blob animation */}
                <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-10 bg-white pointer-events-none transition-opacity duration-300 rounded-2xl blur-xl scale-125"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <ScrollBtn />
    </>
  );
}

export default Home;
