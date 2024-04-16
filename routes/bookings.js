const express = require("express");
const router = express.Router();
const Booking = require("../models/bookings");

/* GET all trips listed in booking. */
router.get("/", (req, res) => {
  Booking.find()
    .populate("trip_id")
    .then((data) => {
      res.json({ allTripsInBooking: data.map((obj) => obj.trip_id) });
    });
});

/* POST */
router.post("/", (req, res) => {
  console.log(typeof req.body.trip_id);
  req.body.trip_id.split(",").forEach((id) => {
    const newBooking = new Booking({
      trip_id: id,
    });
    newBooking.save().then((data) => {});
  });
  res.json({ result: true });
});

module.exports = router;
