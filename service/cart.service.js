const cart = new Map();
const addItem = ({ itemId, name, price, quantity }) => {
  if (cart.has(itemId)) {
    const existing = cart.get(itemId);
    existing.quantity += quantity;
    cart.set(itemId, existing);
  } else {
    cart.set(itemId, {
      itemId,
      name,
      price,
      quantity,
    });
  }
  return getCart();
};
const getCart = () => {
  let totalPrice = 0;
  const items = [];

  for (const item of cart.values()) {
    totalPrice += item.price * item.quantity;
    items.push(item);
  }

  return {
    items,
    totalPrice,
  };
};

const removeItem = (itemId) => {
  if (!cart.has(itemId)) {
    const error = new Error("Item not found");
    error.status = 404;
    throw error;
  }
  cart.delete(itemId);
};

module.exports = {
  addItem,
  getCart,
  removeItem,
};