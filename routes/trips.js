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
  //   console.log("this is date", new Date(req.query.date).getDate());
  //   console.log("this is greater than", new Date(`${new Date(req.query.date)}`));
  //   console.log(
  //     "this is greater than",
  //     new Date(new Date(req.query.date) + "T23:59:59.999Z")
  //   );
  const today = new Date(req.query.date);
  const tomorrow = new Date(today.setDate(today.getDate() + 1));
  console.log("this is tomorrow", tomorrow);
  Trip.find({
    departure: req.query.departure,
    arrival: req.query.arrival,
    date: {
      $gt: today,
      $lt: tomorrow,
    },
  }).then((data) => {
    //console.log("This is info by destination", data);
    res.json({ allTripsByDestination: data });
  });
});

module.exports = router;
