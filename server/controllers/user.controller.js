require("../db/mongoose");
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
    const user = await Product.findById(_id);
    if (!user) {
      return res.status(400).send(`user not found - ${req.params.id}`);
    }
    res.send(user);
  } catch (err) {
    res.status(500).send(e);
  }
};
const createUser = async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
};
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send(`Product not found - ${req.params.id}`);
    }
    res.send(user);
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
    const user = await User.findById(req.params.id);

    updates.forEach((update) => (user[update] = req.body[update]));
    //inclused save to hash passwords on update
    await user.save();
    if (!user) {
      return res.status(400).send(`User not found - ${req.params.id}`);
    }
    res.send(user);
  } catch (err) {
    res.status(404).send(err);
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  deleteAllUsers,
  updateUser,
};
