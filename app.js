const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

require("dotenv").config();
require("./models/connection");

const indexRouter = require("./routes/index");
const tripsRouter = require("./routes/trips");
const cartsRouter = require("./routes/carts");
const bookingsRouteur = require("./routes/bookings");

const app = express();

const cors = require("cors");
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/trips", tripsRouter);
app.use("/carts", cartsRouter);
app.use("/bookings", bookingsRouteur);

module.exports = app;
