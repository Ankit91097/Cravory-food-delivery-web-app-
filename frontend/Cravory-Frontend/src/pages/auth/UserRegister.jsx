import React, { useState } from "react";
import "../../styles/global.css";
import { Link, useNavigate } from "react-router";
import axios from "axios";

export default function UserRegister() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("User Register Data:", formData);
      const response = await axios.post(
        "http://localhost:3000/api/auth/user/register",
        formData,
        {
          withCredentials: true,
        }
      );

      // ✅ form reset the right way
      setFormData({
        fullName: "",
        email: "",
        password: "",
      });
      if (response.status === 201) {
        navigate("/");
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="auth-container">
      <h2>Create User Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Create Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>

      <div className="auth-links">
        <p>
          Already have an account? <Link to="/user/login">Login</Link>
        </p>
        <p>
          Want to join as a partner?{" "}
          <Link to="/food-partner/register">Register as Food Partner</Link>
        </p>
      </div>
    </div>
  );
}
