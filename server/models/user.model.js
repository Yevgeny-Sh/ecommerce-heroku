const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  isActive: Boolean,
});
const User = mongoose.model("users", userSchema);

//we encrypt passwords on creation :
//we use a method on the Schema to set a middleware up:
userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});
module.exports = User;
