const router = require("express").Router();
const User = require("../models/User");
const Order = require("../models/Order");

//? CREATE ORDER

router.post("/", async (req, res) => {
  const newOrder = new Order(req.body);

  try {
    const savedOrder = await newOrder.save();

    const user = await User.findOne({ username: savedOrder.username });
    user.history.push(savedOrder);
    await user.save();
    return res.status(200).json(savedOrder);
  } catch (error) {
    return res.status(500).json(error);
  }
});

//? DELETE ORDER

router.delete("/:id", async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    return res.status(200).json("Order has been deleted!");
  } catch (error) {
    return res.status(500).json(error);
  }
});

//? GET ORDER

router.get("/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json("Order doesn't exist!");
    return res.status(200).json(order);
  } catch (error) {
    return res.status(500).json(error);
  }
});

//? GET ALL USER'S ORDERS

router.get("/", async (req, res) => {
  const username = req.query.username;
  try {
    let orders = [];
    orders = await Order.find({ username });
    if (!username) orders = await Order.find();
    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
