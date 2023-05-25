const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const orderRoute = require("./routes/orders");
const productRoute = require("./routes/products");
const dishRoute = require("./routes/dishes");

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((error) => console.log(error));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, "hello.png");
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  return res.status(200).json("File has been uploaded");
});

app.use(cors({ origin: "http://127.0.0.1:5173" }));

app.use("/api/auth", authRoute);

app.use("/api/users", userRoute);

app.use("/api/orders", orderRoute);

app.use("/api/products", productRoute);

app.use("/api/dishes", dishRoute);

app.listen("5000", () => {
  console.log("Backend is running!");
});
