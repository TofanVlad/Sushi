const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: { type: String, required: true },
    cartItems: [
      {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Dish",
        },
        quantity: Number,
      },
    ],
    favourites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Dish" }],
    addresses: {
      type: [String],
    },
    history: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
