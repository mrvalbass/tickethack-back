const express = require("express");
const router = express.Router();
require("../models/connection");
const Trip = require("../models/trips");

/* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.send("respond with a resource");
// });

module.exports = router;
