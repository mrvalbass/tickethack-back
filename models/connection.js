const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://florentdegeorges:w8wS8EPAE2BcUxM6@cluster0.lepowu5.mongodb.net/tickethack";

mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log("Database connected"))
  .catch((error) => console.error(error));
