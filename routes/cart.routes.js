const express = require("express");
const router = express.Router();

const {
  addToCart,
  getCart,
  removeItem
} = require("../controllers/cart.controller");

router.post("/add", addToCart);
router.get("/", getCart);
router.delete("/:itemId", removeItem);

module.exports = router;