// src/admin/AddCourse.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FroalaEditor from "react-froala-wysiwyg";
// Froala styles (must be imported)
import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";

function AddCourse() {
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

    // try {
    //   const token = localStorage.getItem("token");
    //   await axios.post("http://localhost:5000/api/courses/add", formData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //       Authorization: `Bearer ${token}`,
    //     },
    //   });
    //   alert("Course added successfully!");
    //   setForm({
    //     title: "",
    //     trainer_name: "",
    //     description: "",
    //     scheduleCourse: "",
    //     applyBeforeDate: "",
    //     duration: "",
    //     venue: "",
    //     fees: "",
    //   });
    //   setImage(null);
    //   setTrainerAvatar(null);
    // } catch (err) {
    //   alert("Failed to add course: " + err.response?.data?.message);
    // }

    try {
      const token = localStorage.getItem("token");
      await axios.post("http://localhost:5000/api/courses/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Course added successfully!");
      navigate("/admin/courses");
    } catch (err) {
      alert("Failed to add course: " + err.response?.data?.message);
    }
  };

  return (
    <div className="p-10 max-w-2xl mx-auto mt-10 bg-gray-100 rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Add New Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1">Title</label>
          <input
            className="w-full p-2 border"
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block mb-1">Trainer Name</label>
          <input
            className="w-full p-2 border"
            type="text"
            name="trainer_name"
            value={form.trainer_name}
            onChange={handleChange}
            required
          />
        </div>

        {/* ✅ Froala Description (moved here) */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Description</label>
          <FroalaEditor
            tag="textarea"
            model={form.description}
            onModelChange={(value) => setForm({ ...form, description: value })}
            config={{
              theme: "gray",
              placeholderText: "Write course description...",
              heightMin: 200,
              charCounterCount: true,
              toolbarSticky: true,
              toolbarButtons: {
                moreText: {
                  buttons: [
                    "bold",
                    "italic",
                    "underline",
                    "strikeThrough",
                    "subscript",
                    "superscript",
                    "fontFamily",
                    "fontSize",
                    "textColor",
                    "backgroundColor",
                    "inlineClass",
                    "inlineStyle",
                    "clearFormatting",
                  ],
                },
                moreParagraph: {
                  buttons: [
                    "alignLeft",
                    "alignCenter",
                    "alignRight",
                    "alignJustify",
                    "formatOL",
                    "formatUL",
                    "paragraphFormat",
                    "paragraphStyle",
                    "lineHeight",
                    "outdent",
                    "indent",
                    "quote",
                  ],
                },
                moreRich: {
                  buttons: [
                    "insertLink",
                    "insertImage",
                    "insertVideo",
                    "insertTable",
                    "emoticons",
                    "fontAwesome",
                    "specialCharacters",
                    "embedly",
                    "insertFile",
                    "insertHR",
                  ],
                },
                moreMisc: {
                  buttons: [
                    "undo",
                    "redo",
                    "fullscreen",
                    "print",
                    "getPDF",
                    "spellChecker",
                    "selectAll",
                    "html",
                  ],
                  align: "right",
                  buttonsVisible: 2,
                },
              },
            }}
          />
        </div>

        {/* Remaining fields */}
        {[
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
          className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
          type="submit"
        >
          Submit Course
        </button>
      </form>
    </div>
  );
}

export default AddCourse;
