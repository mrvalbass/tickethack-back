const express = require("express");
const router = express.Router();
const Trip = require("../models/trips");

router.get("/", (req, res) => {
  const today = new Date(req.query.date);
  const tomorrow = new Date(
    new Date(req.query.date).setDate(today.getDate() + 1)
  );
  Trip.find({
    departure: req.query.departure,
    arrival: req.query.arrival,
    date: {
      $gte: today,
      $lt: tomorrow,
    },
  }).then((data) => {
    res.json({ allTripsByDestination: data });
  });
});

module.exports = router;
