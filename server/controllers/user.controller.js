require("../db/mongoose");
const { remove } = require("../models/user.model");
const User = require("../models/user.model");

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.send({ users });
  } catch (e) {
    res.status(400).send(e);
  }
};
const getUser = async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.status(400).send(`user not found - ${req.params.id}`);
    }
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
};
const createUser = async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (err) {
    res.status(400).send(err);
  }
};
const deleteUser = async (req, res) => {
  try {
    // const user = await User.findByIdAndDelete(req.user._id);
    // if (!user) {
    //   return res.status(404).send(`user not found - ${req.params.id}`);
    // }
    await req.user.remove();
    res.send(req.user);
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteAllUsers = async (req, res) => {
  try {
    const users = await User.deleteMany({});
    if (users.deletedCount === 0) {
      return res.status(400).send("no users to delete");
    }
    res.send("all users have been deleted");
  } catch (err) {
    res.status(500).send(err);
  }
};

const updateUser = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "isActive", "password"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation) {
    return res.status(400).send("Invalid parameters for update");
  }

  try {
    updates.forEach((update) => (req.user[update] = req.body[update]));
    //included save to hash passwords on update
    await req.user.save();
    if (!req.user) {
      return res.status(400).send(`User not found - ${req.params.id}`);
    }
    res.send(req.user);
  } catch (err) {
    res.status(404).send(err);
  }
};
const loginUser = async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.name, req.body.password);
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    res.status(400).send();
  }
};
const logOutUser = async (req, res) => {
  try {
    //removes sign in token from token array
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.send("user logged out");
  } catch (e) {
    res.status(500).send();
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  deleteAllUsers,
  updateUser,
  loginUser,
  logOutUser,
};
