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
      navigate("/admin");
    } catch (error) {
      alert("Login failed: " + error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-10 w-full max-w-md bg-white rounded shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Admin Login</h2>
        <form onSubmit={handleLogin}>
          <input
            className="w-full p-2 mb-4 border rounded"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="w-full p-2 mb-4 border rounded"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="w-full bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
