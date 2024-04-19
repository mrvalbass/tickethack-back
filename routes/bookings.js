const express = require("express");
const router = express.Router();
const Booking = require("../models/bookings");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

/* GET all trips listed in booking. */
router.get("/:userId", (req, res) => {
  Booking.find({ user_id: new ObjectId(req.params.userId) })
    .populate("trip_id")
    .then((data) => {
      res.json({ allTripsInBooking: data.map((obj) => obj.trip_id) });
    });
});

/* POST */
router.post("/", (req, res) => {
  req.body.trip_id.split(",").forEach((id) => {
    const newBooking = new Booking({
      trip_id: id,
      user_id: req.body.user_id,
    });
    newBooking.save().then((data) => {});
  });
  res.json({ result: true });
});

module.exports = router;
