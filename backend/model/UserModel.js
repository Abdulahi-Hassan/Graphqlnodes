const { default: mongoose } = require("mongoose");

const { Schema, model } = mongoose;

const UserSchema = new Schema({
  ID:String,
  UserName: String,
  Email: String,
  Password: String,
  Profile: String,

});

const User = model("User", UserSchema);

module.exports = User;
