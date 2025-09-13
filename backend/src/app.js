require("dotenv").config();
const express = require("express");
const app = express();
const authRoutes = require("./routes/auth.routes");
const cookieParser = require("cookie-parser");
const foodRoutes = require("./routes/food.routes");

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/food", foodRoutes);

module.exports = app;
