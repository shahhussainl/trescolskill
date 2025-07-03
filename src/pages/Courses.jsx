import React from "react";
import { useCourseContext } from "../context/CourseContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


function Courses() {
  const { courses } = useCourseContext();
  const navigate = useNavigate();

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const handleBackClick = () => {
    navigate("/"); // Navigate to the Home route
  };

  return (
    <div className="py-16 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
          <button
            onClick={handleBackClick}
            className="bg-teal-500 text-gray-800 px-4 py-2 rounded hover:bg-teal-600 transition"
          >
            ← Back to Home
          </button>
        </div>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
          All Featured Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={course.trainer.avatar}
                    alt={course.trainer.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm text-gray-600">by {course.trainer.name}</span>
                </div>
                <p className="text-sm text-gray-700 mb-4">{course.description}</p>
                <ul className="text-sm text-gray-500 mb-4 space-y-1">
                  <li><strong>Posted on:</strong> {course.postedOn}</li>
                  <li><strong>Apply before:</strong> {course.applyBefore}</li>
                  <li><strong>Duration:</strong> {course.duration}</li>
                  <li><strong>Fees:</strong> {course.fees}</li>
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
  );
}

export default Courses;
