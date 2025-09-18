import React, { useState } from "react";
import "../../styles/global.css";
import { Link, useNavigate } from "react-router";
import axios from "axios";

export default function UserLogin() {
  const navigate = useNavigate();
  // Two-way binding ke liye state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Input change handle
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Form submit handler (abhi sirf console log ke liye)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("User Register Data:", formData);
      const response = await axios.post(
        "http://localhost:3000/api/auth/user/login",
        formData,
        {
          withCredentials: true,
        }
      );
      console.log(response);
      // ✅ form reset the right way
      setFormData({
        email: "",
        password: "",
      });
      if (response.status === 200) {
        navigate("/");
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="auth-container">
      <h2>User Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>
      </form>

      <div className="auth-links">
        <p>
          New here? <Link to="/user/register">Register as User</Link>
        </p>
        <p>
          Running a restaurant?{" "}
          <Link to="/food-partner/register">Register as Food Partner</Link>
        </p>
      </div>
    </div>
  );
}
