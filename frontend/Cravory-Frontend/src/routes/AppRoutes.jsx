import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router";
import UserRegister from "../pages/UserRegister";
import UserLogin from "../pages/UserLogin";
import PartnerRegister from "../pages/PartnerRegister";
import PartnerLogin from "../pages/PartnerLogin";
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
      </Routes>
    </Router>
  );
};

export default AppRoutes;
