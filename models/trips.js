const mongoose = require("mongoose");

const tripSchema = mongoose.Schema({
  departure: String,
  arrival: String,
  date: { type: Date, default: Date.now },
  price: Number,
});

const Trip = mongoose.model("trips", tripSchema);

module.exports = Trip;
