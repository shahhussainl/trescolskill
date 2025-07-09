// src/admin/AdminLogin.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username,
        password,
      });
      localStorage.setItem("token", res.data.token);
      navigate("/admin/add-course");
    } catch (error) {
      alert("Login failed: " + error.response.data.message);
    }
  };

  return (
    <div className="p-10 max-w-md mx-auto mt-20 bg-gray-100 rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Admin Login</h2>
      <form onSubmit={handleLogin}>
        <input
          className="w-full p-2 mb-4 border"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="w-full p-2 mb-4 border"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;
