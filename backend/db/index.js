const mongoose = require("mongoose");
const { mongoURL } = require("../config");

mongoose.connect(`${mongoURL}/payTM-app`);

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
});

const accountSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
    default: 0.0,
  },
});

const User = mongoose.model("User", userSchema);
const Account = mongoose.model("Account", accountSchema);

module.exports = {
  User,
  Account,
};
