const express = require("express");
const router = express.Router();
require("../models/connection");
const Trip = require("../models/trips");

/* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.send("respond with a resource");
// });

// router.get("/", (req, res) => {
//   Trip.find().then((data) => res.json({ allTrips: data }));
// });

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
