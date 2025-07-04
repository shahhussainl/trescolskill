import React, { useEffect } from "react";
import { useTeacherContext } from "../context/TeacherContext";
import { useNavigate } from "react-router-dom";

function Teachers() {
  const { allTeachers } = useTeacherContext();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <button
            onClick={() => navigate("/")}
            className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition"
          >
            ← Back to Home
          </button>
        </div>
        <h2 className="text-3xl font-bold mb-8 text-center">
          Our Team of Experts
        </h2>
        {allTeachers.length === 0 ? (
          <p className="text-center text-gray-600">No teachers available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {allTeachers.map((teacher) => (
              <div
                key={teacher.id}
                className="bg-gray-100 p-6 rounded-lg shadow-md"
              >
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <h3 className="text-xl font-bold">{teacher.name}</h3>
                <p className="text-sm text-gray-600">{teacher.designation}</p>
                <p className="text-sm mt-2">{teacher.bio}</p>
                <p className="text-sm mt-2"><span className="font-bold">Languages:</span>{teacher.Languages}</p>
                <p className="text-sm mt-2"><span className="font-bold">Specialties</span>: {teacher.Specialties}</p>
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
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Teachers;