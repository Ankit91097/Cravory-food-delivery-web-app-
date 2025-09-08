const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const foodPartnerModel = require("../models/foodpartner.model");

async function registerUser(req, res) {
  try {
    const { fullName, email, password } = req.body;
    const userExists = await userModel.findOne({
      email: email,
    });
    if (userExists) {
      return res.status(400).json({
        message: "User Already Exists",
      });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await userModel.create({
      fullName,
      email,
      password: hashPassword,
    });
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET
    );

    res.cookie("token", token);

    res.status(201).json({
      message: "User Created SuccessFully",
      user: {
        _id: user._id,
        email: user.email,
        fullName: user.fullName,
      },
    });
  } catch (error) {
    console.log(error);
  }
}

async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    const user = await userModel
      .findOne({
        email,
      })
      .select("+password");
    if (!user) {
      return res.status(404).json({
        message: "User Not Found",
      });
    }

    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      return res.status(400).json({
        message: "Unauthorized User",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET
    );

    res.cookie("token", token);

    res.status(200).json({
      message: "User LoggedIn Successfully",
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);
  }
}

async function logoutUser(req, res) {
  res.clearCookie("token");
  res.status(200).json({
    message: "User LoggedOut Successfully",
  });
}

async function registerFoodPartner(req, res) {
  try {
    const { name, email, password } = req.body;
    const foodPartnerExists = await foodPartnerModel.findOne({
      email: email,
    });
    if (foodPartnerExists) {
      return res.status(400).json({
        message: "Food Partner Already Exists",
      });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const foodpartner = await foodPartnerModel.create({
      name,
      email,
      password: hashPassword,
    });
    const token = jwt.sign(
      {
        id: foodpartner._id,
      },
      process.env.JWT_SECRET
    );

    res.cookie("token", token);

    res.status(201).json({
      message: "Food Partner Created SuccessFully",
      user: {
        _id: foodpartner._id,
        email: foodpartner.email,
        name: foodpartner.name,
      },
    });
  } catch (error) {
    console.log(error);
  }
}

async function loginFoodPartner(req, res) {
  try {
    const { email, password } = req.body;
    const foodpartner = await foodPartnerModel
      .findOne({
        email,
      })
      .select("+password");
    if (!foodpartner) {
      return res.status(404).json({
        message: "Food Partner Not Found",
      });
    }

    const comparePassword = await bcrypt.compare(
      password,
      foodpartner.password
    );
    if (!comparePassword) {
      return res.status(400).json({
        message: "Unauthorized Food partner",
      });
    }

    const token = jwt.sign(
      {
        id: foodpartner._id,
      },
      process.env.JWT_SECRET
    );

    res.cookie("token", token);

    res.status(200).json({
      message: "Food Partner LoggedIn Successfully",
      foodpartner: {
        _id: foodpartner._id,
        fullName: foodpartner.fullName,
        email: foodpartner.email,
      },
    });
  } catch (error) {
    console.log(error);
  }
}

async function logoutFoodPartner(req, res) {
  res.clearCookie("token");
  res.status(200).json({
    message: "Food Partner Logged Out Successfully",
  });
}

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  registerFoodPartner,
  loginFoodPartner,
  logoutFoodPartner,
};
