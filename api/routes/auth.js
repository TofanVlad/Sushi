const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//? REGISTER
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
      phone: req.body.phone,
      cartItems: req.body.cartItems,
      favourites: req.body.favourites,
      addresses: req.body.addresses,
      history: req.body.history,
    });

    const user = await newUser.save();

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
});

//? LOGIN

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(400).json("Wrong credentials!");

    const validated = await bcrypt.compare(req.body.password, user.password);
    if (!validated) return res.status(400).json("Wrong credentials!");

    const { password, ...others } = user._doc;
    return res.status(200).json(others);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
