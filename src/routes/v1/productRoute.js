const express = require("express");
const router = express.Router();

const { ProductController } = require("../../controller/index");
const productController = new ProductController();

router.post("/products", productController.getProducts);

module.exports = router;