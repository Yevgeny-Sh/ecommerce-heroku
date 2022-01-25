const express = require("express");
const User = require("../models/user.model");
const auth = require("../middleware/authentication");
const router = express.Router();
const {
  getUsers,
  createUser,
  getUser,
  deleteUser,
  deleteAllUsers,
  updateUser,
  loginUser,
  logOutUser,
} = require("../controllers/user.controller.js");
//get all users

router.get("/api/users", auth, getUsers);

//get current -singed in- user
router.get("/api/users/me", auth, async (req, res) => {
  res.send(req.user);
});
//get user by id
//for testing, no need if we can get current user
router.get("/api/users/:id", getUser);
//creates a user
//and a token for that user
router.post("/api/users", createUser);
//delete a current -signed in- user
router.delete("/api/users/me", auth, deleteUser);
//delete all users
router.delete("/api/users", deleteAllUsers);
//Updates a signed in user
router.put("/api/users/me", updateUser);
//login
router.post("/api/users/login", loginUser);
//logout
router.post("/api/users/logout", auth, logOutUser);

module.exports = router;
