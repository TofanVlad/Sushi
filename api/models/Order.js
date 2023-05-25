const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    adress: {
      type: String,
      required: true,
    },
    payment: {
      type: String,
      default: "Online Payment",
    },
    details: [String],
    dishes: [
      {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Dish",
        },
        quantity: Number,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
