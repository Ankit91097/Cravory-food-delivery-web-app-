const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth.middleware");
const foodController = require("../controller/food.controller");
const multer = require("multer");

const upload = multer({
  storage: multer.memoryStorage(),
});

router.post(
  "/",
  authMiddleware.authFoodPartnerMiddleware,
  upload.single("video"),
  foodController.createFood
);

router.get("/", authMiddleware.authUserMiddleware, foodController.getFoodItems);

module.exports = router;
