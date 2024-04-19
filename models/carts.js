const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  trip_id: { type: mongoose.Schema.Types.ObjectId, ref: "trips" },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
});

const Cart = mongoose.model("carts", cartSchema);

module.exports = Cart;
