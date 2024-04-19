const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Missing Field"],
  },
  lastname: {
    type: String,
    required: [true, "Missing Field"],
  },
  age: Number,
  email: {
    type: String,
    required: [true, "Missing Field"],
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "invalid email address"],
    unique: [true, "User already existing"],
  },
  password: {
    type: String,
    required: [true, "Missing Field"],
    minLength: 8,
  },
  profilePictureURL: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("users", userSchema);

module.exports = User;
