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
module.exports = {
  getUsers,
};
