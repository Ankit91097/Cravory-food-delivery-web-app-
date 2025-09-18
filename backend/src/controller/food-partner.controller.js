const foodModel = require("../models/food");
const foodPartnerModel = require("../models/foodpartner.model");

async function foodPartnerById(req, res) {
  const id = req.params.id;
  const foodPartner = await foodPartnerModel.findById(id);
  const foodItemsbyPartner = await foodModel.find({
    foodPartner: id,
  });
  res.status(200).json({
    message: "Food Partner Retrieval Successfully",
    foodPartner: {
      ...foodPartner.toObject(),
      foodItems: foodItemsbyPartner,
    },
  });
}

module.exports = { foodPartnerById };
