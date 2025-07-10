// src/admin/AddCourse.jsx
import React, { useState } from "react";
import axios from "axios";

function AddCourse() {
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
  const [image, setImage] = useState(null);
  const [trainerAvatar, setTrainerAvatar] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image || !trainerAvatar) {
      alert("Please upload both course image and trainer avatar.");
      return;
    }

    const formData = new FormData();
    for (let key in form) formData.append(key, form[key]);
    formData.append("image", image);
    formData.append("trainer_avatar", trainerAvatar);

    try {
      const token = localStorage.getItem("token");
      await axios.post("http://localhost:5000/api/courses/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Course added successfully!");
      setForm({
        title: "",
        trainer_name: "",
        description: "",
        scheduleCourse: "",
        applyBeforeDate: "",
        duration: "",
        venue: "",
        fees: "",
      });
      setImage(null);
      setTrainerAvatar(null);
    } catch (err) {
      alert("Failed to add course: " + err.response?.data?.message);
    }
  };

  return (
    <div className="p-10 max-w-2xl mx-auto mt-10 bg-gray-100 rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Add New Course</h2>
      <form onSubmit={handleSubmit}>
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

        <div className="mb-4">
          <label className="block mb-1">Course Image</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Trainer Avatar</label>
          <input
            type="file"
            onChange={(e) => setTrainerAvatar(e.target.files[0])}
            required
          />
        </div>

        <button
          className="bg-green-600 text-white px-4 py-2 rounded"
          type="submit"
        >
          Submit Course
        </button>
      </form>
    </div>
  );
}

export default AddCourse;
