import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const RegistrationForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // ⏬ Get selected course from location.state
  const course = location.state?.course;

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    courseTitle: course?.title || "", // Autofill course title
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    courseTitle: Yup.string().required("Course title is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await axios.post("http://localhost:5000/api/register", values);
      alert("✅ Registration successful!");
      resetForm();
      navigate("/");
    } catch (error) {
      console.error("Registration error:", error);
      alert("❌ Registration failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-16 p-8 bg-white shadow-lg rounded">
      <h2 className="text-2xl font-bold mb-6 text-center">Register for Course</h2>

      {!course?.title && (
        <div className="text-red-600 mb-4">
          ⚠️ Course not selected. Please go back and choose a course first.
        </div>
      )}

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <Field
                type="text"
                name="name"
                className="w-full border p-2 rounded"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-600 text-sm"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Email</label>
              <Field
                type="email"
                name="email"
                className="w-full border p-2 rounded"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-600 text-sm"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Phone</label>
              <Field
                type="text"
                name="phone"
                className="w-full border p-2 rounded"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-600 text-sm"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Course Title</label>
              <Field
                type="text"
                name="courseTitle"
                className="w-full border p-2 rounded bg-gray-100"
                readOnly
              />
              <ErrorMessage
                name="courseTitle"
                component="div"
                className="text-red-600 text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              {isSubmitting ? "Submitting..." : "Submit Registration"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
