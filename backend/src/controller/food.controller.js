const foodModel = require("../models/food");
const uploadFile = require("../services/storage.services");

async function createFood(req, res) {
  try {
    const { v4: uuidv4 } = await import("uuid"); // 👈 yeh fix hai
    const { name, description } = req.body;
    const file = req.file.buffer;

    // uuid generate
    const fileUploadResult = await uploadFile(file, uuidv4());
    const food = await foodModel.create({
      name,
      description,
      video: fileUploadResult.url,
      foodPartner: req.foodPartner._id,
    });

    res.status(201).json({
      message: "Food created successfully",
      food,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error uploading file");
  }
}

async function getFoodItems(req, res) {
  try {
    const foodItems = await foodModel.find();
    res.status(200).json({
      message: "Food Item Fetched Successfully",
      foodItems,
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = { createFood, getFoodItems };
