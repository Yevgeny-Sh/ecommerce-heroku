const express = require("express");
const User = require("../models/user.model");
const router = express.Router();
const {
  getUsers,
  createUser,
  getUser,
  deleteUser,
  deleteAllUsers,
  updateUser,
} = require("../controllers/user.controller.js");
//get all users
router.get("/api/users", getUsers);
router.get("/api/users/:id", getUser);

router.post("/api/users", createUser);
//delete a user
router.delete("/api/users/:id", deleteUser);
//delete all users
router.delete("/api/users", deleteAllUsers);
//update
//Updates a Product (by certain parameters)
router.put("/api/users/:id", updateUser);

module.exports = router;
