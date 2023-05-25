const router = require("express").Router();
const Dish = require("../models/Dish");

//? CREATE DISH

router.post("/", async (req, res) => {
  try {
    const newDish = new Dish(req.body);
    const savedDish = await newDish.save();
    return res.status(200).json(savedDish);
  } catch (error) {
    return res.status(500).json(error);
  }
});

//? GET DISH

router.get("/", async (req, res) => {
  try {
    const dish = await Dish.find();
    return res.status(200).json(dish);
  } catch (error) {
    return res.status(500).json(error);
  }
});

//? GET DISH BY ID

router.post("/getMany", async (req, res) => {
  try {
    const dishes = [];
    for (let i = 0; i < req.body.ids.length; i++) {
      dishes.push(await Dish.findOne({ _id: req.body.ids[i].id }));
    }
    return res.status(200).json(dishes);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
