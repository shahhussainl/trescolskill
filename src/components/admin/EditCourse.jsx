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

  const [image, setImage] = useState(null);
  const [trainerAvatar, setTrainerAvatar] = useState(null);
  const [previewImage, setPreviewImage] = useState("");
  const [previewAvatar, setPreviewAvatar] = useState("");

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/courses/${id}`);
        const course = res.data;

        setForm({
          title: course.title,
          trainer_name: course.trainer_name,
          description: course.description,
          scheduleCourse: course.scheduleCourse.slice(0, 16),
          applyBeforeDate: course.applyBeforeDate.slice(0, 10),
          duration: course.duration,
          venue: course.venue,
          fees: course.fees,
        });

        setPreviewImage(`http://localhost:5000/${course.image}`);
        setPreviewAvatar(`http://localhost:5000/${course.trainer_avatar}`);
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
      const formData = new FormData();

      // Append text fields
      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });

      // Append files if selected
      if (image) formData.append("image", image);
      if (trainerAvatar) formData.append("trainer_avatar", trainerAvatar);

      await axios.put(`http://localhost:5000/api/courses/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
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
        {/* Text fields */}
        {[
          { name: "title", label: "Title" },
          { name: "trainer_name", label: "Trainer Name" },
          { name: "description", label: "Description" },
          {
            name: "scheduleCourse",
            label: "Schedule Date & Time",
            type: "datetime-local",
          },
          {
            name: "applyBeforeDate",
            label: "Apply Before Date",
            type: "date",
          },
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

        {/* Image Uploads */}
        <div className="mb-4">
          <label className="block mb-1">Course Image</label>
          {previewImage && (
            <img
              src={previewImage}
              alt="Current"
              className="w-32 h-20 object-cover mb-2"
            />
          )}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Trainer Avatar</label>
          {previewAvatar && (
            <img
              src={previewAvatar}
              alt="Trainer"
              className="w-20 h-20 object-cover rounded-full mb-2"
            />
          )}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setTrainerAvatar(e.target.files[0])}
          />
        </div>

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
