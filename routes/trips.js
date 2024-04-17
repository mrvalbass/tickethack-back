const express = require("express");
const router = express.Router();
const Trip = require("../models/trips");

router.get("/", (req, res) => {
  const today = new Date(req.query.date);
  const tomorrow = new Date(
    new Date(req.query.date).setDate(today.getDate() + 1)
  );
  Trip.find({
    departure: { $regex: new RegExp(req.query.departure, `i`) },
    arrival: { $regex: new RegExp(req.query.arrival, `i`) },
    date: {
      $gte: today,
      $lt: tomorrow,
    },
  })
    .sort("date 1")
    .then((data) => {
      res.json({ allTripsByDestination: data });
    });
});

module.exports = router;
