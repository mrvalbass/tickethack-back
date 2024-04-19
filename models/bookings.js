const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
  trip_id: { type: mongoose.Schema.Types.ObjectId, ref: "trips" },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
});

const Booking = mongoose.model("bookings", bookingSchema);

module.exports = Booking;
