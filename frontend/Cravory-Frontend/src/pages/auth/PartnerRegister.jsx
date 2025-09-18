import React, { useState } from "react";
import "../../styles/global.css";
import { Link } from "react-router";
import axios from "axios";

export default function PartnerRegister() {
  const navigate = useNavigate();
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    contactName: "",
    phone: "",
    address: "",
    email: "",
    password: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit (logic add later)
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    const response = await axios.post(
      "http://localhost:3000/api/auth/food-partner/register",
      formData
    );
    console.log(response);
    setFormData({
      name: "",
      contactName: "",
      phone: "",
      address: "",
      email: "",
      password: "",
    });
    if (response.status === 201) {
      navigate("/create-food");
    }
  };

  return (
    <div className="auth-container">
      <h2>Register as Food Partner</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Restaurant / Business Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="contactName"
          placeholder="Contact Person Name"
          value={formData.contactName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Full Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Business Email"
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
          Already a partner? <Link to="/food-partner/login">Login</Link>
        </p>
        <p>
          Want to order food? <Link to="/user/register">Register as User</Link>
        </p>
      </div>
    </div>
  );
}
