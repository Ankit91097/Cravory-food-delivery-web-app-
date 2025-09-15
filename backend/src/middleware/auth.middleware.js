const jwt = require("jsonwebtoken");
const foodPartnerModel = require("../models/foodpartner.model");
const userModel = require("../models/user.model");

async function authFoodPartnerMiddleware(req, res, next) {
  const { token } = req.cookies;
  if (!token) {
    return res.status(400).json({
      message: "Login First",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const foodPartner = await foodPartnerModel.findById(decoded.id);
    req.foodPartner = foodPartner;
    next();
  } catch (error) {
    console.log(error);
  }
}

async function authUserMiddleware(req, res, next) {
  const { token } = req.cookies;
  if (!token) {
    return res.status(400).json({
      message: "Login First",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded.id);
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
  }
}

module.exports = { authFoodPartnerMiddleware, authUserMiddleware };
