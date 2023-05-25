const router = require("express").Router();
const User = require("../models/User");
const Order = require("../models/Order");

//? UPDATE
router.put("/:id", async (req, res) => {
  const cartItems = req.body.cartItems;
  const addresses = req.body.addresses;

  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(409).json("No user");
    const newUser = { ...user._doc, cartItems, addresses };
    const updatedUser = await User.findByIdAndUpdate(req.params.id, {
      $set: newUser,
    });
    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(500).json(error);
  }
});

//? DELETE

router.delete("/:id", async (req, res) => {
  if (req.body.userID !== req.params.id)
    return res.status(401).json("You can delete only your account!");
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(401).json("User not found!");
    try {
      await Order.deleteMany({ username: user.username });
      await User.findByIdAndDelete(req.params.id);
      return res.status(200).json("User Deleted!");
    } catch (error) {
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
});

//? GET USER

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate("cartItems.id");
    const { password, ...others } = user._doc;
    return res.status(200).json(others);
  } catch (error) {
    return res.status(500).json(error);
  }
});

//? CHECK IF USER EXISTS

router.post("/:username", async (req, res) => {
  try {
    const user = await User.find({ username: req.params.username });
    if (user.length !== 0) return res.status(200).json(true);
    return res.status(200).json(false);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
