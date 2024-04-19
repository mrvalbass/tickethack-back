const express = require("express");
const router = express.Router();
const Cart = require("../models/carts");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

/* GET all trips listed in cart. */
router.get("/:userId", (req, res) => {
  Cart.find({ user_id: new ObjectId(req.params.userId) })
    .populate("trip_id")
    .then((data) => {
      res.json({ allTripsInCart: data.map((obj) => obj.trip_id) });
    });
});

/* POST add a trip in cart. */
router.post("/", async (req, res) => {
  await new Cart({
    trip_id: req.body.trip_id,
    user_id: req.body.user_id,
  }).save();
  res.json({ result: true });
});

router.delete("/:tripId/:userId", (req, res) => {
  Cart.deleteOne({
    trip_id: req.params.tripId,
    user_id: req.params.userId,
  }).then((data) => {
    res.json({ result: data.deletedCount > 0 });
  });
});

module.exports = router;

router.delete("/", (req, res) => {
  Cart.deleteMany().then((data) => {
    res.json({ result: data.deletedCount > 0 });
  });
});
