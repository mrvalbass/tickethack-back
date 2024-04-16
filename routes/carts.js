const express = require("express");
const router = express.Router();
const Cart = require("../models/carts");

/* GET all trips listed in cart. */
router.get("/", (req, res) => {
  Cart.find().then((data) => {
    res.json({ allTripsInCart: data });
  });
});

/* POST add a trip in cart. */

module.exports = router;
