const router = require("express").Router();
const Product = require("../models/Product");

//? CREATE PRODUCT

router.post("/", async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    return res.status(200).json(savedProduct);
  } catch (error) {
    return res.status(500).json(error);
  }
});

//? DELETE PRODUCT

router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    return res.status(200).json("Product has been deleted!");
  } catch (error) {
    return res.status(500).json(error);
  }
});

//? GET PRODUCT

router.get("/:id", async (req, res) => {
  try {
    const product = Product.findById(req.params.id);
    if (!product) return res.status(404).json("Product doesn't exist!");
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json(error);
  }
});

//? GET ALL PRODUCTS

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
