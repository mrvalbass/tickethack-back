const express = require("express");
const router = express.Router();
const User = require("../models/users");

router.post("/", async (req, res) => {
  try {
    await new User(req.body).save();
    res.json({ result: true });
  } catch (error) {
    if (error.message.includes("Missing")) {
      return res.json({ error: "Missing Field" });
    } else if (error.message.includes("duplicate")) {
      return res.json({ error: "User already exists" });
    } else if (error.message.includes("email")) {
      return res.json({ error: "Invalid email address" });
    } else {
      return res.json({ error: "Unknown error" });
    }
  }
});

router.post("/signin", async (req, res) => {
  try {
    const user = await User.findOne(req.body);
    if (!user) throw new Error("User not found");
    res.json({ result: true, user });
  } catch (error) {
    res.json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) throw new Error("User not found");
    res.json({ result: true, user });
  } catch (error) {
    res.json({ error: error.message });
  }
});
module.exports = router;
