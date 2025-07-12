// src/components/admin/AdminPanel.jsx
import React from "react";
import { Routes, Route, useNavigate, Link, useLocation, Navigate } from "react-router-dom";
import { FiPlus, FiList, FiLogOut } from "react-icons/fi";
import AddCourse from "./AddCourse";
import DeleteCourse from "./DeleteCourse";
import EditCourse from "./EditCourse";

function AdminPanel() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

 //Checks if the current path matches the sidebar link to apply an active style
  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-teal-800 to-teal-900 text-white p-6 shadow-lg">
        <h1 className="text-3xl mt-16 font-semibold mb-10 text-center tracking-wide">
          Admin Panel
        </h1>
        <nav className="space-y-4">
          <Link
            to="/admin/courses"
            className={`flex items-center px-4 py-2 rounded-md transition hover:bg-teal-700 ${
              isActive("/admin/courses") ? "bg-teal-700" : ""
            }`}
          >
            <FiList className="mr-2" /> Courses
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center px-4 py-2 rounded-md transition hover:bg-teal-700"
          >
            <FiLogOut className="mr-2" /> Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/add-course" element={<AddCourse />} />
          <Route path="/courses" element={<DeleteCourse />} />
          <Route path="/edit-course/:id" element={<EditCourse />} />
          {/* Optional redirect if you want /admin to go to dashboard */}
          <Route path="*" element={<Navigate to="/admin" />} />
        </Routes>
      </main>
    </div>
  );
}

const Welcome = () => (
  <div className="text-3xl font-bold text-gray-700">
    👋 Welcome to the Admin Dashboard!
  </div>
);

export default AdminPanel;
