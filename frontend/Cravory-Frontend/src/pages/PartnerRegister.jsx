import React from "react";
import "../styles/global.css";
import { Link } from "react-router";

export default function PartnerRegister() {
  return (
    <div className="auth-container">
      <h2>Register as Food Partner</h2>
      <form>
        <input type="text" placeholder="Restaurant / Business Name" required />
        <input type="text" placeholder="Contact Person Name" required />
        <input type="text" placeholder="Phone Number" required />
        <input type="text" placeholder="Full Address" required />
        <input type="email" placeholder="Business Email" required />
        <input type="password" placeholder="Create Password" required />
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
