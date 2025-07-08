import React, { useEffect } from "react";
import { useCourseContext } from "../context/CourseContext";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollBtn from "../components/ScrollBtn";
import Footer from "../components/Footer";
import Background from "../assets/background.png"

function Courses() {
  const navigate = useNavigate();


  const handleRegister = (courseTitle) => {
  navigate("/register", { state: { courseTitle } });
};


  const { courses } = useCourseContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="py-16 bg-gray-100 min-h-screen" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            All Featured Courses
          </h2>
          {courses.length === 0 ? (
            <p className="text-center text-gray-600">No courses available.</p>
          ) : (
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              data-aos="fade-up"
            >
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white shadow-md rounded-lg overflow-hidden "
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
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
                      Register Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <ScrollBtn />
      <Footer />
    </>
  );
}

export default Courses;
