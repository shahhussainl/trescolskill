import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditCourse() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    trainer_name: "",
    description: "",
    scheduleCourse: "",
    applyBeforeDate: "",
    duration: "",
    venue: "",
    fees: "",
  });

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/courses/${id}`);
        const course = res.data;
        setForm({
          title: course.title,
          trainer_name: course.trainer_name,
          description: course.description,
          scheduleCourse: course.scheduleCourse.slice(0, 16), // trim to yyyy-MM-ddTHH:mm
          applyBeforeDate: course.applyBeforeDate.slice(0, 10),
          duration: course.duration,
          venue: course.venue,
          fees: course.fees,
        });
      } catch (err) {
        alert("Failed to load course");
      }
    };

    fetchCourse();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.put(`http://localhost:5000/api/courses/${id}`, form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Course updated successfully");
      navigate("/admin/courses");
    } catch (err) {
      alert("Failed to update course");
    }
  };

  return (
    <div className="p-10 max-w-2xl mx-auto mt-10 bg-gray-100 rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Edit Course</h2>
      <form onSubmit={handleUpdate}>
        {[
          { name: "title", label: "Title" },
          { name: "trainer_name", label: "Trainer Name" },
          { name: "description", label: "Description" },
          {
            name: "scheduleCourse",
            label: "Schedule Date & Time",
            type: "datetime-local",
          },
          { name: "applyBeforeDate", label: "Apply Before Date", type: "date" },
          { name: "duration", label: "Duration" },
          { name: "venue", label: "Venue" },
          { name: "fees", label: "Fees" },
        ].map(({ name, label, type = "text" }) => (
          <div key={name} className="mb-4">
            <label className="block mb-1">{label}</label>
            <input
              className="w-full p-2 border"
              type={type}
              name={name}
              value={form[name]}
              onChange={handleChange}
              required
            />
          </div>
        ))}

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Update Course
        </button>
      </form>
    </div>
  );
}

export default EditCourse;
