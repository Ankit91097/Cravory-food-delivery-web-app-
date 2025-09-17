import React from "react";
import "../styles/global.css";
import { Link } from "react-router";

export default function PartnerLogin() {
  return (
    <div className="auth-container">
      <h2>Food Partner Login</h2>
      <form>
        <input type="email" placeholder="Restaurant Email" required />
        <input type="password" placeholder="Password" required />
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
