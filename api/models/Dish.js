const mongoose = require("mongoose");

const DishSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    ingredients: [String],
    weight: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    specs: {
      type: [String],
    },
    type: {
      type: [String],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Dish", DishSchema);
