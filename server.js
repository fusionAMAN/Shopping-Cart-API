const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());
const cartRoutes = require("./routes/cart.routes");

app.use("/cart", cartRoutes);


app.listen(process.env.PORT, () => {
  console.log("Server is running on port 3000");
});