const express = require("express");
const router = express.Router();
const Cart = require("../models/carts");

/* GET all trips listed in cart. */
router.get("/", (req, res) => {
  Cart.find()
    .populate("trip_id")
    .then((data) => {
      res.json({ allTripsInCart: data.map((obj) => obj.trip_id) });
    });
});

/* POST add a trip in cart. */
router.post("/", (req, res) => {
  const newCart = new Cart({
    trip_id: req.body.trip_id,
  });
  newCart.save().then((data) => {
    res.json({ trip_id: data });
  });
});

router.delete("/:id", (req, res) => {
  Cart.deleteOne({ trip_id: req.params.id }).then((data) => {
    console.log(data);
    if (data.deletedCount > 0) {
      res.json((result = true));
    } else {
      res.json((result = false));
    }
  });
});

module.exports = router;

router.delete("/", (req, res) => {
  Cart.deleteMany().then((data) => {
    console.log(data);
    if (data.deletedCount > 0) {
      res.json((result = true));
    } else {
      res.json((result = false));
    }
  });
});
