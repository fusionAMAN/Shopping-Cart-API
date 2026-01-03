const cartService = require("../service/cart.service");

const addToCart = (req, res) => {
  try {
    const { itemId, name, price, quantity } = req.body;

    if (!itemId || !name || price <= 0 || quantity <= 0) {
      return res.status(400).json({
        success: false,
        message: "Valid itemId, name, price and quantity are required",
      });
    }

    const cart = cartService.addItem({
      itemId,
      name,
      price,
      quantity,
    });

    return res.status(201).json({
      success: true,
      data: cart,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message || "Internal Server Error",
    });
  }
};

const getCart = (req, res) => {
  try {
    const cart = cartService.getCart();

    return res.status(200).json({
      success: true,
      data: cart,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};


const removeItem = (req, res) => {
  try {
    const { itemId } = req.params;
    cartService.removeItem(itemId);
    return res.status(200).json({
      success: true,
      message: "Item removed successfully",
    });
  } catch (err) {
    return res.status(err.status || 500).json({
      success: false,
      message: err.message || "Internal Server Error",
    });
  }
};

module.exports = {
  addToCart,
  getCart,
  removeItem,
};