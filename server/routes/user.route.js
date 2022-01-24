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
  loginUser,
} = require("../controllers/user.controller.js");
//get all users
router.get("/api/users", getUsers);
//get user by id
router.get("/api/users/:id", getUser);
//creates a user
router.post("/api/users", createUser);
//delete a user
router.delete("/api/users/:id", deleteUser);
//delete all users
router.delete("/api/users", deleteAllUsers);
//Updates a user (by certain parameters)
router.put("/api/users/:id", updateUser);
//
router.post("/api/users/login", loginUser);

module.exports = router;
