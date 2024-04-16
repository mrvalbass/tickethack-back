const express = require("express");
const router = express.Router();
require("../models/connection");
const Trip = require("../models/trips");

/* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.send("respond with a resource");
// });

router.get("/", (req, res) => {
  Trip.find().then((data) => res.json({ allTrips: data }));
});

router.get("/", (req, res) => {
  Trip.find({
    departure: req.body.departure,
    arrival: req.body.arrival,
  }).then((data) => {
    console.log("This is info by destination", data);
    res.json({ allTripsByDestination: data });
  });
});

module.exports = router;
