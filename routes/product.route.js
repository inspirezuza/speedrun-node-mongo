const express = require("express");
const Product = require("../models/product.model.js");
const {
  getProducts,
  updateProduct,
  deleteProduct,
  getProduct,
  createProduct,
} = require("../controllers/product.controller.js");
const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", createProduct);
router.put("/", updateProduct);
router.delete("/", deleteProduct);

module.exports = router;
