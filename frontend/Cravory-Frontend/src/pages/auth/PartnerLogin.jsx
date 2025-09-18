import React, { useState } from "react";
import "../../styles/global.css";
import { Link, useNavigate } from "react-router";
import axios from "axios";

export default function PartnerLogin() {
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
      [e.target.name]: e.target.value, // dynamic key update
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData); // abhi sirf testing ke liye
    const response = await axios.post(
      "http://localhost:3000/api/auth/food-partner/login",
      formData
    );
    console.log(response);
    setFormData({
      email: "",
      password: "",
    });
    if (response.status === 200) {
      navigate("/create-food");
    }
  };

  return (
    <div className="auth-container">
      <h2>Food Partner Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Restaurant Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>
      </form>

      <div className="auth-links">
        <p>
          Not a partner yet?{" "}
          <Link to="/food-partner/register">Register as Food Partner</Link>
        </p>
        <p>
          Want to order food? <Link to="/user/register">Register as User</Link>
        </p>
      </div>
    </div>
  );
}
