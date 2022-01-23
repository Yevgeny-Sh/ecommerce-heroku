const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  isActive: Boolean,
});
userSchema.pre("save", async function (next) {
  console.log("bbbb");
  const user = this;
  console.log(this);
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});
const User = mongoose.model("users", userSchema);

//we encrypt passwords on creation :
//we use a method on the Schema to set a middleware up:

module.exports = User;
