import React from "react";
import "../styles/global.css";
import { Link } from "react-router";

export default function UserLogin() {
  return (
    <div className="auth-container">
      <h2>User Login</h2>
      <form>
        <input type="email" placeholder="Enter your email" required />
        <input type="password" placeholder="Enter your password" required />
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
