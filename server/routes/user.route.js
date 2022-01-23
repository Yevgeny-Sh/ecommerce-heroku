const express = require("express");
const User = require("../models/user.model");
const router = express.Router();
const { getUsers } = require("../controllers/user.controller.js");
//get all users
router.get("/api/users", getUsers);

router.post("/api/users", async (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
