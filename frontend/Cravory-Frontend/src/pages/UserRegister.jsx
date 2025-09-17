import React from "react";
import "../styles/global.css";
import { Link } from "react-router";

export default function UserRegister() {
  return (
    <div className="auth-container">
      <h2>Create User Account</h2>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="password" placeholder="Create Password" required />
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
