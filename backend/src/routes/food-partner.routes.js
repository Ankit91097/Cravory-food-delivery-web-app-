const express = require("express");
const router = express.Router();
const foodPartnerController = require("../controller/food-partner.controller");
const { authUserMiddleware } = require("../middleware/auth.middleware");

router.get("/:id",authUserMiddleware, foodPartnerController.foodPartnerById);

module.exports = router;
