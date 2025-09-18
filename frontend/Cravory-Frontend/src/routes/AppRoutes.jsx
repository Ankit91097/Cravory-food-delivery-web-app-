import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router";
import Home from "../pages/general/Home";
import UserRegister from "../pages/auth/UserRegister";
import UserLogin from "../pages/auth/UserLogin";
import PartnerLogin from "../pages/auth/PartnerLogin";
import PartnerRegister from "../pages/auth/PartnerRegister";
import CreateFood from "../pages/food-partner/CreateFood";
import BusinessProfile from "../pages/food-partner/Profile";
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/user/register" element={<UserRegister />}></Route>
        <Route path="/user/login" element={<UserLogin />}></Route>
        <Route
          path="/food-partner/register"
          element={<PartnerRegister />}
        ></Route>
        <Route path="/food-partner/login" element={<PartnerLogin />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create-food" element={<CreateFood />}></Route>
        <Route path="/food-partner/:id" element={<BusinessProfile />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
