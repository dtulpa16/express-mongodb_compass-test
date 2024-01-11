require("dotenv").config();
const express = require("express");
const products = require("./routes/products");
const connectDb = require("./db/db")
const app = express();
app.use(express.json());
connectDb()
app.use("/api/products", products);
app.listen(5000, () => console.log("Server is running"));
